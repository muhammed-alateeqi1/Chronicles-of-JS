function calcPrice(price, profit, tax, ads) {
  let price1 = price + profit;
  let price2 = price1 * tax;
  let price3 = price2 + ads;
  document.querySelector(".result").innerHTML = price3;
  console.log(price3);
}

let button = document.getElementById("clcBtn");
button.addEventListener("click", () => {

  let priceValue  = document.getElementById("price").value;
  let profitValue = document.getElementById("profit").value;
  let taxValue    = document.getElementById("tax").value;
  let adsValue    = document.getElementById("ads").value;

  let price  = Number(priceValue);
  let profit = Number(profitValue);
  let tax    = Number(taxValue);
  let ads    = Number(adsValue);

  // clear errors
  document.querySelector('.errPrice').innerHTML  = '';
  document.querySelector('.errProfit').innerHTML = '';
  document.querySelector('.errTax').innerHTML    = '';
  document.querySelector('.errAds').innerHTML    = '';

  if (priceValue.trim() === "") {
    document.querySelector('.errPrice').innerHTML = "Price is required";
    return;
  }

  if (isNaN(price)) {
    document.querySelector('.errPrice').innerHTML = "Invalid Price";
    return;
  }

  if (profitValue.trim() === "") {
    document.querySelector('.errProfit').innerHTML = "Profit is required";
    return;
  }

  if (isNaN(profit)) {
    document.querySelector('.errProfit').innerHTML = "Invalid Profit";
    return;
  }

  if (taxValue.trim() === "") {
    document.querySelector('.errTax').innerHTML = "Tax is required";
    return;
  }

  if (isNaN(tax)) {
    document.querySelector('.errTax').innerHTML = "Invalid Tax";
    return;
  }

  if (adsValue.trim() === "") {
    document.querySelector('.errAds').innerHTML = "Ads is required";
    return;
  }

  if (isNaN(ads)) {
    document.querySelector('.errAds').innerHTML = "Invalid Ads";
    return;
  }

  calcPrice(price, profit, tax, ads);
});

