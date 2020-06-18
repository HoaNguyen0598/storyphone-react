import React, {Component} from 'react';
import {ProductConsumer} from '../context/context';
import {link,Container, Link} from 'react-router-dom';
import './style.scss';
class Modal extends Component{
    render(){
        return(
           <ProductConsumer>
               {(value) =>{
                   const {modalOpen,closeModal} = value;
                   const {price,title,img} = value.modalProduct;
                   if(!modalOpen){
                       return null;
                   }
                   else{
                       return(
                            <div className="tabAddItem">
                             <div className="container>">
                                <div className="row">
                                    <div id="modal" className="modal-add-item text-center text-capitalize py-2 mx-auto col-md-9 col-sm-8 col-8">
                                        <h5>item added to the cart</h5>
                                        <img src={img}  className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : ${price}</h5>
                                        <Link to="/">
                                            <button
                                                onClick={()=>closeModal()}
                                                className="btn-item">
                                                Store
                                            </button>
                                        </Link>
                                        <Link to="/cart">
                                            <button 
                                                className="btn-add-item"
                                                cart
                                                onClick={()=>closeModal()}>
                                                    Go To Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>  
                              </div>                                
                            </div>
                       )
                   }
               }}
           </ProductConsumer>
        )
    }
}
export default Modal;