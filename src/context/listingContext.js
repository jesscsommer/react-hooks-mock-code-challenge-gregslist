import { useEffect, useReducer, createContext } from 'react'

const ListingContext = createContext()

const initialState = []

const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch':
                return action.payload
            break;

        case 'add': 
                return [...state, action.payload]
            break; 
        
        case 'patch': 
                return state.map(listing => listing.id === action.payload.id ? action.payload : listing)
            break; 

        case 'remove': 
                return state.filter(listing => listing.id !== action.payload)
            break; 

        default: 
            return state; 
    }
}

const ListingProvider = ({ children }) => {
    const [listings, dispatch] = useReducer(reducer, initialState)

    const getListings = () => {
        fetch('http://localhost:6001/listings')
        .then(res => {
            if (res.status === 200) {
                res.json()
                .then(data => dispatch({
                    type: 'fetch',
                    payload: data
                }))
            } else {
                throw new Error ('Something went wrong!')
            }})
        .catch(error => alert(error))   
    }

    useEffect(() => getListings(), [])

    return (
        <ListingContext.Provider value={{ listings, dispatch }}>
            {children}
        </ListingContext.Provider>
    )
}

export { ListingContext, ListingProvider }