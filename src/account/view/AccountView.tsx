import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {
    AppBar, Card, CardHeader, CardText, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from "material-ui";
import {DrawerEvent} from "../../common/misc/DrawerCommand";

interface IAccountViewProps {
    children?: any
    balance:number
}

export default class AccountView extends FabaWebBaseComponent<IAccountViewProps> {
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
                    title="Doras Account"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleDrawer}
                />

                <Card style={{marginTop:32}}>
                    <CardHeader
                        title="Your current balance"
                    />
                    <CardText expandable={false}>
                        <h1 style={{textAlign:"center", fontSize:48, marginTop:0, marginBottom:0}}>{this.props.balance} CHF</h1>
                    </CardText>
                </Card>

                <Card style={{marginTop:32}}>
                    <CardHeader
                        title="Your last orders"
                    />

                    <CardText expandable={false}>
                        <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow >
                                    <TableHeaderColumn>To</TableHeaderColumn>
                                    <TableHeaderColumn>Amount</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>Pharmacy Oerlikon Sternen</TableRowColumn>
                                    <TableRowColumn>20.20 CHF</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardText>
                </Card>
            </div>
        )
    }
}