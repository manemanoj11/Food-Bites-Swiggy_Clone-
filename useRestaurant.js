import { useEffect, useState } from "react";


const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards)
    setRestauraunt(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }
  return restaurant;
};

export default useRestaurant;
