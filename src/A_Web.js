import * as tslib_1 from "tslib";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import WebStore from "./common/store/WebStore";
import FabaImmutableStore from "@fabalous/core/store/FabaImmutableStore";
import { setupPage } from "csstips";
import RootLayout from "./common/RootLayout";
import Routes from "./common/Routes";
if (process.env.NODE_ENV == "development") {
    require('react-hot-loader/patch');
    var perf = require("react-addons-perf");
    perf.start();
}
var A_Web = /** @class */ (function (_super) {
    tslib_1.__extends(A_Web, _super);
    function A_Web(store) {
        var _this = this;
        if (window.app != true) {
            setupPage('#container');
            FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(process.env.API_URL), "api");
        }
        _this = _super.call(this, store, Routes, RootLayout, module) || this;
        window.app = true;
        return _this;
    }
    return A_Web;
}(FabaRuntimeWeb));
export { A_Web };
new A_Web(new FabaImmutableStore(new WebStore(), { immutable: false }));
//# sourceMappingURL=A_Web.js.map