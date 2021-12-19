function weightConverter(valNum) {
    document.getElementById("outputKilorams").innerHTML = (valNum / 35.274);
    document.getElementById("outputPounds").innerHTML = (valNum * 0.0625);
    document.getElementById("outputGrams").innerHTML = (valNum / 0.035274);
    document.getElementById("outputStones").innerHTML = (valNum * 0.0044643);
}
