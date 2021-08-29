var x = 1;
var y = 0;
function rollDice() {
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var pos = d1 + d2 + y;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "Suma=  " + pos + ".";
    tiro.innerHTML = "Tiro Nro=  " + x + ".";
    x = x + 1;
    y = pos;
    if (pos > 99) {
        alert("Chan chan chan ....Llegaste a 100 gato!!!");
        y = 0;

    }

}