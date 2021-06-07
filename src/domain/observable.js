import React from "react";

export class Observable {

    static useWatch(observable) {

        const [val, setVal] = React.useState(observable.get());

        React.useEffect(() => {
            observable.watch(setVal);
            return function () {
                observable.unwatch(setVal);
            }
        }, [observable]);

        return [val, observable.set.bind(observable)];
    }

    static field = (val = "") => new Observable(val);
    static idObj = () => new Observable({id: -1});

    constructor(val) {
        this.val = val;
        this.consumers = new Set();
    }

    /**
     * @param {function(value, oldValue)} consumer
     * @returns {function} consumer
     */
    watch(consumer) {
        this.consumers.add(consumer);
        return consumer;
    }

    unwatch(consumer) {
        this.consumers.delete(consumer);
    }

    set(val) {
        this.consumers.forEach((foo) => foo(val, this.val));
        this.val = val;
    }

    get() {
        return this.val;
    }

}