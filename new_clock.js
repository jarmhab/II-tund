(function(){
  "use strict";


  var Kell = function(){

    //SINGELTON PATTERN
    if(Kell.instance){
      return Kell.instance;
    }
    Kell.instance = this; //this viitab kellale

    console.log(this);
    //console.log('kella sees');

    //KÕIK MUUTJUJAD, mis on üldised ja muudetavad
    this.click_count = 0;

    this.init();
  };

  //kõik moosipurgifunktsioonid tulevad siia sisse
  Kell.prototype = {
    init: function(){
      console.log('rakendus käivitus');
      //siia tuleb esialgne loogika

      //käivitan intervalli
    window.setInterval(function(){
      //iga 500ms tagant käivitan writeDate'i
      this.writeDate();

    }, 500);


    }



  };

  window.onload = function(){
    var app = new Kell();




  };



})();
