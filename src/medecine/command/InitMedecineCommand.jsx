"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FabaWebCommand_1 = require("@fabalous/runtime-web/FabaWebCommand");
var React = require("react");
var MedecineView_1 = require("../view/MedecineView");
var InitMedecineCommand = /** @class */ (function (_super) {
    __extends(InitMedecineCommand, _super);
    function InitMedecineCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitMedecineCommand.prototype.execute = function (event) {
        event.view = <MedecineView_1.default />;
        event.callBack();
    };
    return InitMedecineCommand;
}(FabaWebCommand_1.FabaWebCommand));
exports.default = InitMedecineCommand;
