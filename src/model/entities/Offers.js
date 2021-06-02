import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const API = new APIBuilder("/offers")
    .all()
    .add()
    .get()
    .delete()
    .build();

export class Template {

    place = Observable.idObj();
    passenger = Reflect.construct(class extends AbstractTemplate {
        firstName = Observable.field();
        secondName = Observable.field();
        patronymic = Observable.field();
        docType = Observable.field();
        docNumber = Observable.field();
    }, []);

    toInstance() {
        return {
            place: this.place.get(),
            passenger: this.passenger.toInstance()
        };
    }

    fromInstance(instance) {
        this.place.set(instance.place);
        this.passenger.fromInstance(instance.passenger);
    }
}