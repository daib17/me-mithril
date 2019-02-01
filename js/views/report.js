"use strict";

var m = require("mithril");
var api = require("../models/api");

module.exports = {
    oninit: function(vnode) {
        api.getReport(vnode.attrs.id);
    },
    onbeforeupdate(vnode, old) {
        if (vnode.attrs.id !== old.attrs.id) {
            api.getReport(vnode.attrs.id);
        }
    },
    view: function(vnode) {
        if (api.content) {
            return [
                m("h1", vnode.attrs.id),
                m("div", api.content.map(function(q) {
                    return m("div.question", [
                        m("p", [
                            m("strong", q.question)
                        ]),
                        m("p", q.answer)
                    ])
                }))
            ];
        }
    }
};
