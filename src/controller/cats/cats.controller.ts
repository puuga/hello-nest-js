import { Controller, Get, Req, Param, ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    index(@Req() request: Request): any {
        // console.log(request);
        return { message: 'This action returns all cats' };
    }

    @Get(':id')
    show(@Param('id', ParseIntPipe) id: number): any {
        // console.log(request);
        return { message: `This action returns a #${id} cat` };
    }
}
