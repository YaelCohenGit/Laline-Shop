
export const addToCart = (newProduct) => {
    return {
        type: "ADDTOCART",
        newProduct
    };
};
export const decreaceFromCart = (product) => {
    return {
        type: "DECREACEFROMCART",
        product
    };
};
export const deleteFromCart = (product) => {
    return {
        type: "DELETEFROMCART",
        product
    };
};