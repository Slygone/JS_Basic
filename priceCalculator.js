var phonePrice = prompt("Please enter the price of the phone: ");
var taxRate = prompt("Please enter the tax rate: ");
var totalPhonePrice = (phonePrice * 30);
var totalPrice = ((taxRate / 100) * totalPhonePrice) + totalPhonePrice;
console.log(totalPrice);