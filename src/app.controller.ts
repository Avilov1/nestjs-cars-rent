import {Controller, Get} from "@nestjs/common";
import {AppService} from "./app.service";

@Controller('/api')
export class AppController {

    constructor(private appService: AppService) {}

    @Get('/cars')
    getCar() {
        return this.appService.getCar()
    }
}