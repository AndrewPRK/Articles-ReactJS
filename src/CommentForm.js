import React from "react"
import  "./CommentFormCSS.css"
import{addComment} from "./AC"
import {connect} from "react-redux"
class CommentForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
            user: " ",
            text:" "
            };
        
        
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                User: <input value={this.state.user} onChange={this.handlerChange("user")} className={this.getClassName("user")} />
                Comment text: <input value={this.state.text} onChange={this.handlerChange("text")} className={this.getClassName("text")} />
                <input type="submit" value ="submit"/>
            </form>
            )
    }
    handlerSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state, this.props.articleId)
        this.setState({
            user: "",
            text:""
        })
    }
   handlerChange=type=>ev=> {
        if (ev.target.value.length > ValidateLimits[type].max) { return }
        this.setState({ [type]: ev.target.value })
    }
   getClassName(type)
   {
       return this.state[type].length && this.state[type].length < ValidateLimits[type].min ? "form_error": ""
   }

}
const ValidateLimits =
    {
        user:
        {
            min:5,
            max:15
        },
        text:
        {
            min:20,
            max:50
        }
    }
    export default connect(null,{addComment})(CommentForm)