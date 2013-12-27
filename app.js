/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({


    /********************************************************
     * APP INFO
     ********************************************************/

    name: 'Spreedia',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },


    /********************************************************
     * GLOBALS
     ********************************************************/

    /* GLOBAL CONSTANTS */
    SERVER: 'http://spreedia.cake/',
    IMAGEDIR: 'images/storeimages/',

    /* GLOBAL VARS */
    geo: false,
    latitude: false,
    longitude: false,
    heading: false,


    /********************************************************
     * LAUNCH
     ********************************************************/

    launch: function() {
        // Initialize geolocation
        navigator.geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoError);

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Spreedia.view.Main'));

        /* if(Ext.browser.is.PhoneGap) {
            alert(device.uuid);
        } else {
            // simulate uuid
        } */

    },


    /********************************************************
     * HELPERS
     ********************************************************/

    imager: function(img, dim){ 
        return this.SERVER + this.IMAGEDIR + dim + '/' + img.replace('.jpg','_' + dim + '.jpg');
    },


    /********************************************************
     * CALLBACKS
     ********************************************************/

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    onGeoSuccess: function(position) {
        var geotext =   'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        'Altitude: '           + position.coords.altitude              + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                        'Heading: '            + position.coords.heading               + '<br />' +
                        'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          + position.timestamp                    + '<br />';
        alert("GeoSuccess!\n\n" + geotext);
    },

    onGeoError: function(error) {
        alert('GeoError!\n\n' +
              'code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    },

});
