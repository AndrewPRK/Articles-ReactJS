import React from "react"
import FilterSelect from "./Select"
import Calendar from "./Calendar"
export default class Filter extends React.Component {

    render() {
        return (
            <div>
                <FilterSelect />
                <Calendar/>
            </div>
            );
    }

}