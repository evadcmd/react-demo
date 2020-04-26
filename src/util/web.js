/**
 * http AJAX library using Fetch API
 */

function metaSelector(name) {
    const {content} = document.querySelector(`meta[name=${name}]`)
    return content;
}

export const CONTEXT_PATH = metaSelector('context-path')

const CONFIG = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    redirect: 'error'
}

const headers = {
    'Content-Type': 'application/json' 
}

function validate(resp) {
    return resp.ok && resp.status === 200
}

function queryString(data) {
    return '?' + Object.entries(data).map(([k, v]) => `${k}=${v}`).join('&')
}

export const http = {}

http.get = async (url, data, json=true) => {
    const resp = await fetch(url + queryString(data), CONFIG)
    if (!validate(resp))
        location.reload()
    return await json ? resp.json() : resp
}

http.post = async (url, data, json=true) => {
    const resp = await fetch(url, {method: 'POST', headers, body: JSON.stringify(data), ...CONFIG})
    if (!validate(resp))
        location.reload()
    return await json ? resp.json() : resp
}

http.put = async (url, data, json=true) => {
    const resp = await fetch(url, {method: 'POST', headers, body: JSON.stringify(data), ...CONFIG})
    if (!validate(resp))
        location.reload()
    return await json ? resp.json() : resp
}

http.get = async (url, data, json=true) => {
    const resp = await fetch(url + queryString(data), {method: 'DELETE', ...CONFIG})
    if (!validate(resp))
        location.reload()
    return await json ? resp.json() : resp
}