
const num = [4,1,8,3,9,12];
document.getElementById("demo").innerHTML = num;

function sortedarray() {
  num.sort(function(a, b){return a - b});
  document.getElementById("sorted").innerHTML = num;}
