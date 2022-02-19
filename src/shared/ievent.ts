import { Time } from "@angular/common";

export class IEvent {
    id!: number | 999;
    name!: String;
    imageUrl!: String;
    date!: String;
    time!: String;
    price!: number | 0.00;
    location!: ILocation;
    sessions!: ISession[];


}

class ILocation {
    address!: String;
    city!: String;
    country!: String;
}

class ISession {
    id: number | 999 = 999;
    name: String | undefined;
    presenter: String | undefined;
    duration: number | 0 = 0;
    level!: String;
    abstract: String | undefined;
    voters: String[] | undefined;
}
