let drinkTitle = document.getElementById("drink-name");
let drinkInstructions = document.getElementById("card-text");
let drinkIng1 = document.getElementById("ingredient1");
let drinkIng2 = document.getElementById("ingredient2");
let genDrinkBtn = document.getElementById("button");

function getApi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.drinks[0].strDrink);
      drinkTitle.textContent = data.drinks[0].strDrink;
      // displayDrinkRecipe();
    });

  // function displayDrinkRecipe(data) {
  //   let recipe = data;
  //   let drinks = data.drinks[0].strDrink;

  //   if (recipe.drinks[0].strAlcoholic === "Alcoholic") {
  //     drinkTitle.textContent = data.drinks[0].strDrink;
  //   }
  // }
}

genDrinkBtn.addEventListener("click", getApi);

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
