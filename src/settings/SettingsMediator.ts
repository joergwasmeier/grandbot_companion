import FabaRuntimeWebMediator from "@fabalous/runtime-web/FabaRuntimeWebMediator";
import InitSettingsEvent from "./events/InitSettingsEvent";
import InitSettingsCommand from "./command/InitSettingsCommand";

export default class SettingsMediator extends FabaRuntimeWebMediator {
    registerCommands() {
        this.addCommand(InitSettingsEvent, InitSettingsCommand);
    }
}