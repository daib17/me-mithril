"use strict";

var m = require("mithril");

var layout = require("./views/layout");
var me = require("./views/me");
var report = require("./views/report");

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, m(me));
        }
    },
    "/reports/:id": {
        render: function(vnode) {
            return m(layout, m(report, vnode.attrs));
        }
    },
});
