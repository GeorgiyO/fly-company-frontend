import {AbstractTemplate} from "src/model/AbstractTemplate";
import {APIBuilder} from "src/model/ApiBuilder";
import {Observable} from "src/domain/observable";

export const API = new APIBuilder("/planes")
    .get()
    .update()
    .delete()
    .all()
    .add()
    .build();

export class Template extends AbstractTemplate {
    description = Observable.field();
}
