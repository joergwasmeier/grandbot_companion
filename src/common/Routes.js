import * as tslib_1 from "tslib";
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.accountLoader = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, System.import("../account/")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); });
    };
    ;
    Routes.settingLoader = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, System.import("../settings/")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); });
    };
    ;
    Routes.getRoutes = function () {
        var routes = [
            Routes.INDEX,
            Routes.ACCOUNT,
            Routes.SETTING
        ];
        return routes;
    };
    Routes.INDEX = { route: "/", module: Routes.accountLoader };
    Routes.ACCOUNT = { route: "/account/", module: Routes.accountLoader };
    Routes.SETTING = { route: "/setting/", module: Routes.settingLoader };
    return Routes;
}());
export default Routes;
//# sourceMappingURL=Routes.js.map