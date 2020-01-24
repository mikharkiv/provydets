import React from 'react';
import 'mic-recorder-to-mp3' ;
import $ from 'jquery';

function requestAudd(file, method, q) {
    var data = new FormData();
    if (file != null)
        data.append("file", file);
    data.append("return", "deezer");
    data.append("api_token", "f540762d9f7dbfa0e9484b2e44f3d237");
    if (method != undefined)
        data.append('method', method)

    if (q != undefined)
        data.append('q', q)

    $.ajax({
        url: 'https://api.audd.io/',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        success: function (data) {
            console.table(data);
        }
    })
}