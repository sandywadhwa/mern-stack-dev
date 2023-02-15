const employees = [
	{ name: "Lakshya Sharma", age: 30 },
	{ name: "Suhas Reddy", age: 34 },
	{ name: "Jyothika Sardana", age: 25 },
	{ name: "Lakshmi Prasanna", age: 50 }
];

const employee = { 
	name: "Jyothika Sardana", 
	age: 50, 
	education:[
		{degree : 'BTech', year : 1995},
		{degree : 'XII', year : 1991}
	],
	display : function(){
		console.log(`I am ${this.name} with age ${this.age}`);
	},
	displayFormatted: function(){
		console.log("==============================");
		this.display();
		console.log("==============================");
	}
};
employee.displayFormatted();
console.log(employee.education);
