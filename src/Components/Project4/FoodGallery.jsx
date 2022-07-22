import React,{ useState } from 'react';
import Menu from './menu';
import MenuItems from './MenuItems';
import MenuTabs from './MenuTabs';

const FoodGallery = () => {

    const allCatValues = ["All", ...new Set(Menu.map((currElem)=>{return currElem.category})) ]

    const [item, setItem] = useState(Menu);
    const [catItems,setCatItems] = useState(allCatValues);

    const filterMenu = (catIem) => {
        if(catIem === 'All'){
            return setItem(Menu)
        }

        const updatedElem = Menu.filter((curElem) => {
            return curElem.category === catIem
        })
        setItem(updatedElem)
    }

    return (
        <div className='container'>
            <h1 className="text-center mt-5">Food Gallery</h1>

                <MenuTabs filterMenu={filterMenu} allCatValues={catItems} />

                <MenuItems item={item} />
        </div>
    )
}

export default FoodGallery