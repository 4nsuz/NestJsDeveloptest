import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const object = plainToClass(metadata.metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const validationErrors = this.formatErrors(errors);
      throw new BadRequestException(validationErrors);
    }

    return value;
  }

  private formatErrors(errors: ValidationError[]) {
    return errors.map(error => this.mapError(error));
  }

  private mapError(error: ValidationError) {
    if (error.children && error.children.length > 0) {
      return this.formatErrors(error.children);
    } else {
      return {
        property: error.property,
        constraints: error.constraints,
      };
    }
  }
}
