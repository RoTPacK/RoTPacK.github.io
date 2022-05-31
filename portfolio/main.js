var r=255,g=0,b=0;
const rb = document.getElementById("rainbow");
setInterval(function(){
  if(r > 0 && b == 0){
    r--;
    g++;
  }
  if(g > 0 && r == 0){
    g--;
    b++;
  }
  if(b > 0 && g == 0){
    r++;
    b--;
  
}
    rb.style.color = "rgb("+r+","+g+","+b+")";
},10);