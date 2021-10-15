// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import Stan14100NGIStan14100NgiDid from './stan14100/NGI/stan14100.ngi.did';
import Stan14100NGIStan14100NgiVc from './stan14100/NGI/stan14100.ngi.vc';
export default {
    Stan14100NGIStan14100NgiDid: load(Stan14100NGIStan14100NgiDid, 'stan14100.ngi.did'),
    Stan14100NGIStan14100NgiVc: load(Stan14100NGIStan14100NgiVc, 'stan14100.ngi.vc'),
};
function load(mod, fullns) {
    return function init(store) {
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: ' + fullns);
        }
        else {
            store.registerModule([fullns], mod);
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns + '/init', null, {
                        root: true
                    });
                }
            });
        }
    };
}
