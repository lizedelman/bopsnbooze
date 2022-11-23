let drinkTitle = document.getElementById("drink-name");
let drinkInstructions = document.getElementById("card-text");
let drinkIng1 = document.getElementById("ingredient1");
let listGroup = document.getElementById("list-group");
let genDrinkBtn = document.getElementById("gen-button");
let drinkImg = document.getElementById("drinkimg");

function getApi() {
  //Url for drink randomizer
  var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  //Calls the url
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    //Pulls the data from the cocktails DB
    .then(function (data) {
      console.log(data);
      console.log(data.drinks[0].strDrink);
      clearArray();

      //Populates drink title, instructions and image on webpage
      drinkTitle.textContent = data.drinks[0].strDrink;
      drinkInstructions.textContent = data.drinks[0].strInstructions;
      drinkImg.src = data.drinks[0].strDrinkThumb;

      //Creates an array of all the ingredients and measurements
      var ingredients = [];
      var drinksObject = data.drinks[0];

      for (let i = 1; i < 16; i++) {
        var ingredient = drinksObject["strIngredient" + i];
        var measure = drinksObject["strMeasure" + i];

        if (!ingredient) {
          break;
        }

        let ingredientObject = {
          ingredient,
          measure,
        };

        ingredients.push(ingredientObject);
        console.log(ingredientObject);
      }
      //Loops through the ingredients object and displays them
      for (let i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i]);

        //TO DO: create condition for when the measurement is empty
        if (i < ingredients.length) {
          let drinkIngredients = document.createElement("li");
          listGroup.append(drinkIngredients);

          drinkIngredients.textContent =
            ingredients[i].measure + " " + ingredients[i].ingredient;
        } else {
          break;
        }
      }
    });
}
function clearArray() {
  listGroup.textContent = "";
}

//Event listener for "generate drink" button
genDrinkBtn.addEventListener("click", getApi);

//TO DO:
//1. Complete development of this api call

//Denver liquor store url and beginning code - not completed
// function getLiquorStores(long = 39.7218301, lat = -105.0118191) {
//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   fetch(
//     "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=liqour+store&userLocation=39.7218301,-105.0118191&key=AimOsm5GJg0qraxaJi0SUUro_hogtc3-hm5gx031e7WP1To6SFT3zuZQ0Jyh7Lpu\n",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
