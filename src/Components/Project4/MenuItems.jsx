import React from 'react';

const MenuItems = ({ item }) => {
    return (
        <div className="menu-items mt-5">
            <div className="row">
                {
                    item.map((menuItem, index) => {
                        return (
                            <div className="item4 col-md-4" key={index}>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-4 p-0">
                                            <img src={menuItem.image} className="img-fluid h-100" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body2">
                                                <h5 className="card-title">{menuItem.name}</h5>
                                                <p className="card-text">{menuItem.price}</p>
                                                <p className="card-text">{menuItem.despcription}</p>
                                                <a href="#" className="btn btn-primary">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuItems