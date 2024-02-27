import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';

const RestaurantMenu = () => {
 const [resInfo, setResInfo] = useState(null);
 const { resId } = useParams();

 useEffect(() => {
  fetchMenu();
 }, []);

 const fetchMenu = async () => {
  try {
   const data = await fetch(MENU_API_URL + resId);
   const json = await data.json();

   setResInfo(json.data);
  } catch (error) {
   console.error('Error fetching menu:', error);
  }
 };

 if (resInfo === null) {
  return <Shimmer />;
 }

 const text = resInfo?.cards[0]?.card?.card?.text;
 const itemCards =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
   ?.itemCards || [];

 return (
  <div className="menu">
   <h1>{text}</h1>
   <h2>Menu</h2>
   <ul>
    {itemCards.map((item) => (
     <li key={item.card.info.id}>
      {item.card.info.name} - Rs {item.card.info.price / 100}
     </li>
    ))}
   </ul>
  </div>
 );
};

export default RestaurantMenu;
