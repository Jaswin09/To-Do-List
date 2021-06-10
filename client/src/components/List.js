import React from 'react';
import Todo from './todo.js'
const List=({list,removetodolistprop,edittodolistprop})=>{
    const renderedlist = list.map(
            (item)=>
            <Todo title={item.title} 
            key={item.title} 
            completed={item.completed} 
            removetodoitemprop={(e)=>removetodolistprop(item._id)}
            edittodoitemprop={(updateditem)=>edittodolistprop(item._id,updateditem)}
            />
        )
    return(
        <div className="ui grid center aligned">
            {renderedlist}
        </div>
    )
}

export default List;