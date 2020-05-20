/*jshint esversion:6*/
const products = [];
exports.getAddProduct = (req, res, next) => 
{
    //sends html to the page
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res)=>
{
    products.push({title: req.body.title});

    //redirect to home screen
    res.redirect('/');
};

exports.getProducts = (req, res, next) => 
{
    res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});
};

