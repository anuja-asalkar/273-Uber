var mysql=require('mysql');


exports.signup=function(req,res){
	
	
	var email=req.param("email");
	var pwd=req.param("pwd");
	
	var first_name=req.param("first_name");
	var last_name=req.param("last_name");
	
	console.log(first_name);
	console.log(last_name);
	
	var mobile=req.param("mobile");
	var card_number=req.param("card_number");
	var card_code=req.param("card_code");
	//var card_expiration_month=req.param("card_expiration_month");
	//var card_expiration_year=req.param("card_expiration_year");
	//var billing_zip=req.param("billing_zip");
	//var promotion_code=req.param("promotion_code");
	var json_responses;

	var conn=mysql.createConnection({
		host :'localhost',
		user :'root',
		password :'',
		database :'uber',
		port :3306
	});
	
	conn.connect();
	console.log("after connecting");
	
	var qu = conn.query("insert into customer values('null','"+email+"','"+pwd+"','"+first_name+"','"+last_name+"','"+mobile +"','"+card_number+"','"+card_code+"')", function(err, rows,fields){
		if(err){
			console.log(err);
			return;
			}
		
		//json_responses = {"statusCode" : 200};
		res.render('welcome',{"username":email})
	});
	conn.end();
}


exports.login=function(req,res)
{
	var email = req.param("email");
	var pwd = req.param("pwd");
	
	var conn=mysql.createConnection({
		host :'localhost',
		user :'root',
		password :'',
		database :'uber',
		port :3306
	});
	
	conn.connect();
	console.log("after connecting");
	
	var qu = conn.query("select * from customer where email='"+email+"'", function(err, rows,fields){
		if(err){
			console.log(err);
			return;
			}
		
	var first_name=rows[0].firstName;
	console.log("first name:"+first_name);
		
})

}

