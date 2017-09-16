import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {
    AppBar, Card, CardHeader, CardText, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
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
                <h1 style={{padding:16, fontFamily:"Roboto"}}>Tages Medikation</h1>
                <Card style={{marginTop:16, backgroundColor:"#818181"}}>
                    <CardHeader
                        title="6:00 Uhr morgens"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>

                <Card style={{marginTop:16, backgroundColor:"#9f9f9f"}}>
                    <CardHeader
                        title="12:00 Uhr mittags"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>

                <Card style={{marginTop:16, backgroundColor:"#bebebe"}}>
                    <CardHeader
                        title="15:00 Uhr Nachmittags"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>

                <Card style={{marginTop:16, backgroundColor:"#eeeeee"}}>
                    <CardHeader
                        title="19:00 Uhr Abends"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>

                <hr/>

                <h1 style={{padding:16, fontFamily:"Roboto"}}>Gesamte Medikation</h1>
                <Card style={{marginTop:16}}>
                    <CardHeader
                        title="Asperin asd 5020"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>

                <Card style={{marginTop:16}}>
                    <CardHeader
                        title="Asperin asd 5020"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>

                <Card style={{marginTop:16}}>
                    <CardHeader
                        title="Asperin asd 5020"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>

                <Card style={{marginTop:32}}>
                    <CardHeader
                        title="Asperin asd 5020"
                    />
                    <CardText expandable={false}>
                        550mg asperin 200mg 3er pack. 544453423423
                    </CardText>
                </Card>
            </div>
        )
    }
}