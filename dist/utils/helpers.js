"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomHash = exports.isEmpty = void 0;
function isEmpty(val) {
    if (val === undefined)
        return true;
    if (typeof val == 'function' ||
        typeof val == 'number' ||
        typeof val == 'boolean' ||
        Object.prototype.toString.call(val) === '[object Date]')
        return false;
    if (val == null || val.length === 0)
        return true;
    if (typeof val == 'object') {
        let r = true;
        for (const f in val)
            r = false;
        return r;
    }
    if (val == 'undefined')
        return true;
    return false;
}
exports.isEmpty = isEmpty;
function generateRandomHash(length) {
    if (!length) {
        length = 20;
    }
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateRandomHash = generateRandomHash;
//# sourceMappingURL=helpers.js.map