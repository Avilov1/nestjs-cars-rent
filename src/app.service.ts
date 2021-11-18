import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
    getCar() {
        return [
            {id: 1, brand: "BMW"},
            {id: 2, brand: "Mercedes"},
            {id: 3, brand: "Mazda"},
            {id: 4, brand: "Volkswagen"},
            //{id: 5, brand: "Audi"}
        ]
    }
}
