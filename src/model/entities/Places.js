import {APIBuilder} from "src/model/ApiBuilder";
import {sendRequest} from "src/model/sendRequest";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

const url = "/places";
export const API = new APIBuilder(url)
    .get()
    .all()
    .delete()
    .add()
    .build();

API.free = () => sendRequest("GET", url + "/free").then((response) => response.json());

console.log(API);

export class Template extends AbstractTemplate {
    total = Observable.field();
    free = Observable.field();
    scheduleItem = Observable.idObj();
}
