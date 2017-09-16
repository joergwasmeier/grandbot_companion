import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {AppBar, DropDownMenu, MenuItem, RaisedButton, TextField} from "material-ui";
import {DrawerEvent} from "../../common/misc/DrawerCommand";

interface ISettingsViewProps {
    children?: any
}

export default class SettingsView extends FabaWebBaseComponent<ISettingsViewProps> {
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
                    title="Settings"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleDrawer}
                />

                <div >

                    <div style={{padding:16}}>
                        <img src={require("./twint_logo_q_pos_rgb.png")} style={{width:"100%"}} />
                    </div>

                    <DropDownMenu value={1}>
                        <MenuItem value={1} primaryText="Raiffeisen Bank" />
                    </DropDownMenu>

                    <div style={{paddingLeft:32, paddingRight:32}}>
                        <TextField floatingLabelText={"Contractnumber"} fullWidth={true} value={"019928477593"}/>
                        <TextField floatingLabelText={"Password"} fullWidth={true} value={"019928477593"} type={"password"} />
                        <br/><br/>
                        <RaisedButton label="Account block" secondary={false} fullWidth={true} />
                    </div>

                </div>
            </div>
        )
    }
}