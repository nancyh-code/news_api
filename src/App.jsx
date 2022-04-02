import { Container, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NewsProvider } from "./context/NewsProvider";
import Form from "./components/Form";
import NewsListing from "./components/NewsListing";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#006778",
    },
    secondary: {
      main: "#0093AB",
    },
    error: {
      main: "#FFD124",
    },
  },
});

function App() {
  return (
    <NewsProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <header>
            <Typography
              align="center"
              justifyContent="center"
              my={5}
              component="h1"
              variant="h2"
              color="primary"
            >
              News<span> 🗞</span> Browser
            </Typography>
          </header>

          <Grid
            container
            // direction="row"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              lg={6}
              md={4}
              align="center"
              // sx={{ margin: "0 auto" }}
            >
              <Form />
            </Grid>
          </Grid>
          <NewsListing />
        </Container>
      </ThemeProvider>
    </NewsProvider>
  );
}

export default App;
