import NodeStore from "../../common/store/NodeStore";
import {FabaNodeCommand} from "@fabalous/runtime-node/FabaNodeCommand";
import ChangeAccountBalanceEvent from "../events/ChangeAccountBalanceEvent";


export default class ChangeAccountBalance extends FabaNodeCommand<NodeStore> {
    async execute(event: ChangeAccountBalanceEvent) {
        console.log(event);
        this.data.balance -= 50;
        
        console.log(this.data.balance);
        event.callBack();
    }
}