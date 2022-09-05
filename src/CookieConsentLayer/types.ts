import {
    environmentTypeKeys,
    preferenceEventKeys,
    preferenceStateEventKeys,
    scriptsModeKeys,
    defaultCategoryKeys,
} from './enums';

export type preferenceEventKeyTypes = keyof typeof preferenceEventKeys;

export type preferenceStateKeyTypes = keyof typeof preferenceStateEventKeys;

export type scriptsModeKeyTypes = keyof typeof scriptsModeKeys;

export type bundleEnvironmentType = keyof typeof environmentTypeKeys | undefined;

export type categoryNameType = keyof typeof defaultCategoryKeys | string;

export type languageKeyType = string;

export type uuidType = string | undefined;

export type commonElementNodeType = HTMLElement;

export type commonElementType = Element & HTMLElement & {
    innerText: string;
};

export type commonInputElementType = Element & HTMLElement & HTMLInputElement & {
    checked: string | boolean,
} & any; // TODO

export type commonScriptElementType = HTMLScriptElement | any;

export type layerSelectorsType = {
    [k: string]: {
        [k: string]: string,
    },
};

export type layerNodesType = {
    [k: string]: Function,
};

export type layerEventsType = {
    [k: string]: any,
};

export type layerNodesEventsType = {
    [k: string]: (this: HTMLElement, ev: MouseEvent) => any,
};

export type consentCookieObjectType = {
    name: string,
    domain: string,
    expiration: number,
    description?: string,
    regex?: boolean,
};

export type localesCategoriesObjectType = {
    title: string,
    description: string,
};

export type localesObjectType = {
    common: {
        buttonAcceptAll: string,
        buttonAcceptNecessary: string,
        buttonSave: string,
        buttonClose: string,
    },
    banner: {
        title: string,
        content: string,
    },
    dialog: {
        title: string,
        primary: string,
        secondary: string,
    },
    revisionAlert: string,
    table: {
        colName: string,
        colDomain: string,
        colExpiration: string,
        colDescription: string,
    },
    categories: {
        [ k: categoryNameType ]: localesCategoriesObjectType,
    },
};

export type layerConsentType = {
    addCookie: (category: categoryNameType, cookies: consentCookieObjectType[]) => void,
    removeCookie: (category: categoryNameType, cookieNames: string[]) => void,
};

export type siteScriptObjectType = {
    category: categoryNameType,
    baseURI: string,
    async: boolean,
    src: string,
};

export interface Preferences {
    timestamp: number | null,
    event: string | null,
    accepted: categoryNameType[],
    declined: categoryNameType[],
    changed: categoryNameType[],
}

export interface Cookie {
    categories: categoryNameType[],
    uuid: string | undefined,
    revision: number,
    rfc: boolean,
    dateCreated: string,
    dateUpdated: string,
    data: any | null,
}

export interface CookieData {
    current: Cookie | null,
    createdDate: string,
    updatedDate: string,
    isExpiredDate: boolean,
    isExpiredRevision: boolean,
}

export interface CookieConsentLayerState {
    init: boolean,
    environment: bundleEnvironmentType,
    revisionExpired: boolean,
    history: string[],
    banner: {
        render: boolean,
        show: boolean,
        destroyed: boolean,
    },
    dialog: {
        render: boolean,
        show: boolean,
        destroyed: boolean,
    },
    categories: {
        render: boolean,
        table: boolean,
        dirty: boolean,
    },
    scripts: {
        site: siteScriptObjectType[],
    },
    language: string,
    languages: string[],
    cookie: Cookie | null | undefined,
    preferences: Preferences,
}

export interface CookieConsentLayerOptions {
    meta: {
        name: string,
        revision: number,
        debug: boolean,
        delay: number,
        classPrefix: string,
        hideFromBots: boolean,
        ltr: boolean,
    },
    cookie: {
        name: string,
        domain: string,
        expiration: number,
        path: string,
        sameSite: string,
        rfc: boolean,
    },
    scripts: {
        autoload: boolean,
        mode: scriptsModeKeyTypes,
    },
    consent: {
        force: boolean,
        categories: categoryNameType[],
        necessaryCategories: categoryNameType[],
        staticCategories: categoryNameType[],
        showCategory: boolean,
        showCategoryTable: boolean,
        expandableCategory: boolean,
        autoClearCookies: boolean,
        cookies: {
            [ k: categoryNameType ]: consentCookieObjectType[],
        },
    },
    banner: {
        id: string,
        btnAcceptAllId: string,
        btnAcceptNecessaryId: string,
        layout: 'box' | 'cloud' | 'bar',
        position: 'bottom left' | 'bottom center' | 'bottom right' | 'middle left' | 'middle center' | 'middle right' | 'top left' | 'top center' | 'top right',
        transition: 'default' | 'slide' | 'zoom',
    },
    dialog: {
        id: string,
        btnAcceptAllId: string,
        btnAcceptNecessaryId: string,
        btnSaveId: string,
        layout: 'box' | 'bar',
        position: 'bottom' | 'middle' | 'top',
        transition: 'default' | 'slide' | 'zoom',
    },
    language: languageKeyType,
    locales: {
        [ k: languageKeyType ]: localesObjectType,
    },
    onAcceptAll: (cookie: Cookie, preferences: Preferences) => void,
    onAcceptNecessary: (cookie: Cookie, preferences: Preferences) => void,
    onChange: (cookie: Cookie, preferences: Preferences) => void,
    onInit: (state: CookieConsentLayerState, consent: layerConsentType) => void,
    onToggle: (preferences: Preferences) => void,
    onExpired: (reason: string, state: CookieConsentLayerState) => void,
    onError: (reason: string, message: string, state: CookieConsentLayerState) => void,
}

export interface CookieConsentLayerProps {
    getState: Function,
    getPreferences: Function,
    getOptions: Function,
    getNodes: Function,
    getSelectors: Function,
    init: Function,
    initButtonDomEvents: Function,
    removeButtonDomEvents: Function,
    initToggleDomEvents: Function,
    removeToggleDomEvents: Function,
    initDropdownDomEvents: Function,
    removeDropdownDomEvents: Function,
    changeLanguage: Function,
    changeLocales: Function,
    showBanner: Function,
    hideBanner: Function,
    destroyBanner: Function,
    showDialog: Function,
    hideDialog: Function,
    destroyDialog: Function,
    getCookie: Function,
    destroyCookie: Function,
    addConsentCookie: Function,
    removeConsentCookie: Function,
}

export interface constructorPropType {
    options: Partial<CookieConsentLayerOptions>,
    scope: string,
    uuid?: uuidType,
}
