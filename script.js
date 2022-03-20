(function () {
  var ans = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (var i = 0; i < ans.length; i++) {
    var firstLetter = ans[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker(ans[i]);
    } else {
      helloSpeaker(ans[i]);
    }
  }
})();
