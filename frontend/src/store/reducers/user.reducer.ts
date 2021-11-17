
const initialState: IState = {
    loggedInUser:  null,
    currentViewMode: 'summery',
    currentLabel: null,
    data: null
}

interface IState  {
    loggedInUser:  any,
    currentViewMode: string
    currentLabel: string | null,
    data: any
}

interface IAction {
    type: string,
    [key: string]: any
}

export const userReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case 'SET_USER':
            return state = { ...state, loggedInUser: action.user }
        case 'SET_DATA':
            return state = { ...state, data: action.data }
        case 'SET_VIEWMODE':
            return state = { ...state, currentViewMode: action.viewMode }
        case 'SET_LABEL':
            return state = { ...state, currentLabel: action.label }
        default:
            return state
    }
}