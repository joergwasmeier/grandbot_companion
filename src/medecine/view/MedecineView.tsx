import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {
    AppBar, Card, CardHeader, CardText, FlatButton, RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui";
import {DrawerEvent} from "../../common/misc/DrawerCommand";

interface IMedecineViewProps {
    children?: any
}

export default class MedecineView extends FabaWebBaseComponent<IMedecineViewProps> {
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
                    title="Health"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleDrawer}
                />
                <h1 style={{padding:16, fontFamily:"Roboto"}}>Daily medication</h1>

                <Card style={{marginTop:16, backgroundColor:"#f7f7f7"}}>
                    <CardHeader
                        title="6:00 morning"
                        avatar={require("./sunrise.png")}
                    />
                    <CardText expandable={false}>
                        Xarelto - 100mg oral
                    </CardText>
                </Card>

                <Card style={{marginTop:16, backgroundColor:"#dddddd"}} >
                    <CardHeader
                        avatar={require("./midday.png")}

                        title="12:00 Uhr midday"
                    />
                    <CardText expandable={false}>
                        Acetaminophen - Immediate-release: 125 mg to 1 g orally every 4 to 6 hours
                    </CardText>
                </Card>

                <Card style={{marginTop:16, backgroundColor:"#bcbcbc"}}>
                    <CardHeader
                        title="19:00 Uhr evening"
                        avatar={require("./moon.png")}

                    />
                    <CardText expandable={false}>
                        Acetaminophen - Immediate-release: 325 mg to 1 g orally every 4 to 6 hours
                    </CardText>
                </Card>

                <hr/>

                <h1 style={{padding:16, fontFamily:"Roboto"}}>Total medidcation</h1>
                <Card style={{marginTop:16}}>
                    <CardHeader
                        title="Rivaroxaban"
                        avatar={require("./Bayer-logo.png")}

                    />
                    <CardText expandable={false}>
                        Company: Xarelto (Bayer)

                        An anticoagulant medication (blood thinner), which is taken by mouth. It is commonly used to prevent blood clots.
                        <br/><br/>

                        <RaisedButton secondary={true} fullWidth={true} label={"Order"}/>
                    </CardText>
                </Card>

                <Card style={{marginTop:32}}>
                    <CardHeader
                        title="Acetaminophen"
                        avatar={require("./roche-logo.png")}
                    />
                    <CardText expandable={false}>
                        Company: Equate

                        Acetaminophen is a pain reliever and a fever reducer.
                        Acetaminophen is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.
                        <br/><br/>
                        <RaisedButton secondary={true} fullWidth={true}  label={"Order"}/>
                    </CardText>
                </Card>
            </div>
        )
    }
}