export class AbstractTemplate {

    idProp = "id";

    toInstance() {
        let instance = {};
        Object.keys(this).forEach((k) => {
            if (k === "idProp") return;
            instance[k] = this[k].get();
        });
        return instance;
    }

    fromInstance(instance) {
        console.log(this, instance);
        Object.keys(instance).forEach((k) => {
            if (k === this.idProp) return;
            this[k].set(instance[k]);
        });
        return this;
    }
}