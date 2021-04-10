const eventManager = {
    listeners: {},
    subscribe: function (eventName, fn) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(fn);
    },
    trigger: function (eventName, params) {
        if (!this.listeners[eventName]) {
            return;
        }
        this.listeners[eventName].forEach((e) => e(...params));
    }
};


export {
    eventManager
}