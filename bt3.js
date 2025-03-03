let currency=prompt("Mời bạn nhập tiền tệ cần chuyển đổi(VND or USD)");
let money=prompt("Mời bạn nhập số tiền cần chuyển đổi")
let numbers;
switch(currency){
    case "VND":
        numbers=money*23000;
        console.log("USD -> VND: "+numbers);
        break;
    case "USD":
        numbers=money/23000;
        console.log("VND -> USD: "+numbers);
        break;
    default:
        console.log("Yêu cầu bạn nhập không hợp lệ");
        break;
}
