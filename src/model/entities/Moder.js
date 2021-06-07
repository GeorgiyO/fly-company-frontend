import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const ModerAPI = new APIBuilder("/moder")
    .all()
    .add()
    .get()
    .delete()
    .build();

export class ModerTemplate extends AbstractTemplate {
    login = Observable.field();
    password = Observable.field();
}