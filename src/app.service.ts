import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getString(): string {
    return 'Este es mi primera aplicación en Nest';
  }
}
