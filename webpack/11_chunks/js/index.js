console.log('before async require');

require.ensure(['./async'], function(require) {
    var async = require('./async');
    console.log('inside async require');
    console.log(async.greet());
});
