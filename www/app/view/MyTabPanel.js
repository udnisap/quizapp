/*
 * File: app/view/MyTabPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',

    config: {
        centered: false,
        fullscreen: true,
        layout: {
            animation: 'fade',
            type: 'card'
        },
        items: [
            {
                xtype: 'container',
                title: 'Tab 1',
                iconCls: 'home'
            },
            {
                xtype: 'nestedlist',
                iconCls: 'organize',
                store: 'MyJsonTreeStore',
                title: 'Available Quizes',
                layout: {
                    animation: 'fade',
                    type: 'card'
                }
            },
            {
                xtype: 'container',
                title: 'Tab 3',
                iconCls: 'star',
                centered: false,
                html: '<h3>Welcome to Quiz</h3>',
                styleHtmlContent: true,
                ui: ''
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});