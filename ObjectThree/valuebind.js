var num = {
    firstNum: 30
}


Object.defineProperty(num, "getNum", {
    get : function () {
        return this.firstNum;
    }
});
Object.defineProperty(num, "changeNum", {
    set : function (value) {
        this.firstNum = value;
    }
});

document.getElementById("userInput").value = num.getNum;

function onSubmit(){
    num.changeNum = document.getElementById("userInput").value;
    document.getElementById("userInput").value = num.firstNum;
}
setInterval(() => {
    randomValue();
    document.getElementById("userInput").value = num.getNum;
}, 5000);
function randomValue(){
    num.changeNum = Math.floor(Math.random() * 100);
}