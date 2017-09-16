import FabaEvent from "@fabalous/core/FabaEvent";

export default class ChangeAccountBalanceEvent extends FabaEvent {

    balance:number;
    constructor() {
        super("ChangeAccountBalanceEvent");
    }
}