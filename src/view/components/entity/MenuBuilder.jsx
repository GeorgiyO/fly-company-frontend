import React from "react";
import {Link, Route, Switch} from "react-router-dom";

export class MenuBuilder {

    constructor(url) {
        this.links = []
        this.routes = [];
        this.url = url;
    }

    addRoute(path, component, predicate = true) {
        if (predicate) {
            this.routes.push({path, component});
        }
        return this;
    }

    addLink(to, label, predicate = true) {
        if (predicate) {
            this.links.push({to, label});
        }
        return this;
    }

    build() {
        return (
            <div className={"entity-menu"}>
                <nav>
                    {this.links.map((l, i) => (
                        <Link key={i} to={this.url + l.to}>{l.label}</Link>
                    ))}
                </nav>
                <Switch>
                    {this.routes.map((r, i) => (
                        <Route key={i + this.links.length} path={this.url + r.path}
                               component={r.component}/>
                    ))}
                </Switch>
            </div>
        );
    }
}
