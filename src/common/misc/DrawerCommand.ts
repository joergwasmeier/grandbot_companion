import WebStore from "../store/WebStore";
import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import FabaEvent from "@fabalous/core/FabaEvent";
import FabaRuntimeWebMediator from "@fabalous/runtime-web/FabaRuntimeWebMediator";

export class DrawerCommand extends FabaWebCommand<WebStore> {
    execute(){
        this.setStore("drawerOpen", !this.data.drawerOpen);
    }
}

export class DrawerEvent extends FabaEvent {
    constructor() {
        super("DrawerEvent");
    }
}

export default class DrawerMediator extends FabaRuntimeWebMediator {
    registerCommands() {
        this.addCommand(DrawerEvent, DrawerCommand);
    }
}