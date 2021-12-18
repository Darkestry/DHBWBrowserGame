let cookies = 0;  
let money = 0;
let quality = 0.2;
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
let recruiters = 0;

// HTML-elements
let arrow = document.getElementById("arrow");

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
let upgrade6 = document.getElementById("upgrade6");
let upgrade7 = document.getElementById("upgrade7");

let achievement1 = document.getElementById("achievement1");
let achievement2 = document.getElementById("achievement2");
let achievement3 = document.getElementById("achievement3");
let achievement4 = document.getElementById("achievement4");
let achievement5 = document.getElementById("achievement5");

let leftSpan1 = document.getElementById("leftSpan1");
let leftSpan2 = document.getElementById("leftSpan2");
let leftSpan3 = document.getElementById("leftSpan3");
let leftSpan4 = document.getElementById("leftSpan4");
let leftSpan5 = document.getElementById("leftSpan5");
let leftSpan6 = document.getElementById("leftSpan6");
let leftSpan7 = document.getElementById("leftSpan7");

let rightSpan1 = document.getElementById("rightSpan1");
let rightSpan2 = document.getElementById("rightSpan2");
let rightSpan3 = document.getElementById("rightSpan3");
let rightSpan4 = document.getElementById("rightSpan4");
let rightSpan5 = document.getElementById("rightSpan5");
let rightSpan6 = document.getElementById("rightSpan6");
let rightSpan7 = document.getElementById("rightSpan7");

let text6 = document.getElementById("Text6");
let text7 = document.getElementById("Text7");

// Hide overlapping divs and those that require to be unlocked
document.getElementById("buyBaker1").style.display = "none";
document.getElementById("buyBaker2").style.display = "none";
document.getElementById("buyBaker3").style.display = "none";
document.getElementById("buyBaker4").style.display = "none";
document.getElementById("buyBaker5").style.display = "none";

toggleSelection("buy"); // Default tab to show on startup

arrow.style.display = "none";

baker1Amount.style.display = "none";
baker2Amount.style.display = "none";
baker3Amount.style.display = "none";
baker4Amount.style.display = "none";
baker5Amount.style.display = "none";

upgrade6.style.display = "none";
upgrade7.style.display = "none";

let elapsed; // Framerate of window object in milliseconds
let cookiesPerFrame; // Amount of cookies per frame
let totalMoneyEarned = 0;
let totalPlayTime = 0; // Total play time in seconds
let unlockedAchievementsCount = 0;
let clicksOnCookie = 0;

function update() {
    document.getElementById("cookiecount").innerText = Math.round(cookies) + " Cookies";
    document.getElementById("cookierate").innerText = Math.round(((students * 0.4) + (grandmas * 4.4) + (bakers * 13.8) + (tribalCooks * 83.2) + (loyalWorkers * 152) + Number.EPSILON) * 10) / 10 + " Cookies/sec";
    document.getElementById("moneycount").innerText = Math.round(money) + " Dollars";
    document.getElementById("moneyrate").innerText = "$" + Math.round((20 * quality * sellers * sellingRateMultiplier + Number.EPSILON) * 10) / 10 + "/sec";
    document.getElementById("dealerDescription").innerText = sellers + " / " + maxSellers + " Sellers";
    document.getElementById("qualitycount").innerText = Math.round(quality * 100) + "% Quality";

    if (totalMoneyEarned >= 1000000 && achievementsDict[1] === false) {
        unlockAchievement(1);
    }
    if (totalMoneyEarned >= 1000000000 && achievementsDict[2] === false) {
        unlockAchievement(2);
    }
    totalPlayTime += (elapsed / 100);
    if (totalPlayTime >= 86400 && achievementsDict[3] === false) {
        unlockAchievement(3);
    }
    if (clicksOnCookie == 10000 && achievementsDict[4] === false) {
        unlockAchievement(4);
    }
    if (20 * quality * sellers * sellingRateMultiplier >= 1000000 && achievementsDict[5] === false) {
        unlockAchievement(5);
    }
    unlockedAchievementsCount = Object.values(achievementsDict).filter(x => x == true).length;
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
    clicksOnCookie += 1;
    if (clicksOnCookie == 10000) {
        unlockAchievement("4");
    }
    update();
}

function sell() {
    if (cookies >= 1) {
        cookies -= 1;
        money += (100 * quality);
        totalMoneyEarned += (100 * quality);
        update();
    }
}

function playAudio(audio) {
    let clickdown = new Audio(`${audio}.mp3`);
        clickdown.volume = 0.2;
        clickdown.load();
        clickdown.play();
} 

// Buy section, available under category "Buy"
let baker1description = document.getElementById("baker1Description");
let baker1image = document.getElementById("Baker1image");

function unlockBaker1() {
    if (money >= 2000) {
        money -= 2000;
        if(trailers == 0){
            showToast(document.getElementById("toast8"));
            baker1image.src="https://www.kindpng.com/picc/m/51-515317_curtainsider-truck-icon-big-trailer-truck-hd-png.png";
            baker1image.style.maxWidth = "100%";
            document.getElementById("Baker1").style.borderWidth = "0px";
            quality += 0.07;
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
            showToast(document.getElementById("toast9"));
            baker2image.src="house.png";
            baker2image.style.maxWidth = "100%";
            document.getElementById("Baker2").style.borderWidth = "0px";
            quality += 0.03;
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
            showToast(document.getElementById("toast10"));
            baker3image.src="Bakery.png";
            baker3image.style.maxWidth = "100%";
            document.getElementById("Baker3").style.borderWidth = "0px";
            quality += 0.06;
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
            showToast(document.getElementById("toast11"));
            baker4image.src="island.jpg";
            baker4image.style.maxWidth = "100%";
            document.getElementById("Baker4").style.borderWidth = "0px";
            quality += 0.02;
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
            showToast(document.getElementById("toast12"));
            baker5image.src="factory.png";
            baker5image.style.maxWidth = "100%";
            document.getElementById("Baker5").style.borderWidth = "0px";
            quality += 0.02;
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

// Hire section, available under category "Hire"
recruiterAmount.style.display = "none";

function buyRecruiter() {
    if (money >= 500000){
        money -= 500000;
        if (recruiters == 0) {
            showToast(document.getElementById("toast13"));
            recruiterAmount.style.display = "grid";
        }
        recruiters += 1;
        recruiterAmount.innerText = recruiters;
        playAudio("buy3");
    }
    update();
}

// TBD
function buyPoliceOfficer() {
    showToast(document.getElementById("toast14"));
}

function buyMasterBaker() {
    showToast(document.getElementById("toast14"));
}

function buyBanker() {
    showToast(document.getElementById("toast14"));
}

function buyChemist() {
    showToast(document.getElementById("toast14"));
}

// Recruiter
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

// Upgrade section, available under category "Upgrade"
let upgradesDict = {
    1: false, // Double Click
    2: false, // Expansion 1
    3: false, // Cookiematics
    4: false, // Expansion 2
    5: false, // Expansion 3
    6: false, // Research 1
    7: false // Research 2
}

function unlockUpgrade1() {
    if (cookies >= 50) {
        showToast(document.getElementById("toast1"));
        upgradesDict[1] = true;
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
        if (choices < 50) { // Chance to unlock = 50 %
            showToast(document.getElementById("toast1"));
            upgradesDict[2] = true;
            maxSellers += 3000;
            upgrade2.setAttribute("onClick", "return false");
            upgrade2.style.backgroundColor = "#0d300c";
            upgrade2.style.textDecoration = "line-through";
        } else {
            showToast(document.getElementById("toast6"));
        }
        playAudio("buy4");
    }
    update();
}

function unlockUpgrade3() {
    if (cookies >= 40000) {
        showToast(document.getElementById("toast1"));
        upgradesDict[3] = true;
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
    if (unlockedAchievementsCount >= 1) {
        if (cookies >= 500000) {
            cookies -= 500000;
            let choices = Math.floor(Math.random() * 100);
            if (choices < 20) {
                showToast(document.getElementById("toast1"));
                upgradesDict[4] = true;
                maxSellers += 496000;
                upgrade4.setAttribute("onClick", "return false");
                upgrade4.style.backgroundColor = "#0d300c";
                upgrade4.style.textDecoration = "line-through";
            } else {
                showToast(document.getElementById("toast6"));
            }
            playAudio("buy4");
        }
    } else {
        showToast(document.getElementById("toast2"));
    }
    update();
}

function unlockUpgrade5() {
    if (unlockedAchievementsCount >= 3) {
        if (cookies >= 60000000) {
            cookies -= 60000000;
            let choices = Math.floor(Math.random() * 100);
            if (choices < 10) {
                showToast(document.getElementById("toast1"));
                upgradesDict[5] = true;
                maxSellers += 499500000;
                upgrade5.setAttribute("onClick", "return false");
                upgrade5.style.backgroundColor = "#0d300c";
                upgrade5.style.textDecoration = "line-through";
            } else {
                showToast(document.getElementById("toast6"));
            }
            playAudio("buy4");
        }
    } else {
        showToast(document.getElementById("toast5"));
    }
    update();
}

function unlockUpgrade6() {
    if (cookies >= 100000) {
        cookies -= 100000;
        let choices = Math.floor(Math.random() * 100);
        if (choices < 75) {
            showToast(document.getElementById("toast1"));
            upgradesDict[6] = true;
            quality += 0.05;
            upgrade6.setAttribute("onClick", "return false");
            upgrade6.style.backgroundColor = "#0d300c";
            upgrade6.style.textDecoration = "line-through";
        } else {
            showToast(document.getElementById("toast6"));
        }
        playAudio("buy4");
    }
    update();
}

function unlockUpgrade7() {
    if (cookies >= 10000000) {
        cookies -= 10000000;
        let choices = Math.floor(Math.random() * 100);
        if (choices < 50) {
            showToast(document.getElementById("toast1"));
            upgradesDict[7] = true;
            quality += 0.05;
            upgrade7.setAttribute("onClick", "return false");
            upgrade7.style.backgroundColor = "#0d300c";
            upgrade7.style.textDecoration = "line-through";
        } else {
            showToast(document.getElementById("toast6"));
        }
        playAudio("buy4");
    }
    update();
}

// Sellers and bakers section
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

// Automatic generation of money and cookies
function autoSell() {
    let minimum = Math.min(sellers, (5 * cookies))
    if (minimum < 1) {
        minimum = 1;
    }
    if (sellers > 0 && cookies * sellingRateMultiplier >= quality / (1000 / elapsed)) {
        if (cookies < sellers / 5){
            cookies -= (0.2 * sellingRateMultiplier) / (1000  / (elapsed * sellers));
            money += (20 * quality * sellers * sellingRateMultiplier) / (1000 / elapsed);
            totalMoneyEarned += (20 * quality * sellers * sellingRateMultiplier) / (1000 / elapsed);
        } else {
            cookies -= (0.2 * minimum * sellingRateMultiplier) / (1000 / elapsed);
            money += (20 * quality * minimum * sellingRateMultiplier) / (1000 / elapsed);
            totalMoneyEarned += (20 * quality * minimum * sellingRateMultiplier) / (1000 / elapsed);
        }
    }
}

function autoCook() {
    if(isNaN(cookies)){
        cookies = 0;
    }
    cookies += (((0.4 * students) + (4.4 * grandmas) + (13.8 * bakers) + (83.2 * tribalCooks) + (152 * loyalWorkers)) / (1000 / elapsed));
}

// Achievements section, available under category "Achievements"
let achievementsDict = {
    1: false, // Millionaire 
    2: false, // Billionaire
    3: false, // One Day
    4: false, // Clickmaniac
    5: false // Easy Money
};

function unlockAchievement(achievement) {
    achievementsDict[achievement] = true;
    playAudio("fortune");
    showToast(document.getElementById("toast7"))
}

// Audio
const cookieimage = document.getElementById("cookieimage");
const moneyimage = document.getElementById("moneyimage");

cookieimage.addEventListener("click", e => {
    playAudio("click1")
});

moneyimage.addEventListener("click", e => {
    playAudio("sell1")
});

// CSS section
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

function displayHireArr(parameter) {
    let hireArr = [hire1, hire2, hire3, hire4, hire5];
    for (let i = 0; i < hireArr.length; i++) {
        hireArr[i].style.display = parameter;
    }
}

function displayUpgradeArr(parameter) {
    let upgradesArr = [upgrade1, upgrade2, upgrade3, upgrade4, upgrade5, upgrade6, upgrade7];
    for (let i = 0; i < upgradesArr.length; i++) {
        upgradesArr[i].style.display = parameter;
    }
}

function displayAchievementArr(parameter) {
    let achievementsArr = [achievement1, achievement2, achievement3, achievement4, achievement5];
    for (let i = 0; i < achievementsArr.length; i++) {
        achievementsArr[i].style.display = parameter;
    }
}
function adjustLeftSpanMargin(parameter) {
    let leftSpanElements = document.getElementsByClassName("LeftSpan");
    for (let i = 0; i < leftSpanElements.length; i++) {
        leftSpanElements[i].style.marginLeft = parameter;
    }
}

function toggleSelection(toggle) {
    if(toggle == "hire") {
        displayUpgradeArr("none");
        displayAchievementArr("none");
        displayHireArr("grid");
        adjustLeftSpanMargin("60px");
        leftSpan1.innerText = "$500.000";
        leftSpan2.innerText = "$500.000.000";
        leftSpan3.innerText = "$1.500.000.000";
        leftSpan4.innerText = "$50.000.000.000";
        leftSpan5.innerText = "$28 Trillion";
        leftSpan6.style.display = "none";
        leftSpan7.style.display = "none";
        document.querySelectorAll(".RightSpan").forEach(span => span.style.display = "inline");
        rightSpan6.style.display = "none";
        rightSpan7.style.display = "none";
        rightSpan1.innerText = "Hires sellers"
        rightSpan2.innerText = "Temporarily stops sellers";
        rightSpan2.style.marginLeft = "115px";
        rightSpan3.innerText = "Hires bakers in bulk"
        rightSpan3.style.marginLeft = "105px";
        rightSpan4.innerText = "Invests your money"
        rightSpan4.style.marginLeft = "90px";
        rightSpan5.innerText = "Increases quality"
        rightSpan5.style.marginLeft = "150px";
        text6.style.display = "none";
        text7.style.display = "none";
    } else if (toggle == "buy") {
        displayHireArr("none");
        displayUpgradeArr("none");
        displayAchievementArr("none");
        adjustLeftSpanMargin("60px");
        leftSpan1.innerText = "$2.000";
        leftSpan2.innerText = "$100.000";
        leftSpan3.innerText = "$1.000.000";
        leftSpan4.innerText = "$30.000.000";
        leftSpan5.innerText = "$100.000.000";
        leftSpan6.style.display = "none";
        leftSpan7.style.display = "none";
        document.querySelectorAll(".RightSpan").forEach(span => span.style.display = "inline");
        rightSpan6.style.display = "none";
        rightSpan7.style.display = "none";
        rightSpan1.innerText = "Supports 5 Students";
        rightSpan1.style.marginLeft = "150px";
        rightSpan2.innerText = "Supports 10 Grandmas";
        rightSpan2.style.marginLeft = "130px";
        rightSpan3.innerText = "Supports 30 Bakers";
        rightSpan3.style.marginLeft = "115px";
        rightSpan4.innerText = "Supports 40 Tribal Cooks";
        rightSpan4.style.marginLeft = "98px";
        rightSpan5.innerText = "Supports 45 Loyal Workers";
        rightSpan5.style.marginLeft = "93px";
        text6.style.display = "none";
        text7.style.display = "none";
    } else if (toggle == "upgrade") {
        displayHireArr("none");
        displayAchievementArr("none");
        displayUpgradeArr("grid");
        adjustLeftSpanMargin("60px");
        text6.style.display = "inline";
        text7.style.display = "inline";
        leftSpan1.innerText = "50 C";
        leftSpan2.innerText = "20.000 C";
        leftSpan3.innerText = "40.000 C";
        leftSpan4.innerText = "500.000 C";
        leftSpan5.innerText = "60.000.000 C";
        leftSpan6.innerText = "100.000 C";
        leftSpan7.innerText = "10.000.000 C";
        leftSpan6.style.display = "inline";
        leftSpan7.style.display = "inline";
        rightSpan1.innerText = "Doubles click production";
        rightSpan1.style.marginLeft = "150px";
        rightSpan1.style.display = "inline";
        rightSpan2.innerText = "Increases max. sellers to 4.000";
        rightSpan2.style.marginLeft = "120px";
        rightSpan2.style.display = "inline";
        rightSpan3.innerText = "Selling rate + 10 %";
        rightSpan3.style.marginLeft = "115px";
        rightSpan3.style.display = "inline";
        rightSpan4.innerText = "Increases max. sellers to 500.000";
        rightSpan4.style.marginLeft = "105px";
        rightSpan4.style.display = "inline";
        rightSpan5.innerText = "Increases max. sellers to 500.000.000";
        rightSpan5.style.marginLeft = "80px";
        rightSpan5.style.display = "inline";
        rightSpan6.style.display = "inline";
        rightSpan6.innerText = "Increases quality by 5 %";
        rightSpan6.style.marginLeft = "110px";
        rightSpan7.style.display = "inline";
        rightSpan7.innerText = "Increases quality by 5 %";
        rightSpan7.style.marginLeft = "85px";
    } else if (toggle == "achievements") {
        displayUpgradeArr("none");
        displayHireArr("none")
        displayAchievementArr("grid");
        adjustLeftSpanMargin("165px");
        leftSpan1.innerText = "Make a total of one million dollars";
        leftSpan2.innerText = "Make a total of one billion dollars";
        leftSpan3.innerText = "Stay logged on for 24 hours total";
        leftSpan4.innerText = "Click the big cookie 10.000 times";
        leftSpan5.innerText = "Make one million dollars per second";
        leftSpan6.style.display = "none";
        leftSpan7.style.display = "none";
        document.querySelectorAll(".RightSpan").forEach(span => span.style.display = "none");
        text6.style.display = "none";
        text7.style.display = "none";  
    }
}

function upgrade() {
    var e = document.getElementById("upgrade");
    highlight(e);
    toggleSelection("upgrade");
    playAudio("buy3");
}

function achievements() {
    var e = document.getElementById("achievements");
    highlight(e);
    toggleSelection("achievements");
    if (achievementsDict[1] === true) {
        achievement1.style.backgroundColor = "#268824";
    }
    if (achievementsDict[2] === true) {
        achievement2.style.backgroundColor = "#268824";
    }
    if (achievementsDict[3] === true) {
        achievement3.style.backgroundColor = "#268824";
    }
    if (achievementsDict[4] === true) {
        achievement4.style.backgroundColor = "#268824";
    }
    if (achievementsDict[5] === true) {
        achievement5.style.backgroundColor = "#268824";
    }

    playAudio("buy3");
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

// Toasts
function showToast(toast) {
    if (toast.classList.contains("block")) {
        return;
    }
    toast.removeEventListener("transitionend", removeBlockClass);
    document.querySelector(".ToastContainer").appendChild(toast);
    toast.classList.add("block");
    setTimeout(function() {
        toast.classList.add("shown");
    }, 1);
    setTimeout(hideToast, 5000, toast);
}

function hideToast(toast) {
    toast.classList.remove("shown");
    toast.addEventListener("transitionend", removeBlockClass);
}

function removeBlockClass(event) {
    event.target.classList.remove("block");
}

// Save game in localStorage
function saveGame() {
    let gameSave = {
        cookies: cookies,  
        money: money,
        quality: quality,
        sellers: sellers,
        trailers: trailers,
        houses: houses,
        grandmas: grandmas,
        students: students,
        bakers: bakers,
        bakeries: bakeries,
        islands: islands,
        tribalCooks: tribalCooks,
        factories: factories,
        loyalWorkers: loyalWorkers,
        clickMultiplier: clickMultiplier,
        sellingRateMultiplier: sellingRateMultiplier,
        recruiters: recruiters,
        clicksOnCookie: clicksOnCookie,
        cookiesPerFrame: cookiesPerFrame,
        totalMoneyEarned: totalMoneyEarned,
        totalPlayTime: totalPlayTime,
        unlockedAchievementsCount: unlockedAchievementsCount,
        achievementsDict: achievementsDict,
        upgradesDict: upgradesDict,
        maxSellers: maxSellers
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
setInterval(function () {
    saveGame();
    showToast(document.getElementById("toast15"));
}, 30000); // execute every 30000ms = 30 seconds

// Disable the save shortcut ctrl + s
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.code == "KeyS") {
        event.preventDefault();
    }
}, false);

// Load game from localStorage
function loadGame() {
    let savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.cookies !== "undefined") cookies = savedGame.cookies;
    if (typeof savedGame.money !== "undefined") money = savedGame.money;
    if (typeof savedGame.quality !== "undefined") quality = savedGame.quality;
    if (typeof savedGame.sellers !== "undefined") sellers = savedGame.sellers;
    if (typeof savedGame.trailers !== "undefined") trailers = savedGame.trailers;
    if (typeof savedGame.houses !== "undefined") houses = savedGame.houses;
    if (typeof savedGame.grandmas !== "undefined") grandmas = savedGame.grandmas;
    if (typeof savedGame.students !== "undefined") students = savedGame.students;
    if (typeof savedGame.bakers !== "undefined") bakers = savedGame.bakers;
    if (typeof savedGame.bakeries !== "undefined") bakeries = savedGame.bakeries;
    if (typeof savedGame.islands !== "undefined") islands = savedGame.islands;
    if (typeof savedGame.factories !== "undefined") factories = savedGame.factories;
    if (typeof savedGame.tribalCooks !== "undefined") tribalCooks = savedGame.tribalCooks;
    if (typeof savedGame.loyalWorkers !== "undefined") loyalWorkers = savedGame.loyalWorkers;
    if (typeof savedGame.clickMultiplier !== "undefined") clickMultiplier = savedGame.clickMultiplier;
    if (typeof savedGame.sellingRateMultiplier !== "undefined") sellingRateMultiplier = savedGame.sellingRateMultiplier;
    if (typeof savedGame.recruiters !== "undefined") recruiters = savedGame.recruiters;
    if (typeof savedGame.clicksOnCookie !== "undefined") clicksOnCookie = savedGame.clicksOnCookie;
    if (typeof savedGame.cookiesPerFrame !== "undefined") cookiesPerFrame = savedGame.cookiesPerFrame;
    if (typeof savedGame.totalMoneyEarned !== "undefined") totalMoneyEarned = savedGame.totalMoneyEarned;
    if (typeof savedGame.totalPlayTime !== "undefined") totalPlayTime = savedGame.totalPlayTime;
    if (typeof savedGame.unlockedAchievementsCount !== "undefined") unlockedAchievementsCount = savedGame.unlockedAchievementsCount;
    if (typeof savedGame.achievementsDict !== "undefined") achievementsDict = savedGame.achievementsDict;
    if (typeof savedGame.upgradesDict !== "undefined") upgradesDict = savedGame.upgradesDict;
    if (typeof savedGame.maxSellers !== "undefined") maxSellers = savedGame.maxSellers;
    for (const key of Object.keys(upgradesDict)) {
        if (upgradesDict[key] == true) {
            switch(key) {
                case "1":
                    upgrade1.setAttribute("onClick", "return false");
                    upgrade1.style.backgroundColor = "#0d300c";
                    upgrade1.style.textDecoration = "line-through";
                    break;
                case "2":
                    upgrade2.setAttribute("onClick", "return false");
                    upgrade2.style.backgroundColor = "#0d300c";
                    upgrade2.style.textDecoration = "line-through";
                    break;
                case "3":
                    upgrade3.setAttribute("onClick", "return false");
                    upgrade3.style.backgroundColor = "#0d300c";
                    upgrade3.style.textDecoration = "line-through";
                    break;
                case "4":
                    upgrade4.setAttribute("onClick", "return false");
                    upgrade4.style.backgroundColor = "#0d300c";
                    upgrade4.style.textDecoration = "line-through";
                    break;
                case "5":
                    upgrade5.setAttribute("onClick", "return false");
                    upgrade5.style.backgroundColor = "#0d300c";
                    upgrade5.style.textDecoration = "line-through";
                    break;
                case "6":
                    upgrade6.setAttribute("onClick", "return false");
                    upgrade6.style.backgroundColor = "#0d300c";
                    upgrade6.style.textDecoration = "line-through";
                    break;
                case "7":
                    upgrade7.setAttribute("onClick", "return false");
                    upgrade7.style.backgroundColor = "#0d300c";
                    upgrade7.style.textDecoration = "line-through";
                    break;
            }
        }
    }
    for (const key of Object.keys(achievementsDict)) {
        if (achievementsDict[key] == true) {
            switch(key) {
                case "1":
                    achievement1.style.backgroundColor = "#268824";
                    break;
                case "2":
                    achievement2.style.backgroundColor = "#268824";
                    break;
                case "3":
                    achievement3.style.backgroundColor = "#268824";
                    break;
                case "4":
                    achievement4.style.backgroundColor = "#268824";
                    break;
                case "5":
                    achievement5.style.backgroundColor = "#268824";
                    console.log("hi")
                    break;
            }
        }
    }
    if (trailers > 0) {
        baker1image.src="https://www.kindpng.com/picc/m/51-515317_curtainsider-truck-icon-big-trailer-truck-hd-png.png";
        baker1image.style.maxWidth = "100%";
        document.getElementById("Baker1").style.borderWidth = "0px";
        baker1Amount.style.display = "grid";
        document.getElementById("buyBaker1").style.display = "grid";
        baker1Amount.innerText = trailers;
        baker1description.innerText = students + " / " + (trailers * 5) + " Students";
    }
    if (houses > 0) {
        baker2image.src="house.png";
        baker2image.style.maxWidth = "100%";
        document.getElementById("Baker2").style.borderWidth = "0px";
        baker2Amount.style.display = "grid";
        document.getElementById("buyBaker2").style.display = "grid";
        baker2Amount.innerText = houses;
        baker2description.innerText = grandmas + " / " + (houses * 10) + " Grandmas";
    }
    if (bakeries > 0) {
        baker3image.src="Bakery.png";
        baker3image.style.maxWidth = "100%";
        document.getElementById("Baker3").style.borderWidth = "0px";
        baker3Amount.style.display = "grid";
        document.getElementById("buyBaker3").style.display = "grid";
        baker3Amount.innerText = bakeries;
        baker3description.innerText = bakers + " / " + (bakeries * 30) + " Bakers";
    }
    if (islands > 0) {
        baker4image.src="island.jpg";
        baker4image.style.maxWidth = "100%";
        document.getElementById("Baker4").style.borderWidth = "0px";
        baker4Amount.style.display = "grid";
        document.getElementById("buyBaker4").style.display = "grid";
        baker4Amount.innerText = islands;
        baker4description.innerText = tribalCooks + " / " + (islands * 40) + " Tribal Cooks";
    }
    if (factories > 0) {
        baker5image.src="factory.png";
        baker5image.style.maxWidth = "100%";
        document.getElementById("Baker5").style.borderWidth = "0px";
        baker5Amount.style.display = "grid";
        document.getElementById("buyBaker5").style.display = "grid";
        baker5Amount.innerText = factories;
        baker5description.innerText = loyalWorkers + " / " + (factories * 45) + " Loyal Workers";
    }
    if (recruiters > 0) {
        recruiterAmount.style.display = "grid";
        recruiterAmount.innerText = recruiters;
    }
}

window.onload = function () {
    loadGame();
    update();
};

// Update values on every frame rendered
let lastTime;

function timer(now) {
    elapsed = now - lastTime;
    lastTime = now; //DOMHighResTimeStamp 
    autoSell();
    autoCook();
    autoRecruit();
    update();
    requestAnimationFrame(timer);
}
window.requestAnimationFrame(timer);
