Ext.define('Spreedia.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.SegmentedButton',
        'Ext.form.FieldSet',
        'Spreedia.view.StoreinstanceList'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Near Me',
                iconCls: 'locate',
                layout: 'fit',
                /* styleHtmlContent: true,
                scrollable: true, */

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Shops Near Me'
                    },
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        layout : {
                            type : 'hbox',
                            pack : 'center'
                        },
                        items: [
                            {
                                xtype: 'segmentedbutton',
                                allowDepress: true,
                                items: [
                                    {
                                        text: 'List',
                                        pressed: true
                                    },
                                    {
                                        text: 'Cards'
                                    },
                                    {
                                        text: 'Map'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xclass: 'Spreedia.view.StoreinstanceList',
                        id: 'nearbylist'
                    }
                ]
                /* ,

                html: [
                    "What's near me?"
                ].join("") */
            },
            {
                title: 'Search',
                iconCls: 'search',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Search Anywhere'
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                placeHolder: 'Search stores...',
                                itemId: 'searchTextField',
                                name: 'searchTextField',
                                required: true
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
