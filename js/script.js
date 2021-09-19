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

    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    if (d1 == 1) {
        d1 = 100;
    } else {
        if (d1 == 5) {
            d1 = 50;
        } else {
            d1 = 0;
        }
    }
    if (d2 == 1) {
        d2 = 100;
    } else {
        if (d2 == 5) {
            d2 = 50;
        } else {
            d2 = 0;
        }
    }
    if (d3 == 1) {
        d3 = 100;
    } else {
        if (d3 == 5) {
            d3 = 50;
        }else{
            d3=0;
            }
    }
    if (d4 == 1) {
        d4 = 100;
    } else {
        if (d4 == 5) {
            d4 = 50;
        }else{
            d4=0;
            }
    }
    if (d5 == 1) {
        d5 = 100;
    } else {
        if (d5 == 5) {
            d5 = 50;
        }else{
            d5=0;
            }
    }
    var pos = d1 + d2 + d3 + d4 + d5 + y;

    status.innerHTML = "Suma=  " + pos;
    tiro.innerHTML = "Tiro Nro=  " + x;
    x = x + 1;
    y = pos;
    if (pos > 10000) {
        alert("Chan chan chan ....Llegaste a 100 gato!!!");
        y = 0;

    }


}