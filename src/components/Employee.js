import React from "react";
import axios from "axios";
import EmployeeTable from "./EmployeeTable";

class Employee extends React.Component{
state = {
    employeeRecords:[]
}

    componentDidMount =()=>{
        axios.get("https://randomuser.me/api/?results=10&nat=us")
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
                employeeRecords:employeeRecords
            })
            console.log(this.state.employeeRecords);
        })
    }

    render(){
        return(<div>
            <h1>Employee Directory: </h1>
            <EmployeeTable rows={this.state.employeeRecords}></EmployeeTable>
        </div>)
    }
}

export default Employee; 