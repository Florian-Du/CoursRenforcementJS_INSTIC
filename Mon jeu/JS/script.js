
var point = 0;

var value = 1;
var lvlValue = 1;
var amelioration = value*lvlValue;

var AutoclickLvl = 0;
var LvlUpAutoclick = 100;
var valueAutoClick = 1;
var timerAutoclick = 1000;

function chargement() {
    var score = document.getElementById('score');
    var AffichageScore = Math.floor(point)
    score.innerHTML = AffichageScore;

    var pointValue = document.getElementById('PointValue');
    pointValue.innerHTML = lvlValue;
    var LvlUpPointValue = document.getElementById('LvlUpPointValue');
    var affichageCostAmelioration = Math.ceil(amelioration)
    LvlUpPointValue.innerHTML = affichageCostAmelioration;

    var LvlAutoclick = document.getElementById('AutoclickLvl');
    LvlAutoclick.innerHTML = AutoclickLvl;
    var ValueLvlAutoclick = document.getElementById('LvlUpAutoclick');
    ValueLvlAutoclick.innerHTML = LvlUpAutoclick;

    if (point >= amelioration) {
        var block = document.getElementById('blockPointValue');
        block.style.backgroundColor = "green";
    } else {
        var block = document.getElementById('blockPointValue');
        block.style.backgroundColor = "red";
    }

    if (point >= LvlUpAutoclick) {
        var blockAutoclick = document.getElementById('blockAutoclick');
        blockAutoclick.style.backgroundColor = "green";
    } else {
        var blockAutoclick = document.getElementById('blockAutoclick');
        blockAutoclick.style.backgroundColor = "red";
    }
}

function addPoint(event) {
    point = point + value;

    chargement();
}


function addValue(event) {
    if (point >= amelioration) {
        value = value * 1.1;
        lvlValue++;
        point = point - amelioration;
        amelioration = Math.ceil(value*lvlValue);
    }
    
    chargement();
}

function AddAutoclick(event) {
    if (point >= LvlUpAutoclick) {
        valueAutoClick = valueAutoClick * 1.1;
        if (timerAutoclick > 1000) {
            timerAutoclick - 50;
        }
        AutoclickLvl++;
        point = point - LvlUpAutoclick;
        LvlUpAutoclick = LvlUpAutoclick+LvlUpAutoclick;
        Autoclick();
    }

    
    chargement();
}
function Autoclick() {
    setInterval(function(){ point+=valueAutoClick; chargement(); }, timerAutoclick);
}



