let cookies = 0;  
let money = 0;
let purity = 0.2;
let sellers = 0;
let trailers = 0;
let houses = 0;
let grandmas = 0;
let students = 0;
let bakers = 0;
let bakeries = 0;
let islands = 0;
let tribalCooks = 0;
let factories = 0;
let loyalWorkers = 0;
let clickMultiplier = 1;
let sellingRateMultiplier = 1;
let arrow = document.getElementById("arrow")

let recruiterAmount = document.getElementById("recruiterAmount");
let baker1Amount = document.getElementById("baker1Amount");
let baker2Amount = document.getElementById("baker2Amount");
let baker3Amount = document.getElementById("baker3Amount");
let baker4Amount = document.getElementById("baker4Amount");
let baker5Amount = document.getElementById("baker5Amount");

let hire1 = document.getElementById("hire1");
let hire2 = document.getElementById("hire2");
let hire3 = document.getElementById("hire3");
let hire4 = document.getElementById("hire4");
let hire5 = document.getElementById("hire5");

let upgrade1 = document.getElementById("upgrade1");
let upgrade2 = document.getElementById("upgrade2");
let upgrade3 = document.getElementById("upgrade3");
let upgrade4 = document.getElementById("upgrade4");
let upgrade5 = document.getElementById("upgrade5");

let leftSpan1 = document.getElementById("leftSpan1");
let leftSpan2 = document.getElementById("leftSpan2");
let leftSpan3 = document.getElementById("leftSpan3");
let rightSpan1 = document.getElementById("rightSpan1");
let rightSpan2 = document.getElementById("rightSpan2");
let rightSpan3 = document.getElementById("rightSpan3");
document.getElementById("buyBaker1").style.display = "none";
document.getElementById("buyBaker2").style.display = "none";
document.getElementById("buyBaker3").style.display = "none";
document.getElementById("buyBaker4").style.display = "none";
document.getElementById("buyBaker5").style.display = "none";
toggleSelection("buy")
arrow.style.display = "none";
baker1Amount.style.display = "none";
baker2Amount.style.display = "none";
baker3Amount.style.display = "none";
baker4Amount.style.display = "none";
baker5Amount.style.display = "none";

let elapsed; // framerate of window object in milliseconds
let cookiesPerFrame;

function update() {
    document.getElementById("cookiecount").innerText = Math.round(cookies) + " Cookies";
    document.getElementById("cookierate").innerText = Math.round(((students * 0.4) + (grandmas * 4.4) + (bakers * 13.8) + (tribalCooks * 83.2) + (loyalWorkers * 152) + Number.EPSILON) * 10) / 10 + " Cookies/sec";
    document.getElementById("moneycount").innerText = Math.round(money) + " Dollars";
    document.getElementById("moneyrate").innerText = "$" + Math.round((20 * purity * sellers * sellingRateMultiplier + Number.EPSILON) * 10) / 10 + "/sec";
    document.getElementById("dealerDescription").innerText = sellers + " / " + maxSellers + " Sellers"
    arrowIndicator();
}

function arrowIndicator() {
    cookiesPerFrame = ((0.4 * students) + (4.4 * grandmas) + (13.8 * bakers) + (tribalCooks * 83.2) + (loyalWorkers * 152)) / (1000 / elapsed);
    if(isNaN(cookiesPerFrame)){
        cookiesPerFrame = 0;
    }
    if(cookiesPerFrame > (0.2 * sellers * sellingRateMultiplier) / (1000 / elapsed)){
        arrow.innerHTML = "&#8593;";
        arrow.style.color = "green";
        arrow.style.display = "inline";
    } else if (cookiesPerFrame == (0.2 * sellers * sellingRateMultiplier) / (1000 / elapsed)){
        arrow.style.display = "none";
    } else if (cookiesPerFrame < (0.2 * sellers * sellingRateMultiplier) / (1000 / elapsed)){
        arrow.innerHTML = "&#8595;";
        arrow.style.color = "red";
        arrow.style.display = "inline";
    }
}

function add() {
    cookies += clickMultiplier;
    update();
}

function sell() {
    if (cookies >= 1) {
        cookies -= 1;
        money += (100 * purity);
        update();
    }
}

function playAudio(audio) {
    let clickdown = new Audio(`http://orteil.dashnet.org/cookieclicker/snd/${audio}.mp3`);
        clickdown.volume = 0.2;
        clickdown.load();
        clickdown.play();
} 
/* Buy section, available under category "Buy" */
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
            document.getElementById("qualitycount").innerText = Math.round(purity * 100) + "% Quality";
            baker1Amount.style.display = "grid";
            document.getElementById("buyBaker1").style.display = "grid";
        }
        trailers += 1;
        baker1Amount.innerText = trailers;
        baker1description.innerText = students + " / " + (trailers * 5) + " Students";
        playAudio("buy4")
    }
    update();
}

const baker2description = document.getElementById("baker2Description");
const baker2image = document.getElementById("Baker2image");

function unlockBaker2() {
    if (money >= 100000) {
        money -= 100000;
        if(houses == 0){
            baker2image.src="house.png";
            baker2image.style.maxWidth = "100%";
            document.getElementById("Baker2").style.borderWidth = "0px";
            purity += 0.03;
            document.getElementById("qualitycount").innerText = Math.round(purity * 100) + "% Quality";
            baker2Amount.style.display = "grid";
            document.getElementById("buyBaker2").style.display = "grid";
        }
        houses += 1;
        baker2Amount.innerText = houses;
        baker2description.innerText = grandmas + " / " + (houses * 10) + " Grandmas";
        playAudio("buy4");
    }
    update();
}

const baker3description = document.getElementById("baker3Description");
const baker3image = document.getElementById("Baker3image");

function unlockBaker3() {
    if (money >= 1000000) {
        money -= 1000000;
        if(bakeries == 0){
            baker3image.src="Bakery.png";
            baker3image.style.maxWidth = "100%";
            document.getElementById("Baker3").style.borderWidth = "0px";
            purity += 0.06;
            document.getElementById("qualitycount").innerText = Math.round(purity * 100) + "% Quality";
            baker3Amount.style.display = "grid";
            document.getElementById("buyBaker3").style.display = "grid";
        }
        bakeries += 1;
        baker3Amount.innerText = bakeries;
        baker3description.innerText = bakers + " / " + (bakeries * 30) + " Bakers";
        playAudio("buy4");
    }
    update();
}

const baker4description = document.getElementById("baker4Description");
const baker4image = document.getElementById("Baker4image");

function unlockBaker4() {
    if (money >= 30000000) {
        money -= 30000000;
        if(islands == 0){
            baker4image.src="island.jpg";
            baker4image.style.maxWidth = "100%";
            document.getElementById("Baker4").style.borderWidth = "0px";
            purity += 0.02;
            document.getElementById("qualitycount").innerText = Math.round(purity * 100) + "% Quality";
            baker4Amount.style.display = "grid";
            document.getElementById("buyBaker4").style.display = "grid";
        }
        islands += 1;
        baker4Amount.innerText = islands;
        baker4description.innerText = tribalCooks + " / " + (islands * 40) + " Tribal Cooks";
        playAudio("buy4");
    }
    update();
}

const baker5description = document.getElementById("baker5Description");
const baker5image = document.getElementById("Baker5image");

function unlockBaker5() {
    if (money >= 100000000) {
        money -= 100000000;
        if(factories == 0){
            baker5image.src="factory.png";
            baker5image.style.maxWidth = "100%";
            document.getElementById("Baker5").style.borderWidth = "0px";
            purity += 0.02;
            document.getElementById("qualitycount").innerText = Math.round(purity * 100) + "% Quality";
            baker5Amount.style.display = "grid";
            document.getElementById("buyBaker5").style.display = "grid";
        }
        factories += 1;
        baker5Amount.innerText = factories;
        baker5description.innerText = loyalWorkers + " / " + (factories * 45) + " Loyal Workers";
        playAudio("buy4");
    }
    update();
}
/* Hire section, available under category "hire" */
let recruiters = 0;
recruiterAmount.style.display = "none";

function buyRecruiter() {
    if (money >= 500000){
        money -= 500000;
        if (recruiters == 0) {
            recruiterAmount.style.display = "grid";
        }
        recruiters += 1;
        recruiterAmount.innerText = recruiters;
        playAudio("buy3");
    }
    update();
}

let temp_sellers = 0;
let maxSellers = 1000;

function autoRecruit() {
    if (recruiters >= 1 && sellers < maxSellers) {
        temp_sellers += recruiters / (3000 / elapsed);
        if(temp_sellers >= 1){
            temp_sellers -= 1;
            sellers += 1;
        }
    }
}
/* Upgrade section, available under category "Upgrade" */

function unlockUpgrade1() {
    if (cookies >= 50) {
        cookies -= 50;
        clickMultiplier += 1;
        upgrade1.setAttribute("onClick", "return false");
        upgrade1.style.backgroundColor = "#0d300c";
        upgrade1.style.textDecoration = "line-through";
        playAudio("buy4");
    }
    update();
}

function unlockUpgrade2() {
    if (cookies >= 20000) {
        cookies -= 20000;
        let choices = Math.floor(Math.random() * 100);
        if (choices < 50) {
            maxSellers += 3000;
            upgrade2.setAttribute("onClick", "return false");
            upgrade2.style.backgroundColor = "#0d300c";
            upgrade2.style.textDecoration = "line-through";
        } else {
            console.log("Upgrade unsuccessful");
        }
        playAudio("buy4");
    }
    update();
}

function unlockUpgrade3() {
    if (cookies >= 40000) {
        cookies -= 40000;
        sellingRateMultiplier += 0.1;
        upgrade3.setAttribute("onClick", "return false");
        upgrade3.style.backgroundColor = "#0d300c";
        upgrade3.style.textDecoration = "line-through";
        playAudio("buy4");
    }
    update();
}

function unlockUpgrade4() {
    if (cookies >= 500000) {
        cookies -= 500000;
        let choices = Math.floor(Math.random() * 100);
        if (choices < 20) {
            maxSellers += 496000;
            upgrade4.setAttribute("onClick", "return false");
            upgrade4.style.backgroundColor = "#0d300c";
            upgrade4.style.textDecoration = "line-through";
        } else {
            console.log("Upgrade unsuccessful", choices)
        }
        playAudio("buy4");
    }
    update();
}

function unlockUpgrade5() {
    if (cookies >= 60000000) {
        cookies -= 60000000;
        let choices = Math.floor(Math.random() * 100);
        if (choices < 10) {
            maxSellers += 499500000;
            upgrade5.setAttribute("onClick", "return false");
            upgrade5.style.backgroundColor = "#0d300c";
            upgrade5.style.textDecoration = "line-through";
        } else {
            console.log("Upgrade unsuccessful", choices)
        }
        playAudio("buy4");
    }
    update();
}

/* Sellers and bakers section */
function buySeller() {
    if (money >= 1000 && sellers < maxSellers) {
        money -= 1000;
        sellers += 1;
        playAudio("buy3");
    }
    update();
}

function buyBaker1() {
    if (money >= 500 && students < (trailers * 5)) {
        money -= 500;
        students += 1;
        baker1description.innerText = students + " / " + (trailers * 5) + " Students";
        playAudio("buy3");
    }
    update();
}

function buyBaker2() {
    if (money >= 5000 && grandmas < (houses * 10)) {
        money -= 5000;
        grandmas += 1;
        baker2description.innerText = grandmas + " / " + (houses * 10) + " Grandmas";
        playAudio("buy3");
    }
    update();
}

function buyBaker3() {
    if (money >= 50000 && bakers < (bakeries * 30)) {
        money -= 50000;
        bakers += 1;
        baker3description.innerText = bakers + " / " + (bakeries * 30) + " Bakers";
        playAudio("buy3");
    }
    update();
}

function buyBaker4() {
    if (money >= 50000 && tribalCooks < (islands * 40)) {
        money -= 50000;
        tribalCooks += 1;
        baker4description.innerText = tribalCooks + " / " + (islands * 40) + " Tribal Cooks";
        playAudio("buy3");
    }
    update();
}

function buyBaker5() {
    if (money >= 90000 && loyalWorkers < (factories * 45)) {
        money -= 90000;
        loyalWorkers += 1;
        baker5description.innerText = loyalWorkers + " / " + (factories * 45) + " Loyal Workers";
        playAudio("buy3");
    }
    update();
}

function round11(num){
    return Math.round(num*(Math.pow(10, 10))) / Math.pow(10, 10)
}

function autoSell() {
    let minimum = Math.min(sellers, (5 * cookies))
    if (minimum < 1) {
        minimum = 1;
    }
    if (sellers > 0 && cookies * sellingRateMultiplier >= purity / (1000 / elapsed)) {
        if (cookies < sellers / 5){
            cookies -= (0.2 * sellingRateMultiplier) / (1000  / (elapsed * sellers));
            money += (20 * purity * sellers * sellingRateMultiplier) / (1000 / elapsed);
        } else {
            cookies -= (0.2 * minimum * sellingRateMultiplier) / (1000 / elapsed);
            money += (20 * purity * minimum * sellingRateMultiplier) / (1000 / elapsed);
        }
    }
}

function autoCook() {
    if(isNaN(cookies)){
        cookies = 0;
    }
    cookies += (((0.4 * students) + (4.4 * grandmas) + (13.8 * bakers) + (83.2 * tribalCooks) + (152 * loyalWorkers)) / (1000/elapsed));
}

const cookieimage = document.getElementById("cookieimage");
const moneyimage = document.getElementById("moneyimage");

cookieimage.addEventListener("click", e => {
    playAudio("click1")
});

moneyimage.addEventListener("click", e => {
    playAudio("sell1")
});

function buy() {
    let e = document.getElementById("buy");
    highlight(e);
    toggleSelection("buy")
    playAudio("buy3")
}

function hire() {
    let e = document.getElementById("hire");
    highlight(e);
    toggleSelection("hire")
    playAudio("buy3")
}

function toggleSelection(toggle) {
    if(toggle == "hire") {
        upgrade1.style.display = "none";
        upgrade2.style.display = "none";
        upgrade3.style.display = "none";
        upgrade4.style.display = "none";
        upgrade5.style.display = "none";
        hire1.style.display = "grid";
        hire2.style.display = "grid";
        hire3.style.display = "grid";
        hire4.style.display = "grid";
        hire5.style.display = "grid";
        leftSpan1.innerText = "$500.000"
        leftSpan2.innerText = "$500.000.000"
        leftSpan3.innerText = "$1.500.000.000"
        leftSpan4.innerText = "$50.000.000.000"
        leftSpan5.innerText = "$28 Trillion"
        rightSpan1.innerText = "Hires sellers"
        rightSpan2.innerText = "Temporarily stops sellers"
        rightSpan2.style.marginLeft = "115px";
        rightSpan3.innerText = "Hires bakers in bulk"
        rightSpan3.style.marginLeft = "105px";
        rightSpan4.innerText = "Invests your money"
        rightSpan4.style.marginLeft = "90px";
        rightSpan5.innerText = "Increases quality"
        rightSpan5.style.marginLeft = "150px";
    } else if (toggle == "buy") {
        hire1.style.display = "none";
        hire2.style.display = "none";
        hire3.style.display = "none";
        hire4.style.display = "none";
        hire5.style.display = "none";
        upgrade1.style.display = "none";
        upgrade2.style.display = "none";
        upgrade3.style.display = "none";
        upgrade4.style.display = "none";
        upgrade5.style.display = "none";
        leftSpan1.innerText = "$2.000"
        leftSpan2.innerText = "$100.000"
        leftSpan3.innerText = "$1.000.000"
        leftSpan4.innerText = "$30.000.000"
        leftSpan5.innerText = "$100.000.000"
        rightSpan1.innerText = "Supports 5 Students"
        rightSpan1.style.marginLeft = "150px";
        rightSpan2.innerText = "Supports 10 Grandmas"
        rightSpan2.style.marginLeft = "130px";
        rightSpan3.innerText = "Supports 30 Bakers"
        rightSpan3.style.marginLeft = "115px";
        rightSpan4.innerText = "Supports 40 Tribal Cooks"
        rightSpan4.style.marginLeft = "98px";
        rightSpan5.innerText = "Supports 45 Loyal Workers"
        rightSpan5.style.marginLeft = "93px";
    } else if (toggle == "upgrade") {
        hire1.style.display = "none";
        hire2.style.display = "none";
        hire3.style.display = "none";
        hire4.style.display = "none";
        hire5.style.display = "none";
        upgrade1.style.display = "grid";
        upgrade2.style.display = "grid";
        upgrade3.style.display = "grid";
        upgrade4.style.display = "grid";
        upgrade5.style.display = "grid";
        leftSpan1.innerText = "50 C"
        leftSpan2.innerText = "20.000 C"
        leftSpan3.innerText = "40.000 C"
        leftSpan4.innerText = "500.000 C"
        leftSpan5.innerText = "60.000.000 C"
        rightSpan1.innerText = "Doubles click production"
        rightSpan1.style.marginLeft = "150px";
        rightSpan2.innerText = "Increases max. sellers to 4.000"
        rightSpan2.style.marginLeft = "120px";
        rightSpan3.innerText = "Selling rate + 10 %"
        rightSpan3.style.marginLeft = "115px";
        rightSpan4.innerText = "Increases max. sellers to 500.000"
        rightSpan4.style.marginLeft = "105px";
        rightSpan5.innerText = "Increases max. sellers to 500.000.000"
        rightSpan5.style.marginLeft = "80px";
    }
}

function upgrade() {
    var e = document.getElementById("upgrade");
    highlight(e);
    toggleSelection("upgrade");
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

let lastTime;

function timer(now) {
    elapsed = now - lastTime;
    lastTime = now; //HighResDomTimeStamp
    autoSell();
    autoCook();
    autoRecruit();
    update();
    requestAnimationFrame(timer);
}
window.requestAnimationFrame(timer);

/* 
TODO:
0. Island + Cookie Factory | DONE
1. Upgrade tab | DONE
2. Achievements + unlock on completing x achievements
3. Local Storage + Firebase setup 
4. Pop-up descriptions and alerts
5. Hire 
*/