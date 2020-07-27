import { types } from '../../types';

const INITIAL_STATE = {
    authenticated: false,
    friends: [],
    xbgames: []
};

export default function XBLReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.SET_XBOX_AUTHENTICATED): {
            return {
                ...state,
                authenticated: payload
            };
        }

        case (types.XBOX_USER): {
            return {
                ...state,
                gamertag: payload.gamertag,
                name: payload.name,
                location: payload.location,
                bio: payload.bio,
                gamerscore: payload.gamerscore,
                tier: payload.tier,
                motto: payload.motto,
                avatar: payload.avatarBodyImagePath,
                xbLogIn: true
            };
        }

        case (types.XBOX_FRIENDS): {
            return {
                ...state,
                friends: payload
            };
        }

        case (types.XBOX_GAMES): {
            return {
                ...state,
                xbgames: payload
            };
        }

        default: {
            return state;
        }
    }
};