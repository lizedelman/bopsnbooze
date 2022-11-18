let h1 = document.querySelector(".h1")

function getApi(drink) {
    var requestUrl =

    "www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink + "&appid=1";

    let drink = mojito;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        cocktail.name = data.drink.name;
        cocktail.data = data.list;
        displayDrinkRecipe()
    })

}

function displayDrinkRecipe() {
    h1.textContent = cocktail.name
}

function getLiquorStores(long = 39.7218301,lat = -105.0118191) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://dev.virtualearth.net/REST/v1/LocalSearch/?query=liqour+store&userLocation=39.7218301,-105.0118191&key=AimOsm5GJg0qraxaJi0SUUro_hogtc3-hm5gx031e7WP1To6SFT3zuZQ0Jyh7Lpu\n", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}