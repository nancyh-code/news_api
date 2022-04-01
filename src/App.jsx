import { Container, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NewsProvider } from "./context/NewsProvider";
import Form from "./components/Form";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#006778",
    },
    secondary: {
      main: "#FFD124",
    },
  },
});

function App() {
  return (
    <NewsProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <header>
            <Typography
              align="center"
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
            mx={-2}
          >
            <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </NewsProvider>
  );
}

export default App;
