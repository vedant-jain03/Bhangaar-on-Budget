import React, { useState, useContext } from 'react'
import "../style.css"
import axios from 'axios'
import { userContext } from '../App'

const product = [
    {
        'img': 'https://i.pinimg.com/736x/19/c7/8a/19c78ab5f529108b1615f8ffc04dfb9a.jpg',
        'title': 'Guitar Potted Houseplants',
        'desc': 'Transform a scrap guitar to Hold your things.',
        'price': '100.00'
    },
    {
        'img': 'https://i.pinimg.com/564x/66/55/74/6655744e52907e1f6d9d8a2a977ed22e.jpg',
        'title': 'Holders',
        'desc': 'Pen holder in very artistic way. It looks nice at your desk.',
        'price': '150.00'
    },
    {
        'img': 'https://i.pinimg.com/564x/d7/20/58/d7205821018b5f011dc49d23e1a24e86.jpg',
        'title': 'Designer Tea Pot',
        'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, dicta perferendis modi laudantium animi laborum iste necessitatibus deserunt odit voluptatum. Optio blanditiis consequatur vero. Eaque, velit aliquid. Et, sit corrupti!',
        'price': '80.00'
    },
    {
        'img': 'https://i.pinimg.com/564x/76/0d/cd/760dcd3548c2b000ada833943875c432.jpg',
        'title': 'Minions Water Bottles',
        'desc': 'Make your kids happy and gift this water bottles to them at very low cost. Made from scrap bottles.',
        'price': '50.00'
    },
    {
        'img': 'https://i.pinimg.com/236x/64/ca/c3/64cac3656be1fe89ea3becfd4bcb6b9a.jpg',
        'title': 'Plant Holder',
        'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, dicta perferendis modi laudantium animi laborum iste necessitatibus deserunt odit voluptatum. Optio blanditiis consequatur vero. Eaque, velit aliquid. Et, sit corrupti!',
        'price': '100.00'
    },
]

function Product({ item }) {
    const {userdetails} = useContext(userContext)
    const buy = async () => {
        const url = item.img;
        const title = item.title;
        const desc = item.desc;
        const price = item.price;
        const getresult = window.confirm('Are you sure want to buy this?');
        if (getresult) {
            const donate_item = await axios.post('https://bhangaar-api.herokuapp.com/donate_scrap', { url, donate_to: title, location: desc, phone: 0, date:price , email: userdetails.email })
            if (donate_item.status === 201) {
                alert('Thanks for Buying, your order is being placed!');
            }
        }
    }
    return (
        <div className="product_card">
            <img src={item.img} alt="" />
            <div className="down">
                <h3 className="prod_title">{item.title}</h3>
                <p className="prod_desc">{item.desc}</p>
                <div className="wrap">
                    <h2 className="prod_price" style={{"color":"black"}}>{item.price} Rs.</h2>
                    <button className="secondary-button-two" onClick={buy}>Buy</button>
                </div>
            </div>
        </div>
    )
}

function Products() {
    return (
        <div>
            <center><h1>Our Products</h1></center>
            <div className="prod_wrapper">
                {
                    product.map((item) => (
                        <Product item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products
