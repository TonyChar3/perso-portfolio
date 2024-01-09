import { createContext, useContext, useReducer, useEffect } from 'react';
import { fetchProjects } from '@/lib/projectFunctions';

const initialState = {
    modal_msg: '',
    open_modal: false,
    modal_error_mode: false,
    project_list: [],
    data_loading: false
};

const AppContext = createContext();

export const useMyContext = () => {
    return useContext(AppContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            console.log('MODAL is open!: ', action.payload.message);
            return {
                ...state,
                modal_msg: action.payload.message || '',
                open_modal: true,
                modal_error_mode: false
            }
        case 'OPEN_ERROR_MODAL':
            return {
                ...state,
                modal_msg: action.payload.message || '',
                open_modal: true,
                modal_error_mode: true
            }
        case 'CLOSE_MODAL':
            console.log('modal is closed :(')
            return {
                ...state,
                modal_msg: '',
                open_modal: false,
                modal_error_mode: false
            }
        case 'SET_PROJECTS_LIST':
            return {
                ...state,
                project_list: action.payload.project_array
            }
        case 'DATA_LOADING':
            return {
                ...state,
                data_loading: action.payload.isLoading || false
            }
        default:
            return state
    }
}

export const MyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchAllProjects = async() => {
        const response = await fetchProjects();
        dispatch({ type: 'DATA_LOADING', payload: { isLoading: true } });
        if(response){
            dispatch({ type: 'SET_PROJECTS_LIST', payload: { project_array: response } });
        }
    }

    useEffect(() => {
        const modalTimer = setTimeout(() => {
            dispatch({ type: 'CLOSE_MODAL' });
          }, 5000);
          return () => clearTimeout(modalTimer);
    },[state.open_modal])

    useEffect(() => {
        fetchAllProjects();     
    },[])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}