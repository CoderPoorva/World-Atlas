import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import { Btn3 } from "./Styles/BtnMUI";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./Styles/SearchFilter.css";


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
    <section className="searchFilter container">
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
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
        />
      </div>

      <div>
        <Btn3 onClick={() => sortCountries("asc")}><ArrowUpwardIcon/></Btn3>
      </div>

      <div>
        <Btn3 onClick={() => sortCountries("des")}><ArrowDownwardIcon/></Btn3>
      </div>

      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, "& .MuiInputBase-root": { color: "white" }, 
        "& .MuiInputLabel-root": { color: "white" }, 
        "& .MuiSvgIcon-root": { color: "white" }, "& .MuiInput-underline:before": { borderBottomColor: "white" }, 
        "& .MuiInput-underline:hover:before": { borderBottomColor: "white" }, 
        "& .MuiInput-underline:after": { borderBottomColor: "white" }, }}>
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
    </section>
  );
};
