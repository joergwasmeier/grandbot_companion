import * as tslib_1 from "tslib";
import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
var RootLayout = /** @class */ (function (_super) {
    tslib_1.__extends(RootLayout, _super);
    function RootLayout(props) {
        return _super.call(this, props) || this;
    }
    RootLayout.prototype.render = function () {
        return (React.createElement("div", null, this.props.childs));
    };
    return RootLayout;
}(FabaWebBaseComponent));
export default RootLayout;
//# sourceMappingURL=RootLayout.js.map