import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

const News = ({ item }) => {
  const { urlToImage, url, title, description, source } = item;
  return (
    <Grid item xs={12} md={4} lg={3} m={2}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Image about the news ${title}`}
            image={urlToImage}
            height={250}
          />
        )}
        <CardContent>
          <Typography variant="body2" color="secondary">
            {source.name}
          </Typography>
          <Divider color="#FFD124" />
          <Typography variant="h6" color="primary" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{title}</Typography>
        </CardContent>
        <CardActions>
          <Link color="secondary" href={url} target="_blank" variant="button">
            Show More
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default News;
