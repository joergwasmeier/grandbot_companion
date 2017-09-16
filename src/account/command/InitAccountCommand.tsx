import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import InitMedecineEvent from "../../medecine/events/InitMedecineEvent";
import WebStore from "../../common/store/WebStore";
import * as React from "react";
import AccountView from "../view/AccountView";

export default class InitAccountCommand extends FabaWebCommand<WebStore> {
    execute(event: InitMedecineEvent) {
        event.view = <AccountView />;
        event.callBack();
    }
}