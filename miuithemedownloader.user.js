// ==UserScript==
// @name              MIUI 主题下载器
// @namespace         https://github.com/vcheckzen/MIUIThemeDownloader
// @version           1.0.8
// @icon              http://www.xiaomi.com/favicon.ico
// @description       恢复 MIUI 主题官网的下载按钮
// @author            https://github.com/vcheckzen
// @supportURL        https://github.com/vcheckzen/MIUIThemeDownloader/issues
// @match             *zhuti.xiaomi.com/detail/*
// @grant             GM_xmlhttpRequest
// @run-at            document-end
// ==/UserScript==

(() => {
    'use strict';
    GM_xmlhttpRequest({
        method: 'GET', url: location.href.replace(atob('emh1dGkueGlhb21pLmNvbS9kZXRhaWw='),
            atob('dGhtLm1hcmtldC54aWFvbWkuY29tL3RobS9kb3dubG9hZC92Mg==')),
        onload: res => $('#J-downWrap').append(
            `<form class="detail-buy" action="{{downloadUrl}}">
                <button class="btn-buy J_Push" type="submit">下载</button>
            </form>`.replace(/{{downloadUrl}}/, JSON.parse(res.responseText).apiData.downloadUrl))
    });
})();
