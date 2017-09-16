import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import WebStore from "../../common/store/WebStore";
import InitSettingsEvent from "../events/InitSettingsEvent";
import SettingsView from "../view/SettingsView";
import * as React from "react";

export default class InitSettingsCommand extends FabaWebCommand<WebStore> {
    execute(event: InitSettingsEvent) {
        event.view = <SettingsView />;
        event.callBack();
    }


}