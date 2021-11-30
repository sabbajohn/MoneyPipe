import { IAction, IFilterBy } from "../../interfaces/dataInterfaces"
import { AppDispatch } from "../store"

export const setCurrentViewMode = (viewMode: string) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: "SET_VIEWMODE",
            viewMode
        })
    }
}

export const setCurrentLabel = (label: string | null) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: "SET_LABEL",
            label
        })
    }
}

export const setSelectedAction = (action: IAction | null) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: "SET_SELECTED_ACTION",
            action
        })
    }
}

export const setFilterBy = (filterBy: IFilterBy) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: "SET_FILTERBY",
            filterBy
        })
    }
}



