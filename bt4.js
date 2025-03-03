let numbers=+prompt("Mời bạn nhập số nguyên cần kiểm tra");
if(Number.isInteger(numbers)){
    if(numbers % 5 == 0 && numbers % 3 == 0){
        console.log(numbers + " chia hết cho cả 3 và 5");
    }else{
        console.log(numbers + " không chia hết cho cả 3 và 5")
    }
}
