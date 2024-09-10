
exports.getProducts = async (req, res) => {

    // fetch products from a random API
    const response = await fetch('http://fakestoreapi.com/products')
    const products = await response.json();
    res.status(200).json(products);
}