import React from 'react'
import PortableText from "@sanity/block-content-to-react"
import "./menuItem.css"
function MenuItem({item, category}) {
    console.log(item)
  return (
    <div className="menuItem-wrapper">
        <h2 className="category-title">{category}</h2>
        {item?.map((menuItem, i)=>{ return (
            
          <div className="menuItem-tabs" key={i}>
                <div className="menu-item-content-wrapper">
                  <h3>{menuItem.title}</h3>
                  <p className="menu-item-price">${menuItem?.price}</p>
                </div>
                <hr />
                <div>
                  
                  {menuItem?._rawMealItemDescription ? <PortableText
                    blocks={menuItem?._rawMealItemDescription}

                    className="menu-item-description"
                  />:null}
                </div>
            
           
          </div>
        );
        })}
    </div>
  )
}

export default MenuItem