import {sendRequest as req} from "src/model/sendRequest";

export class APIBuilder {

    constructor(url) {
        this.url = url;
        this.api = {};
    }

    get() {
        this.api.get = (id) => req("GET", this.url + "/" + id)
            .then((response) => response.json());

        return this;
    }

    update() {
        this.api.update = (id, entity) => req("PUT", this.url + "/" + id, entity)
            .then((response) => response.json());

        return this;
    }

    delete() {
        this.api.delete = (id) => req("DELETE", this.url + "/" + id);

        return this;
    }

    all() {
        this.api.all = () => req("GET", this.url)
            .then((response) => response.json());

        return this;
    }

    add() {
        this.api.add = (entity) => req("POST", this.url, entity)
            .then((response) => response.json());

        return this;
    }

    build() {
        return this.api;
    }

}
