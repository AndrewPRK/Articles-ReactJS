import{ DELETE_ARTICLE, CHANGE_DATERANGE,CHANGE_SELECION, ADD_COMMENT, LOAD_ALL_ARTICLES,
LOAD_ARTICLE ,START, FAIL, SUCSSES, LOAD_COMMENTS, LOAD_ALL_COMMENTS} from "../constants"
import {replace} from "react-router-redux" 

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    }
};

export function changeSelection(sel) {
    return {
        type: CHANGE_SELECION,
        payload: {
            sel
        }
    }
};

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATERANGE,
        payload : {
            dateRange
        }
    }
};

export function addComment (comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            comment,
            articleId
        },
        generateId: true
    }
};

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: "/api/article"
    }
};

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id, loading: true}
        })
        fetch(`/api/article/${id}`)
        .then(res => {
                if(res.status >= 400)
                {throw new Error(res.statusText)}
                return res.json()
        })
        .then(response => dispatch({type: LOAD_ARTICLE+SUCSSES, payload: {id, response} }))
        .catch(error => {
                dispatch({type: LOAD_ARTICLE + FAIL, payload: {id, error}})
                dispatch(replace("/error"))
        })
    }
};

export function loadComments(articleId) {
    return {
        type: LOAD_COMMENTS,
        payload: {
            articleId
        },
        callAPI: `/api/comment?article=${articleId}`
    }
};

export function loadAllComments(page) {
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState();
        if(pagination.getIn([page, "loading"]) || pagination.getIn([page, "ids"])) return
        dispatch(
            {
                type: LOAD_ALL_COMMENTS,
                payload: {page},
                callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
            }
        )
    }
};