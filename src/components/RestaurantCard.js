import React from 'react';
import { CDN_URL } from '../utils/constants';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function RestaurantCard(props) {
 const { resData } = props;
 const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
  resData?.info;

 return (
  <Card sx={{ minWidth: 275 }}>
   <CardMedia
    sx={{ height: 140 }}
    image={CDN_URL + cloudinaryImageId}
    title="green iguana"
   />
   <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     Cuisines: {cuisines.join(', ')}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     Average Rating: {avgRating}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     {costForTwo}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     Estimated Time: {sla.deliveryTime} Minutes
    </Typography>
   </CardContent>
  </Card>
 );
}

export default RestaurantCard;
