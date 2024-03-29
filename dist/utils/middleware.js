"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = exports.UseMiddleware = void 0;
const metaDataKey = Symbol();
const UseMiddleware = (...arg) => (target, propertyValue, props) => {
    const funcObj = Reflect.getMetadata(metaDataKey, target);
    const middlewares = arg.map((item) => funcObj[item]);
    const temp = props.value;
    props.value = async function (req, resp) {
        for (const index in middlewares) {
            try {
                await middlewares[index].apply(this, [
                    req,
                    resp,
                    () => {
                        throw 'exited: ' + Object.keys(funcObj)[index];
                    },
                ]);
            }
            catch (exp) {
                console.log(exp);
                if (!/exited/g.test(exp))
                    throw exp;
            }
        }
        try {
            await temp.apply(this, [
                req,
                resp,
                () => {
                    throw 'exited main route';
                },
            ]);
        }
        catch (exp) {
            console.log(exp);
            if (!/exited/g.test(exp))
                throw exp;
        }
    };
};
exports.UseMiddleware = UseMiddleware;
function Middleware(target, propName, prop) {
    const funcObj = Reflect.getMetadata(metaDataKey, target) || {};
    Reflect.defineMetadata(metaDataKey, { ...funcObj, [propName]: prop.value }, target);
}
exports.Middleware = Middleware;
//# sourceMappingURL=middleware.js.map