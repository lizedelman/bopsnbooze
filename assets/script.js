let drinkTitle = document.getElementById("drink-name");
let drinkInstructions = document.getElementById("card-text");
let drinkIng1 = document.getElementById("ingredient1");
let listGroup = document.getElementById("ingredient-list-group");
let genDrinkBtn = document.getElementById("gen-button");
let drinkImg = document.getElementById("drinkimg");
let previousDrinkList = document.getElementById('previous-drink-list'); 
let previousDrinksCont = document.getElementById("previous-drinks-container");
// let previousDrinksRow = document.getElementById('previous-drink-row'); 
let previousDrinksBtn = document.getElementById('previous-drinks-btn'); 
let storeBtn = document.getElementById("store-btn");
let storeOne = document.getElementById("storeOne");
let storeOneAdd = document.getElementById("storeOneAdd");
let storeTwo = document.getElementById("storeTwo");
let storeTwoAdd = document.getElementById("storeTwoAdd");
let storeThree = document.getElementById("storeThree");
let storeThreeAdd = document.getElementById("storeThreeAdd");

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

      let drinkContainer = document.getElementById("drink-container");
      drinkContainer.classList.remove("hide");

      let liquorStoreBtn = document.getElementById("store-btn");
      liquorStoreBtn.classList.remove("hide");

      let previousDrinksBtn = document.getElementById("previous-drinks-btn");
      previousDrinksBtn.classList.remove("hide");

      //Populates drink title, instructions and image on webpage
      let drinkName = data.drinks[0].strDrink
      drinkTitle.textContent = drinkName; 
      saveDrinkArray(drinkName); 
      drinkInstructions.textContent = data.drinks[0].strInstructions;
      drinkImg.src = data.drinks[0].strDrinkThumb;

      //Creates an array of all the ingredients and measurements
      var ingredients = [];
      var drinksObject = data.drinks[0];

      for (let i = 1; i < 16; i++) {
        var ingredient = drinksObject["strIngredient" + i];
        var measure = drinksObject["strMeasure" + i];

        if (!measure) {
          measure = "";
        }

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
        if (i < ingredients.length) {
          let drinkIngredients = document.createElement("li");
          listGroup.append(drinkIngredients);
          drinkIngredients.textContent =
            ingredients[i].measure + " " + ingredients[i].ingredient;
        }
      }
    });
}

function clearArray() {
  listGroup.textContent = "";
}


// Saves drink name to array in local storage
function saveDrinkArray(drinkName) {
  let recentDrinks = localStorage.getItem('recentDrinks'); 
  if (recentDrinks) {
      recentDrinks = JSON.parse(recentDrinks); 
      recentDrinks.push(drinkName); 
      recentDrinks = JSON.stringify(recentDrinks); 
      localStorage.setItem('recentDrinks', recentDrinks); 
  } else {
      recentDrinks = JSON.stringify([drinkName]); 
      localStorage.setItem('recentDrinks', recentDrinks);
  }
}

// Function to render previously generated drinks
function renderPreviousDrinks() {
  console.log('clicked'); 
  previousDrinksCont.classList.remove('hide'); 

  let recentDrinks = localStorage.getItem('recentDrinks'); 
  
  if (recentDrinks) {
    let drinksArray = JSON.parse(recentDrinks); 
    console.log(drinksArray); 
    for (let i = 0; i < drinksArray.length; i++) {
      if (i < drinksArray.length) {
        let drinkName = drinksArray[i]; 
        let previousDrinks = document.createElement("li");
        previousDrinks.setAttribute('class', 'list-group-item'); 
        previousDrinkList.append(previousDrinks);
        previousDrinks.textContent =
          `${drinkName}`;
      }

    }

  }

}

//Event listener for "previous drinks" button
previousDrinksBtn.addEventListener("click", renderPreviousDrinks);

//Event listener for "generate drink" button
genDrinkBtn.addEventListener("click", getApi);



// Denver liquor store url and beginning code - not completed
function getLiquorStores(long = 39.7218301, lat = -105.0118191) {
  url =
    "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=liqour+store&userLocation=39.7218301,-105.0118191&key=AimOsm5GJg0qraxaJi0SUUro_hogtc3-hm5gx031e7WP1To6SFT3zuZQ0Jyh7Lpu";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    //Pulls the data from the cocktails DB
    .then(function (data) {
      console.log(data);
      console.log(data.resourceSets[0].resources[0].name);
      console.log(data.resourceSets[0].resources[0].Address.addressLine);

      console.log(data.resourceSets[0].resources[1].name);
      console.log(data.resourceSets[0].resources[1].Address.addressLine);

      console.log(data.resourceSets[0].resources[2].name);
      console.log(data.resourceSets[0].resources[2].Address.addressLine);

      

      let liquorStoreContainer = document.getElementById("liquor-store-container");
      liquorStoreContainer.classList.remove("hide");

      storeOne.textContent = data.resourceSets[0].resources[0].name;
      storeOneAdd.textContent =
        data.resourceSets[0].resources[0].Address.addressLine;

      storeTwo.textContent = data.resourceSets[0].resources[1].name;
      storeTwoAdd.textContent =
        data.resourceSets[0].resources[1].Address.addressLine;

      storeThree.textContent = data.resourceSets[0].resources[2].name;
      storeThreeAdd.textContent =
        data.resourceSets[0].resources[2].Address.addressLine;
    });
}

storeBtn.addEventListener("click", getLiquorStores);
