console.log("Product Page JS Loaded")

fetch('/api/products')
	.then(function(res){
		console.log(res.json());
		console.log(res.data);
	})
	.then(function(d){
		// console.log(d);
	})
	.catch(function(err){
		alert(err);
	})
	.finally(function(){
		console.log("Finaly");
	});