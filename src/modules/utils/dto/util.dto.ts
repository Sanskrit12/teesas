import * as Joi from 'joi';

export class UploadMediaDTO {
  type: FormData;
}

export const UploadMediaSchema = Joi.object({
  type: Joi.string().valid('IMAGE', 'VIDEO').required(),
}).options({
  allowUnknown: true,
});

export class SupplierProductsDTO {
  supplier_id: number;
}

export const SupplierProductsSchema = Joi.object({
  supplier_id: Joi.number().required(),
}).options({
  allowUnknown: true,
});
