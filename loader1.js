var saminu = setInterval(() =>{
    // var xx = document.getElementById('loa');
    var xx = document.getElementsByClassName('le');
    for(i=0;i<xx.length;i++){
    xx[i].innerHTML = xx[i].innerHTML + "."
    if(xx[i].innerHTML == "....")
        xx[i].innerHTML = "."
    }
   
},1000);
saminu();