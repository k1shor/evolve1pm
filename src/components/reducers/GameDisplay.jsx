import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GameDisplay = () => {
    let [gamename, setGame] = useState('')
    let [playername, setPlayer] = useState('')

    let [info, setInfo] = useState({})

    let game = useSelector(store => store.gameStore.game)
    let player = useSelector(store => store.gameStore.player)
    let dispatch = useDispatch()



    const movieFetch = async () => {
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '73858d0151msh8bee677ef926c60p155007jsn03c6ca43bdf2',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            // console.log(result);
            setInfo(result)
        } catch (error) {
            console.error(error);
        }

    }







    return (
        <>
            <div className='h-96 w-full flex justify-center items-center flex-col'>
                <h1>Game: {game}</h1>
                <div className="flex">
                    <input type="text" className='border border-blue-500' onChange={e => setGame(e.target.value)} />
                    <button className='edit rounded-r-md'
                        onClick={() => {
                            return dispatch({ type: "UPDATE_GAME", payload: gamename })
                        }}
                    >Update Game</button>

                </div>
                <h1>Player: {player}</h1>
                <div className="flex">
                    <input type="text" className='border border-blue-500' onChange={e => setPlayer(e.target.value)} />
                    <button className='edit rounded-r-md'
                        onClick={() => {
                            return dispatch({ type: "UPDATE_PLAYER", payload: playername })
                        }}
                    >Update Player</button>

                </div>
 
                <button className='edit' onClick={movieFetch}>Movie data</button>
            </div>
        </>
    )
}

export default GameDisplay