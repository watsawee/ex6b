function checkSID() {
    let sid = (document.getElementById("sid").value).trim();

    if (sid.length == 10) {
        for (let i = 0; i < sid.length; i++) {
            let digit = parseInt(sid[i]);
            if (isNaN(digit) || digit < 0 || digit > 9) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


function checkCandiNo() {
    let candi = parseInt(document.getElementById("candi").value.trim());
    if (!isNaN(candi) && candi >= 1 && candi <= 10) {
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