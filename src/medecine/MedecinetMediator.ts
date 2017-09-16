import FabaRuntimeWebMediator from "@fabalous/runtime-web/FabaRuntimeWebMediator";
import InitMedecineEvent from "./events/InitMedecineEvent";
import InitMedecineCommand from "./command/InitMedecineCommand";

export default class MedecinetMediator extends FabaRuntimeWebMediator {
    registerCommands() {
        this.addCommand(InitMedecineEvent, InitMedecineCommand);
    }
}