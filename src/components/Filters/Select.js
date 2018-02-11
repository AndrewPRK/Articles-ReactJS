import React from "react"
import Select from "react-select"
import "react-select/dist/react-select.css"
import {connect} from "react-redux"
import {changeSelection} from "../../AC"
import {mapToArr} from "../../helpers"

class FilterSelect extends React.Component {
    hendleChange = selected => this.props.changeSelection(selected.map(select => select.value));
    render() {
        const options = this.props.articles.map(articles => (
            {
                label: articles.title,
                value: articles.id
            }
        ));
        return (
            <Select options = {options} 
                    value = {this.props.selection} 
                    onChange = {this.hendleChange} 
                    multi = {true}
                    style = {{fontSize: 14, color: 'blue'}}
            />
        );
    } 
}

export default connect(({filters, articleState}) => ({selection: filters.selection, articles: mapToArr(articleState.entities)}), {changeSelection})(FilterSelect)