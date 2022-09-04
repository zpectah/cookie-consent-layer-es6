export const getTimestamp = () => Math.round(new Date().getTime()/1000);

export const getToken = (length = 12) => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);

export const isClientBot = () => {
    // https://github.com/monperrus/crawler-user-agents
    let isBot = false;
    const botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    const re = new RegExp(botPattern, 'i');
    const userAgent = navigator.userAgent;
    if (re.test(userAgent)) isBot = true;

    return isBot;
};

export const getCookie = (name: string) => {
    let cookie = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookie) === 0) {
            return c.substring(cookie.length, c.length);
        }
    }
    return '';
};

export const setCookie = (name: string, value: string, expiration: number = 1) => {
    const d = new Date();
    d.setTime(d.getTime() + expiration * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

export const createElement = ({ tag = 'div', type, id, className, css, text, html, cclData, cclTarget, cclToggle, arias, on }: {
    tag?: string,
    type?: string,
    id?: string,
    className?: string,
    css?: string,
    text?: string,
    html?: string,
    cclData?: string,
    cclTarget?: string,
    cclToggle?: string,
    arias?: {
        label?: string,
        labeledBy?: string,
        modal?: string,
        hidden?: boolean,
        describedBy?: string,
    },
    on?: {
        click?: Function,
        hover?: Function,
        focus?: Function,
        change?: Function,
        blur?: Function,
        dblclick?: Function,
    },
}) => {
    const element: any = document.createElement(tag);
    if (type) element.type = type;
    if (id) element.id = id;
    if (className) element.className = className;
    if (css) element.style.cssText = css;
    if (text) element.innerText = text;
    if (html) element.innerHTML = html;
    if (cclData) element.dataset['ccl'] = cclData;
    if (cclTarget) element.dataset['ccl-target'] = cclTarget;
    if (cclToggle) element.dataset['ccl-toggle'] = cclToggle;
    if (arias) {
        if (arias.label) element.ariaLabel = arias.label;
        if (arias.labeledBy) element.ariaLabelledBy = arias.labeledBy;
        if (arias.modal) element.ariaModal = arias.modal;
        if (arias.hidden) element.ariaHidden = String(arias.hidden);
        if (arias.describedBy) element.ariaDescribedBy = arias.describedBy;
    }
    if (on) {
        if (on.click) element.onclick = on.click;
        if (on.hover) element.onmouseover = on.hover;
        if (on.focus) element.onfocus = on.focus;
        if (on.change) element.onchange = on.change;
        if (on.blur) element.onblur = on.blur;
        if (on.dblclick) element.ondblclick = on.dblclick;
    }

    return element;
};

export const createButtonElement = (id: string, className: string, text: string, cclData?: string) => {
    return createElement({
        id,
        className,
        text,
        cclData,
        tag: 'button',
        type: 'button',
        arias: {
            label: `button`,
        },
    });
};