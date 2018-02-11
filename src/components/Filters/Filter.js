import React from "react"
import FilterSelect from "./Select"
import Calendar from "./Calendar"
import "./styles.css"
export default class Filter extends React.Component {

    render() {
        return (
            <div>
                <FilterSelect className="filter-select"/>
                <Calendar className="filter-calendar"/>
            </div>
        );
    }
}