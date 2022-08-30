import React from "react";

import { useSelector } from "react-redux";
import Recipe from "./Recipe";

const DUMMY_RECIPES = [
  {
    id: 716627,
    title: "Easy Homemade Rice and Beans",
    readyInMinutes: 35,
    servings: 2,
    sourceUrl:
      "http://cooking2perfection.blogspot.com/2012/11/easy-homemade-rice-and-beans.html",
    image: "easy-homemade-rice-and-beans-716627.jpg",
  },
  {
    id: 798400,
    title: "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
    readyInMinutes: 45,
    servings: 6,
    sourceUrl:
      "http://foodandspice.blogspot.com/2016/08/spicy-black-eyed-pea-curry-with-swiss.html",
    image:
      "spicy-black-eyed-pea-curry-with-swiss-chard-and-roasted-eggplant-798400.jpg",
  },
  {
    id: 715421,
    title: "Cheesy Chicken Enchilada Quinoa Casserole",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl:
      "http://www.pinkwhen.com/cheesy-chicken-enchilada-quinoa-casserole/",
    image: "cheesy-chicken-enchilada-quinoa-casserole-715421.jpg",
  },
  {
    id: 716437,
    title: "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
    readyInMinutes: 45,
    servings: 3,
    sourceUrl:
      "http://fullbellysisters.blogspot.com/2012/06/chilled-cucumber-avocado-soup-with.html",
    image: "chilled-cucumber-avocado-soup-with-yogurt-and-kefir-716437.jpg",
  },
  {
    id: 716195,
    title: "Spicy Indian-Style Hummus",
    readyInMinutes: 45,
    servings: 12,
    sourceUrl:
      "http://foodandspice.blogspot.com/2012/07/spicy-hummus-indian-style.html",
    image: "spicy-indian-style-hummus-716195.jpg",
  },
  {
    id: 637162,
    title: "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
    readyInMinutes: 25,
    servings: 1,
    sourceUrl:
      "http://www.foodista.com/recipe/MB7NYM87/carrot-and-cabbage-salad-with-coriandercumin-dry-rub",
    image: "Carrot-and-Cabbage-Salad-With-Coriander+cumin-Dry-Rub-637162.jpg",
  },
  {
    id: 664090,
    title: "Turkish Chicken Salad with Home-made Cacik Yogurt Sauce",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl:
      "http://www.foodista.com/recipe/XYFWSH25/a-turkish-inspired-chicken-salad-with-tomato-cucumber-red-onion-salsa-charred-green-peppers-and-home-made-cacik-delicious-and-healthy",
    image: "Turkish-Chicken-Salad-with-Home-made-Cacik-Yogurt-Sauce-664090.jpg",
  },
  {
    id: 636602,
    title: "Butternut Squash Soup (In Half An Hour!)",
    readyInMinutes: 30,
    servings: 8,
    sourceUrl:
      "http://www.foodista.com/recipe/24DYGNYL/butternut-squash-soup-in-half-an-hour",
    image: "Butternut-Squash-Soup-(In-Half-An-Hour)-636602.jpg",
  },
  {
    id: 659143,
    title:
      'Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony "Caviar" Dressing',
    readyInMinutes: 45,
    servings: 4,
    sourceUrl:
      "http://www.foodista.com/recipe/WHSTLX2T/salmon-watercress-fennel-and-baby-beetroot-salad-with-lemony-arenkha-msc-dressing",
    image:
      "Salmon--Watercress--Fennel-and-Baby-Beetroot-Salad-With-Lemony-Caviar-Dressing-659143.jpg",
  },
  {
    id: 646043,
    title: "Gujarati Dry Mung Bean Curry",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl:
      "http://www.foodista.com/recipe/G6ZJW56S/gujarati-dry-mung-bean-curry",
    image: "Gujarati-Dry-Mung-Bean-Curry-646043.jpg",
  },
];

const ListOfRecipes = () => {
  // const recipes = useSelector((state) => state.recipes.recipes);
  
  return DUMMY_RECIPES.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} />;
  });
};

export default ListOfRecipes;
