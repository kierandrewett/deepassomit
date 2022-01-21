"use strict";
exports.__esModule = true;
var isPureObj = function (t) { return Object.prototype.toString.call(t) == "[object Object]"; };
var omit = function (target, fields) {
    if (!isPureObj(target))
        return null;
    if (!Array.isArray(fields))
        fields = [fields];
    var keys = Object.keys(target);
    var obj = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        if (Array.isArray(target[k])) {
            obj[k] = [];
            for (var _a = 0, _b = target[k]; _a < _b.length; _a++) {
                var item = _b[_a];
                obj[k].push(omit(item, fields));
            }
        }
        else if (
        /* shitty ass workaround for an ass library */
        Object.prototype.toString.call(target[k]) == "[object Object]"
        /* null and undefined are objects, so are dates and god knows what the fuck else */
        ) {
            obj[k] = omit(target[k], fields);
        }
        else {
            if (!fields.includes(k))
                obj[k] = target[k];
        }
    }
    return obj;
};
exports["default"] = omit;
