export interface IRoutes {
    route: string;
    module: any;
    view?: string;
}

export default class Routes {
    static INDEX: IRoutes = {route: "/", module: Routes.accountLoader};

    static ACCOUNT: IRoutes = {route: "/account/", module: Routes.accountLoader};
    private static async accountLoader(): Promise<void> {return await System.import("../account/")};

    static MEDECINE: IRoutes = {route: "/medecine/", module: Routes.medecineLoader};
    private static async medecineLoader(): Promise<void> {return await System.import("../medecine/")};

    static SETTING: IRoutes = {route: "/setting/", module: Routes.settingLoader};
    private static async settingLoader(): Promise<void> {return await System.import("../settings/")};

    static SHOPPING: IRoutes = {route: "/shopping/", module: Routes.shoppingLoader};
    private static async shoppingLoader(): Promise<void> {return await System.import("../shopping/")};

    static getRoutes() {
        let routes = [
            Routes.INDEX,
            Routes.ACCOUNT,
            Routes.SETTING,
            Routes.MEDECINE,
            Routes.SHOPPING
        ];

        return routes;
    }
}