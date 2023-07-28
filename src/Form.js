import React from "react";
import "/home/aarushi/Coding/weatherapp/src/styles.css"

class Input extends React.Component {


    render() {
        return (
            <div className="topBar">
                <form className="form">
                <input
                type="text"
                className="textbox"
                placeholder="Enter the city name"
                onChange = {this.props.onDataChange}
                />
                <button
                style={{width : 100, height : 26}}
                type = "submit"
                onClick={this.props.onDataSubmit}>
                    Submit
                </button>
                </form>
            </div>
        )
    }
}

export default Input