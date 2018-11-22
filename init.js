// ==UserScript==
// @name              小米主题下载
// @namespace         https://github.com/vcheckzen/xiaomiThemeDownloader
// @version           1.0.1
// @icon              http://www.xiaomi.com/favicon.ico
// @description       在小米主题官网添加下载按钮
// @author            vcheckzen <https://github.com/vcheckzen/xiaomiThemeDownloader/issues>
// @supportURL        https://github.com/vcheckzen/xiaomiThemeDownloader
// @contributionURL   https://github.com/vcheckzen/xiaomiThemeDownloader
// @match             *://zhuti.xiaomi.com/detail/*
// @require           https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @run-at            document-end
// ==/UserScript==

(function () {
    'use strict';
    var O = window.location.href;
    var P = / ^http[s]{0,1}:\/\/zhuti.xiaomi.com\/detail\/[a-z,0-9]{8}-[a-z,0-9]{4}-[a-z,0-9]{4}-[a-z,0-9]{4}-?[a-z,0-9]{12}$/;
    if (!P.test(O)) return;
    var $ = $ || window.$;
    var E = ''; var M = ''; var U = window.atob("aHR0cDovL3ZlcndlbGt0ZS5haXdhci50dzo1NTU1L21pdWkvdGhlbWU=");
    $.ajax({ url: U, type: "post", data: { "originUrl": O }, async: false, timeout: 2000, success: function (data) { E = data.downloadUrl; M = data.msg; } })
    if (M == "success") {
        var btn = "<button class=\"btn-buy J_Push\" type=\"submit\">下载</button>";
        var form = "<form class=\"detail-buy\" action=\"" + E + "\">" + btn + "</form>";
        $("#J-downWrap").append(form);
    }
})();
