import React from "react";

import Grid from "@mui/material/Grid";
import SearchPart from "../SearchPart/SearchPart";
import MapPart from "../MapPart/MapPart";

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={5.3}
          sx={{
            p: 2,
          }}
        >
          <SearchPart />
        </Grid>
        <Grid item xs={12} sm={6.7}>
          <MapPart />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
