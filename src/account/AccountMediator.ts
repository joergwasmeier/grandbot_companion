import FabaRuntimeWebMediator from "@fabalous/runtime-web/FabaRuntimeWebMediator";
import InitAccountEvent from "./events/InitAccountEvent";
import InitAccountCommand from "./command/InitAccountCommand";
import GetAccountDataEvent from "./events/GetAccountDataEvent";
import GetAccountDataCommand from "./command/GetAccountDataCommand";

export default class AccountMediator extends FabaRuntimeWebMediator {
    registerCommands() {
        this.addCommand(GetAccountDataEvent, GetAccountDataCommand);
        this.addCommand(InitAccountEvent, InitAccountCommand);
    }
}