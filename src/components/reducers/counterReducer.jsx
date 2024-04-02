const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREASE_COUNT":
            return { count: ++state.count }

        case "DECREASE_COUNT":
            return { count : --state.count}

        case "RESET":
            return {count: 0}
        default:
            return state
    }
}

export default counterReducer