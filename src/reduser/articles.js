import{DELETE_ARTICLE, ADD_COMMENT,LOAD_ALL_ARTICLES,SUCSSES,START,FAIL, LOAD_ARTICLE,LOAD_COMMENTS} from "../constants"
import {arrToMap,mapToArr} from "../helpers"
import {OrderedMap, Map, Record} from "immutable"
const ArticleRecords=Record({
    text:undefined,
    title:" ",
    id:" ",
    date:" ",
    loading:false,
    commentsLoading:false,
    commentsLoaded:false,
    comments:[]
})
const ReduserState=Record({
    loading:false,
    loaded:false,
    entities: new OrderedMap({})
});
const defaultArticlesState=new ReduserState;
export default  (articleState=defaultArticlesState,action)=>
{
    switch(action.type)
    {
        case DELETE_ARTICLE:
        return articleState.deleteIn(["entities",action.payload.id]);
        case ADD_COMMENT:
        return articleState.updateIn(["entities",action.payload.articleId,"comments"],comments=>comments.concat(action.randomId))
        case LOAD_ALL_ARTICLES+START:
        return articleState.set("loading",true);
        case LOAD_ALL_ARTICLES+SUCSSES:
        return articleState
        .update("entities",entities=> arrToMap(action.response,ArticleRecords).merge(entities))
        .set("loaded",true)
        .set("loading",false);
        case LOAD_ARTICLE+SUCSSES:
        return articleState.setIn(["entities",action.payload.id],new ArticleRecords(action.payload.response))
        .setIn(["entities",action.payload.id,"loading"],false)
        case LOAD_ARTICLE+START:
        return articleState.setIn(["entities",action.payload.id,"loading"],action.payload.loading)
        case LOAD_COMMENTS+START:
        return articleState.setIn(["entities",action.payload.articleId,"commentsLoading"],true)
        case LOAD_COMMENTS+SUCSSES:
        return articleState.setIn(["entities",action.payload.articleId,"commentsLoaded"],true)
                            .setIn(["entities",action.payload.articleId,"commentsLoading"],false)
    }
       return articleState;
}