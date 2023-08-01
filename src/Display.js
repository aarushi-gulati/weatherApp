import React from "react";
import "/home/aarushi/Coding/weatherapp/src/styles.css"

class Display extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="display-box">
                <div className="loca item" >
                    Location : {this.props.data.location}
                </div>
                <div className="item">
                    Temperature : {this.props.data.temperature}
                </div>
                <div className="item">
                    Pressure : {this.props.data.pressure}
                </div>
                <div className="item">
                    Humidity : {this.props.data.pressure}
                </div>
                <div className="item">
                    Condition : {this.props.data.condition}
                </div>
                <div className="item">
                    Cloud : {this.props.data.cloud}
                </div>
                <div className="item">
                    Wind : {this.props.data.wind}
                </div>
            </div>
        )
    }
}

export default Display