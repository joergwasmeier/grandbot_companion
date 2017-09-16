import FabaStore from "@fabalous/core/store/FabaStore";
import FabaRuntimeNode from "@fabalous/runtime-node/FabaRuntimeNode";
import NodeStore from "./common/store/NodeStore";

class A_Server extends FabaRuntimeNode{
    constructor(store:any, port:any){
        super(store, port);
    }
}

new A_Server(new FabaStore<NodeStore>(new NodeStore()),4000);