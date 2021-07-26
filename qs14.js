function gobi(){

  const fruits = [ "Apple", "banana"];{
  t=document.getElementById("fruit1").value;
  k=document.getElementById("fruit2").value;
  p=document.getElementById("fruit3").value;
fruits.splice(1, 0, t, k, p);
}

document.getElementById("1").innerHTML="3rd fruit is: "+fruits[3];
    document.getElementById("2").innerHTML="length of this array is : "+fruits.length;
    document.getElementById("3").innerHTML="reverse of this array is : "+fruits.reverse();
}
