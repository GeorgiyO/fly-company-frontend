import {APIBuilder} from "src/model/ApiBuilder";

export const PaymentTypeAPI = new APIBuilder("/payment-type")
    .all()
    .build();
