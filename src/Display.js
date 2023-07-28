import React from "react";
import "/home/aarushi/Coding/weatherapp/src/styles.css"

class Display extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="display-box">
                <div className="loca">
                    Location : {this.props.data.location}
                </div>
                <div>
                    Temperature : {this.props.data.temperature}
                </div>
                <div>
                    Pressure : {this.props.data.pressure}
                </div>
                <div>
                    Humidity : {this.props.data.pressure}
                </div>
                <div>
                    Condition : {this.props.data.condition}
                </div>
                <div>
                    Cloud : {this.props.data.cloud}
                </div>
                <div>
                    Wind : {this.props.data.wind}
                </div>
            </div>
        )
    }
}

export default Display