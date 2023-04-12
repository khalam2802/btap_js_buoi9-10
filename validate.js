var kiemTraTrung = function (tknv, dsnv) {
  var index = dsnv.findIndex(function (item) {
    return tknv == item.tknv;
  });
  if (index == -1) {
    return true;
  } else {
    document.getElementById("tbTKNV").classList.toggle("d-block");
    document.getElementById("tbTKNV").innerText = "id không được trùng";
    return false;
  }
};
function kiemTraTaiKhoan(tknv) {
  if (tknv.trim() !== "") {
    if (tknv.length >= 4 && tknv.length <= 6) {
      return true;
    } else {
      document.getElementById("tbTKNV").classList.toggle("d-block");
      document.getElementById("tbTKNV").innerText =
        "Tài khoản phải có độ dài từ 4 đến 6 số";
      return false;
    }
  } else {
    document.getElementById("tbTKNV").classList.toggle("d-block");
    document.getElementById("tbTKNV").innerText = "Tài khoản không được trống";
    return false;
  }
}
function kiemTraTenNV(ten) {
  if (ten.trim() !== "") {
    var checkTen = /^[a-zA-Z\s]+[a-zA-Z\s]+$/;
    if (checkTen.test(ten)) {
      return true;
    } else {
      document.getElementById("tbTen").classList.toggle("d-block");
      document.getElementById("tbTen").innerText =
        "Tên nhân viên chỉ được chứa chữ cái";
      return false;
    }
  } else {
    document.getElementById("tbTen").classList.toggle("d-block");
    document.getElementById("tbTen").innerText =
      "Tên nhân viên không được trống";
    return false;
  }
}

function kiemTraEmail(email) {
  if (email.trim() !== "") {
    var checkMail = /\S+@\S+\.\S+/; //
    if (checkMail.test(email)) {
      return true;
    } else {
      document.getElementById("tbEmail").classList.add("d-block");
      document.getElementById("tbEmail").innerText =
        "Email không đúng định dạng";
      return false;
    }
  } else {
    document.getElementById("tbEmail").classList.add("d-block");
    document.getElementById("tbEmail").innerText = "Email không được trống";
    return false;
  }
}
function kiemTraMatKhau(matKhau) {
  if (matKhau.trim() !== "") {
    // Kiểm tra độ dài mật khẩu
    if (matKhau.length < 6 || matKhau.length > 10) {
      document.getElementById("tbMatKhau").classList.add("d-block");
      document.getElementById("tbMatKhau").innerText =
        "Mật khẩu phải có độ dài từ 6-10 ký tự";
      return false;
    }

    var pattern =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,10}$/;
    if (pattern.test(matKhau)) {
      return true;
    } else {
      document.getElementById("tbMatKhau").classList.add("d-block");
      document.getElementById("tbMatKhau").innerText =
        "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
      return false;
    }
  } else {
    document.getElementById("tbMatKhau").classList.add("d-block");
    document.getElementById("tbMatKhau").innerText =
      "Mật khẩu không được trống";
    return false;
  }
}

function kiemTraNgayLam(ngaylam) {
  if (ngaylam.trim() !== "") {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (date_regex.test(ngaylam)) {
      return true;
    } else {
      document.getElementById("tbNgay").classList.add("d-block");
      document.getElementById("tbNgay").innerText =
        "Ngày làm không đúng định dạng mm/dd/yyyy";
      return false;
    }
  } else {
    document.getElementById("tbNgay").classList.add("d-block");
    document.getElementById("tbNgay").innerText = "Ngày làm không được trống";
    return false;
  }
}
function kiemTraLuongCB(luongCB) {
  if (luongCB !== "") {
    var luong = parseInt(luongCB);
    if (luong >= 1000000 && luong <= 20000000) {
      return true;
    } else {
      document.getElementById("tbLuongCB").classList.toggle("d-block");
      document.getElementById("tbLuongCB").innerText =
        "Lương cơ bản phải từ 1,000,000 đến 20,000,000";
      return false;
    }
  } else {
    document.getElementById("tbLuongCB").classList.toggle("d-block");
    document.getElementById("tbLuongCB").innerText =
      "Lương cơ bản không được trống";
    return false;
  }
}

function kiemTraChucVu(chucvu) {
  if (chucvu !== "") {
    if (
      chucvu === "Sếp" ||
      chucvu === "Trưởng phòng" ||
      chucvu === "Nhân viên"
    ) {
      return true;
    } else {
      document.getElementById("tbChucVu").classList.toggle("d-block");
      document.getElementById("tbChucVu").innerText =
        "Vui lòng chọn chức vụ hợp lệ";
      return false;
    }
  } else {
    document.getElementById("tbChucVu").classList.toggle("d-block");
    document.getElementById("tbChucVu").innerText = "Vui lòng chọn chức vụ";
    return false;
  }
}

function kiemTraGioLam(gioLam) {
  if (gioLam !== "") {
    if (gioLam >= 80 && gioLam <= 200) {
      return true;
    } else {
      document.getElementById("tbGiolam").classList.toggle("d-block");
      document.getElementById("tbGiolam").innerText =
        "Số giờ làm không hợp lệ. Vui lòng nhập từ 80 đến 200 giờ";
      return false;
    }
  } else {
    document.getElementById("tbGiolam").classList.toggle("d-block");
    document.getElementById("tbGiolam").innerText = "Vui lòng nhập số giờ làm";
    return false;
  }
}
