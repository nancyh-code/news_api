import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNews from "../hooks/useNews";
import News from "./News";

const NewsListing = () => {
  const { news, totalNews, handleChangePage, page } = useNews();
  console.log(totalNews);
  const totalPages = Math.ceil(totalNews / 20);
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        mt={5}
        color="primary"
      >
        Last News
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {news.map((item) => (
          <News item={item} key={item.url} />
        ))}
      </Grid>
      <Stack spacing={2} mt={5} justifyContent="center" alignItems="center">
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  );
};

export default NewsListing;
