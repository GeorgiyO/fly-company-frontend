import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";
import {sendRequest} from "src/model/sendRequest";

export const ProductAPI = APIBuilder.full("/product");

ProductAPI.searchByBrandAndModel =
    (brandId, modelId) => sendRequest("GET", `/product/search/${brandId}/${modelId}`)
        .then((response) => response.json());

export class ProductTemplate extends AbstractTemplate {

    idProp = "code";

    available = Observable.field(false);
    availabilityDate = Observable.field();
    price = Observable.field(0.0);
    model = Observable.idObj();
    country = Observable.idObj();
    brand = Observable.idObj();
    specification = Observable.idObj();
}