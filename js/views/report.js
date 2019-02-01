"use strict";

var m = require("mithril");
var api = require("../models/api");

module.exports = {
    oninit: function(vnode) {
        api.getReport(vnode.attrs.id);
    },
    view: function(vnode) {
        if (api.content) {
            return [
                m("h1", api.title),
                m("div", api.content.map(function(q) {
                    return m("div.question", [
                        m("p", [
                            m("strong", q.question)
                        ]),
                        m("p", q.answer)
                    ])
                }))
            ];
        } else {
            return [
                m("p", "Loading...")
            ];
        }
    }
};
