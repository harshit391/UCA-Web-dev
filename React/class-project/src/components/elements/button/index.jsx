import React from "react";

function Button(props) {
    const buttonStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "12px",
    };

    return (
        <button style={buttonStyle} className="btn">
            {props.children}
        </button>
    );
}

export default Button;
