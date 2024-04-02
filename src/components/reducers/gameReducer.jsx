const initial_state = {
    game: "Football",
    player: "Messi"
}

const gameReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "UPDATE_GAME":
            localStorage.setItem('game', action.payload)
            return { ...state, game: action.payload }
        case "UPDATE_PLAYER":
            return { ...state, player: action.payload }

        default:
            return state

    }
}

export default gameReducer