import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nimi loves God.!';
  }
  getHello2(): {} {
    return { message: 'Assignment!', title: 'My Greeting App' };
  }
  getHome(): {} {
    return { title: 'Home Page' };
  }
  getAboutUs(): {} {
    return { title: 'About Us Page' };
  }
} 