import { types } from '../../types';

const INITIAL_STATE = {
    friends: [],
    psgames: []
};

export default function PSNReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.PS_USER): {
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
                psLogIn: true
            };
        }

        case (types.PS_FRIENDS): {
            return {
                ...state,
                friends: payload
            };
        }

        case (types.PS_GAMES): {
            return {
                ...state,
                psgames: payload
            };
        }

        default: {
            return state;
        }
    }
};