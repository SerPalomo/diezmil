var x = 1;
var y = 0;
function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var pos = d1 + d2 +d3 + d4 + d5 + y;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    status.innerHTML = "Suma=  " + pos + ".";
    tiro.innerHTML = "Tiro Nro=  " + x + ".";
    x = x + 1;
    y = pos;
    if (pos > 10000) {
        alert("Chan chan chan ....Llegaste a 100 gato!!!");
        y = 0;

    }

}