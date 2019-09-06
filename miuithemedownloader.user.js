// ==UserScript==
// @name              MIUI 主题下载器
// @namespace         https://github.com/vcheckzen/MIUIThemeDownloader
// @version           1.0.7
// @icon              http://www.xiaomi.com/favicon.ico
// @description       恢复 MIUI 主题官网的下载按钮
// @author            https://github.com/vcheckzen
// @supportURL        https://github.com/vcheckzen/MIUIThemeDownloader/issues
// @contributionURL   https://github.com/vcheckzen/MIUIThemeDownloader
// @match             *://zhuti.xiaomi.com/detail/*
// @grant             GM_xmlhttpRequest
// @run-at            document-end
// ==/UserScript==

(() => {
    'use strict';
    let O = location.href;
    const R = new RegExp('^https?://zhuti.xiaomi.com/detail/[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$');
    if (R.test(O)) {
        const F = window.atob('emh1dGkueGlhb21pLmNvbS9kZXRhaWw=');
        const L = window.atob('dGhtLm1hcmtldC54aWFvbWkuY29tL3RobS9kb3dubG9hZC92Mg==');
        GM_xmlhttpRequest({
            method: 'GET',
            url: O.replace(F, L),
            onload: res => {
                if (res.status === 200) {
                    let data = JSON.parse(res.responseText);
                    if (data.apiCode === 0) {
                        let btn = '<button class="btn-buy J_Push" type="submit">下载</button>';
                        let form = '<form class="detail-buy" action="' + data.apiData.downloadUrl + '">' + btn + '</form>';
                        $('#J-downWrap').append(form);
                    }
                }
            }
        });
    }
})();
