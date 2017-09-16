import FabaRuntimeWebMediator from "@fabalous/runtime-web/FabaRuntimeWebMediator";
import InitAccountEvent from "./events/InitAccountEvent";
import InitAccountCommand from "./command/InitAccountCommand";

export default class AccountMediator extends FabaRuntimeWebMediator {
    registerCommands() {

        this.addCommand(InitAccountEvent, InitAccountCommand);
    }
}