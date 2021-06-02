import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const API = new APIBuilder("/cashiers")
    .all()
    .add()
    .get()
    .delete()
    .build();

export class Template extends AbstractTemplate {
    login = Observable.field();
    password = Observable.field();
}