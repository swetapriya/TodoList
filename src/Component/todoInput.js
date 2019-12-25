import React from "react";

function TodoInput(props) {
    const {item, handleChange, haldleSubmit, editItem} = props;
    return(
        <div className="card card-body my-3">
            <form onSubmit = {haldleSubmit}>
                <div className="input-group">
                    <div className = "input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book" />
                        </div>
                    </div>
                    <input 
                        type="text"
                        className ="form-control text-capitalize"
                        placeholder="add a todo item"
                        value = {item}
                        onChange = {handleChange}
                    />
                </div>
                <button type="submit" className={editItem? "btn btn-block text-capitalize btn-success mt-3":
                                                    "btn btn-block text-capitalize btn-primary mt-3"}>
                    {editItem? "edit Item":"add item"}
                </button>
            </form>
        </div>
    )
}

export default TodoInput;
