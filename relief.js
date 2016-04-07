window.onload = function(){

  window.defaultColor = "lightgrey";
  window.defaultBackgroundColor = "#676565";
  window.defaultInnerBackgroundColor = "#424040";

  var elements, i, len;


  defaultLoad();

  window.onscroll = function(){updateFeed()};

};

function defaultLoad(){
  elements = document.getElementsByClassName("fbChatSidebar");

  document.body.style.background = defaultBackgroundColor;

  document.getElementById("contentCol").style.backgroundColor = defaultInnerBackgroundColor;

  updateFeed();
};


function updateFeed(){
  for(i = 0, len = elements.length; i < len; i++){
  elements[i].style.backgroundColor = defaultColor;
  };

  elements = document.getElementsByClassName("_4-u2");

  for(i = 0, len = elements.length; i < len; i++){
  elements[i].style.backgroundColor = defaultColor;
  };

  elements = document.getElementsByClassName("_4-u8");

  for(i = 0, len = elements.length; i < len; i++){
  elements[i].style.backgroundColor = defaultColor;
  };
};
