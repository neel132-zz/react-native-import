const ReactNative = require('react-native')
const RN = {};

const defaultWhiteList = ['AppRegistry', 'View', 'Text', 'StyleSheet', 'Platform'];
const defaultBlackList = [];

export const RNConfig = ({whiteList = [], blackList = []}) => {
    const combinedWhiteList= [...defaultWhiteList, ...whiteList];
    const combinedBlackList= [...defaultBlackList, ...blackList];
    const filteredList = combinedWhiteList.filter(component => !combinedBlackList.includes(component));
    filteredList.map(v => {
        RN[v] = ReactNative[v]
    })
}
(() => {
    RNConfig({})
})()

export default RN;