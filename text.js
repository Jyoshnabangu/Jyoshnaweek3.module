
(function () {

var n = ["jyo", "kowshi", "Janu", "Nandy", "bunny", "janaki", "Yashu", "Jaswanth", "harshini", "Neelu"];

for (var i = 0; i < n.length; i++) {

  var f = n[i].charAt(0).toLowerCase();
  if (f === 'j') {
    byeSpeaker.speak(n[i]);
  } else {
    helloSpeaker.speak(n[i]);
  }
}

})();
