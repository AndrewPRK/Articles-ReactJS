import React from "react"
import Comment from "../Comment/Comment"
import {connect} from "react-redux"
import {loadAllComments} from "../../AC"
import Loader from "../Loader/Loader"
import {NavLink} from "react-router-dom"

class PaginationCommentsList extends React.Component {
    componentWillMount() {
        this.props.loadAllComments(this.props.page);
    }

    componentWillReceiveProps({page, loadAllComments}) {
       loadAllComments(page);
    }

    render() {
        if(!this.props.total) return <Loader/>
        return(
            <div>
                {this.getComment()}
                {this.getPaginator()}
           </div>
        );
    }
    getPaginator() {
        const items = [];
        for(var i = 1; i <= Math.floor(this.props.total / 5) + 1; i++) {
            items.push(<li  key = {i}><NavLink to = {`/comments/${i}`} activeStyle = 
                            {{color:"red"}}>{i}</NavLink></li>)
        }
        return <ul>{items}</ul>;
    }
    getComment() {
        const{comments, loading} = this.props;
        if(loading || !comments) {return <Loader/>}
        const commentsArr = comments.map(id => <li key = {id}><Comment id = {id}/></li>)
        return <ul>{commentsArr}</ul>
    }
}

export default connect(
    (state, ownProps) => ({
        total: state.comments.total,
        loading: state.comments.pagination.getIn([ownProps.page, "loading"]),
        comments: state.comments.pagination.getIn([ownProps.page, "ids"])
    }),{loadAllComments})(PaginationCommentsList)