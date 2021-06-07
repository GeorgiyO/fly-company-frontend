import React from "react";
import {useHistory} from "react-router-dom";
import {handleApiError} from "src/view/components/apiErrorHandler";
import {Form} from "src/view/components/entity/Form";

export function Add({API, Template, url, Inputs, label, toId = (entity) => entity.id}) {

    const history = useHistory();
    const template = Reflect.construct(Template, []);

    const add = () => {
        API.add(template.toInstance())
            .then((entity) => {
                history.push(url + "/" + toId(entity))
            })
            .catch((error) => {
                handleApiError("Can't add", error);
            });
    }

    return Form({
        inputs: Inputs({template}),
        label,
        action: add,
        buttonLabel: "Add"
    });
}
