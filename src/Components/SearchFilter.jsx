import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SearchFilterCont } from "./Styles/SearchFilterStyle";


export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <SearchFilterCont className="searchFilter container">
      <div>
        <TextField
          id="input-with-icon-textfield"
          label="Search"
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
          variant="standard"
          sx={{
            input: { color: "black" },
            label: { color: "black" },
            "& .MuiInput-underline:before": {
              borderBottomColor: "black",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "black",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "black",
            },
          }}
        />
      </div>

      <div>
        <Button variant="outlined" onClick={() => sortCountries("asc")}><ArrowUpwardIcon/></Button>
      </div>

      <div>
        <Button variant="outlined" onClick={() => sortCountries("des")}><ArrowDownwardIcon/></Button>
      </div>

      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, "& .MuiInputBase-root": { color: "black" }, 
        "& .MuiInputLabel-root": { color: "black" }, 
        "& .MuiSvgIcon-root": { color: "black" }, "& .MuiInput-underline:before": { borderBottomColor: "black" }, 
        "& .MuiInput-underline:hover:before": { borderBottomColor: "black" }, 
        "& .MuiInput-underline:after": { borderBottomColor: "black" }, }}>
        <InputLabel id="demo-simple-select-standard-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filter}
          onChange={handleSelectChange}
          label="Region"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
      </div>
    </SearchFilterCont>
  );
};
