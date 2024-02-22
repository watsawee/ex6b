function checkSID() {
    let sid = (document.getElementById("sid").value).trim();

    // เช็คความยาวของ SID ให้มีความยาว 10 ตัว
    if (sid.length == 10) {
        // ตรวจสอบว่าทุกตัวอยู่ในช่วง 0-9 หรือไม่
        for (let i = 0; i < sid.length; i++) {
            let digit = parseInt(sid[i]);
            if (isNaN(digit) || digit < 0 || digit > 9) {
                return false;
            }
        }
        // ถ้าผ่านทุกเงื่อนไข แสดงว่าเป็น SID ที่ถูกต้อง
        return true;
    } else {
        // ถ้าความยาวไม่เท่ากับ 10 ไม่ใช่ SID ที่ถูกต้อง
        return false;
    }
}


function checkCandiNo() {
    let candi = parseInt(document.getElementById("candi").value.trim());
    // ตรวจสอบว่า candi เป็นตัวเลขหรือไม่ และมีค่าอยู่ในช่วง 1 ถึง 10 หรือไม่
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