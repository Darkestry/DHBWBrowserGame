let meth = 0;  
let money = 15000;
let purity = 0.2;
let dealers = 0;
let methrate = 0;

function update() {
    document.getElementById("methcount").innerHTML = Math.round(meth) + "G";
    document.getElementById("moneycount").innerHTML = (Math.round(money / 10) * 10) + "$";
    document.getElementById("moneyrate").innerHTML= Math.round(dealers * 4) + "$/sec";
    document.getElementById("dealer1").innerHTML= "You have " + dealers + "/1000" + " dealers"
}

function add() {
    meth += 1;
    update();
}

function sell() {
    if (meth > 0) {
        meth -= 1;
        money += (100 * purity);
        update();
    }
}

function unlockDealer1() {
    if (money >= 2000) {
        money -= 2000;
        document.getElementById("Upgrade1").setAttribute("onclick", "return false");
        document.getElementById("Dealer2").style.backgroundImage="https://www.kindpng.com/picc/m/51-515317_curtainsider-truck-icon-big-trailer-truck-hd-png.png";
    }
}

function buyDealer1() {
    if (money >= 1000) {
        money -= 1000;
        dealers += 1;
        update();
    }
}

function autosell() {
    if (dealers > 0 && meth > 0.2) {
        console.log("sold 1")
        meth -= (0.2 * dealers);
        money += (4 * dealers);
        update();
    }
    else {
        //pass
    } 
}

function timer() {
    autosell();
    update();
}
setInterval(timer, 1000)

