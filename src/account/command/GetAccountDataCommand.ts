import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import WebStore from "../../common/store/WebStore";
import GetAccountDataEvent from "../events/GetAccountDataEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";

export default class GetAccountDataCommand extends FabaWebCommand<WebStore> {
    execute(event: GetAccountDataEvent) {
        console.log(event);
        FabaRuntimeWeb.sendToEndpoint(event,"api");
    }

    result(event: GetAccountDataEvent) {
        console.log("result", event);
        this.setStore("balance", event.balance);
    }
}