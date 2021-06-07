import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {useRequest} from "src/model/sendRequest";
import {handleApiError} from "src/view/components/apiErrorHandler";
import {Form} from "src/view/components/entity/Form";

export function Update({API, Template, url,  Inputs, label, toId = (entity) => entity.id}) {

    const history = useHistory();
    const {id} = useParams();

    const [entity, pending, error] = useRequest(API.get, id);

    if (error) handleApiError("Can't get entity", error);
    if (pending) return "...loading";

    const template = Reflect.construct(Template, []).fromInstance(entity);

    const update = () => {
        API.update(id, template.toInstance())
            .then((entity) => {
                history.push(url + "/" + toId(entity))
            })
            .catch((error) => {
                handleApiError("Can't update", error);
            });
    };

    return Form({
        inputs: Inputs({template}),
        label,
        action: update,
        buttonLabel: "Update"
    });
}
