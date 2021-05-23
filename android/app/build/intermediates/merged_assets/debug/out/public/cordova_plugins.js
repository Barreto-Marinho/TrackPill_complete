
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-camera-preview.CameraPreview",
          "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
          "pluginId": "cordova-plugin-camera-preview",
        "clobbers": [
          "CameraPreview"
        ]
        },
      {
          "id": "phonegap-plugin-push.PushNotification",
          "file": "plugins/phonegap-plugin-push/www/push.js",
          "pluginId": "phonegap-plugin-push",
        "clobbers": [
          "PushNotification"
        ]
        },
      {
          "id": "cordova-plugin-qrscanner.QRScanner",
          "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
          "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
          "QRScanner"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-camera-preview": "0.12.2",
      "cordova-plugin-qrscanner": "3.0.1",
      "phonegap-plugin-multidex": "1.0.0",
      "phonegap-plugin-push": "2.3.0"
    };
    // BOTTOM OF METADATA
    });
    