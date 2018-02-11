import React,{Component} from "react"
import PaginationCommentsList from "../CommentList/PaginationCommentsList"
import {Route,Redirect} from "react-router-dom"

export default function CommentPage ({match}) {
    if (match.isExact) return <Redirect to = "/comments/1"/>
    return(<Route path = "/comments/:page" render = {getPaginationComments}/>)
}
function getPaginationComments({match}) {
        return <PaginationCommentsList page = {match.params.page}/>
}
