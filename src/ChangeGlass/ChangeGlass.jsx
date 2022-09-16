import React, { Component } from 'react'
import dataGlassList from './dataGlasses.json'

export default class ChangeGlass extends Component {

    glassList = dataGlassList
  
    state = {
        imgURL: "./glassesImage/v8.png",
        name: "FENDI F8500",
        price: 100,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    showGlass = (item) => {
        this.setState({
            imgURL: `${item.url}`,
            name: `${item.name}`,
            price: `${item.price}`,
            desc: `${item.desc}`
        })
    }

    renderGlassList = () => {
        return this.glassList.map((item, index) => {
            return <img key={`glasses-${index}`} className='glass-item col-2 img-fluid' src={item.url} onClick={() => {this.showGlass(item)}} alt="" />
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
