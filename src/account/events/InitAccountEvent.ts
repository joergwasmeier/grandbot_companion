import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitAccountEvent extends FabaEvent {
    constructor() {
        super("InitAccountEvent");
    }
}