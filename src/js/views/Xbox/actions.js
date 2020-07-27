import axios from 'axios';
import { types } from '../../types';

export function xbFriends() {
    return (dispatch) => {
        axios.get('./data/friends.json')
        .then(res => {
            dispatch({
                type: types.XBOX_FRIENDS,
                payload: res.data
            })
        })
        .catch(err => console.log('Error, no friends found'))
    };
}

export function xbGames() {
    return (dispatch) => {
        axios.get('./data/xboxonegames.json')
        .then(res => {
            dispatch({
                type: types.XBOX_GAMES,
                payload: res.data
            })
        })
        .catch(err => console.log('Error, no games found'))
    };
}

export function xbProfile() {
    return (dispatch) => {
        axios.get('./data/gamercard.json')
        .then(res => {
            dispatch({
                type: types.XBOX_USER,
                payload: res.data
            })
        })
        .then(res => {
            dispatch(xbFriends())
        })
        .then(res => {
            dispatch(xbGames())
        })
        .catch(err => console.log('Error, no user info found'))
    };
}

export function setAuthenticated(authenticated) {
    return {
        type: types.SET_XBOX_AUTHENTICATED,
        payload: authenticated
    }
}