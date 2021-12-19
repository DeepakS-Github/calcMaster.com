function weightConverter(valNum) {
    document.getElementById("outputGrams").innerHTML = (valNum * 1000);
    document.getElementById("outputPounds").innerHTML = (valNum * 2.2046);
    document.getElementById("outputOunces").innerHTML = (valNum * 35.274);
    document.getElementById("outputStones").innerHTML = (valNum * 0.1574);
}
