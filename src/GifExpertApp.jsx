import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
            const [categories,setcategories]= useState(['One Punch']);
            const onAddCategory =(newCategory)=>{
            if(categories.includes(newCategory)) return;
            setcategories([...categories, newCategory]);
// setcategories([...categories, 'Xmadrid']);
}

  return (
            <div>
                <h1>GifExpertApp</h1>
                
                <AddCategory
                onNewCategory={ event => onAddCategory(event)}
                />

                {
                categories.map( (category)=> (
                    <GifGrid key={category} 
                    category={category} />

                        ))
                }
                     
            </div>

  )
}

