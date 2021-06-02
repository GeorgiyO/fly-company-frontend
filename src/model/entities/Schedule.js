import {Observable} from "src/domain/observable";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {APIBuilder} from "src/model/ApiBuilder";

export const API = new APIBuilder("/schedule")
    .get()
    .update()
    .delete()
    .all()
    .add()
    .build();

export class Template extends AbstractTemplate {
    date = Observable.field();
    price = Observable.field();
    plane = Observable.idObj();
    fromAddr = Observable.idObj();
    toAddr = Observable.idObj();
}
