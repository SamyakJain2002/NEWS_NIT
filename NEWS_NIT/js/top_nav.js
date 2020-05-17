function openNav(number) {
  
    if(number == 1)
    document.getElementById("myNavLeft").style.height = "100%";
    if(number == 2)
    document.getElementById("myNavRight").style.height = "100%";
  }
  
  function closeNav(number) {
    
    if(number == 1)
    document.getElementById("myNavLeft").style.height = "0%";
    if(number == 2)
    document.getElementById("myNavRight").style.height = "0%";
  }