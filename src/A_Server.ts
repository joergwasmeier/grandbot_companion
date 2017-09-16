import FabaStore from "@fabalous/core/store/FabaStore";
import FabaRuntimeNode from "@fabalous/runtime-node/FabaRuntimeNode";
import NodeStore from "./common/store/NodeStore";
import AccountMediatorNode from "./account/AccountMediatorNode";
import ChangeAccountBalanceEvent from "./account/events/ChangeAccountBalanceEvent";

class A_Server extends FabaRuntimeNode{
    constructor(store:any, port:any){
        super(store, port);

        FabaRuntimeNode.addMediator(AccountMediatorNode);

        this.app.get('/', async (req: any, res: any) => {
            let event = await new ChangeAccountBalanceEvent().dispatch();
            res.send(""+event.balance);
        });

    }
}

new A_Server(new FabaStore<NodeStore>(new NodeStore()),4000);