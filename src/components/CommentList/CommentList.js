import React from "react"
import Comment from "../Comment/Comment"
import PropTypes from "prop-types"
import ToggleOpen from "../ToggleOpen"
import CommentForm from "../CommentForm/CommentForm"
import {loadComments} from "../../AC"
import {connect} from "react-redux"
import Loader from "../Loader/Loader"
import "./styles.css"
class CommentList extends React.Component {
    componentWillReceiveProps({Open, article, loadComments}) {
        if(!this.props.Open && Open && !article.commentsLoaded && !article.commentsLoading) {
            loadComments(article.id)
        };
    }

    render() {
        return (
            <div>
                <button onClick = {this.props.showToggle}>
                {this.props.Open ? "Hide comments" : "Show comments"} </button>
                {this.getBody(this.props)}
            </div>
        );
    }
    getBody(props) {
        if (!this.props.Open) { return null; }
        if (this.props.article.commentsLoading){return <Loader className="comment-loader"/>}
        if (!this.props.article.commentsLoaded) { return null; }
        
        var commentList = this.props.article.comments.map(function(id) {
             return (<li key = {id}><Comment id = {id} /></li>) 
        });
        return (
            <div>
               
                {(!this.props.article.comments || !this.props.article.comments.length) ? <p>No comments</p> : 
                 <ul className="comment-list">{commentList}</ul>}
                <CommentForm articleId = {this.props.article.id}/>
            </div>
        );
    }
};

CommentList.propTypes = {
    article: PropTypes.object
};
export default connect(null, {loadComments})(ToggleOpen(CommentList));