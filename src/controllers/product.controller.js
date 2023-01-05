import Product from "../models/product.js";

export async function createProduct(request, response) {
    try {
        const { name } = request.body;
        const newProduct = await Product.build({ name }).save();
        response.send(newProduct);
    } catch (error) {
        response.status(500).send({
            message: "There was an error while creating a new product",
            error,
        })
    }
}