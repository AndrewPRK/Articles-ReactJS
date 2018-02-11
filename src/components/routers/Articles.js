import React,{Component} from "react"
import ArticleList from "../ArticleList/ArticleList"
import Article from "../Article/Article"
import {Route} from "react-router-dom"
import {connect} from "react-redux"

class Articles extends Component {
    render() {
        return(
            <div className = "articles-container">
                <ArticleList />
                <Route path = "/articles" render = {this.getIndex} exact/>
                <Route path = "/articles/:id" render = {this.getArticle}/>
            </div>
        );
    }

    getArticle = ({match}) => {
        const id = match.params.id;
        return(
            <Article ArticleId = {id} Open = {true} key={id}/>
        );
    }

    getIndex = () => {
        return this.props.loaded ? <h2 className="select-article">Please select article</h2> : null
    }
}

export default connect ((state) => {
    return {
        loaded: state.articleState.loaded }})(Articles)