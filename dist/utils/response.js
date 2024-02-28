"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
const common_1 = require("@nestjs/common");
class Response {
    constructor(partial) {
        this.status = common_1.HttpStatus.OK;
        this.data = {};
        Object.assign(this, partial);
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map