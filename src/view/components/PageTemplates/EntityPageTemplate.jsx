import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {handleApiError} from "src/view/components/apiErrorHandler";
import {useRequest} from "src/model/sendRequest";

export function Page({showDelete = false, showUpdate = false, API, toJsx, url}) {

    const {id} = useParams();
    const history = useHistory();

    const deleteAction = () => {
        API.delete(id)
            .then(() => {
                history.push(url)
            })
            .catch((error) => {
                handleApiError("Can't delete", error)
            });
    }

    const updateAction = () => {
        console.log(url);
        history.push(url + "/update/" + id);
    }

    const [entity, pending, error] = useRequest(API.get, id);

    if (error) handleApiError("Can't get entity", error);
    if (pending) return "...loading";

    return (
        <div>
            {toJsx(entity)}
            {showDelete && <button className={"red"} onClick={deleteAction}>Delete</button>}
            {showUpdate && <button onClick={updateAction}>Update</button>}
        </div>
    );
}