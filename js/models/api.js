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

    title: "",
    content: "",
    getReport: function(id) {
        // XHR request
        return m.request({
            method: "GET",
            url: "https://me-api.daib17.me/reports/" + id
        })
        .then(function(result) {
            api.title = result.data.title;
            api.content = JSON.parse(result.data.content);
        });
    }
};

module.exports = api;
