"use strict";

var m = require("mithril");
var api = require("../models/api");

module.exports = {
    oninit: api.getMe,
    view: function(vnode) {
        return [
            m("h1", "Me"),
            m("p", api.me)
        ];
    }
};
