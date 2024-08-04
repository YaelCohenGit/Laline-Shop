const cart = [];
export const cartReducer = (state = cart, actions) => {
    const new_state = [...state];
    switch (actions.type) {
        case "ADDTOCART":
            let flag = 0;

            new_state.map((element, i) => {
                if (element === actions.newProduct) {
                    flag = 1
                }
            })
            if (actions.newProduct.qty > 0) {
                actions.newProduct.cartQty += 1
            }
            if (!flag) {
                actions.newProduct.cartQty = 1;
                return [...new_state, actions.newProduct];
            }
            return new_state
        case "DECREACEFROMCART":
            actions.product.cartQty -= 1;
            if (actions.product.cartQty == 0) {
                return new_state.filter((product) => product.id !== actions.product.id)
            }
            return new_state
        case "DELETEFROMCART":
            return new_state.filter((product) => product != actions.product);
    }
    return state;
}