Ext.define('Spreedia.view.StoreinstanceList', {
    extend: 'Ext.dataview.DataView',
    xtype: 'storeinstancelist',

    requires: [
        'Spreedia.view.StoreinstanceListItem'
    ],

    config: {
        cls: 'storeinstance-list',
        useComponents: true,
        store: 'Storeinstances',
        defaultType: 'storeinstancelistitem'
    }
});