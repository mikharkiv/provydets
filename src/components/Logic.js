import React from 'react';
import $ from 'jquery';

const AUDD_URL = "https://api.audd.io/"
const KEY_TOKEN = "f540762d9f7dbfa0e9484b2e44f3d237"
const RETURN_VALUE = "deezer"

function requestAudd(call,func, file, method, q) {
    let data = new FormData();
    if (file != null)
        data.append("file", file);
    data.append("return", RETURN_VALUE);
    data.append("api_token", KEY_TOKEN);
    if (method != undefined)
        data.append('method', method)

    if (q != undefined)
        data.append('q', q)

    $.ajax({
        url: AUDD_URL,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        success: function (data) {
            func(call,data)
        }
    })
}

export {requestAudd}