import GetAccountDataEvent from "../events/GetAccountDataEvent";
import {FabaNodeCommand} from "@fabalous/runtime-node/FabaNodeCommand";
import NodeStore from "../../common/store/NodeStore";


export default class GetAccountDataService extends FabaNodeCommand<NodeStore> {
    async execute(event: GetAccountDataEvent) {
        event.balance  = this.data.balance;
        event.callBack();
    }

}