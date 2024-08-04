
import { useSelector, useDispatch } from "react-redux"
import { decreaseQty } from "../redux/actions/productsActions"
import { addToCart } from "../redux/actions/cartActions";
export default function Shop() {
    const products = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch();
    return (
        <>
            <div class="p-5 text-center bg-body-tertiary" style={{ "background-color": "rgba(0, 0, 0, 0.6);" }}>
                <h1 class="mb-3">Laline</h1>
                <h4 class="mb-3">Your Dream Gift</h4>
            </div>
            <div>
                <div style={{ "display": "flex", "flex-wrap": "wrap" }}>
                    {products.map((item, i) => (
                        <div className="card" style={{ "width": "18rem", "marginRight": "auto", "marginLeft": "auto", "marginBottom": "5px", "borderColor": "rgba(202, 200, 200, 0.342)", "marginTop": "1.5rem" }}>
                            <img src={item.image} className="card-img-top"></img>
                            <div className="card-body" style={{ "background-color": "rgba(202, 200, 200, 0.342)" }}>
                                <p className="card-text">
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>{item.price}$</p>
                                    <p>In stock:{item.qty}</p>
                                </p>
                                <button class="btn btn-outline-secondary" onClick={(e) => { e.preventDefault(); dispatch(decreaseQty(item)); dispatch(addToCart(item)); }}>add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}


