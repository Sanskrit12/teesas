import { HttpStatus } from '@nestjs/common';

export class Response {
  status: number = HttpStatus.OK;
  data: any = {};
  message: string;

  constructor(partial: Partial<Response>) {
    Object.assign(this, partial);
  }
}
