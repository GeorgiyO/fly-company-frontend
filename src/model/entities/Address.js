import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const API = new APIBuilder("/address")
    .get()
    .update()
    .delete()
    .all()
    .add()
    .build();

export class Template extends AbstractTemplate {
    value = Observable.field();
}