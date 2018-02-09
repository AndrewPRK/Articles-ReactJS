import {arrToMap} from "../helpers"
import {ADD_COMMENT,LOAD_COMMENTS,START,SUCSSES,LOAD_ALL_COMMENTS} from "../constants"
import {Map, Record, OrderedMap} from "immutable"
const CommentRecord=Record({
    id:"",
    user:"",
    text:""
});
const CommentReduserState=Record({
    entities: new OrderedMap({}),
    pagination:new Map({}),
    total:null
})
const defaultCommentReduserState= new CommentReduserState;
export default (comments=defaultCommentReduserState, action)=>
{
    
    switch (action.type){
        case ADD_COMMENT: return comments.setIn(["entities",action.randomId],new CommentRecord({...action.payload.comment, id:action.randomId}) )
        case LOAD_COMMENTS+SUCSSES: 
        return comments.update("entities",entities=> entities.merge(arrToMap(action.response,CommentRecord)) )
        case LOAD_ALL_COMMENTS+START:
        return comments.setIn(["pagination",action.payload.page,"loading"],true)
        case LOAD_ALL_COMMENTS+SUCSSES:
        return comments.setIn(["pagination",action.payload.page,"loading"],false)
                        .set("total",action.response.total)
                        .update("entities",entities=> entities.merge(arrToMap(action.response.records,CommentRecord)))
                        .setIn(["pagination",action.payload.page,"ids"],action.response.records.map(com=>com.id))
   
        }
    return comments;
}