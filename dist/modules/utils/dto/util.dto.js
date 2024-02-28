"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierProductsSchema = exports.SupplierProductsDTO = exports.UploadMediaSchema = exports.UploadMediaDTO = void 0;
const Joi = require("joi");
class UploadMediaDTO {
}
exports.UploadMediaDTO = UploadMediaDTO;
exports.UploadMediaSchema = Joi.object({
    type: Joi.string().valid('IMAGE', 'VIDEO').required(),
}).options({
    allowUnknown: true,
});
class SupplierProductsDTO {
}
exports.SupplierProductsDTO = SupplierProductsDTO;
exports.SupplierProductsSchema = Joi.object({
    supplier_id: Joi.number().required(),
}).options({
    allowUnknown: true,
});
//# sourceMappingURL=util.dto.js.map