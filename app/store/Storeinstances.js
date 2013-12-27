Ext.define('Spreedia.store.Storeinstances', {
    extend: 'Ext.data.Store',

    // TODO: are these all necessary?
    requires: [
        "Ext.data.proxy.LocalStorage", 
        "Ext.data.proxy.JsonP", 
        "Spreedia.model.Storeinstance"
    ],
    
    config: {
        model: "Spreedia.model.Storeinstance",
        autoLoad : true,
        proxy : {
            type : 'jsonp',
            callbackKey: 'callback',
            url : 'http://spreedia.cake/locations/view/15.json',
            reader:{
                    type:'json',
                    rootProperty:'stores'
                }
        }
    }

});