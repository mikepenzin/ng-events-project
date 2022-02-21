import { Location } from "../location/location";
import { Session } from "../session/session";

export class Event {
    id: number = 999;
    name!: string;
    imageUrl: string = "https://i0.wp.com/shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png";
    date!: string;
    time!: string;
    price: number = 0.00;
    location: Location = new Location;
    sessions: Session[] = [];
}
