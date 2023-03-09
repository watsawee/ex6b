function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length <= 9 && sid.length >=0) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi.length <= 9 && candi.length >=0) {
    return true;
  } else {
    return false;
  }
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