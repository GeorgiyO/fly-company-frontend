import {sendRequest} from "src/model/sendRequest";

export const LoginHandler = Reflect.construct(class LoginHandler {

    auth(login, password) {
        return sendRequest("POST", "/login", `login=${login}&password=${password}`)
            .then((response) => response.json())
            .then((response) => {
                this.setUserRole(response.body);
            })
    }

    logout() {
        return sendRequest("POST", "/logout")
            .then((response) => response.json())
            .then(() => {
                session.role.cashier.set(false);
                session.role.admin.set(false);
            });
    }

    setRoles() {
        return sendRequest("GET", "/user-role")
            .then((response) => response.json())
            .then((response) => {
                this.setUserRole(response.body);
            })
    }

    setUserRole(role) {
        session.role.cashier.set(role === "cashier" || role === "admin");
        session.role.admin.set(role === "admin");
    }

}, []);