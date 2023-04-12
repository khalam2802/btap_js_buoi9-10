var dsnv = []
var getJson = localStorage.getItem('DATA_LOCAL')
if(getJson != null){
    var dataArr=JSON.parse(getJson);
    for (var i = 0;i<dataArr.length;i++){
        var item = dataArr[i]
        var nv = new NhanVien(
            item.tknv,
            item.name,
            item.email,
            item.password,
            item.luongCB,
            item.chucvu,
            item.gioLam
        )
        dsnv.push(nv)
    }
    renderDSNV(dsnv);
}
// thêm NV
function themNV() {
    var nv = layThongTinTuForm();
    // kiểm tra trùng
    // ktra taikhoan
    var isValid = kiemTraTrung(nv.tknv, dsnv) 
    && kiemTraTaiKhoan(nv.tknv)
    // tên
    isValid = isValid &
    kiemTraTenNV(nv.name);
    // ktra email
    isValid= isValid & kiemTraEmail(nv.email);
    // ktra mật khẩu:
    isValid = isValid & kiemTraMatKhau(nv.password)
    // ktra ngày làm
    isValid = isValid& kiemTraNgayLam(nv.datepicker)
    // ktra lương
    isValid= isValid & kiemTraLuongCB(nv.luongCB);
    // ktra chức vụ
    isValid = isValid & kiemTraChucVu(nv.chucvu);
    // ktra số giờ làm
    isValid = isValid & kiemTraGioLam(nv.gioLam);
    if (isValid) {
        dsnv.push(nv);
        var dataJson = JSON.stringify(dsnv);
        localStorage.setItem('DATA_LOCAL', dataJson);
        // render dsnv 
        renderDSNV(dsnv);
    }
}


// XOÁ NV 
function XoaNV(tknv){
    var index = -1
    for(var i = 0; i < dsnv.length; i++){
        var nv = dsnv[i]
    if(nv.tknv == tknv){
        index = i
    }
    }
    dsnv.splice(index, 1)
    renderDSNV(dsnv);
}
// sửa NV
function SuaNV(tknv){

    var viTri = dsnv.findIndex(function(item){
        return item.tknv==tknv;
    });
    if (viTri!=-1){
    
    }
    document.getElementById("tknv").disabled=true;

   showThongTinlenForm(dsnv[viTri]);

    renderDSNV(dsnv);
}


function resetForm() {
    document.getElementById("formQLNV").reset();
  }
// cập nhật NV
function capNhatNV(){
    var nv = layThongTinTuForm();
    document.getElementById("tknv").disabled=false;
    var viTri=dsnv.findIndex(function(item){
        return item.tknv ==nv.tknv;
    });
    if (viTri !=-1){
        dsnv[viTri]=nv;
    }
    renderDSNV(dsnv)
}
function locNV(){
    var layValue=document.getElementById("searchName").value;
    var locNV=dsnv.filter(function(search){
        return search.loaiNV()===layValue && search.chucvu==="Nhân viên";
        
    })
    renderDSNV(locNV);

}