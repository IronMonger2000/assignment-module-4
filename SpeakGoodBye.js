(function (window) {
  var speak = "Good Bye";
  var byeSpeaker = function (name) {
    console.log(speak + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
