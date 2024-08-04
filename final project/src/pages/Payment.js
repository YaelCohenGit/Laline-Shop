
import { useSelector } from "react-redux"
import { useEffect } from 'react'
export default function Payment() {
    const cart = useSelector((state) => state.cartReducer);
    useEffect(() => {
        alert("Are you sure you want to pay?")
    })
    let sum = 0;
    const calc = cart.map((item) => (
        sum += item.price * item.cartQty
    ))
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, i) => (
                        <tr>
                            <td scope="row">
                                <p>{item.name}</p>
                            </td>
                            <td scope="row">
                                <p>{item.cartQty}</p>
                            </td>
                            <td scope="row">
                                <p>{item.price * item.cartQty}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>{sum} $</h1>
            <button class="btn btn-outline-secondary">pay now</button>
        </>
    )
}