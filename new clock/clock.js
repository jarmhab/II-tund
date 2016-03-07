(function(){
  "use strict";

  var Clock = function(){
    //Singelton
    if(Clock.instance){
      return Clock.instance;
    }
    Clock.instance = this;

    this.Clock = document.getElementById("Clock");

    //panen rakenduse tööle
    this.init();
};
  //Kõik funktsioonid tulevad siia
  Clock.prototype = {
    init: function(){
      console.log("rakendus käivitus");
      this.writeDate();
      window.setInterval(this.writeDate.bind(this), 500);
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      change.addEventListener('click', function(){
        document.getElementById("body").style.background = "pink";
      });
      clock.addEventListener('click', function(){
        var today = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day_of_week = days[today.getDay()];
         alert("Today is " + day_of_week);
     });
   },
    //võtab aja ja kirjutab #clock elemendi sisse
      writeDate: function(){

        var today = new Date();

        var year = today.getFullYear();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var month = months[today.getMonth()];
        var day = today.getDate();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        clock.innerHTML = this.addZeroBefore(hours) + ":" + this.addZeroBefore(minutes) + ":" + this.addZeroBefore(seconds) + "<br>" + (day) + "." + (month) + "." + (year);

    },
    addZeroBefore: function(number){

      if(number < 10){
        number = "0" + number;
      }

      return number;
    }

 };

  window.onload = function(){
    var app = new Clock();
  };

})();
