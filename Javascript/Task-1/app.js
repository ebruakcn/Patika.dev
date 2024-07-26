let myName = document.getElementById("myName");

myName.innerHTML = prompt("Adınız nedir:");

let myClock = document.querySelector("#myClock");

function showTime() {
  var currentDate = new Date();
  var gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  document.getElementById("day").innerHTML = gunler[currentDate.getDay()];
  function tarihSaat() {
    var date = new Date().toLocaleString("tr-TR");
    document.getElementById("zaman").innerHTML = date;
  }
  setInterval(tarihSaat, 1000);
}

myClock.innerHTML = showTime();
