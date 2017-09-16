import FabaEvent from "@fabalous/core/FabaEvent";

export default class GetAccountDataEvent extends FabaEvent {
    balance:number;
    constructor() {
        super("GetAccountDataEvent");
    }
}