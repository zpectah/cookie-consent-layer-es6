import {
    Cookie,
    Preferences,
    CookieConsentLayerState,
    CookieConsentLayerOptions,
} from './types';

export const DEFAULT_META_NAME = 'CookieConsentLayer';

export const DEFAULT_COOKIE_NAME = 'CC_LAYER';

export const DEFAULT_STATE: CookieConsentLayerState = {
    init: false, // When service is initialized
    environment: undefined,
    revisionExpired: false, // When revision version is expired
    history: [ 'pending' ], // History of events
    banner: {
        render: false, // When banner is rendered in DOM
        show: false, // When banner is visible for user
        destroyed: false, // When banner is removed from DOM
    },
    dialog: {
        render: false, // When dialog is rendered in DOM
        show: false, // When dialog is visible for user
        destroyed: false, // When dialog is removed from DOM
    },
    categories: {
        show: false,
        table: false,
        dirty: false,
    },
    scripts: {
        site: [],
    },
    language: 'en-US', // Default selected language, will be set from options
    languages: [ 'en-US' ], // Current available language list, will be generated by locales object
    cookie: null, // Saved cookie from browser
    preferences: {
        timestamp: null, // Timestamp when cookie is set
        event: null, // Triggered event [all,necessary,custom]
        accepted: [], // Accepted categories
        declined: [], // Declined categories
        changed: [], // Categories what was changed, if any
    },
};

export const DEFAULT_OPTIONS: CookieConsentLayerOptions = {
    meta: {
        name: DEFAULT_COOKIE_NAME, // Will be used as service name
        revision: 0, // Instance revision, if value is changed and user have already accepted, banner will trigger again
        debug: false, // If true, it wil display console logs with events for easier debugging
        delay: 0, // When set, banner will show after this value in ms
        classPrefix: 'ccl-', // Global class prefix used also in styles. Be sure you know, why changing this value
        hideFromBots: false, // If you want to hide service from bot/crawler/webdriver. If set to true and service detects one of bot, will be not initialized
        ltr: true, // TODO
    },
    cookie: {
        name: DEFAULT_COOKIE_NAME, // Name of a cookie which be save in browser
        domain: '.your-domain.some', // Cookie domain
        expiration: 365, // Expiration of consent, if expires, banner will be showed again
        path: '/', // Cookie path
        sameSite: 'Lax', // Cookie on same site
        rfc: false, // RFC format of cookie, otherwise is json as string
    },
    scripts: {
        autoload: false, // TODO: If true, check all scripts elements on page with: 'data-cc-scope="true"' ... or something similar
        mode: 'opt-in', // TODO: ['opt-in', 'opt-out']
    },
    consent: {
        force: false, // TODO: User will be forced to select consent, displays transparent layer above the page
        categories: [ 'necessary', 'analytics', 'marketing', 'functional', 'personalization' ], // These categories will be rendered as options and also will be matched with locales[].categories
        necessaryCategories: [ 'necessary' ], // These categories will be set as necessary/disabled
        staticCategories: [], // These categories will be set as static/unchangeable
        showCategory: true, // If set to true category article will be rendered
        showCategoryTable: true, // If set to true cookie tables is rendered in category
        autoClearCookies: false, // TODO: If you want to remove cookies from browser which is not selected
        cookies: {
            necessary: [
                {
                    name: 'CookieConsentScope1',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope2',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            analytics: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            marketing: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            functional: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            personalization: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
        },
    },
    banner: {
        id: 'CookieConsentLayerBanner',
        btnAcceptAllId: 'CookieConsentLayerBannerBtnAcceptAll',
        btnAcceptNecessaryId: 'CookieConsentLayerBannerBtnAcceptNecessary',
        layout: 'cloud', // TODO: box/cloud/bar
        position: 'bottom center', // TODO: bottom/middle/top + left/center/right
        transition: 'default', // TODO: default/slide/zoom
    },
    dialog: {
        id: 'CookieConsentLayerDialog',
        btnAcceptAllId: 'CookieConsentLayerDialogBtnAcceptAll',
        btnAcceptNecessaryId: 'CookieConsentLayerDialogBtnAcceptNecessary',
        btnSaveId: 'CookieConsentLayerDialogBtnSave',
        layout: 'box', // TODO: box/bar
        position: 'middle', // TODO: bottom/middle/top
        transition: 'default', // TODO: default/slide/zoom
    },
    language: 'en-US', // Default language
    locales: {
        'en-US': {
            common: {
                buttonAcceptAll: 'Accept all',
                buttonAcceptNecessary: 'Accept necessary',
                buttonSave: 'Save settings',
                buttonClose: 'Close',
            },
            banner: {
                title: 'We use cookies!',
                content: `Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-ccl="show_dialog">Let me choose</button>`,
            },
            dialog: {
                title: 'Cookie preferences',
                primary: `I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#">privacy policy</a>.`,
                secondary: `This is secondary content block ... for some reasons ... with <a href="#" target="_blank">outer link</a> or <button type="button" data-ccl="hide_dialog">close dialog</button>`
            },
            revisionAlert: 'Sorry, but we changed our policy or whatever, so you must accept cookies again.',
            table: {
                colName: 'Name',
                colDomain: 'Domain',
                colExpiration: 'Expiration',
                colDescription: 'Description',
            },
            categories: {
                necessary: {
                    title: 'Strictly necessary cookies',
                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                },
                analytics: {
                    title: 'Analytics and performance cookies',
                    description: 'These cookies allow the website to remember the choices you have made in the past',
                },
                marketing: {
                    title: 'Marketing and advertisement cookies',
                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                },
                functional: {
                    title: 'Functional cookies',
                    description: 'Functional and not specified cookies',
                },
                personalization: {
                    title: 'Personalization cookies',
                    description: 'Personalization and not specified cookies',
                },
            },
        },
        'cs-CZ': {
            common: {
                buttonAcceptAll: 'Přimout vše',
                buttonAcceptNecessary: 'Přimout nezbytné',
                buttonSave: 'Uložit změny',
                buttonClose: 'Zavřít',
            },
            banner: {
                title: 'My používáme cookies!',
                content: `Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-ccl="show_dialog">Let me choose</button>`,
            },
            dialog: {
                title: 'Preference koláčků',
                primary: `I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#">privacy policy</a>.`,
                secondary: `This is secondary content block ... for some reasons ... with <a href="#" target="_blank">outer link</a> or <button type="button" data-ccl="hide_dialog">close dialog</button>`
            },
            revisionAlert: 'Omlouváme se, ale došlo ke změně v našich pravidlech cookies a proto to musíte potvrdit znovu.',
            table: {
                colName: 'Název',
                colDomain: 'Doména',
                colExpiration: 'Expirace',
                colDescription: 'Poznámka',
            },
            categories: {
                necessary: {
                    title: 'Nezbytné cookies pro provoz',
                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                },
                analytics: {
                    title: 'Analytické cookies',
                    description: 'These cookies allow the website to remember the choices you have made in the past',
                },
                marketing: {
                    title: 'Marketingové cookies',
                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                },
                functional: {
                    title: 'Functional cookies',
                    description: 'Functional and not specified cookies',
                },
                personalization: {
                    title: 'Personalization cookies',
                    description: 'Personalization and not specified cookies',
                },
            },
        },
    },
    onAcceptAll: function (cookie: Cookie, preferences: Preferences) {},
    onAcceptNecessary: function (cookie: Cookie, preferences: Preferences) {},
    onChange: function (cookie: Cookie, preferences: Preferences) {},
    onInit: function (state: CookieConsentLayerState) {},
    onToggle: function (preferences: Preferences) {},
    onExpired: function (reason: string, state: CookieConsentLayerState) {},
    onError: function (reason: string, message: string, state: CookieConsentLayerState) {},
};
