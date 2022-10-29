import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        if (word === "danger")
        {
            word = "error";
        }
        const lower = word.toLowerCase(word);
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div div className={`alert alert-${props.alert.type} fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert