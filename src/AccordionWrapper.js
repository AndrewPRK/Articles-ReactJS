import React from "react"

export default function (OriginalComponent)
{
    return class Accordion extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                OpenArticle: null

            };
            
        };

        render() {
            return (
                <OriginalComponent
                    {...this.props}
                    ToggleArticle={this.ToggleArticle}
                    OpenArticle={this.state.OpenArticle}
                />);
        };

       ToggleArticle=id=>ev=> {
            
                this.setState(
                    {
                        OpenArticle: this.state.OpenArticle == id ? null:id 
                    });
        };
       

    };
};