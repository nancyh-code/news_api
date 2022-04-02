import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ca&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      // const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&category=${category}&apiKey=${
      //   import.meta.env.VITE_API_KEY
      // }`;
      const { data } = await axios(url);

      setNews(data.articles);
    };
    consultAPI();
  }, [category]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        news,
        // setNews
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
