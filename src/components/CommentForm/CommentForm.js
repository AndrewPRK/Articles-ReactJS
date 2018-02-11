import React from "react"
import  "./styles.css"
import{addComment} from "../../AC"
import {connect} from "react-redux"

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: " ",
            text: " "
        };
    }

    render() {
        return (
            <form onSubmit = {this.handlerSubmit} className="comment-form">
                <ul>
                    <li>
                        <h2>Add comment</h2>
                    </li>
                    <li>
                        <label htmlFor="name">User:</label> 
                        <input  value = {this.state.user} name="name" onChange = {this.handlerChange("user") } 
                                className = {this.getClassName("user")} />
                    </li>
                    <li>
                        <label htmlFor="commentText">Comment text:</label> 
                        <textarea   value = {this.state.text} name="commentText" onChange = {this.handlerChange("text")} 
                                    className = {this.getClassName("text")} cols="40" rows="6"/>
                    </li>
                    <li>
                        <button type="submit" className="comment-submit">Send Comment</button>
                    </li>
                </ul>
            </form>
        )
    }

    handlerSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state, this.props.articleId)
        this.setState({
            user: "",
            text: ""
        })
    }

    handlerChange = type => ev => {
        if (ev.target.value.length > ValidateLimits[type].max) { return }
        this.setState({ [type]: ev.target.value })
    }
    getClassName(type) {
       return this.state[type].length && this.state[type].length < ValidateLimits[type].min ? "form_error" : ""
    }

}

const ValidateLimits = {
        user: {
            min: 5,
            max: 15
        },
        text: {
            min: 20,
            max: 50
        }
}

export default connect(null, {addComment})(CommentForm)