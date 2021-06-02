import {Input} from "src/view/components/input";

export class AbstractTemplate {

    toInstance() {
        let instance = {};
        Object.keys(this).forEach((k) => {
            instance[k] = this[k].get();
        });
        return instance;
    }

    fromInstance(instance) {
        Object.keys(instance).forEach((k) => {
            if (k === "id") return;
            this[k].set(instance[k]);
        });
        return this;
    }
}