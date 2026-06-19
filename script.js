let total = 0;
let count = 1;

/* PRODUCT → PRICE MAP (same as your original) */
const productPriceMap = {
   "Special Mutton Thali":379,
"Special Chicken Thali":319,
"Chicken Tangadi Thali":249,
"Special Fish Thali":349,
"Container":10,
"Special Egg Thali":199,
"Chicken Thali":200,
"Mutton Thali":250,
"Fish Thali":200,
"Mutton Kolhapuri":229,
"Mutton Butter Masala":249,
"Mutton Tawa Masala":249,
"Mutton Malwani Plate":250,
"Chicken Kadhai":229,
"Chicken Hyderabadi":249,
"Chicken Lasooni":249,
"Butter Chicken":249,
"Chicken Kolhapuri":229,
"Chicken Tangadi Masala":179,
"Gharkul Special Chicken":299,
"Fish Curry":150,
"Fish Kadak Fry":159,
"Fish Alni Fry":149,
"Shev Bhaji":139,
"Soya Curry":129,
"Tawa Besan":149,
"Pital Besan":129,
"Shevga Masala":129,
"Shevga Curry":129,
"Methi Masala":129,
"Methi Fry":160,
"Lasooni Methi":139,
"Butter Roti":20,
"Tawa Paratha":25,
"Plain Naan":30,
"Veg Manchow Soup":89,
"Chicken Soup":49,
"Mutton Soup":59,
"Veg Manchurian":129,
"Gobi Manchurian":109,
"Paneer Manchurian":169,
"Paneer Dragon":199,
"Veg Crispy":139,
"Gobi 65":119,
"Paneer 65 Kadak":179,
"Paneer 65 Liqued":199,
"Paneer Chilli":179,
"Paneer Crispy":189,
"Soya 65 Kadak":99,
"Soya Manchurian":129,
"Chicken Green Chilli":269,
"Chicken Lollypop Half [3 Pieces]":149,
"Chicken Lollypop Full [6 Pieces]":299,
"Chicken 65":149,
"Chicken Chilli":189,
"Chicken Dragon":229,
"Chicken Roast":179,
"Chicken Fry":199,
"Chicken Ukkad":169,
"Chicken Tangdi Tandoor":100,
"Mutton Fry":229,
"Mutton Ukkad":229,
"Mutton Roast":229,
"Paneer Masala":169,
"Paneer Butter Masala":179,
"Paneer Tikka Masala":199,
"Paneer Tawa Masala":199,
"Paneer Kolhapuri":189,
"Paneer Lababdar":199,
"Paneer Toofani":199,
"Paneer Angara":199,
"Paneer Kadai":189,
"Paneer Handi":189,
"Paneer Baby Corn Masala":199,
"Paneer Matar Masala":189,
"Kaju Kari":189,
"Kaju Masala":189,
"Palak Paneer":179,
"Plain Palak":139, 
"Veg Kolhapuri":169,
"Veg Toofani":179,
"Baingan Masala":149,
"Baingan Kari":139,
"Mushroom Kari":139,
"Mushroom Masala":149,
"Veg Hyderabadi":99,
"Dal Fry":129,
"Dal Tadka":129,
"Butter Dal":169,
"Jeera Dal":139,
"Tandoor Roti":15,
"Butter Naan":40,
"Garlic Naan":45,
"Chapati":20,
"Veg Biryani":149,
"Chicken Biryani Full":199,
"Mutton Biryani Full":239,
"Chicken Biryani Half":129,
"Mutton Biryani Half":139,
"Ice Cream":99,
"Buttermilk":20,
"Mineral Water":20,
"Fish Fry":249,
"Fish Masala":319,
"Jawar Roti":20,
"Bajari Roti":20,
"Mutton Malwani Handi Half":700,
"Mutton Malwani Handi Full ":1299 ,
"Wheat Roti":20, 
"chicken handi Half":429, 
"Chicken handi Full":799,
"Chicken Malwani Handi Full":899,
"Chicken Malwani handi Half":499,
"Chicken Tikka Masala":259, 
"Chicken Moghalie":279, 
"Chicken Malwani [1 Plate":249,
"Chicken Tawa":259,
"Chicken Curry":179 ,
"Mutton Handi Half":649, 
"Mutton Handi Full":1199, 
"Mutton Masala":240, 
"Dal Kholapuri ":129,
"butter Milk":25,
"Coldrinks ":25,
"Plain Butter Milk":25,
"Plain Rice Half ":55 ,
"Plain Rice Full ":100 ,
"Biryani Rice Full":129,
"Biryani Rice Half ":69 ,
"Green Piece Pulav":149 ,
"Veg Pulav ":159,
"Curd Rice":129,
"Extra Rasaa Plate":60,
"Extra Grevy Plate":70,
"Egg Omlate ":80,
"Egg Burgi":80,
"Egg Curry":110,
"Soup Watti":20,
"Rasaa Watti":20,
"Curd Watti ":25,
"Tadka Watti":30,



    // 🔹 You can keep your full list here
};

/* LOAD PRODUCT LIST */
const productList = document.getElementById("productList");
Object.keys(productPriceMap).forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    productList.appendChild(option);
});

/* AUTO RATE */
document.getElementById("productName").addEventListener("input", function () {
    const rateInput = document.getElementById("productRate");
    rateInput.value = productPriceMap[this.value] || "";
});

/* DATE & TIME */
function updateDateTime() {
    document.getElementById("dateTime").innerText =
        "Date & Time: " + new Date().toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);

/* ADD PRODUCT */
function addProduct() {
    const name = productName.value.trim();
    const rate = Number(productRate.value);
    const qty = Number(productQty.value);

    if (!name || rate <= 0 || qty <= 0) {
        alert("Enter valid product details");
        return;
    }

    const amount = rate * qty;
    total += amount;

    const row = billBody.insertRow();
    row.innerHTML = `
        <td>${count++}</td>
        <td>${name}</td>
        <td>${rate}</td>
        <td>${qty}</td>
        <td>${amount}</td>
        <td class="no-print">
            <button class="remove-btn" onclick="removeItem(this, ${amount})">X</button>
        </td>
    `;

    totalAmount.innerText = total;

    productName.value = "";
    productRate.value = "";
    productQty.value = "";
}

/* REMOVE ITEM */
function removeItem(button, amount) {
    const row = button.parentElement.parentElement;
    row.remove();
    total -= amount;
    totalAmount.innerText = total;
}

/* PRINT */
function printBill() {
    window.print();
}
