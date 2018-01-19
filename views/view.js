var btn = document.getElementById('btn');

btn.addEventListener('click',function(){

var f = document.createElement("fieldset");

var productName = document.createElement("input"); //input element, product name
productName.setAttribute('type',"text");
productName.setAttribute('name',"productName");

var price = document.createElement('input');
price.setAttribute('type',"number");
price.setAttribute('name',"price");

var gst = document.createElement('input');
gst.setAttribute('type',"number");
gst.setAttribute('name',"gst");

var quantity = document.createElement('input');
quantity.setAttribute('type',"number");
quantity.setAttribute('name',"quantity");

var discount = document.createElement('input');
discount.setAttribute('type',"number");
discount.setAttribute('name',"discount");

var spotDiscount = document.createElement('input');
spotDiscount.setAttribute('type',"number");
spotDiscount.setAttribute('name',"spotDiscount");

f.appendChild(productName);
f.appendChild(price);
f.appendChild(gst);
f.appendChild(quantity);
f.appendChild(discount);
f.appendChild(spotDiscount);

var form = document.getElementById('details');
form.insertBefore(f, btn);
})

