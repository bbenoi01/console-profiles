import { connect } from 'react-redux';
import Xbox from './xbox';

function mapStoreToProps(store) {
    return {
        authenticated: store.xbl.authenticated
    }
}

export default connect(mapStoreToProps)(Xbox);