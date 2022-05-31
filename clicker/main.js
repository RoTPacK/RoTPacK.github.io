var money = 0
var multiplier = 1
var income = 0
var needed = 100
var needed2 = 500
function load(){
    document.getElementById("cash").innerHTML = money+"₩";
    document.getElementById("upgrades").innerHTML = "multiplier: "+multiplier+"x"+"<br>"+"income bonus: "+income+"₩"+"/10s"+"<br>"+"upgrade1 cost: "+needed+"₩"+"<br>"+"upgrade2 cost: "+needed2+"₩";
}
//when click on image get money
function getMoney(){
    money = money+multiplier;
    document.getElementById("cash").innerHTML = money+"₩";
}
//upgrade(multiplier)
function upgrade(){
    if(money >= needed){
        money = money-needed;
        multiplier++;
        needed = needed+150;
        document.getElementById("cash").innerHTML = money+"₩";
        document.getElementById("upgrades").innerHTML = "multiplier: "+multiplier+"x"+"<br>"+"income bonus: "+income+"₩"+"/10s"+"<br>"+"upgrade1 cost: "+needed+"₩"+"<br>"+"upgrade2 cost: "+needed2+"₩";
    }else{
        var n = needed
        var m = money
        var a = n-m;
        alert("You don't have enough money: "+a+"₩")
    }
}
//upgrade(income)
function upgrade2(){
    if(income==0){
        if(money >= needed2){
            money = money-needed2;
            income = income+100;
            needed2 = needed2+500;
            document.getElementById("cash").innerHTML = money+"₩";
            document.getElementById("upgrades").innerHTML = "multiplier: "+multiplier+"x"+"<br>"+"income bonus: "+income+"₩"+"/10s"+"<br>"+"upgrade1 cost: "+needed+"₩"+"<br>"+"upgrade2 cost: "+needed2+"₩";
            timer();
        }else{
            var n2 = needed2;
            var m2 = money;
            var a2 = n2-m2;
            alert("You don't have enough money: "+a2+"₩")
        }
    }else if(income>0){
        if(money>=needed2){
            money = money-needed2;
            income = income+100;
            needed2 = needed2+500;
            document.getElementById("cash").innerHTML = money+"₩";
            document.getElementById("upgrades").innerHTML = "multiplier: "+multiplier+"x"+"<br>"+"income bonus: "+income+"₩"+"/10s"+"<br>"+"upgrade1 cost: "+needed+"₩"+"<br>"+"upgrade2 cost: "+needed2+"₩";
        }else{
            var n2 = needed2;
            var m2 = money;
            var a2 = n2-m2;
            alert("You don't have enough money: "+a2+"₩")
        }
    }
}
//income bonus timer(10 seconds cooldown)
function timer(){
    money = money+income;
    document.getElementById("cash").innerHTML = money+"₩";
    setTimeout(timer, 10000);
}
timer();