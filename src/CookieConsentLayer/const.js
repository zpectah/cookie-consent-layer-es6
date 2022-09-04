"use strict";
exports.__esModule = true;
exports.DEFAULT_OPTIONS = exports.DEFAULT_STATE = exports.DEFAULT_COOKIE_NAME = exports.DEFAULT_META_NAME = void 0;
exports.DEFAULT_META_NAME = 'CookieConsentLayer';
exports.DEFAULT_COOKIE_NAME = 'CC_LAYER';
exports.DEFAULT_STATE = {
    init: false,
    environment: undefined,
    revisionExpired: false,
    history: ['pending'],
    banner: {
        render: false,
        show: false,
        destroyed: false
    },
    dialog: {
        render: false,
        show: false,
        destroyed: false
    },
    categories: {
        show: false,
        table: false,
        dirty: false
    },
    language: 'en-US',
    languages: ['en-US'],
    cookie: null,
    preferences: {
        timestamp: null,
        event: null,
        accepted: [],
        declined: [],
        changed: []
    }
};
exports.DEFAULT_OPTIONS = {
    meta: {
        name: exports.DEFAULT_COOKIE_NAME,
        revision: 0,
        debug: false,
        delay: 0,
        classPrefix: 'ccl-',
        hideFromBots: false,
        ltr: true
    },
    cookie: {
        name: exports.DEFAULT_COOKIE_NAME,
        domain: '.your-domain.some',
        expiration: 365,
        path: '/',
        sameSite: 'Lax',
        rfc: false
    },
    scripts: {
        autoload: false,
        mode: 'opt-in'
    },
    consent: {
        force: false,
        categories: ['necessary', 'analytics', 'marketing', 'functional', 'personalization'],
        necessaryCategories: ['necessary'],
        staticCategories: [],
        showCategory: true,
        showCategoryTable: true,
        autoClearCookies: false,
        cookies: {
            necessary: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
            ],
            analytics: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
            ],
            marketing: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
            ],
            functional: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
            ],
            personalization: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false
                },
            ]
        }
    },
    banner: {
        id: 'CookieConsentLayerBanner',
        btnAcceptAllId: 'CookieConsentLayerBannerBtnAcceptAll',
        btnAcceptNecessaryId: 'CookieConsentLayerBannerBtnAcceptNecessary',
        layout: 'cloud',
        position: 'bottom center',
        transition: 'default'
    },
    dialog: {
        id: 'CookieConsentLayerDialog',
        btnAcceptAllId: 'CookieConsentLayerDialogBtnAcceptAll',
        btnAcceptNecessaryId: 'CookieConsentLayerDialogBtnAcceptNecessary',
        btnSaveId: 'CookieConsentLayerDialogBtnSave',
        layout: 'box',
        position: 'middle',
        transition: 'default'
    },
    language: 'en-US',
    locales: {
        'en-US': {
            common: {
                buttonAcceptAll: 'Accept all',
                buttonAcceptNecessary: 'Accept necessary',
                buttonSave: 'Save settings',
                buttonClose: 'Close'
            },
            banner: {
                title: 'We use cookies!',
                content: "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type=\"button\" data-ccl=\"show_dialog\">Let me choose</button>"
            },
            dialog: {
                title: 'Cookie preferences',
                primary: "I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href=\"#\">privacy policy</a>.",
                secondary: "This is secondary content block ... for some reasons ... with <a href=\"#\" target=\"_blank\">outer link</a> or <button type=\"button\" data-ccl=\"hide_dialog\">close dialog</button>"
            },
            revisionAlert: 'Sorry, but we changed our policy or whatever, so you must accept cookies again.',
            table: {
                colName: 'Name',
                colDomain: 'Domain',
                colExpiration: 'Expiration',
                colDescription: 'Description'
            },
            categories: {
                necessary: {
                    title: 'Strictly necessary cookies',
                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly'
                },
                analytics: {
                    title: 'Analytics and performance cookies',
                    description: 'These cookies allow the website to remember the choices you have made in the past'
                },
                marketing: {
                    title: 'Marketing and advertisement cookies',
                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you'
                },
                functional: {
                    title: 'Functional cookies',
                    description: 'Functional and not specified cookies'
                },
                personalization: {
                    title: 'Personalization cookies',
                    description: 'Personalization and not specified cookies'
                }
            }
        },
        'cs-CZ': {
            common: {
                buttonAcceptAll: 'Přimout vše',
                buttonAcceptNecessary: 'Přimout nezbytné',
                buttonSave: 'Uložit změny',
                buttonClose: 'Zavřít'
            },
            banner: {
                title: 'My používáme cookies!',
                content: "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type=\"button\" data-ccl=\"show_dialog\">Let me choose</button>"
            },
            dialog: {
                title: 'Preference koláčků',
                primary: "I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href=\"#\">privacy policy</a>.",
                secondary: "This is secondary content block ... for some reasons ... with <a href=\"#\" target=\"_blank\">outer link</a> or <button type=\"button\" data-ccl=\"hide_dialog\">close dialog</button>"
            },
            revisionAlert: 'Omlouváme se, ale došlo ke změně v našich pravidlech cookies a proto to musíte potvrdit znovu.',
            table: {
                colName: 'Název',
                colDomain: 'Doména',
                colExpiration: 'Expirace',
                colDescription: 'Poznámka'
            },
            categories: {
                necessary: {
                    title: 'Nezbytné cookies pro provoz',
                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly'
                },
                analytics: {
                    title: 'Analytické cookies',
                    description: 'These cookies allow the website to remember the choices you have made in the past'
                },
                marketing: {
                    title: 'Marketingové cookies',
                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you'
                },
                functional: {
                    title: 'Functional cookies',
                    description: 'Functional and not specified cookies'
                },
                personalization: {
                    title: 'Personalization cookies',
                    description: 'Personalization and not specified cookies'
                }
            }
        }
    },
    onAcceptAll: function (cookie, preferences) { },
    onAcceptNecessary: function (cookie, preferences) { },
    onChange: function (cookie, preferences) { },
    onInit: function (state) { },
    onToggle: function (preferences) { },
    onExpired: function (reason, state) { },
    onError: function (reason, message, state) { }
};
