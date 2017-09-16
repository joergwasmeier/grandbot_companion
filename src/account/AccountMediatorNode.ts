
import {FabaNodeMediator} from "@fabalous/runtime-node/FabaNodeMediator";
import ChangeAccountBalanceEvent from "./events/ChangeAccountBalanceEvent";
import ChangeAccountBalance from "./service/ChangeAccountBalance";

export default class AccountMediatorNode extends FabaNodeMediator {
    registerCommands() {
        this.addCommand(ChangeAccountBalanceEvent, ChangeAccountBalance as any);
    }
}