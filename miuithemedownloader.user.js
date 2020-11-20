// ==UserScript==
// @name              MIUI 主题下载器
// @namespace         https://github.com/vcheckzen/MIUIThemeDownloader
// @version           1.1.0
// @icon              http://www.xiaomi.com/favicon.ico
// @description       恢复 MIUI 主题官网的下载按钮
// @author            https://github.com/vcheckzen
// @supportURL        https://github.com/vcheckzen/MIUIThemeDownloader/issues
// @match             *://zhuti.xiaomi.com/*
// @grant             GM_xmlhttpRequest
// @run-at            document-end
// ==/UserScript==

(() => {
    'use strict';
    GM_xmlhttpRequest({
        method: 'GET', url: location.href.replace(atob('emh1dGkueGlhb21pLmNvbS9kZXRhaWw='),
            atob('dGhtLm1hcmtldC54aWFvbWkuY29tL3RobS9kb3dubG9hZC92Mg=='))
            + `?miuiUIVersion=${document.querySelector('a.uiversion.ved').innerHTML}`,
        onload: res => $('#sidebar > div > div.mod.userinfos').append(
            `<form class="detail-buy" action="${JSON.parse(res.responseText).apiData.downloadUrl}">
                <button class="btn-buy J_Push" type="submit">下载</button>
            </form>`)
    });
})();
