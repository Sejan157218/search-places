import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from '@mui/material/Button';
import "./SearchPart.css";

const Search = styled("div")(({ theme }) => ({
borderRadius:"10px",
padding:".8rem .6rem .8rem 1rem",
 
 
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
}));

const SearchPart = () => {
  return (
    <div>
        {/* logo */}
      <div className="search-logo">
       <div> <Link to="/">
          <span className="search-bari">Bari</span>
          <span className="search-koi">Koi</span>
        </Link></div>
        <div>
        <ChevronLeft/>
        </div>

      </div>
{/* Search Box */}
      <Search sx={{ boxShadow: 3, display: 'flex',justifyContent: 'space-between' ,mt:5}} >
       <div style={{ width: '78%' }}> <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        /></div>
       <div>
       <SearchIcon className="search-icon" />
       </div>
      </Search>

      {/* Details */}
      <div>
          <h4>Muhammadpur Masjid Kuba Kobrasthan</h4>
          <p>Muhammadpur Masjid Kuba Kobrasthan, Elahabad, Debidwar</p>
          <p>Postcode : 3530</p>
          <div>
              <span>Masjid</span>
              <span>Place Code : UTRE5099</span>
          </div>
      </div>

      {/* explore-nearby */}
      <h4>Explore Nearby</h4>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default SearchPart;
