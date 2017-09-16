import FabaRuntimeWebMediator from "@fabalous/runtime-web/FabaRuntimeWebMediator";
import InitShoppingEvent from "./events/InitShoppingEvent";
import InitShoppingCommand from "./command/InitShoppingCommand";

export default class SettingsMediator extends FabaRuntimeWebMediator {
    registerCommands() {
        this.addCommand(InitShoppingEvent, InitShoppingCommand);
    }
}