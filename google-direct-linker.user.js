// ==UserScript==
// @name       Google Direct Linker
// @namespace  http://aycabta.github.io/
// @version    0.1.1
// @description  Skip redirection URL on Google search results.
// @include    /https?:\/\/www.google\.[^\/]+\/search.+/
// @copyright  2014+, Code Ass
// ==/UserScript==

(function() {
    var i;
    var links = document.getElementsByTagName("a");
    for (i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.hasAttribute("onmousedown")) {
            link.removeAttribute("onmousedown");
            if (link.removeEventListener) {
                link.removeEventListener("mousedown", link.onmousedown, false);
            } else if(link.detachEvent) {
                link.detachEvent("onmousedown", link.onmousedown);
            }
        }
    }
})();

