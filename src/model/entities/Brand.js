import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const BrandAPI = APIBuilder.full("/brand");

export class BrandTemplate extends AbstractTemplate {
    name = Observable.field();
}
