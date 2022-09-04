"use strict";
exports.__esModule = true;
exports.createButtonElement = exports.createElement = exports.setCookie = exports.getCookie = exports.isClientBot = exports.getToken = exports.getTimestamp = void 0;
var getTimestamp = function () { return Math.round(new Date().getTime() / 1000); };
exports.getTimestamp = getTimestamp;
var getToken = function (length) {
    if (length === void 0) { length = 12; }
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
};
exports.getToken = getToken;
var isClientBot = function () {
    // https://github.com/monperrus/crawler-user-agents
    var isBot = false;
    var botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    var re = new RegExp(botPattern, 'i');
    var userAgent = navigator.userAgent;
    if (re.test(userAgent))
        isBot = true;
    return isBot;
};
exports.isClientBot = isClientBot;
var getCookie = function (name) {
    var cookie = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookie) === 0) {
            return c.substring(cookie.length, c.length);
        }
    }
    return '';
};
exports.getCookie = getCookie;
var setCookie = function (name, value, expiration) {
    if (expiration === void 0) { expiration = 1; }
    var d = new Date();
    d.setTime(d.getTime() + expiration * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
};
exports.setCookie = setCookie;
var createElement = function (_a) {
    var _b = _a.tag, tag = _b === void 0 ? 'div' : _b, type = _a.type, id = _a.id, className = _a.className, css = _a.css, text = _a.text, html = _a.html, cclData = _a.cclData, cclTarget = _a.cclTarget, cclToggle = _a.cclToggle, arias = _a.arias, on = _a.on;
    var element = document.createElement(tag);
    if (type)
        element.type = type;
    if (id)
        element.id = id;
    if (className)
        element.className = className;
    if (css)
        element.style.cssText = css;
    if (text)
        element.innerText = text;
    if (html)
        element.innerHTML = html;
    if (cclData)
        element.dataset['ccl'] = cclData;
    if (cclTarget)
        element.dataset['ccl-target'] = cclTarget;
    if (cclToggle)
        element.dataset['ccl-toggle'] = cclToggle;
    if (arias) {
        if (arias.label)
            element.ariaLabel = arias.label;
        if (arias.labeledBy)
            element.ariaLabelledBy = arias.labeledBy;
        if (arias.modal)
            element.ariaModal = arias.modal;
        if (arias.hidden)
            element.ariaHidden = String(arias.hidden);
        if (arias.describedBy)
            element.ariaDescribedBy = arias.describedBy;
    }
    if (on) {
        if (on.click)
            element.onclick = on.click;
        if (on.hover)
            element.onmouseover = on.hover;
        if (on.focus)
            element.onfocus = on.focus;
        if (on.change)
            element.onchange = on.change;
        if (on.blur)
            element.onblur = on.blur;
        if (on.dblclick)
            element.ondblclick = on.dblclick;
    }
    return element;
};
exports.createElement = createElement;
var createButtonElement = function (id, className, text, cclData) {
    return (0, exports.createElement)({
        id: id,
        className: className,
        text: text,
        cclData: cclData,
        tag: 'button',
        type: 'button',
        arias: {
            label: "button"
        }
    });
};
exports.createButtonElement = createButtonElement;
