function weightConverter(valNum) {
    document.getElementById("outputKilorams").innerHTML = (valNum / 1000);
    document.getElementById("outputPounds").innerHTML = (valNum * 0.0022046);
    document.getElementById("outputOunces").innerHTML = (valNum * 0.035274);
    document.getElementById("outputStones").innerHTML = (valNum * 0.00015747);
}
