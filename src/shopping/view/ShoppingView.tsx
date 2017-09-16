import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {AppBar} from "material-ui";
import {DrawerEvent} from "../../common/misc/DrawerCommand";

interface IShoppingViewProps {
    children?: any
}

export default class ShoppingView extends FabaWebBaseComponent<IShoppingViewProps> {
    constructor(props) {
        super(props);
    }

    handleDrawer = () => {
        new DrawerEvent().dispatch();
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Shop account"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleDrawer}
                />

            </div>
        )
    }
}