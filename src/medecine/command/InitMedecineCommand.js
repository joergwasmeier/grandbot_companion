import * as tslib_1 from "tslib";
import { FabaWebCommand } from "@fabalous/runtime-web/FabaWebCommand";
import * as React from "react";
import MedecineView from "../view/MedecineView";
var InitMedecineCommand = /** @class */ (function (_super) {
    tslib_1.__extends(InitMedecineCommand, _super);
    function InitMedecineCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitMedecineCommand.prototype.execute = function (event) {
        event.view = React.createElement(MedecineView, null);
        event.callBack();
    };
    return InitMedecineCommand;
}(FabaWebCommand));
export default InitMedecineCommand;
//# sourceMappingURL=InitMedecineCommand.js.map