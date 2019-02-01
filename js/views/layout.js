"use strict";

var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu", [
                m("ul", [
                    m("li", [
                        m("img", {
                            src: "img/mithril.png"
                        }),
                    ]),
                    m("li", [
                        m("a", {
                            href: "/",
                            oncreate: m.route.link
                        }, "Me")
                    ]),
                    m("li", [
                        m("a", {
                            href: "/reports/kmom01",
                            oncreate: m.route.link
                        }, "kmom01")
                    ])
                ])
            ]),
            m("section", vnode.children)
        ])
    }
};
