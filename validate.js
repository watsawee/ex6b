function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
	if (!(/^\d+$/.test(sid))) {
		return false;
	}

  if ( sid.length == 10 && (/^\d+$/.test(sid)) ) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();

  if (/^\d+$/.test(candi) && candi >= 1 && candi <= 10) {
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