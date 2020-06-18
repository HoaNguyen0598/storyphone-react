import React,{Component} from 'react';
import Title from '../Product/Title';

export default class CartEmpty extends Component{
    render(){
    return( 
        <Title name="your cart is currently empty"/>
    )
    }
}