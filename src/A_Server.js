import * as tslib_1 from "tslib";
import FabaStore from "@fabalous/core/store/FabaStore";
import FabaRuntimeNode from "@fabalous/runtime-node/FabaRuntimeNode";
import NodeStore from "./common/store/NodeStore";
var A_Server = /** @class */ (function (_super) {
    tslib_1.__extends(A_Server, _super);
    function A_Server(store, port) {
        return _super.call(this, store, port) || this;
    }
    return A_Server;
}(FabaRuntimeNode));
new A_Server(new FabaStore(new NodeStore()), 4000);
//# sourceMappingURL=A_Node.js.map