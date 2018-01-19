let express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(express.static(__dirname +'/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.sendFile("index.html")
})

app.get("/api", function(req, res){
	res.json({message: "Hello World"})
})
app.post("/invoice", function(req, res){
	let name = req.body.productName,
	    price = req.body.price,
	    gst   = req.body.gst,
	    discount = req.body.discount,
	    quantity = req.body.quantity,
	    spotDiscount = req.body.spotDiscount;
	console.log(req.body);
    res.render('invoice.ejs',{name: name, price: price, gst: gst, discount: discount, quantity: quantity, spotDiscount: spotDiscount})
})

app.listen(port, function(){
	console.log('APP IS RUNNING ON PORT :' + port)
})