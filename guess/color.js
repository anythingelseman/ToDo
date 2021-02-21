function setButtonColour(i, red, green, blue) {
    document.getElementsByClassName("colourButton")[i].setAttribute('style','background-color: rgb('+ red +','+ green +','+ blue +');');
}

function random() {
    return Math.floor(Math.random()*256);
}


function startGame() {
    var buttons = document.getElementsByClassName("colourButton");
    document.getElementById("answer").innerHTML = "";
    var dapAn = Math.floor(Math.random()*6);
    
    for(var i = 0; i<6 ; i++) {
        var red = random();
        var green = random();
        var blue = random();
        setButtonColour(i,red,green,blue);
        if (i==dapAn) {
            document.getElementById("colourValue").innerHTML = "(" + red + ", " +green + ", " + blue +")";
        }

        buttons[i].addEventListener("click", function() {
            if (this === buttons[dapAn]) {
                document.getElementById("answer").innerHTML = "Chuẩn rồi em";
            }
            else {
                document.getElementById("answer").innerHTML = "Đoán lại đi ngu vcl";
            }
        });
    }

    
}

startGame();

document.getElementById("resetButton").addEventListener("click",startGame);








