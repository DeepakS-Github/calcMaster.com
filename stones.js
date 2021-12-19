function weightConverter(valNum) {
    document.getElementById("outputKilorams").innerHTML = (valNum / 0.15747);
    document.getElementById("outputPounds").innerHTML = (valNum * 14);
    document.getElementById("outputOunces").innerHTML = (valNum * 224);
    document.getElementById("outputGrams").innerHTML = (valNum / 0.00015747);
}
