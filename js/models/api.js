"use strict";

var m = require("mithril");

var api = {
    me: "",
    getMe: function() {
        // XHR request
        return m.request({
            method: "GET",
            url: "https://me-api.daib17.me/"
        })
        .then(function(result) {
            api.me = result.data.description;
        });
    },

    content: "",
    getReport: function(id) {
        api.content = "";
        // XHR request
        return m.request({
            method: "GET",
            url: "https://me-api.daib17.me/reports/" + id
        })
        .then(function(result) {
            api.content = JSON.parse(result.data.content);
        });
    }
};

module.exports = api;
