function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length < 10) {
    return false;
    len=0;
  } else {
    len = sid.length;
  }
for(var i=0 ; i<len ; i++)
{
digit = sid.charAt(i)
if(digit >="0" && digit <="9"){
;
}else{
return false;
}
}
return true;
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (candi == " ") {
    return false;
len=0;
  } else {
len = candi.length;
for(var i=0 ; i<len ; i++)
{
digit = candi.charAt(i)
if(digit >="0" && digit <="9"){
;
}else{
return false;
}
}
return true;
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}