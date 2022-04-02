import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import useNews from "../hooks/useNews";

const CATEGORIES = [
  { value: "general", label: "General" },
  { value: "business", label: "Business" },
  { value: "entertainment", label: "Entertainment" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" },
];

const Form = () => {
  const { category, handleChangeCategory } = useNews();
  return (
    <form>
      <FormControl sx={{ width: "330px" }}>
        <InputLabel>Categories</InputLabel>
        <Select
          label="Categories"
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORIES.map((categor) => (
            <MenuItem key={categor.value} value={categor.value}>
              {categor.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
