import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import RestaurantCard from "./RestaurantCard";
import DeliveryCard from "./DeliveryCard";

const Main = () => {
  // Create a reference to the scrollable container
  const foodRef = useRef(null);
  const groceriesRef = useRef(null);
  const restaurantsRef = useRef(null);

  // State to manage the left and right buttons' disabled status for both food and groceries
  const [isFoodLeftDisabled, setIsFoodLeftDisabled] = useState(true);
  const [isFoodRightDisabled, setIsFoodRightDisabled] = useState(false);
  const [isGroceriesLeftDisabled, setIsGroceriesLeftDisabled] = useState(true);
  const [isGroceriesRightDisabled, setIsGroceriesRightDisabled] =
    useState(false);
  const [isRestaurantsLeftDisabled, setIsRestaurantsLeftDisabled] =
    useState(true);
  const [isRestaurantsRightDisabled, setIsRestaurantsRightDisabled] =
    useState(true);

  // Check the scroll position on each render for food
  const checkFoodScrollPosition = () => {
    if (foodRef.current) {
      const scrollLeft = foodRef.current.scrollLeft;
      const scrollWidth = foodRef.current.scrollWidth;
      const clientWidth = foodRef.current.clientWidth;

      setIsFoodLeftDisabled(scrollLeft === 0);
      setIsFoodRightDisabled(scrollLeft + clientWidth === scrollWidth);
    }
  };

  // Check the scroll position on each render for groceries
  const checkGroceriesScrollPosition = () => {
    if (groceriesRef.current) {
      const scrollLeft = groceriesRef.current.scrollLeft;
      const scrollWidth = groceriesRef.current.scrollWidth;
      const clientWidth = groceriesRef.current.clientWidth;

      setIsGroceriesLeftDisabled(scrollLeft === 0);
      setIsGroceriesRightDisabled(scrollLeft + clientWidth === scrollWidth);
    }
  };
  // Check the scroll position on each render for groceries
  const checkRestaurantsScrollPosition = () => {
    if (restaurantsRef.current) {
      const scrollLeft = restaurantsRef.current.scrollLeft;
      const scrollWidth = restaurantsRef.current.scrollWidth;
      const clientWidth = restaurantsRef.current.clientWidth;

      setIsRestaurantsLeftDisabled(scrollLeft === 0);
      setIsRestaurantsRightDisabled(scrollLeft + clientWidth === scrollWidth);
    }
  };

  // Function to scroll the container to the left
  const handleLeft = (e) => {
    if (e.current) {
      e.current.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: "smooth",
      });
    }
  };

  // Function to scroll the container to the right
  const handleRight = (e) => {
    if (e.current) {
      e.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth",
      });
    }
  };

  // Add event listeners to check the scroll position when component mounts
  useEffect(() => {
    checkFoodScrollPosition(); // Initial check for food
    checkGroceriesScrollPosition(); // Initial check for groceries
    checkRestaurantsScrollPosition(); // Initial check for restaurants

    const handleFoodScroll = () => checkFoodScrollPosition();
    const handleGroceriesScroll = () => checkGroceriesScrollPosition();
    const handleRestaurantsScroll = () => checkRestaurantsScrollPosition();
    const handleResize = () => {
      checkFoodScrollPosition();
      checkGroceriesScrollPosition();
      checkRestaurantsScrollPosition();
    };

    window.addEventListener("resize", handleResize);
    foodRef.current.addEventListener("scroll", handleFoodScroll);
    groceriesRef.current.addEventListener("scroll", handleGroceriesScroll);
    restaurantsRef.current.addEventListener("scroll", handleRestaurantsScroll);
  }, []);

  return (
    <div className="pt-20">
      <div className="food w-4/5 mx-auto p-2">
        <div className="control flex gap-3 py-2">
          <button
            onClick={() => handleLeft(foodRef)}
            disabled={isFoodLeftDisabled}
            className="left flex justify-center items-center h-8 w-8 rounded-full disabled:bg-slate-200 bg-slate-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleRight(foodRef)}
            disabled={isFoodRightDisabled}
            className="right flex justify-center items-center h-8 w-8 rounded-full disabled:bg-slate-200 bg-slate-300"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="heading mb-3">
          <h2 className="text-2xl font-bold">Order our best food options</h2>
        </div>
        <div className="food w-full overflow-x-scroll" ref={foodRef}>
          <div className="food-box flex items-center gap-2 w-[170%]">
            <NavLink to="">
              <img width={170} src="SwiggyImages/Burger.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Pizza.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Rolls.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Chinese.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Momo.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Cake.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Biryani.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Samosa.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Dosa.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Pure Veg.png" alt="" />
            </NavLink>
          </div>
          <div className="food-box flex items-center gap-2 w-[170%] my-2">
            <NavLink to="">
              <img width={170} src="SwiggyImages/South Indian.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Pasta.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Noodles.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Chole Bhature.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Patty.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Pastry.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Pakoda.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Shawarma.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Shake.png" alt="" />
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Coffee.png" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="groceries w-4/5 mx-auto p-2 my-14">
        <div className="control flex gap-3 py-2">
          <button
            onClick={() => handleLeft(groceriesRef)}
            disabled={isGroceriesLeftDisabled}
            className="left flex justify-center items-center h-8 w-8 rounded-full disabled:bg-slate-200 bg-slate-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleRight(groceriesRef)}
            disabled={isGroceriesRightDisabled}
            className="right flex justify-center items-center h-8 w-8 rounded-full disabled:bg-slate-200 bg-slate-300"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="heading mb-3">
          <h2 className="text-2xl font-bold">Shop groceries on Instamart</h2>
        </div>
        <div className="groceries w-full overflow-x-scroll" ref={groceriesRef}>
          <div className="food-box flex items-center gap-2 w-[400%]">
            <NavLink to="">
              <img width={170} src="SwiggyImages/FreshVegetables.png" alt="" />
              <h3>Fresh Vegetables</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/FreshFruits.png" alt="" />
              <h3>Fresh Fruits</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/DairyBread.png" alt="" />
              <h3>Dairy, Bread and Eggs</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/AttaRice.png" alt="" />
              <h3>Atta, Rice and Dals</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Masalas.png" alt="" />
              <h3>Masalas and Dry Fruits</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/OilGhee.png" alt="" />
              <h3>Oils and Ghee</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Munchies.png" alt="" />
              <h3>Munchies</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/SweetTooth.png" alt="" />
              <h3>Sweet Tooth</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/ColdDrinks.png" alt="" />
              <h3>Cold Drinks band Juices</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Biscuits.png" alt="" />
              <h3>Biscuits and Cakes</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/InstantFood.png" alt="" />
              <h3>Instant and Frozen Food</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Hygiene.png" alt="" />
              <h3>Hygiene and Wellness</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Meat&Seafood.png" alt="" />
              <h3>Meat and Seafood</h3>
            </NavLink>
            <NavLink to="">
              <img
                width={170}
                src="SwiggyImages/CleaningEssentials.png"
                alt=""
              />
              <h3>Cleaning Essentials</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/BathBody.png" alt="" />
              <h3>Bath, Body and Hair</h3>
            </NavLink>
            <NavLink to="">
              <img
                width={170}
                src="SwiggyImages/Cereals&Breakfast.png"
                alt=""
              />
              <h3>Cereals and Breakfast</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Sauces&Spreads.png" alt="" />
              <h3>Sauces and Spreads</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/TeaCoffee.png" alt="" />
              <h3>Tea, Coffee and More</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/PaanCorner.png" alt="" />
              <h3>Paan Corner</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Home&Kitchen.png" alt="" />
              <h3>Home and Kitchen</h3>
            </NavLink>
            <NavLink to="">
              <img
                width={170}
                src="SwiggyImages/Office&Electrical.png"
                alt=""
              />
              <h3>Office and Electricals</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/BabyCare.png" alt="" />
              <h3>Baby Care</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/PetSupplies.png" alt="" />
              <h3>Pet Supplies</h3>
            </NavLink>
            <NavLink to="">
              <img width={170} src="SwiggyImages/Beauty&Grooming.png" alt="" />
              <h3>Beauty and Grooming</h3>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="restaurants w-4/5 mx-auto p-2 my-14">
        <div className="heading-box flex justify-between">
          <div className="heading mb-3">
            <h2 className="text-2xl font-bold">
              Discover best restaurants on Dineout
            </h2>
          </div>
          <div className="control flex gap-3 py-2">
            <button
              onClick={() => {
                handleLeft(restaurantsRef);
              }}
              disabled={isRestaurantsLeftDisabled}
              className="left flex justify-center items-center h-8 w-8 rounded-full disabled:bg-slate-200 bg-slate-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => {
                handleRight(restaurantsRef);
              }}
              disabled={isRestaurantsRightDisabled}
              className="right flex justify-center items-center h-8 w-8 rounded-full disabled:bg-slate-200 bg-slate-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div
          className="restaurants w-full overflow-x-scroll mt-5"
          ref={restaurantsRef}
        >
          <div className="food-box flex items-center gap-4">
            <RestaurantCard
              imageUrl="SwiggyImages/Sorra.jpg"
              heading="Sorra"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/Pinjore.jpg"
              heading="Pinjore"
              rating="4.0"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/BaristaCoffee.jpg"
              heading="Barish Coffee"
              rating="4.5"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/MARKAZ.jpg"
              heading="MARKAZ Cafe and Lounge"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/TheFirangi.jpg"
              heading="The Firangi Island"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/AsurMicrobrewery.jpg"
              heading="Asur - Microbrewery"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/Kasso.jpg"
              heading="Kasso"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/WokClouds.jpg"
              heading="Wok In The Clouds"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/Berco.jpg"
              heading="Berco's - If You Love Chinese"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/KloudRooftop.jpg"
              heading="Kloud Rooftop"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/Akra.jpg"
              heading="Akra"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/BercoLove.jpg"
              heading="Berco's - If You Love Chinese"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/LaaFavouritie.jpg"
              heading="Laa Favouritie Cafe"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/TheWaffle.jpg"
              heading="The Waffle Co."
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/BercoChinese.jpg"
              heading="Berco's - If You Love Chinese"
              rating="4.1"
            />
            <RestaurantCard
              imageUrl="SwiggyImages/RhaasPub.jpg"
              heading="Rhaas Pub and Lounge"
              rating="4.1"
            />
          </div>
        </div>
      </div>
      <div className="banner" id="banner">
        <img src="SwiggyImages/App_download_banner.png" alt="" />
      </div>
      <div className="foodDelivery my-14">
        <div className="deliveryBox w-[70%] mx-auto">
          <div className="heading mb-3">
            <h2 className="text-2xl font-bold">Cities With food delivery</h2>
          </div>
          <div className="inner-box">
            <div className="row flex items-center my-4 justify-around">
              <DeliveryCard option="food" location="Bangalore" />
              <DeliveryCard option="food" location="Gurgaon" />
              <DeliveryCard option="food" location="Hyderabad" />
              <DeliveryCard option="food" location="Delhi" />
            </div>
            <div className="row flex items-center my-4 justify-around">
              <DeliveryCard option="food" location="Mumbai" />
              <DeliveryCard option="food" location="Pune" />
              <DeliveryCard option="food" location="Kolkata" />
              <DeliveryCard option="food" location="Chennai" />
            </div>
            <div className="row flex items-center my-4 justify-around">
              <DeliveryCard option="food" location="Ahmedabad" />
              <DeliveryCard option="food" location="Chandigarh" />
              <DeliveryCard option="food" location="Jaipur" />
              <DeliveryCard option="food" location="Kochi" />
            </div>
          </div>
        </div>
      </div>
      <div className="groceryDelivery my-14">
        <div className="groceryBox w-[70%] mx-auto">
          <div className="heading mb-3">
            <h2 className="text-2xl font-bold">Cities With food delivery</h2>
          </div>
          <div className="inner-box">
            <div className="row flex items-center my-4 justify-around">
              <DeliveryCard option="grocery" location="Bangalore" />
              <DeliveryCard option="grocery" location="Gurgaon" />
              <DeliveryCard option="grocery" location="Hyderabad" />
              <DeliveryCard option="grocery" location="Delhi" />
            </div>
            <div className="row flex items-center my-4 justify-around">
              <DeliveryCard option="grocery" location="Mumbai" />
              <DeliveryCard option="grocery" location="Pune" />
              <DeliveryCard option="grocery" location="Kolkata" />
              <DeliveryCard option="grocery" location="Chennai" />
            </div>
            <div className="row flex items-center my-4 justify-around">
              <DeliveryCard option="grocery" location="Ahmedabad" />
              <DeliveryCard option="grocery" location="Chandigarh" />
              <DeliveryCard option="grocery" location="Jaipur" />
              <DeliveryCard option="grocery" location="Kochi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
