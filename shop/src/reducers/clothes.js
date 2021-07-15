const initialState = {
    isReady: false,
    items: null,
    sortBy: 'all',
    searchQuery: '',
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CLOTHES':
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.payload,
            };  
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload,
            };    
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            }
        break;
        // case 'ADD_CLOTHES':
        //     return {
        //         ...state,
        //         clothes: [...state.clothes, action.payload]
        //     };
        default:
            return state;
    }
};