import React from "react"
import CommentList from "../CommentList/CommentList"
import PropTypes from "prop-types"
import { CSSTransitionGroup } from "react-transition-group"
import "./styles.css"
import {connect} from "react-redux"
import {deleteArticle,loadArticle} from "../../AC"
import Loader from "../Loader/Loader"

class Article extends React.Component {
    static propTypes = {
        article: PropTypes.shape(
        {
        title: PropTypes.string,
        text: PropTypes.string
        })
    };

    componentDidMount() {
        const{loadArticle, article, ArticleId} = this.props;
        if(!article || (!article.text && !article.loading)){
            loadArticle(ArticleId)
        }
    }

    render() {
        if(!this.props.article || !this.props.articlesTitleLoaded) return null;
        return (
            <div className="article-container">
                <h3 className="article-title">{this.props.article.title}</h3>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={700}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
                <button className="delete-article" onClick = {this.hendleDelete}>Delete article</button>
            </div>);
    };

    hendleDelete = () => {
        this.props.deleteArticle(this.props.article.id);
    };

    getBody() {
        if (!this.props.Open) {
            return null;
        }
        if(this.props.article.loading){
            return(<Loader className="article-loader"/>)
        }
        
        return (
        <div>
            <div className="article-content">{this.props.article.text}</div>
            <CommentList article = {this.props.article} />
        </div>
        );
    };
}

export default connect((state, ownProps) => ({article: state.articleState.entities.get(ownProps.ArticleId),
articlesTitleLoaded: state.articleState.loaded}), {deleteArticle, loadArticle})(Article)

