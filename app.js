let meth = 0.0;  
let money = 15000;
let purity = 0.2;
let dealers = 0;
let interval = 100; //100ms
let trailers = 0;
let cooks = 0;

function update() {
    document.getElementById("methcount").innerText = Math.round(meth) + "G";
    document.getElementById("moneycount").innerText = Math.round(money) + "$";
    document.getElementById("moneyrate").innerText = 4 * dealers + "$/sec";
    document.getElementById("dealer1").innerText = "You have " + dealers + "/1000" + " dealers"
    document.getElementById("Trailer").innerText = "You have " + cooks + "/" + trailers * 5 + " cooks"
}

function add() {
    meth += 1;
    update();
}

function sell() {
    if (meth > 0) {
        meth -= 1;
        money += (100 * purity);
        console.log(meth, money);
        update();
    }
}

function unlockDealer1() {
    if (money >= 2000) {
        money -= 2000;
        trailers += 1;
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

function buyCook() {
    if (money >= 500 && cooks < (trailers * 5)) {
        money -= 500;
        cooks += 1;
        update();
    }
}

function round11(num){
    return Math.round(num*(Math.pow(10, 10))) / Math.pow(10, 10)
}

function autoSell() {
    let minimum = Math.min(dealers, (5 * meth))
    if (minimum < 1) {
        minimum = 1;
    }
    if (dealers > 0 && meth >= 0.2 / (1000/interval)) {
        meth -= (0.2 * minimum) / (1000/interval);
        meth = round11(meth)
        money += (4 * minimum) / (1000/interval);
        money = round11(money)
    }
}

function autoCook() {
    meth += 0.4 * cooks / (1000/interval)
    meth = round11(meth)
}

function timer() {
    autoSell();
    autoCook();
    update();
}
setInterval(timer, interval)

