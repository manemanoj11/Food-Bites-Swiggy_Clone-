import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from './useRestaurant';

const RestrauntMenu = () => {
  const { resId } = useParams();
  // const [restaurant, setRestauraunt] = useState(null);
  const restaurant=useRestaurant(resId)
  console.log("Restaurants ", restaurant);

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
  //   );
  //   const json = await data.json();
  //   setRestauraunt(
  //     json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //       .itemCards
  //   );
  // }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
    <h2>Menu</h2>
      {restaurant.map((i, index) => (
        <div className="card" key={index}>
          <img src={IMG_CDN_URL + i.card.info.imageId} />
          <h3>{i.card.info.name}</h3>
          <h3>{i.card.info.ratings.aggregatedRating.rating} stars</h3>
        </div>
      ))}
    </>
  );
};

export default RestrauntMenu;
