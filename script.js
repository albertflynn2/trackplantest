	function submitword() 
			{
				alert("Go button clicked!");
				return true;
			}	
	
	function passvalues()
			{
				var firstword = document.getElementById("txt").value;
				localStorage.setItem("textvalue", firstword);
				return false;
			}
			
	
	document.getElementById("result").innerHTML=localStorage.getItem("textvalue");