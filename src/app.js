import 'bulma/css/bulma.css';
import MessagingService from "./messaging-service";

export class App{
    constructor(){
        const messagingService  = new MessagingService();
        this.message = messagingService.showMessage("Aurelia !!");
    }
}