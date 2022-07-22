import React from 'react'

const MenuTabs = ({filterMenu, allCatValues}) => {
    return (
        <div className="menu-tabs mt-5">
            <div className="menu-tab d-flex justify-content-around">
                {
                    allCatValues.map((currCat,index)=>{
                        return(
                            <button className="btn btn-warning" key={index} onClick={() => filterMenu(currCat)}>{currCat}</button>
                        )
                    })
                }
                {/* <button className="btn btn-warning" onClick={() => setItem(Menu)}>All</button> */}
                {/* <button className="btn btn-warning" onClick={() => filterMenu('breakfast')}>BreakFast</button>
                <button className="btn btn-warning" onClick={() => filterMenu('Lunch')}>Lunch</button>
                <button className="btn btn-warning" onClick={() => filterMenu('Dinner')}>Dinner</button>
                <button className="btn btn-warning" onClick={() => filterMenu('Evening')}>Evening</button> */}
            </div>
        </div>
    )
}

export default MenuTabs