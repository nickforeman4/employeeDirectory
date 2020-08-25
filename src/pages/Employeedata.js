import React from "react";
import axios from "axios";

class Employeedata extends React.Component {
    state = {
        staff: []
    }
    componentDidMount = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=us"
        ).then((response) => {
            console.log(response)
        })
    }
    render() {
        return (
            <div>
                <h6>Test</h6>
            </div>
        )
    }
}

export default Employeedata;