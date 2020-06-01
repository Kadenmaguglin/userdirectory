import React from "react";
// import axios from "axios";
import EmployeeTable from "./EmployeeTable";

class Employee extends React.Component{
state = {
    employeeRecords:[]
}


    render(){
        return(<div>
            <h1 id="head">Employee Directory: </h1>
            <EmployeeTable rows={this.state.employeeRecords}></EmployeeTable>
        </div>)
    }
}

export default Employee; 