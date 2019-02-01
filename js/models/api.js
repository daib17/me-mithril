"use strict";

var m = require("mithril");

var api = {
    me: "",
    getMe: function() {
        // XHR request
        return m.request({
            method: "GET",
            url: "http://localhost:8333/"
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
            url: "http://localhost:8333/reports/" + id
        })
        .then(function(result) {
            api.content = JSON.parse(result.data.content);
        });
    }
};

module.exports = api;
