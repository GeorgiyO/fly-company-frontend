import React, {useMemo} from "react";
import {Observable} from "src/domain/observable";
import {handleApiError} from "src/view/components/apiErrorHandler";
import {useRequest} from "src/model/sendRequest";

export function EntitySelect({
    label,
    valueRef,
    listRequest,
    toShort
}) {

    const [entities, pending, error] = useRequest(listRequest);
    const [value, setValue] = React.useState(false);

    if (error) handleApiError("Can't get list", error);
    if (pending) return label + " ...loading";

    if (entities.length === 0) {
        handleApiError("Empty " + label + " list", {
            code: 500,
            type: "Bad data"
        });
        return (
            <div className={"select-container"}>
                <p>{label}: error</p>
            </div>
        )
    }

    const options = (entities.map((entity, i) => (
        <option key={i} value={JSON.stringify(entity)}>{toShort(entity)}</option>
    )));

    if (!value) {
        setValue(JSON.stringify(entities[0]));
        valueRef.set(entities[0]);
    }

    const setRefValue = (json) => valueRef.set(JSON.parse(json));

    const handleSelect = (e) => {
        setRefValue(e.target.value);
        setValue(e.target.value);
    }

    return (
        <div className={"select-container"}>
            <p>{label}:</p>
            <select value={value} onChange={handleSelect}>
                {options}
            </select>
        </div>
    )
}