import React from 'react';
import $ from 'jquery';

const AUDD_URL = "https://api.audd.io/"
const DEEZER_URL = "https://api.deezer.com/search/"
const PROXY = 'https://cors-anywhere.herokuapp.com/'
const KEY_TOKEN = "f540762d9f7dbfa0e9484b2e44f3d237"
const RETURN_VALUE = "deezer"

function requestAudd(call, func, file, method, q) {
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
			console.table(data)
			func(call, data)
		}
	})
}

function requestDeezer(call, func, title, artist) {
	$.ajax({
		url: PROXY + DEEZER_URL + 'track?q=' + title,
		data: null,
		cache: false,
		contentType: false,
		processData: false,
		method: 'GET',
		success: function (data) {
			console.table(data)
			func(call,data)
		}
	})
}

export {requestAudd}
export {requestDeezer}