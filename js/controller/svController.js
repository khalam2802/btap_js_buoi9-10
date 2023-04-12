function layThongTinTuForm() {
  var tknv = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value*1;
  var chucvu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value;
  var nv = new NhanVien(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
  );
  console.log("nv: ", nv);
  return nv;
}

// Render DSNV
function renderDSNV(nvArr) {
  var contentHTML = "";
  for (var i = 0; i < nvArr.length; i++) {
    var nv = nvArr[i];
    var contentTr = `
        <tr>
            <td>${nv.tknv}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${nv.datepicker}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tongLuong()}</td>
            <td>${nv.loaiNV()}</td>
            <td >
                <button onclick='XoaNV(${nv.tknv})' class='btn btn-danger mr-2'>Xoá</button>
                <button onclick='SuaNV(${nv.tknv})' class='btn btn-secondary'data-toggle="modal"
                data-target="#myModal">Sửa</button>
            </td>
        </tr>
        `;
    contentHTML += contentTr;
  }
  document.querySelector("#tableDanhSach").innerHTML = contentHTML;
}
function showThongTinlenForm(nv){
     tknv = document.getElementById("tknv").value=nv.tknv;
     name = document.getElementById("name").value=nv.name;
     email = document.getElementById("email").value=nv.email;
     password = document.getElementById("password").value=nv.password;
     datepicker = document.getElementById("datepicker").value=nv.datepicker;
     luongCB = document.getElementById("luongCB").value=nv.luongCB;
     chucvu = document.getElementById("chucvu").value=nv.chucvu;
     gioLam = document.getElementById("gioLam").value=nv.gioLam;
}