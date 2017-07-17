// var Mock = require('mockjs');
// var data = Mock.mock({
//     'list|1-10': [{
//         'id|+1': 1
//     }]
// });
// console.log(JSON.stringify(data, null, 4))
// http://rapapi.org/mockjsdata/22534/test.do
import axios from 'axios';
const Test = axios.get('http://rapapi.org/mockjsdata/22534/test.do')
    .then(function(response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
export default Test;