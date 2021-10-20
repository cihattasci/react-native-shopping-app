export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.payload}
        case "SET_CODE":
            return {...state, code: action.payload}
        case "SET_PHONE":
            return {...state, phone: action.payload}
        case "SET_EMAIL":
            return {...state, email: action.payload}
        case "SET_ADDRESS_TITLE":
            return {...state, addressTitle: action.payload}
        case "SET_ADDRESS":
            return {...state, address: action.payload}
        case "SET_CITY":
            return {...state, city: action.payload}
        case "SET_COUNTRY":
            return {...state, country: action.payload}
        case "SET_BILLING_ADDRESS":
            return {...state, billingAddress: action.payload}
        case "SET_BILLING_TYPE":
            return {...state, billingType: action.payload}
        case "GET_ADDRESS_INFO":
            return {state}
        case "SET_CARD_NAME":
            return {...state, cardName: action.payload}
        case "SET_CARD_NUMBER":
            return {...state, cardNumber: action.payload}
        case "SET_MONTH":
            return {...state, month: action.payload}
        case "SET_YEAR":
            return {...state, year: action.payload}
        case "SET_SECURITY_CODE":
            return {...state, securityCode: action.payload}
        case "SET_SAVE_CARD":
            return {...state, saveCard: action.payload}
        case "SAVE_CARD_INFO":
            return {
                cardName: action.payload.cardName,
                cardNumber: action.payload.cardNumber,
                month: action.payload.month,
                year: action.payload.year,
                securityCode: action.payload.securityCode,
            }
        case "GET_CARD_INFO":
            return {state}
        default: 
            return state
    }
}