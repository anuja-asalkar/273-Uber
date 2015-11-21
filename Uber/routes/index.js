
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('customer_login', { title: 'Express' });
};