import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Drawer, MenuItem} from "material-ui";
import WebStore from "./store/WebStore";
import {DrawerEvent} from "./misc/DrawerCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import Routes from "./Routes";

interface IRootLayoutProps {
    children?: any,
    childs:any,
    model:WebStore
}

export default class RootLayout extends FabaWebBaseComponent<IRootLayoutProps> {
    constructor(props) {
        super(props);
    }

    handelAccountMenuItem = () => {
        console.log("handelAccountMenuItem");
        FabaRuntimeWeb.history.push(Routes.ACCOUNT.route);
        new DrawerEvent().dispatch();
    };

    handelMedecineMenuItem = () => {
        FabaRuntimeWeb.history.push(Routes.MEDECINE.route);
        new DrawerEvent().dispatch();
    };

    handelShoppingMenuItem = () => {
        FabaRuntimeWeb.history.push(Routes.SHOPPING.route);
        new DrawerEvent().dispatch();
    };

    handelSettingMenuItem = () => {
        FabaRuntimeWeb.history.push(Routes.SETTING.route);
        new DrawerEvent().dispatch();
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <Drawer open={this.props.model.drawerOpen} >
                    <MenuItem onClick={this.handelAccountMenuItem}>Doras Account</MenuItem>
                    <MenuItem onClick={this.handelMedecineMenuItem}>Health</MenuItem>
                    <MenuItem onClick={this.handelShoppingMenuItem}>Shopping</MenuItem>
                    <MenuItem onClick={this.handelSettingMenuItem}>Setting</MenuItem>
                </Drawer>
                {this.props.childs}
                </div>
            </MuiThemeProvider>
        )
    }
}