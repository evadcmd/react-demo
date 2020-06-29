import CryptoJS from 'crypto-js'
import {selector} from './tool'

const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF")
const iv = CryptoJS.enc.Utf8.parse("ABCDEF1234123412")

export const AES = {}

AES.decrypt = function(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    let decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

AES.encrypt = function(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CrytoJS.AES.encrypt(srcs, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.ciphertext.toString().toUpperCase()
}

const cipher = new JSEncrypt()
cipher.setPublicKey(selector('rsaPublicKey'))
export default cipher