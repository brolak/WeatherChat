app.service('weatherService', function(){
  var data = [{ City: "Toronto", Temp: 12, Time: "12:00"}, {City: "Chicago", Temp:"2", Time:"2:00"}];

  return { 
    data: data 
  };
});