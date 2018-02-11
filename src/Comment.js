import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {commentSelectorFactory} from "./selectors"
 function Comment(props) {
    return (
        
        <div>
            <p>{props.comment.text} <br/><b>by {props.comment.user}</b></p>
        </div>
    ); 
}
const MapStateToProps=()=>{
    const commentSelector= commentSelectorFactory();
        return (state,ownProps)=> 
        {
            return {comment:commentSelector(state,ownProps)}
            
        } 
    }
export default connect(MapStateToProps)(Comment)
Comment.propTypes = {
    comment: PropTypes.shape(
        {
            //text: PropTypes.string.isRequired,
            //user: PropTypes.string.isRequired
        }
    )
};