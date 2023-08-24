// import { Link } from "react-router-dom";
import {  IMG_CDN_URL } from "../constants";
const RestaurantCard = (props) => {
  // console.log(props)
  const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId,areaName }=props.restaurant.info
 
  return (
    <div className="card">
      {/* <Link to={`/restaurants/${id}`}> */}
   
      <img src= {IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.lastMileTravelString } minutes ,</h4>
      <h4>{areaName}</h4>
      {/* </Link> */}
    </div>
  );
};

export default RestaurantCard;