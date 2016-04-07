window.onload = function(){

  var defaultColor = "lightgrey";
  var elements, i, len;

  elements = document.getElementsByClassName("fbChatSidebar");

  document.body.style.background = defaultColor;

  document.getElementById("contentCol").style.backgroundColor = defaultColor;

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
