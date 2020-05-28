import React from "react";
import { MDBDataTable } from "mdbreact";

class EmployeeTable extends React.Component {
    state = {
        data: {
            columns: [
                {
                    label: "firstName",
                    field: "firstName",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "lastName",
                    field: "lastName",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "phoneNumber",
                    field: "phoneNumber",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "location",
                    field: "location",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "email",
                    field: "email",
                    sort: "asc",
                    width: 150

                }

            ],
            rows: this.props.rows
        }
    }
    render() {
        console.log(this.props.rows);
        return (
            <MDBDataTable striped bordered hover data={this.state.data} />
        )
    }
}

export default EmployeeTable