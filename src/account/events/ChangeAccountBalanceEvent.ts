import FabaEvent from "@fabalous/core/FabaEvent";

export default class ChangeAccountBalanceEvent extends FabaEvent {
    constructor() {
        super("ChangeAccountBalanceEvent");
    }
}