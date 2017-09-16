import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitShoppingEvent extends FabaEvent {
    view:any;
    args:Array<string>;

    constructor() {
        super("InitShoppingEvent");
    }
}