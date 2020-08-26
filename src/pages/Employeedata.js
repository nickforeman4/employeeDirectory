import React from "react";
import axios from "axios";
import {MDBDataTable} from "mdbreact"

class Employeedata extends React.Component {
    state = {
        staff: []
    }
    componentDidMount = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=us"
        ).then((response) => {
            //console.log(response)
            var apidata = response.data.results
            var employeedirectory = []
            for (let i = 0; i < apidata.length; i++) {
                let data = {
                    name: apidata[i].name.title + ". " + apidata[i].name.first + " " + apidata[i].name.last,
                    email: apidata[i].email,
                    cell: apidata[i].cell,
                    location: apidata[i].location.city + ", " + apidata[i].location.state
                }
                employeedirectory.push(data)
            }
            //console.log(employeedirectory)
            this.setState({staff: employeedirectory})
            console.log(this.state.staff)
        })
    }
    render() {
        const template = {
            columns: [
                {
                    label: "name",
                    field: "name",
                    sort: "asc",
                    width: 250
                },
                {
                    label: "email",
                    field: "email",
                    sort: "asc",
                    width: 150
                },
                {
                    label: "cell",
                    field: "cell",
                    sort: "asc",
                    width: 100
                },
                {
                    label: "location",
                    field: "location",
                    sort: "asc",
                    width: 250
                }
            ],
            rows: this.state.staff
        }
        return (
            <div>
                <h6>Employees</h6>
                <MDBDataTable data = {template}>
                </MDBDataTable>
            </div>
        )
    }
}

export default Employeedata;