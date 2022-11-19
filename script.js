let drinkTitle = document.getElementById("drink-name");
let drinkInstructions = document.getElementById("card-text");
let drinkIng1 = document.getElementById("ingredient1");
let drinkIng2 = document.getElementById("ingredient2");
let drinkIng3 = document.getElementById("ingredient3");
let drinkIng4 = document.getElementById("ingredient4");
let drinkIng5 = document.getElementById("ingredient5");
let drinkIng6 = document.getElementById("ingredient6");
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
      drinkInstructions.textContent = data.drinks[0].strInstructions;
      drinkIng1.textContent =
        data.drinks[0].strMeasure1 + data.drinks[0].strIngredient1;
      drinkIng2.textContent =
        data.drinks[0].strMeasure2 + data.drinks[0].strIngredient2;
      drinkIng3.textContent =
        data.drinks[0].strMeasure3 + data.drinks[0].strIngredient3;
      drinkIng4.textContent =
        data.drinks[0].strMeasure4 + data.drinks[0].strIngredient4;
      drinkIng5.textContent =
        data.drinks[0].strMeasure5 + data.drinks[0].strIngredient5;
      drinkIng6.textContent =
        data.drinks[0].strMeasure6 + data.drinks[0].strIngredient6;
    });
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
