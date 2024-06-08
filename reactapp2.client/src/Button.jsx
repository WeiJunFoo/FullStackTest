import React from 'react'
import { useNavigate } from "react-router-dom"

function Button(props) {
    var btn_state;
    if (props.type == "Add") {
        btn_state = "btn-primary";
    }
    else if (props.type == "Edit") {
        btn_state = "btn-dark";
    }
    else {
        btn_state = "btn-danger";
    }

    const navigate = useNavigate();

    const gotToFormPage = () => {
        navigate("/form/" + props.type);
    }
    const handleEditClick = (id) => {
        var endpoint = props.type + (props.type == "Add" ? "" : "/"+id)
        navigate(endpoint);
    };

    return (
        <button className={"btn " + btn_state} onClick={() => handleEditClick(props.id)} >{props.type}</button>
    )
}

export default Button;