import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value) {
    if (value && value['mimetype']) {
      return value;
    } else {
      const { error } = this.schema.validate(value);
      if (error) {
        throw new BadRequestException(error.message);
      }
      return value;
    }
  }
}
