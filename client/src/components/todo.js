import React,{useState} from 'react';

const Todo=({title,completed,removetodoitemprop,edittodoitemprop})=>{
    const [isEditing,setIsEditing]=useState(false);
    const [value,setValue]=useState(title);
    const [tempvalue,setTempvalue]=useState(title);
    const [completedinput,setCompleted]=useState(completed);

    const handledoubleclick =()=>{
        setIsEditing(true);
    };

    const handleinputkeydown=(e)=>{
        const key = e.keyCode;
        if(key == 13){
            edittodoitemprop({title:tempvalue});
            setValue(tempvalue);
            setIsEditing(false);
        }
        else if(key == 27){
            setTempvalue(value);
            setIsEditing(false);
        }
    };

    const handleinputchange=(e)=>{
        setTempvalue(e.target.value);
    }

    const handlebuttonclick=()=>{
        setCompleted((oldcompleted)=>{
            const newstate= !oldcompleted
            edittodoitemprop({completed:newstate});
            return newstate;
        });
    }
    return(
        <div className="row">
            {
            isEditing?
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input 
                        onKeyDown={handleinputkeydown}
                        autoFocus={true}
                        onChange={handleinputchange}
                        value={tempvalue}/>
                    </div>
                </div>:
                <React.Fragment>
                    <div className="column seven wide" onDoubleClick={handledoubleclick}>
                        <h2 className={"ui header" + (completedinput ? " green" : "")}>{value}</h2>
                    </div>
                    
                    <div className="column one wide">
                        <button className={"ui button circular icon" + (completedinput ? " blue" : " green")} onClick={handlebuttonclick}>
                            <i className="white check icon"></i>
                        </button>
                    </div>

                    <div className="column one wide">
                        <button className="ui button circular icon red" onClick={removetodoitemprop}><i className="white remove icon"></i></button>
                    </div>
                </React.Fragment>
            }    
        </div>
    )
}

export default Todo;
