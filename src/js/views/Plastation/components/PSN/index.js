import { connect } from 'react-redux';
import PSN from './psn';

function mapStoreToProps(store) {
    return {
        gamertag: store.psn.gamertag,
        name: store.psn.name,
        location: store.psn.location,
        bio: store.psn.bio,
        gamerscore: store.psn.gamerscore,
        tier: store.psn.tier,
        motto: store.psn.motto,
        avatar: store.psn.avatar,
        friends: store.psn.friends,
        psgames: store.psn.psgames
    }
}

export default connect(mapStoreToProps)(PSN);