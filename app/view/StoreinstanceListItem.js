Ext.define('Spreedia.view.StoreinstanceListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'storeinstancelistitem',

    requires: [
        'Ext.Img'
    ],

    config: {
        cls: 'storeinstance-list-item',
        layout: {
            type: 'vbox',
            align: 'center'
        },
        
        // components (order matters)
        name: {
            cls: 'storeinstance-name'
        },
        image: true,

        dataMap: {
            // order doesn't matter
            getName: {
                setHtml: 'name'
            },
                getImage: {
                setSrc: 'image'
            }
        }
    },

    /**
     * The following functions are called automatically when the configuration changes,
     * in order to update the content of the components within
     */

    applyImage: function(config) {
        return Ext.factory(config, Ext.Img, this.getImage());
    },

    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    // sets up our tap event listener
    initialize: function() {
        this.callParent(arguments);

        this.element.on('tap', this.onTap, this);
    },

    // on tap event
    onTap: function() {
        alert('This StoreinstanceListItem says: You tapped me!');
        // Ext.Viewport.animateActiveItem({xtype:'storeinstancepage'}, { type: 'slide', direction: 'left' });
        // history.pushState();
    }
});