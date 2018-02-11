import React, { Component } from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import { connect } from 'react-redux'
import {changeDateRange} from "../../AC" 

import 'react-day-picker/lib/style.css';

class Calendar extends Component {

    handleDayClick = (day) => {
        const { changeDateRange, range } = this.props
        changeDateRange(DateUtils.addDayToRange(day, range))
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}


export default connect(({filters})=>({range:filters.dateRange}),{changeDateRange})(Calendar)
