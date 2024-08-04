import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from "react-redux"
import { decreaceFromCart, deleteFromCart, addToCart } from "../redux/actions/cartActions";
import { decreaseQty, addQty, addSomeQty } from "../redux/actions/productsActions"
import { useNavigate } from "react-router-dom";

export default function CartDetails() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let sum = 0;
  const calc = cart.map((item) => (
    sum += item.price * item.cartQty
  ))
  const PayAlert = ()=>{
    alert("Are you sure you want to pay?");
}
  return (
    <>
      <section class="h-100 h-custom" style={{ "background-color": "#d2c9ff;" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div class="card card-registration card-registration-2" style={{ "border-radius": "15px;" }}>
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-8">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                        </div>
                        <table>
                            {cart.map((item) => ( 
                              <tr class="row mb-4 d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                
                                  <img
                                    src={item.image}
                                    class="img-fluid rounded-3">
                                  </img>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                  <h6 class="text-muted">{item.name}</h6>
                                  <h6 class="text-black mb-0">{item.description}</h6>
                                </div>
                                
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <button class="btn btn-link px-2" style={{"color":"black","marginTop":"-15px"}} onClick={(e) => { e.preventDefault(); dispatch(addQty(item)); dispatch(decreaceFromCart(item)); }}>-</button>
                                  <p>{item.cartQty}</p>
                                  <button class="btn btn-link px-2" style={{"color":"black","marginTop":"-15px"}} onClick={(e) => { e.preventDefault(); dispatch(decreaseQty(item)); dispatch(addToCart(item)); }}>+</button>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 class="mb-0"> $ {item.price} * {item.cartQty}</h6>
                                </div>
                                <button class="rounded-circle" className="btn btn-danger"  onClick={(e) => { e.preventDefault(); dispatch(addSomeQty(item)); dispatch(deleteFromCart(item)); }}>❌</button>
                              </tr>
                            ))}
                        </table>
                        <button class="btn btn-outline-secondary" onClick={() => navigate("/")}>Back to shop</button>
                      </div>
                    </div>
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <div class="d-flex justify-content-between mb-4">
                        </div>
                        <h5 class="text-uppercase mb-3">Shipping</h5>
                        <div class="mb-4 pb-2">
                          <select class="select">
                            <option value="1">Standard-Delivery</option>
                            <option value="2">No Shipping</option>
                          </select>
                        </div>
                        <div class="d-flex justify-content-between mb-5">
                          <h5 class="text-uppercase">Total price</h5>
                          <h5>$ {sum}</h5>
                        </div>
                        <button onClick={() => navigate("/payment")} type="button" class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark">Confirm</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}