let cookies = 0.0;  
let money = 15000;
let purity = 0.2;
let sellers = 0;
let interval = 100; //100ms
let trailers = 0;
let grandmas = 0;

document.getElementById("buyBaker1").style.display = "none";

function update() {
    document.getElementById("cookiecount").innerText = Math.round(cookies) + " Cookies";
    document.getElementById("cookierate").innerText = Math.round(grandmas * 0.4) + " Cookies/sec";
    document.getElementById("moneycount").innerText = Math.round(money) + " Dollars";
    document.getElementById("moneyrate").innerText = "$" + Math.round(20 * purity * sellers) + "/sec";
    document.getElementById("dealerDescription").innerText = sellers + " / 1000" + " Sellers"
}

function add() {
    cookies += 1;
    update();
}

function sell() {
    if (cookies > 0) {
        cookies -= 1;
        money += (100 * purity);
        console.log(cookies, money);
        update();
    }
}

const baker1description = document.getElementById("baker1Description");
const baker1image = document.getElementById("Baker1image");

function unlockBaker1() {
    if (money >= 2000) {
        money -= 2000;
        if(trailers == 0){
            baker1image.src="https://www.kindpng.com/picc/m/51-515317_curtainsider-truck-icon-big-trailer-truck-hd-png.png";
            baker1image.style.maxWidth = "100%";
            document.getElementById("Baker1").style.borderWidth = "0px";
            purity += 0.07;
            document.getElementById("qualitycount").innerText = purity * 100 + "% Quality";
        }
        trailers += 1;
        document.getElementById("buyBaker1").style.display = "grid";
        baker1description.innerText = grandmas + " / " + (trailers * 5) + " Grandmas";
        let clickdown = new Audio('http://orteil.dashnet.org/cookieclicker/snd/buy4.mp3');
        clickdown.volume = 0.2;
        clickdown.load();
        clickdown.play();
    }
}

function buyDealer() {
    if (money >= 1000) {
        money -= 1000;
        sellers += 1;
        playAudio("buy3")
        update();
    }
}

function buyBaker1() {
    if (money >= 500 && grandmas < (trailers * 5)) {
        money -= 500;
        grandmas += 1;
        baker1description.innerText = grandmas + " / " + (trailers * 5) + " Grandmas";
        playAudio("buy3")
        update();
    }
}

function playAudio(audio) {
    let clickdown = new Audio(`http://orteil.dashnet.org/cookieclicker/snd/${audio}.mp3`);
        clickdown.volume = 0.2;
        clickdown.load();
        clickdown.play();
} 

function round11(num){
    return Math.round(num*(Math.pow(10, 10))) / Math.pow(10, 10)
}

function autoSell() {
    let minimum = Math.min(sellers, (5 * cookies))
    if (minimum < 1) {
        minimum = 1;
    }
    if (sellers > 0 && cookies >= purity / (1000 / interval)) {
        cookies -= (purity * minimum) / (1000 / interval);
        cookies = round11(cookies);
        money += (20 * purity * minimum) / (1000 / interval);
        money = round11(money);
    }
}

function autoCook() {
    cookies += 0.4 * grandmas / (1000/interval);
    cookies = round11(cookies);
}

function timer() {
    autoSell();
    autoCook();
    update();
}
setInterval(timer, interval)

const cookieimage = document.getElementById("cookieimage");
const moneyimage = document.getElementById("moneyimage");

cookieimage.addEventListener("click", e => {
    playAudio("click1")
});

moneyimage.addEventListener("click", e => {
    playAudio("sell1")
});

function buy() {
    var e = document.getElementById("buy");
    highlight(e);
    playAudio("buy3")
}

function hire() {
    var e = document.getElementById("hire");
    highlight(e);
    playAudio("buy3")
}

function upgrade() {
    var e = document.getElementById("upgrade");
    highlight(e);
    playAudio("buy3")
}

function achievements() {
    var e = document.getElementById("achievements");
    highlight(e);
    playAudio("buy3")
}

function highlight(element) {
    let buy = document.getElementById("buy");
    let hire = document.getElementById("hire");
    let upgrade = document.getElementById("upgrade");
    let achievements = document.getElementById("achievements");
    if(window.getComputedStyle(element).backgroundColor == "rgb(128, 84, 0)") {
        switch(element) {
            case buy:
                buy.style.backgroundColor = "#c58300";
                hire.style.backgroundColor = "#805400";
                upgrade.style.backgroundColor = "#805400";
                achievements.style.backgroundColor = "#805400";
                break;
            case hire:
                buy.style.backgroundColor = "#805400";
                hire.style.backgroundColor = "#c58300";
                upgrade.style.backgroundColor = "#805400";
                achievements.style.backgroundColor = "#805400";
                break;
            case upgrade:
                buy.style.backgroundColor = "#805400";
                hire.style.backgroundColor = "#805400";
                upgrade.style.backgroundColor = "#c58300";
                achievements.style.backgroundColor = "#805400";
                break;
            case achievements:
                buy.style.backgroundColor = "#805400";
                hire.style.backgroundColor = "#805400";
                upgrade.style.backgroundColor = "#805400";
                achievements.style.backgroundColor = "#c58300";
                break;
        }
    }
}

