import React, { Component } from 'react'

export default class ChangeGlass extends Component {

    glassList = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        imgURL: "./glassesImage/v8.png",
        name: "FENDI F8500",
        price: 100,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    showGlass = (id) => {
        let glassShow = this.glassList.find(item => item.id === id)
        this.setState({
            imgURL: `${glassShow.url}`,
            name: `${glassShow.name}`,
            price: `${glassShow.price}`,
            desc: `${glassShow.desc}`
        })
    }

    renderGlassList = () => {
        return this.glassList.map(item => {
            return <img className='glass-item col-2 img-fluid' src={item.url} onClick={() => {this.showGlass(item.id)}} alt="" />
        })
    }


    render() {
        return (
            <div className='main container-fluid'>
                <div className="overlay"></div>
                <h3>TRY GLASSES APP ONLINE</h3>

                <div className="avatar">
                    <img src={this.state.imgURL} alt="" />
                    <div className="glassesInfo">
                        <h4>{this.state.name}</h4>
                        <p>{`Price: $${this.state.price}`}</p>
                        <p>{this.state.desc}</p>
                    </div>
                </div>

                <div className="productList">
                    <div className="row">
                        {this.renderGlassList()}
                    </div>
                </div>
            </div>
        )
    }
}
