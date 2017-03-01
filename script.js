/*$cityName = $(".city-name");

//local storage functions/variables
var STORAGE_ID = 'weather-cities';
var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(cities));
}
var getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}
var cities = getFromLocalStorage();

//function for clear list button
var clearCity = function () {
  $(".add-weather").empty();
  cities = [];
  saveToLocalStorage();
}

//function for adding a new city to list
var addCity = function(city,temp) {
  var newCity = {
    "city": city,
    "temp": temp,
    "time": new Date(),
    "comments": []
  };
  cities.push(newCity);
  updateCity();
  saveToLocalStorage();
}

//render page of cities/weather
var updateCity = function () {
  $(".add-weather").empty();
  for(i=0;i<cities.length;i++){
    var source = $('#weather-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template ({
      City: cities[i].city,
      Temp: cities[i].temp,
      Time: new Date()
    })
    $(".add-weather").append(newHTML);
    saveToLocalStorage();
  }
}

//function for trash button, remove individual item
var removeCity = function (city) {
  for (i=0;i<cities.length;i++){
    if (cities[i].city === city){
      cities.splice(i,1);
    }
  }
  updateCity();
  saveToLocalStorage();
}

//api fetch for json weather data
var fetch = function (searchword) {
  $.ajax({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q="+searchword+"&units=metric&appid=699258262911c3648e459b92cdb7b7dd",
    dataType: "json",
    success: function(data) {
      addCity(data.name,data.main.temp);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

updateCity();

//search city function
$(".city-weather").on("click",".city-search",function () {
  fetch($cityName.val());
  $cityName.val("");
})

//clear all cities function
$(".city-weather").on("click", ".city-clear", function () {
  clearCity();
})

//remove individual city 
$(".add-weather").on("click",".fa-trash-o", function () {
  var toRemove = ($(this).parent().data().name);
  removeCity(toRemove);
})

//add comment button
$(".add-weather").on("click",".add-comment", function () {
  console.log($(this).data());
})*/