import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
    state = {
        Name: "",
        rollno: "",
        section: "",
        department: "",
        cgpa: "",
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", this.state);
    };

    render() {
        return (
            
            <div style={{ margin: "auto", marginTop: "20px", formAlign:"center"}}>
              
                    <form onSubmit={this.onFormSubmit} style={{ backgroundColor: "green", padding: "30px", borderRadius: "8px", marginTop: "20px", maxWidth: "500px", marginLeft: "8px" ,align:"center"}}>
                      REGISTRATION FORM<br/><br/>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={this.state.Name}
                        onChange={(e) => this.setState({Name: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>Department:</label>
                    <input
                        type="department"
                        value={this.state.department}
                        onChange={(e) => this.setState({ department: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>Rollno:</label>
                    <input
                        type="Rollno"
                        value={this.state.rollno}
                        onChange={(e) => this.setState({ rollno: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>Section:</label>
                    <input
                        type="text"
                        value={this.state.section}
                        onChange={(e) => this.setState({ section: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>Cgpa:</label>
                    <input
                        type="cgpa"
                        value={this.state.cgpa}
                        onChange={(e) => this.setState({ cgpa: e.target.value })}
                    />
                    <br />
                    <br />
                    <input type="submit" value="SUBMIT" />
                </form>
                <br />
            </div>
        );
    }
}
export default App;