import React,{useState} from 'react';

const Form=({addtodo})=>{
    const [inputvalue,setInputvalue] = useState("");
    const handleinputchange=(e)=>{
        setInputvalue(e.target.value);
    }
    const handleforminput=(e)=>{
        e.preventDefault();
        if(inputvalue.trim() == "")return;
        addtodo({title: inputvalue,completed: false});
        setInputvalue("");
    };
    return(
        <form className="ui form" onSubmit={handleforminput} >
            <div className="ui grid center aligned">
                <div className="row">
                    <div className ="column seven wide">
                        <input type="text" 
                        placeholder="Enter Your Note..."
                        value={inputvalue}
                        onChange={handleinputchange}/>
                        
                    </div>
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="plus icon white"></i></button>
                    </div>
                </div>
            </div>
            
        </form>
    )
}

export default Form;