
function nav()
	{
	  var x = document.getElementById('nv').classList;
	  x.toggle('showFilterList');
	}
addEventListener('hover',show);
 function show()
	{
	  var shoW = document.getElementById('filterList').classList;
	  shoW.toggle('showFilterList');
	}
function walletCheck()
{
	var inputs = document.getElementById('input');
	if(inputs.value.includes('0x'))
	{
		alert("This is verified STT Wallet")
	}
	else{
		alert("This is not STT Wallet or Something is wrong try again!")
	}
}