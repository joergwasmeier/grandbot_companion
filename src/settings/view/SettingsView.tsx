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

                <div style={{padding:16}}>
                    Bank:
                    <DropDownMenu value={1}>
                        <MenuItem value={1} primaryText="Raiffeisen Bank" />
                    </DropDownMenu>

                    <TextField floatingLabelText={"Vertragsnummer"} fullWidth={true} value={"019928477593"}/>
                    <TextField floatingLabelText={"Passwort"} fullWidth={true} value={"019928477593"} type={"password"} />

                    <RaisedButton label="Account sperren" secondary={false} fullWidth={true} />


                </div>
            </div>
        )
    }
}