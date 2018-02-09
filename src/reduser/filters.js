import {CHANGE_DATERANGE, CHANGE_SELECION} from "../constants"
const defaultFilters=
{
    selection:[],
    dateRange:
    {
    from: null,
    to: null
    }
}
export default (filters=defaultFilters,action)=>
{
    switch(action.type)
    {
        case CHANGE_SELECION:
        return {...filters,selection: action.payload.sel} 
        case CHANGE_DATERANGE:
        return {...filters,dateRange: action.payload.dateRange}
    }
    return filters;
}