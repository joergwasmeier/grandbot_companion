import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitSettingsEvent extends FabaEvent {
    view:any;
    args:Array<string>;

    constructor() {
        super("InitSettingsEvent");
    }
}