window.onload = function()
       {
           if(localStorage.userID && localStorage.hash && localStorage.amount && localStorage.privateKey)
           {
               document.getElementById('usern').innerHTML = localStorage.userID;
               document.getElementById('adr').innerHTML = localStorage.hash;
               document.getElementById('amount').innerHTML = localStorage.amount;
               document.getElementById('vl').innerHTML = localStorage.vlue;
               document.getElementById('private').innerHTML = localStorage.privateKey;
               //Displying the rotating image
               document.getElementById('ret').classList.add('rotedD');
            }
           else{
             document.getElementById('formR').style.display = 'block'
             document.getElementById('btn').focus();   
           }
       }
       function register()
       {
        
           var hashing =  "0x" + Math.floor(Math.random()*99999999999999).toString(16);
           var prvKey =  "0x" + Math.floor(Math.random()*999999999999990).toString(16);
           localStorage.setItem("hash", hashing);
           localStorage.setItem("privateKey", prvKey);
           // userID
           var userid = document.getElementById('user').value;
           localStorage.setItem("userID", userid);
           localStorage.setItem("amount", "100 STT");
           //value
           localStorage.setItem("vlue","$1000")
           // close the register form
           document.getElementById('formR').style.display = 'none'
           //Displying the rotating img
           document.getElementById('ret').classList.add('rotedD');
           //Displying the entered info and the wallet address
           document.getElementById('usern').innerHTML = localStorage.userID;
           document.getElementById('adr').innerHTML = localStorage.hash;
           document.getElementById('amount').innerHTML = localStorage.amount;
           document.getElementById('vl').innerHTML = localStorage.vlue;
           document.getElementById('private').innerHTML = localStorage.privateKey;

       }
       function privateD()
       {
           document.getElementById('privt').classList.toggle('showPrivate');
       }