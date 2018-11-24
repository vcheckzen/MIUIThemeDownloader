// ==UserScript==
// @name              小米主题下载
// @namespace         https://github.com/vcheckzen/xiaomiThemeDownloader
// @version           1.0.5
// @icon              http://www.xiaomi.com/favicon.ico
// @description       在小米主题官网添加下载按钮
// @author            vcheckzen <https://github.com/vcheckzen/xiaomiThemeDownloader/issues>
// @supportURL        https://github.com/vcheckzen/xiaomiThemeDownloader
// @contributionURL   https://github.com/vcheckzen/xiaomiThemeDownloader
// @match             *://zhuti.xiaomi.com/detail/*
// @require           https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @run-at            document-end
// ==/UserScript==

(function () {
    'use strict';
    var O = window.location.href;
    var P = new RegExp("^https?://zhuti\.xiaomi\.com/detail/[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$");
    if (P.test(O)) {
        var $ = $ || window.$;
        $.ajax({
            url: window.atob("aHR0cDovL3ZlcndlbGt0ZS5haXdhci50dzo1NTU1L21pdWkvdGhlbWU="), type: "post", data: { "originUrl": O }, timeout: 5000, success: function (data) {
                if (data.msg == "success") {
                    var btn = "<button class=\"btn-buy J_Push\" type=\"submit\">下载</button>";
                    var form = "<form class=\"detail-buy\" action=\"" + data.downloadUrl + "\">" + btn + "</form>";
                    $("#J-downWrap").append(form);
                }
            }
        });
    }
})();
