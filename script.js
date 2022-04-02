 operator=(val)=>{
  document.getElementById("inputdigit").value +=val;
}
digits=(val)=>{
  document.getElementById("inputdigit").value +=val;
}

clr=()=>{
  document.getElementById("inputdigit").value= "";
}
var makeup ="";
equals=()=>{
  let x = document.getElementById("inputdigit").value
  let y = eval(x)
  document.getElementById("inputdigit").value =y
  document.getElementById("answer").value = "Ans= "+y
  makeup = y;
}

del=()=>{
  let x = document.getElementById("inputdigit").value
  let y = x.substring(0,x.length-1)
  document.getElementById("inputdigit").value = y
}

sqrt=()=>{
  let x = document.getElementById("inputdigit").value
  let y=Math.sqrt(x)
  document.getElementById("inputdigit").value = y
}


power=()=>{
  let x = document.getElementById("inputdigit").value
  let y= Math.pow(x,2)
  document.getElementById("inputdigit").value = y
}

prev=()=>{
  document.getElementById("inputdigit").value = makeup
}


