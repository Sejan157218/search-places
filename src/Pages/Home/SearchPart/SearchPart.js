import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import LocationOn from "@mui/icons-material/LocationOn";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import "./SearchPart.css";
import { addToPlace, fetchPlaces } from "../../../Redux/ApiSlice/ApiSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  borderRadius: "10px",
  padding: ".8rem .6rem .8rem 1rem",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
}));

const SearchPart = () => {
  const [placeName, setPlaceName] = useState("");
  const [display, setDisplay] = useState(true);
  const [displayPlace, setDisplayPlace] = useState(false);
  const [place, setPlace] = useState({});

  const url = `https://barikoi.xyz/v1/api/search/autocomplete/${process.env.REACT_APP_API_KEY}/place?q=${placeName}`;

  const dispatch = useDispatch();

  const handlerToOnchange = (e) => {
    setDisplay(true)
    setDisplayPlace(false)
    setPlaceName(e.target.value);
    
  };
  // useEffect for data fetch
  useEffect(() => {
    dispatch(fetchPlaces(url));
  }, [placeName]);

  const places=(useSelector((state) => state.places.placeData));


 const handlerToSetPlace=(place)=>{
  setDisplay(false);
  setDisplayPlace(true)
  setPlace(place);
  
  dispatch(addToPlace(place));
 }

 const handlerToClose=()=>{
  setDisplay(false);
 }
console.log(place);
  return (
    <div>
      {/* logo */}
      <div className="search-logo">
        <div>
          {" "}
          <Link to="/">
            <span className="search-bari">Bari</span>
            <span className="search-koi">Koi</span>
          </Link>
        </div>
        <div>
          <ChevronLeft />
        </div>
      </div>
      {/* Search Box */}
      <Search
        sx={{
          boxShadow: 3,
          display: "flex",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <div style={{ width: "78%" }}>
          {" "}
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handlerToOnchange}
          />
        </div>
        <div>{
          places.places && display ?<Close  onClick={handlerToClose}/> :<SearchIcon className="search-icon" />
          }
          
        </div>
      </Search>

      
      {places.places && display &&
          <div className="auto-com-info">
         
       { places.places.map((place) => (
            <div className="autocomplete-item" onClick={()=>handlerToSetPlace(place)
            }>
              <div className="location-icon">
                <LocationOn />
              </div>
              <div className="autocomplete-info">
                <h4>
                  <span>{place?.address}</span>
                </h4>
                <p>{place?.area}</p>
                <p className="autocomplete-subtype" >{place?.pType}</p>
                <p className="autocomplete-subtype">{place?.address}</p>
              </div>
            </div>
            ))}
          </div>
      }
      {/* Details */}
      {displayPlace && (
        <>
          <div>
            <h4>{place?.address}</h4>
            <p>{place?.area}</p>
            <p>Postcode : {place?.postCode}</p>
            <div>
              <span>{place?.pType}</span><br />
              <span>Place Code : {place?.uCode}</span>
            </div>
          </div>
          <h4>Explore Nearby</h4>
          <Button variant="outlined" style={{marginRight:"5px"}}>Food</Button>
          <Button variant="outlined" style={{marginRight:"5px"}}>Bank</Button>
          <Button variant="outlined" style={{marginRight:"5px"}}>Healthcare</Button>
          <Button variant="outlined" style={{marginRight:"5px"}}>More..</Button>
         
         
        </>
      )}
    </div>
  );
};

export default SearchPart;
