import React from "react"

export default function (OriginalComponent) {
    return class WrapplesComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Open: false
            };
        };
        showToggle() {
            this.setState({
                    Open: !this.state.Open
            });
        };
        render() {
            return (<OriginalComponent {... this.props} Open = {this.state.Open} 
                                                        showToggle = {this.showToggle.bind(this)} />);
        };
    };
}
