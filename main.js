var kon = 0;
var bambik = 0;
function load(){
    document.getElementById("kon").innerHTML = kon;
    document.getElementById("bambik").innerHTML = bambik;
}

function liczk(){
    kon++;
    document.getElementById("kon").innerHTML = kon;
}
function liczb(){
    bambik++;
    document.getElementById("bambik").innerHTML = bambik;
}
function licznk(){
    var a = document.getElementById("licznikk").value;
    a = a/1
    kon += a
    document.getElementById("kon").innerHTML = kon;
}
function licznb(){
    var b = document.getElementById("licznikb").value;
    b = b/1
    bambik += b
    document.getElementById("bambik").innerHTML = bambik;
}