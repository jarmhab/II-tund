(function(){
  "use strict";


  var Moosipurk = function(){

    //SINGELTON PATTERN
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; //this viitab moosipurgile

    console.log(this);
    //console.log('moosipurgi sees');

    this.init();
  };

  //kõik moosipurgifunktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus käivitus');
      //siia tuleb esialgne loogika
      //hakka kuulama hiireklõpse
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click',this.addNewClick.bind(this));
    },
    addNewClick: function(event){
      console.log(event);
    }

  };

  window.onload = function(){
    var app = new Moosipurk();


  };



})();
