import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Grid } from '@mui/material';

function Shimmer() {
 const fakeAPI = 20;
 return (
  <div className="shimmer-container">
   <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    {Array.from(Array(fakeAPI), (api, index) => {
     return (
      <Grid item xs={6} key={index}>
       <Card sx={{ minWidth: 275, minHeight: 350 }}>
        <CardContent>
         <Typography gutterBottom variant="h5" component="div">
          &nbsp;
         </Typography>
         <Typography variant="body2" color="text.secondary">
          &nbsp;
         </Typography>
         <Typography variant="body2" color="text.secondary">
          &nbsp;
         </Typography>
         <Typography variant="body2" color="text.secondary">
          &nbsp;
         </Typography>
         <Typography variant="body2" color="text.secondary">
          &nbsp;
         </Typography>
        </CardContent>
       </Card>
      </Grid>
     );
    })}
   </Grid>
  </div>
 );
}

export default Shimmer;
