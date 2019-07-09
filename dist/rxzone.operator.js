"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
exports.rxzone = function (zone) {
    return function (source) {
        return new rxjs_1.Observable(function (observer) {
            return source.subscribe(function (nextValue) { return zone.run(function () { return observer.next(nextValue); }); });
        });
    };
};
//# sourceMappingURL=rxzone.operator.js.map