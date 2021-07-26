function kobi(){

  const points = [2,3,5,10,2,-9,3];
points.sort(function(a, b){return a-b});
document.getElementById("demo13").innerHTML = "Min value is " + points[0];

points.sort(function(a, b){return b-a});
document.getElementById("demo14").innerHTML = "Max value is " + points[0];

}
