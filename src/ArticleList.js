import React from "react"
import Article from "./Article"
import PropTypes from "prop-types"
import AccordionWrapper from "./AccordionWrapper"
import {connect} from "react-redux"
import {filtratedArticlesSelector} from "./selectors"
import {loadAllArticles}from "./AC"
import Loader from "./Loader"
import {NavLink} from "react-router-dom"
 class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
   componentDidMount()
   {
        const{loaded,loading,loadAllArticles}=this.props
       if(!loaded&&!loading) loadAllArticles();
   }
    render() {
        if (this.props.loading)return(<Loader className="article-loader"/>)
        let artList = this.props.articles.map(item =>{
            return (
                <li key= {item.id}><NavLink to={`/articles/${item.id}`} activeStyle={{color:"red"}} >{item.title}</NavLink></li>
            )
        });
        return (
            <div className="articles-titels-container">
                <ul>
                    {artList}
                </ul>
            </div>
        );
    };
   
    
};
export default connect((state)=>{
    return {
articles:filtratedArticlesSelector(state) ,
loading:state.articleState.loading,
loaded:state.articleState.loaded 
}
},{loadAllArticles})(ArticleList);
