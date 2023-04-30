function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10 || isNaN(sid)) {
	  //แก้ไขเพิ่มเติมให้เป็นไปตามเงื่อนไขที่ว่า รหัส นักศึกษาจะต้องเป็นตัวเลขเท่านั้น
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi <= 10) {
	  //แก้ไขเพิ่มเติมให้เป็นไปตามเงื่อนไขว่า รัหส Candidate จะต้องเป็นค่า 1-10 เท่านั้น
  } else {
    return true;
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