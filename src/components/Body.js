import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Button, Input } from '@mui/material';
import Shimmer from './Shimmer';
function Body() {
 const [restaurants, setRestaurants] = useState([]);
 const [filteredRes, setFilteredRes] = useState([]);
 const [loading, setLoading] = useState(true);
 const [searchText, setSearchText] = useState('');

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
  const data = await fetch(
   'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
  );
  const json = await data.json();

  setRestaurants(
   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
  );
  setFilteredRes(
   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
  );
  setLoading(false);
 };

 const Items = () => {
  if (loading) {
   return <Shimmer />;
  } else {
   return (
    <div className="res-container">
     {filteredRes.length
      ? filteredRes.map((res) => (
         <RestaurantCard resData={res} key={res.info.id} />
        ))
      : 'No Restaurants Found'}
    </div>
   );
  }
 };

 return (
  <div className="app-body">
   <div className="filter">
    <Input
     aria-label="Search Field"
     placeholder="Search"
     value={searchText}
     onChange={(e) => {
      setSearchText(e.target.value);
     }}
    />
    <Button
     color="success"
     variant="contained"
     onClick={() => {
      const filteredRes = restaurants.filter((res) =>
       res.info.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      console.log('Search key', filteredRes);
      setFilteredRes(filteredRes);
     }}>
     Top Rated Restaurants
    </Button>
   </div>
   <Items />
  </div>
 );
}

export default Body;
