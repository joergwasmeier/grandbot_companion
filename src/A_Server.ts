import FabaStore from "@fabalous/core/store/FabaStore";
import FabaRuntimeNode from "@fabalous/runtime-node/FabaRuntimeNode";
import NodeStore from "./common/store/NodeStore";
import AccountMediatorNode from "./account/AccountMediatorNode";
import ChangeAccountBalanceEvent from "./account/events/ChangeAccountBalanceEvent";
import GetAccountDataEvent from "./account/events/GetAccountDataEvent";

class A_Server extends FabaRuntimeNode{
    constructor(store:any, port:any){
        super(store, port);

        FabaRuntimeNode.addMediator(AccountMediatorNode);

        this.app.get('/', async (req: any, res: any) => {
            console.log("go");
            new ChangeAccountBalanceEvent().dispatch();
            res.send("OK");
        });

    }
}

new A_Server(new FabaStore<NodeStore>(new NodeStore()),4000);