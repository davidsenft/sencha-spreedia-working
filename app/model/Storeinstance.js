Ext.define('Spreedia.model.Storeinstance', {
    extend: 'Ext.data.Model',

    // required for unique id behavior
    // requires: ['Ext.data.identifier.Uuid'],

    config: {

        // 'id' behaves as unique id
        /* idProperty: 'id',
        identifier: 'uuid', */

        fields: [
            {name: 'name', mapping: 'Storename.name'},
            {name: 'image', mapping: 'Image[0].name', convert: function(img){return Spreedia.app.imager(img, '900');}}
        ]
    }
});