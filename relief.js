window.onload = function(){

  window.defaultColor = "lightgrey";
  window.defaultBackgroundColor = "#676565";
  window.defaultInnerBackgroundColor = "#424040";

  var currentUrl = window.location.href;

  defaultLoad();

  window.onscroll = function(){updateFeed()};

  setInterval(function(){
    if(currentUrl != window.location.href){
      currentUrl = window.location.href;
      defaultLoad();
    }
  }, 3000);

};

function defaultLoad(){
  updateFeed();

  document.body.style.background = defaultBackgroundColor;

  document.getElementById("contentCol").style.backgroundColor = defaultInnerBackgroundColor;

  if(location.pathname.length > 1){
    document.getElementById("pagelet_timeline_recent").style.backgroundColor = defaultInnerBackgroundColor;
  }
};


function updateFeed(){

  loopThroughElements("fbChatSidebar", defaultColor);

  loopThroughElements("_4-u2", defaultColor);

  loopThroughElements("_4-u8", defaultColor);

  loopThroughElements("_4arz", "#F6F7F8");

};

function loopThroughElements(className, classColor){
  var elements, i, len;
  elements = document.getElementsByClassName(className);

  for(i = 0, len = elements.length; i < len; i++){
    elements[i].style.backgroundColor = classColor;
  };

};
