import config from "config.json";
import {LoginHandler} from "src/model/LoginHandler";
import {Observable} from "src/domain/observable";

window.serverUrl = config.server.url;

window.session = {
    role: {
        cashier: new Observable(false),
        admin: new Observable(false),
    }
};

LoginHandler.setRoles();
