import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import WebStore from "../../common/store/WebStore";
import InitMedecineEvent from "../events/InitMedecineEvent";
import * as React from "react";
import MedecineView from "../view/MedecineView";

export default class InitMedecineCommand extends FabaWebCommand<WebStore> {
    execute(event: InitMedecineEvent) {
        event.view = <MedecineView />;
        event.callBack();
    }
}