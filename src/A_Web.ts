import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaStore from "@fabalous/core/store/FabaStore";
import WebStore from "./common/store/WebStore";
import FabaImmutableStore from "@fabalous/core/store/FabaImmutableStore";
import {setupPage} from "csstips";
import RootLayout from "./common/RootLayout";
import Routes from "./common/Routes";
import DrawerMediator from "./common/misc/DrawerCommand";
import GetAccountDataEvent from "./account/events/GetAccountDataEvent";
import AccountMediator from "./account/AccountMediator";

if (process.env.NODE_ENV == "development"){
    require('react-hot-loader/patch');
    const perf = require("react-addons-perf");perf.start();
}

export class A_Web extends FabaRuntimeWeb{

    constructor(store: FabaStore<WebStore>) {
        if (window.app != true){
            setupPage('#container');
            FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(process.env.API_URL), "api");
        }

        FabaRuntimeWeb.addMediator(AccountMediator);

        setInterval(()=>{
            console.log("inter");
            new GetAccountDataEvent().dispatch();
        },1000);

        super(store , Routes , RootLayout, module);
        window.app = true;

        FabaRuntimeWeb.addMediator(DrawerMediator);
    }
}

declare var window:any;

new A_Web(new FabaImmutableStore<WebStore>(new WebStore(), {immutable:false}));