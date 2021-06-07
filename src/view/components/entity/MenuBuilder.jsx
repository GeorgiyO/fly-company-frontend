import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {Update} from "src/view/components/PageTemplates/UpdatePageTemplate";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";

export class MenuBuilder {

    default({
        API,
        Template,
        singleName,
        manyName,
        Inputs,
        toId = (_) => _.id,
        role,
        JsxConverterObject
    }) {
        return this
            .addLink("", manyName + " list")
            .addLink("/add", "Add " + singleName, role)

            .addRoute("/add",
                () => <Add
                    API={API}
                    Template={Template}
                    url={this.url}
                    Inputs={Inputs}
                    label={singleName}
                    toId={toId}
                />, role)

            .addRoute("/update/:id",
                () => <Update
                    API={API}
                    Template={Template}
                    url={this.url}
                    Inputs={Inputs}
                    label={singleName}
                    toId={toId}
                />, role)

            .addRoute("/:id",
                () => <Page
                    API={API}
                    showDelete={role}
                    showUpdate={role}
                    toJsx={JsxConverterObject.toJsx}
                    url={this.url}
                />)

            .addRoute("",
                () => <List
                    supplier={API.all}
                    toJsx={JsxConverterObject.toLink}
                />);
    }

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
