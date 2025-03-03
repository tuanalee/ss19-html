let thang=+prompt("Mời bạn nhập số tháng");
if(thang > 12 && thang < 1){
    if(thang == 2){
        console.log("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
    }else if(thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12){
        console.log("Tháng " + thang + "có 31 ngày");
    }else{
        console.log("Tháng " + thang + "có 30 ngày");
    }
}else{
    console.log("Tháng không hợp lệ");
}
