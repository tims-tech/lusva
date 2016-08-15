/**
 * Created by tabradford on 8/12/2016.
 */
var fs = require('fs');
var path = require('path');
var utils = require('../common/utilities');

if (process.env.CORDOVA_PLATFORMS === 'android') {
  console.log('\n' + 'Copying google-cloud.json file.');

  var filestocopy = [{
    "nativeComponents/assets/google-services.json": "platforms/android/google-services.json"
  }];

  utils.copyAssets(filestocopy);

}
