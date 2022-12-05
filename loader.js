
window.onload = function(){
    document.body.style.backgroundColor = 'black';
    setTimeout(blow,1000);
}

function blow(){
    
          document.getElementById('loader').style.display = "none";
          document.getElementById('mainDiv').style.display = "block";
          document.body.style.backgroundColor = 'white';
 
}
