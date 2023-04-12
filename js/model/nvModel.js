function NhanVien(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam){
    this.tknv = _tknv,
    this.name = _name,
    this.email = _email,
    this.password = _password,
    this.datepicker = _datepicker,
    this.luongCB = _luongCB,
    this.chucvu = _chucvu,
    this.gioLam = _gioLam,

    
    this.tongLuong = function(){
        if(this.chucvu==="Sếp"){
            return this.luongCB*3
        }
        else if (this.chucvu==="Trưởng phòng"){
            return this.luongCB*2
        }
        else if( this.chucvu==="Nhân viên"){
            return this.luongCB*1
        }
        return 1
    },
    this.loaiNV = function(){
        if((this.gioLam)*1 >=192){
            return "xuất xắc"
        }
        else if ((this.gioLam)>=176){
            return "giỏi"
        }
        else if ((this.gioLam)>=160){
            return "khá"}

        else{
            return  "trung bình"
        }
    }
}
