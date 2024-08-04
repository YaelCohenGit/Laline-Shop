
export const decreaseQty = (product) => {
    return {
        type: "DECREASEQTY",
        product
    };
};
export const addQty = (product) => {
    return {
        type: "ADDQTY",
        product
    };
};
export const addSomeQty = (product) => {
    return {
        type: "ADDSOMEQTY",
        product
    };
};