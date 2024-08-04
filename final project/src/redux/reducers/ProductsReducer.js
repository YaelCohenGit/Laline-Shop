import img1 from "../../images/a.jpg"
import img3 from "../../images/main-gallery-img-2016-03-10-10-31-40.jpg"
import img5 from "../../images/cherryblossom567x618-1640088249875.jpg"
import img10 from "../../images/frozenpear567x618-1640088020931.jpg"
import img12 from "../../images/h.jpg"
import img13 from "../../images/i.jpg"
import img14 from "../../images/j.jpg"
import img15 from "../../images/k.jpg"
import img16 from "../../images/l.jpg"
import img18 from "../../images/m.jpg"
import img19 from "../../images/musk567x618-1640087993321.jpg"
import img20 from "../../images/n.jpg"
import img21 from "../../images/o.jpg"
import img22 from "../../images/ocean567x618-1640088209607.jpg"
import img23 from "../../images/p.jpg"
import img24 from "../../images/peonygardenia567x618-1640088059428.jpg"
import img25 from "../../images/q.jpg"
import img26 from "../../images/r.jpg"
import img27 from "../../images/w.jpg"
import img28 from "../../images/t.jpg"
import img29 from "../../images/u.jpg"
import img31 from "../../images/x.jpg"
import img32 from "../../images/y.jpeg"
import img30 from "../../images/vanillapinkpepper567x618-1640088100428.jpg"

const products = [
    { id: "100", name: "Body Oil", qty: 40, image: img1, price: 98, description: "body oil ", cartQty: 1 },
    { id: "101", name: "Gift Package", qty: 45, image: img3, price: 150, description: "Violet Amber Body Soufle", cartQty: 1 },
    { id: "102", name: "Gift Package", qty: 45, image: img5, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "103", name: "Gift Package", qty: 45, image: img10, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "104", name: "Gift Package", qty: 45, image: img12, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "105", name: "Gift Package", qty: 45, image: img13, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "106", name: "Gift Package", qty: 45, image: img14, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "107", name: "Gift Package", qty: 45, image: img15, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "108", name: "Gift Package", qty: 45, image: img16, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "109", name: "Gift Package", qty: 45, image: img18, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "110", name: "Gift Package", qty: 45, image: img19, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "111", name: "Gift Package", qty: 45, image: img20, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "112", name: "Gift Package", qty: 45, image: img21, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "113", name: "Gift Package", qty: 45, image: img22, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "114", name: "Gift Package", qty: 45, image: img23, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "115", name: "Gift Package", qty: 45, image: img24, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "116", name: "Gift Package", qty: 45, image: img25, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "117", name: "Gift Package", qty: 45, image: img26, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "118", name: "Gift Package", qty: 45, image: img27, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "119", name: "Gift Package", qty: 45, image: img28, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "120", name: "Gift Package", qty: 45, image: img29, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "121", name: "Gift Package", qty: 45, image: img30, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "122", name: "Gift Package", qty: 45, image: img31, price: 150, description: "Stunning Gift Package", cartQty: 1 },
    { id: "123", name: "Gift Package", qty: 45, image: img32, price: 150, description: "Stunning Gift Package", cartQty: 1 }



];
export function productsReducer(state = products, actions) {
    switch (actions.type) {
        case "DECREASEQTY":
            const new_state = [...state];
            if (actions.product.qty > 0)
                actions.product.qty -= 1;
            alert("The item was added successfully")
            return new_state;

        case "ADDQTY":
            actions.product.qty += 1;
            return state;
        case "ADDSOMEQTY":
            actions.product.qty += actions.product.cartQty;
            return state;
    }
    return state;
}
