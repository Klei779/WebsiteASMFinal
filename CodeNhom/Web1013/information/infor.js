const userAccess = {
    userName: "QuocDat",
    passWord: "123"
}

function clickMe(){
    let txtUserName = document.getElementById("txtFullName").value;
    let txtPassWord = document.getElementById("txtPassWord").value;
    if(txtUserName == userAccess.userName && txtPassWord == userAccess.passWord){
        alert("Đăng Nhập Thành Công");
    } else {
        alert("Đăng Nhập Thất Bại");
    }
};