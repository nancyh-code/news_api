import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

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
  return (
    <form>
      <FormControl>
        <InputLabel>Categories</InputLabel>
        <Select label="Categories">
          {CATEGORIES.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
        <Box mt={2} sx={{ width: "330px" }}>
          <Button
            fullWidth
            variant="contained"
            // sx={{
            //   minWidth: "100%",
            //   //margin: "0 auto"
            // }}
          >
            Search news
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Form;
