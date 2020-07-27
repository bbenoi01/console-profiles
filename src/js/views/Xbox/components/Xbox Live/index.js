import { connect } from 'react-redux';
import XboxLive from './xbl';

function mapStoreToProps(store) {
    return {
        gamertag: store.xbl.gamertag,
        name: store.xbl.name,
        location: store.xbl.location,
        bio: store.xbl.bio,
        gamerscore: store.xbl.gamerscore,
        tier: store.xbl.tier,
        motto: store.xbl.motto,
        avatar: store.xbl.avatar,
        friends: store.xbl.friends,
        xbgames: store.xbl.xbgames
    }
}

export default connect(mapStoreToProps)(XboxLive);