const ReactNative = require('react-native')
const RN = {};

const defaultWhiteList = ['AppRegistry', 'View', 'Text', 'StyleSheet', 'Platform'];
const defaultBlackList = [];

export const RNConfig = ({whiteList = [], blackList = [], thirdParty = {}}) => {
    const combinedWhiteList= [...defaultWhiteList, ...whiteList];
    const combinedBlackList= [...defaultBlackList, ...blackList];

    //Filtering Whitelist w.r.t blackList
    const filteredList = combinedWhiteList.filter(component => !combinedBlackList.includes(component));

    //Pushing ReactNative Components
    filteredList.map(v => {
        RN[v] = ReactNative[v]
    })
    
    //Pushing ThirdParty Components
    Object.keys(thirdParty).length > 0 && Object.keys(thirdParty).map(v => {
        RN[v] = thirdParty[v];
    })
}
(() => {
    RNConfig({})
})()

export default RN;