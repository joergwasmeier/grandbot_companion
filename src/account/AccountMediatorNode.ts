
import {FabaNodeMediator} from "@fabalous/runtime-node/FabaNodeMediator";
import ChangeAccountBalanceEvent from "./events/ChangeAccountBalanceEvent";
import ChangeAccountBalance from "./service/ChangeAccountBalance";
import GetAccountDataEvent from "./events/GetAccountDataEvent";
import GetAccountDataService from "./service/GetAccountDataService";

export default class AccountMediatorNode extends FabaNodeMediator {
    registerCommands() {
        this.addCommand(GetAccountDataEvent, GetAccountDataService as any);
        this.addCommand(ChangeAccountBalanceEvent, ChangeAccountBalance as any);
    }
}