import React from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";

class EmployeeTable extends React.Component {
    state = {
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
            rows: []
            
        
    }
    componentDidMount =()=>{
        axios.get("https://randomuser.me/api/?results=200&nat=us")
        .then(records=>{
            console.log(records);
            var employeeRecords = []
            var employeeData = records.data.results

            for (let i = 0; i < employeeData.length; i++) {
                let data = {
                    firstName: employeeData[i].name.first,
                    lastName: employeeData[i].name.last,
                    phoneNumber: employeeData[i].cell,
                    location: employeeData[i].location.city,
                    email: employeeData[i].email
                };
                employeeRecords.push(data)
            }
            this.setState({
                rows:employeeRecords
            })
            console.log(this.state.employeeRecords);
        })
    }

    render() {
        console.log(this.props.rows);
        var data = {
            columns: this.state.columns,
            rows: this.state.rows
        }
        return (
            <MDBDataTable striped bordered hover data = {data} class="table"/>
        )
    }
}

export default EmployeeTable