import axios from 'axios';
import { types } from '../../types';

export function psFriends() {
    return (dispatch) => {
        axios.get('./data/friends.json')
        .then(res => {
            dispatch({
                type: types.PS_FRIENDS,
                payload: res.data
            })
        })
        .catch(err => console.log('Error, no friends found'))
    };
}

export function psGames() {
    return (dispatch) => {
        axios.get('./data/xboxonegames.json')
        .then(res => {
            dispatch({
                type: types.PS_GAMES,
                payload: res.data
            })
        })
        .catch(err => console.log('Error, no games found'))
    };
}

export function psProfile() {
    return (dispatch) => {
        axios.get('./data/gamercard.json')
        .then(res => {
            dispatch({
                type: types.PS_USER,
                payload: res.data
            })
        })
        .then(res => {
            dispatch(psFriends())
        })
        .then(res => {
            dispatch(psGames())
        })
        .catch(err => console.log('Error, no user info found'))
    };
}
