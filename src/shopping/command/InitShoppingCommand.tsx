import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import WebStore from "../../common/store/WebStore";
import InitShoppingEvent from "../events/InitShoppingEvent";
import * as React from "react";
import ShoppingView from "../view/ShoppingView";

export default class InitShoppingCommand extends FabaWebCommand<WebStore> {
    execute(event: InitShoppingEvent) {
        event.view = <ShoppingView />;
        event.callBack()
    }
}