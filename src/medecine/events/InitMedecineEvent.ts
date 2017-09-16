import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitMedecineEvent extends FabaEvent {
    view:any;
    constructor() {
        super("InitMedecineEvent");
    }
}