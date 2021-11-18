import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://user:user@cluster0.3zotj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}