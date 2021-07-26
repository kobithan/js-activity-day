function volume(){
  var a =  document.getElementById("length").value;
  var b =  document.getElementById("width").value;
  var c =  document.getElementById("height").value;
  var d = parseInt(a) * parseInt(b) * parseInt(c);

 document.getElementById("q4").innerHTML="the volume of cuboid is : " +d;
}
