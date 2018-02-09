import {createSelector} from "reselect" 
const articleGetter=(state)=>state.articleState.entities;
const filterGetter=(state)=>state.filters;
const commentsGetter=(state)=>state.comments.entities;
const idGetter=(state,props)=>props.id;
import {mapToArr} from "../helpers"
export const filtratedArticlesSelector= createSelector(articleGetter,filterGetter,(articleState,filters)=>{
    return  mapToArr(articleState).filter(article=>
        {
            const date=Date.parse(article.date);
            return ((!filters.selection.length || filters.selection.includes(article.id))&&
            (!filters.dateRange.from||!filters.dateRange.to ||
            (date>filters.dateRange.from && date<filters.dateRange.to)))
        }
    
       );
});
export const commentSelectorFactory=()=>{
    return createSelector(commentsGetter,idGetter,(comments,id)=>
    comments.get(id)
)
}
