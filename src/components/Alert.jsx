import React from 'react';

export default function Alert(props) {
    const capitalise = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    // const alertBtn = () => {
    //     document.getElementById("display").style.display = "none";
    // };

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} id='display' role="alert">
            <strong>{capitalise(props.alert.type)} !</strong> {props.alert.msg}
            <button type="button" className="close"  >
                {/* <span aria-hidden="true">&times;</span> */}
            </button>
        </div>
    );
}
