import React from "react";

export function Entry({left, right}) {
    return (
        <div className={"entry"}>
            <div className={"left"}>{left}</div>
            <div className={"right"}>{right}</div>
        </div>
    );
}

Entry.of = (left, right) => <Entry left={left} right={right}/>;