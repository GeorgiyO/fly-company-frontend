import React from "react";

export function Form({inputs, label, action, buttonLabel}) {
    return (
        <div className={"entity-form"}>
            <h2>{label}:</h2>
            {inputs}
            <button onClick={action}>{buttonLabel}</button>
        </div>
    );
}