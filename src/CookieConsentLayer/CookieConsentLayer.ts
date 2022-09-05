import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import indexOf from 'lodash/indexOf';

import {
    getTimestamp,
    getToken,
    isClientBot,
    getCookie,
    setCookie,
    createElement,
    createButtonElement,
} from '../helpers';
import {
    DEFAULT_STATE,
    DEFAULT_OPTIONS,
} from './const';
import {
    preferenceEventKeys,
    preferenceStateEventKeys,
} from './enums';
import {
    bundleEnvironmentType,
    commonElementNodeType,
    commonElementType,
    commonInputElementType,
    commonScriptElementType,
    uuidType,
    preferenceStateKeyTypes,
    categoryNameType,
    constructorPropType,
    layerSelectorsType,
    layerNodesType,
    layerEventsType,
    layerNodesEventsType,
    consentCookieObjectType,
    Cookie,
    CookieData,
    CookieConsentLayerState,
    CookieConsentLayerOptions,
    CookieConsentLayerProps,
} from './types';

declare global {
    interface Window { CookieConsentLayer: CookieConsentLayerProps }
}

class CookieConsentLayer {
    state: CookieConsentLayerState;
    readonly options: CookieConsentLayerOptions;
    readonly scope: string;
    readonly uuid: uuidType;
    readonly selectors: layerSelectorsType;
    readonly nodes: layerNodesType;
    readonly events: layerEventsType;
    readonly nodesEvents: layerNodesEventsType;

    readonly tokens = {
        BTN_ACCEPT_ALL_CCL: 'button_acceptAll',
        BTN_ACCEPT_NECESSARY_CCL: 'button_acceptNecessary',
        BTN_SAVE_CCL: 'button_save',
        REVISION_ALERT_CCL: 'revision_alert',
        BTN_SHOW_DIALOG_CCL: 'show_dialog',
        BTN_HIDE_DIALOG_CCL: 'hide_dialog',
        BTN_SHOW_BANNER_CCL: 'show_banner',
        BTN_HIDE_BANNER_CCL: 'hide_banner',
        CATEGORIES_TABLE_CCL: 'categories_table',
        CATEGORY_TOGGLE_PFX_CCL: 'category_',
        DATA_CCL: 'data-ccl',
        DATA_CCL_TARGET: 'data-ccl-target',
        DATA_CCL_TOGGLE: 'data-ccl-toggle',
        DATA_CCL_CATEGORY: 'data-ccl-category',
    };
    readonly banner = {
        init: () => {
            if (!this.state.dialog.destroyed) {
                this.renderBannerElement();
                this.state.banner.render = true;
            } else {
                this.err('banner', 'Banner has been removed from DOM, try reload page');
            }
        },
        show: (delay: number = 0) => {
            const elem: commonElementType | null = document.getElementById(this.options.banner.id);
            const runner = () => {
                if (elem) {
                    elem.style.display = 'block';
                    elem.ariaHidden = 'false';
                    this.state.banner.show = true;
                }
            };
            if (delay > 0) {
                setTimeout(runner, delay);
            } else {
                runner();
            }
        },
        hide: () => {
            const elem: commonElementType | null = document.getElementById(this.options.banner.id);
            if (elem) {
                elem.style.display = 'none';
                elem.ariaHidden = 'true';
                this.state.banner.show = false;
            }
        },
        destroy: () => {
            const elem: commonElementType | null = document.getElementById(this.options.banner.id);
            if (elem) {
                elem.remove();
                this.state.banner.render = false;
                this.state.banner.show = false;
                this.state.banner.destroyed = true;
            }
        },
    };
    readonly dialog = {
        init: () => {
            if (!this.state.dialog.destroyed) {
                this.renderDialogElement();
                this.state.dialog.render = true;
            } else {
                this.err('dialog', 'Dialog has been removed from DOM, try reload page');
            }
        },
        show: (delay: number = 0) => {
            const elem: commonElementType | null = document.getElementById(this.options.dialog.id);
            const runner = () => {
                if (elem) {
                    elem.style.display = 'block';
                    elem.ariaHidden = 'false';
                    this.state.dialog.show = true;
                }
            };
            if (delay > 0) {
                setTimeout(runner, delay);
            } else {
                runner();
            }
        },
        hide: () => {
            const elem: commonElementType | null = document.getElementById(this.options.dialog.id);
            if (elem) {
                elem.style.display = 'none';
                elem.ariaHidden = 'true';
                this.state.categories.dirty = false;
                this.state.dialog.show = false;
            }
        },
        destroy: () => {
            const elem: commonElementType | null = document.getElementById(this.options.dialog.id);
            if (elem) {
                elem.remove();
                this.state.categories.dirty = false;
                this.state.categories.show = false;
                this.state.categories.table = false;
                this.state.dialog.render = false;
                this.state.dialog.show = false;
                this.state.dialog.destroyed = true;
            }
        },
    };
    readonly layout = {
        bannerBody: (title: string, content: string, revision?: string) => {
            const _title = `<div class="${this.selectors.banner.bodyTitleClassName}">${title}</div>`;
            const _content = `<div class="${this.selectors.banner.bodyContentClassName}">${content}</div>`;
            const _revision = revision && `<div id="${this.tokens.REVISION_ALERT_CCL}" class="${this.selectors.banner.bodyRevisionClassName}">${revision}</div>`;

            return `${_title}${_revision}${_content}`;
        },
        dialogBody: (title: string, primary: string, secondary: string | null, close: string) => {
            const _close = `<button type="button" ${this.tokens.DATA_CCL}="${this.tokens.BTN_HIDE_DIALOG_CCL}" class="${this.selectors.dialog.bodyCloseClassName}" title='${close}'>X</button>`;
            const _title = `<h3 class="${this.selectors.dialog.bodyTitleClassName}">${title}</h3>`;
            const _primary = `<div class="${this.selectors.dialog.bodyPrimaryClassName}">${primary}</div>`;
            const _secondary = secondary && `<div class="${this.selectors.dialog.bodySecondaryClassName}">${secondary}</div>`;
            const _table = `<div ${this.tokens.DATA_CCL_TARGET}="${this.tokens.CATEGORIES_TABLE_CCL}" class="${this.selectors.dialog.bodyTableClassName}">Loading table, please wait</div>`;

            return `${_close}${_title}${_primary}${_table}${_secondary}`;
        },
        categoryBody: () => {
            // TODO
        },
        tableBody: () => {
            // TODO
        },
    };
    readonly cookies = {
        get: (name: string = this.options.cookie.name): Cookie | null => {
            const value = getCookie(name);

            return value && (this.options.cookie.rfc ? JSON.parse(decodeURIComponent(value)) : JSON.parse(value));
        },
        getData: (): CookieData => {
            const cookie = this.cookies.get();
            const today = new Date();
            const updated = cookie && cookie.dateUpdated;
            console.log('compare two dates, if date is expired ... (updated + expiration) >= today ... ', today.toISOString(), updated)
            return {
                current: cookie,
                createdDate: updated || today.toISOString(),
                updatedDate: today.toISOString(),
                isExpiredDate: false, // TODO: compare dates with cookie expiration
                isExpiredRevision: cookie ? (cookie.revision !== this.options.meta.revision) : false,
            };
        },
        set: (value: string | Object, name: string = this.options.cookie.name, expiration: number = this.options.cookie.expiration) => {
            const parsedValue = this.options.cookie.rfc ? encodeURIComponent(JSON.stringify(value)) : JSON.stringify(value);
            setCookie(name, parsedValue, expiration);
        },
        destroy: (name = this.options.cookie.name) => setCookie('', name, -1),
    };
    readonly consent = {
        addCookie: (category: categoryNameType, cookies: consentCookieObjectType[]) => {
            this.options.consent.cookies[category] = [ ...this.options.consent.cookies[category], ...cookies ];
            this.renderCategoryTable();
            if (cookies.length > 0) this.log(`## Consent cookie table '${category}' was updated`, this.options.consent.cookies[category]);
        },
        removeCookie: (category: categoryNameType, cookieNames: string[]) => {
            const cookies = [ ...this.options.consent.cookies[category] ];
            cookieNames.map((name) => {
                const fc = cookies.find((cookie) => cookie.name === name);
                const index = indexOf(cookies, fc)
                if (index > -1) cookies.splice(index, 1);
            });
            this.options.consent.cookies[category] = cookies;
            this.renderCategoryTable();
            if (cookieNames.length > 0) this.log(`## Consent cookie table '${category}' was updated`, this.options.consent.cookies[category]);
        },
    };

    constructor(
        options: constructorPropType['options'],
        scope?: constructorPropType['scope'],
        uuid?: constructorPropType['uuid'],
    ) {
        this.state = cloneDeep(DEFAULT_STATE);
        this.options = merge(DEFAULT_OPTIONS, options);
        this.scope = scope || 'default';
        this.uuid = uuid || getToken(6);
        this.selectors = {
            common: {
                layoutClassPfx: 'layout--',
                positionClassPfx: 'position--',
                transitionClassPfx: 'transition--',
            },
            btn: {
                acceptAllClassName: `${this.options.meta.classPrefix}button ${this.options.meta.classPrefix}button--primary`,
                acceptNecessaryClassName: `${this.options.meta.classPrefix}button ${this.options.meta.classPrefix}button--secondary`,
                saveChangesClassName: `${this.options.meta.classPrefix}button ${this.options.meta.classPrefix}button--secondary`,
            },
            banner: {
                wrapperId: this.options.banner.id,
                wrapperClassName: `${this.options.meta.classPrefix}banner-wrapper`,
                bodyId: `${this.options.banner.id}_body`,
                bodyClassName: `${this.options.meta.classPrefix}banner-body`,
                bodyTitleClassName: `${this.options.meta.classPrefix}banner-body-title`,
                bodyRevisionClassName: `${this.options.meta.classPrefix}banner-body-revision`,
                bodyContentClassName: `${this.options.meta.classPrefix}banner-body-content`,
                actionsId: `${this.options.banner.id}_actions`,
                actionsClassName: `${this.options.meta.classPrefix}banner-actions`,
            },
            dialog: {
                wrapperId: this.options.dialog.id,
                wrapperClassName: `${this.options.meta.classPrefix}dialog-wrapper`,
                bodyId: `${this.options.dialog.id}_body`,
                bodyClassName: `${this.options.meta.classPrefix}dialog-body`,
                bodyCloseClassName: `${this.options.meta.classPrefix}dialog-body-close`,
                bodyTitleClassName: `${this.options.meta.classPrefix}dialog-body-title`,
                bodyTableClassName: `${this.options.meta.classPrefix}dialog-body-table`,
                bodyPrimaryClassName: `${this.options.meta.classPrefix}dialog-body-primary`,
                bodySecondaryClassName: `${this.options.meta.classPrefix}dialog-body-secondary`,
                actionsId: `${this.options.dialog.id}_actions`,
                actionsClassName: `${this.options.meta.classPrefix}dialog-actions`,
            },
            categoryRows: {
                categoryRowClassName: `${this.options.meta.classPrefix}category-row`,
                categoryOuterClassName: `${this.options.meta.classPrefix}category-outer`,
                categoryRowInnerClassName: `${this.options.meta.classPrefix}category-row-inner`,
                categoryTableClassName: `${this.options.meta.classPrefix}category-table`,
                toggleIdPrefix: `${this.uuid}_toggle_`,
                toggleClassName: `${this.options.meta.classPrefix}category-toggle`,
                toggleLabelClassName: `${this.options.meta.classPrefix}category-toggle-label`,
                toggleInputClassName: `${this.options.meta.classPrefix}category-toggle-input`,
                block: `${this.options.meta.classPrefix}category-block`,
                blockHeading: `${this.options.meta.classPrefix}category-block-heading`,
                blockHeadingToggle: `${this.options.meta.classPrefix}category-block-heading-toggle`,
                blockTable: `${this.options.meta.classPrefix}category-block-table`,
                blockCollapsible: `${this.options.meta.classPrefix}category-block-collapsible`,
                blockHeadingTitle: `${this.options.meta.classPrefix}category-block-heading-title`,
                blockDescription: `${this.options.meta.classPrefix}category-block-description`,
            },
            stateClassName: {
                isChecked: 'is-checked',
            },
        };
        this.nodes = {
            showDialogButton: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_SHOW_DIALOG_CCL}"]`),
            hideDialogButton: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_HIDE_DIALOG_CCL}"]`),
            showBannerButton: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_SHOW_BANNER_CCL}"]`),
            hideBannerButton: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_HIDE_BANNER_CCL}"]`),
            acceptAllButton: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_ACCEPT_ALL_CCL}"]`),
            acceptNecessaryButton: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_ACCEPT_NECESSARY_CCL}"]`),
            saveChangesButton: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_SAVE_CCL}"]`),
        };
        this.events = {
            showBanner: (e: Event) => {
                e.preventDefault();
                this.banner.show();
            },
            hideBanner: (e: Event) => {
                e.preventDefault();
                this.banner.hide();
            },
            showDialog: (e: Event) => {
                e.preventDefault();
                this.dialog.show();
            },
            hideDialog: (e: Event) => {
                e.preventDefault();
                this.dialog.hide();
            },
            acceptNecessary: (e: Event) => {
                e.preventDefault();
                this.onAcceptNecessaryHandler();
            },
            acceptAll: (e: Event) => {
                e.preventDefault();
                this.onAcceptAllHandler();
            },
            saveChanges: (e: Event) => {
                e.preventDefault();
                this.onChangeHandler();
            },
            toggleCategory: (e: Event, category: categoryNameType) => {
                e.preventDefault();
                this.categoryToggleHandler(category, e);
            },
        };
        this.nodesEvents = {
            showDialogButton: this.events.showDialog,
            hideDialogButton: this.events.hideDialog,
            showBannerButton: this.events.showBanner,
            hideBannerButton: this.events.hideBanner,
            acceptAllButton: this.events.acceptAll,
            acceptNecessaryButton: this.events.acceptNecessary,
            saveChangesButton: this.events.saveChanges,
        };

        this.init();
    }

    /**
     * References
     **/
    _getState() {
        return this.state;
    }
    _getPreferences() {
        return this.state.preferences;
    }
    _getOptions() {
        return this.options;
    }
    _getNodes() {
        return this.nodes;
    }
    _getSelectors() {
        return this.selectors;
    }

    /**
     * Common
     **/
    log(...args: any) {
        if (this.options.meta.debug) console.log(...args);
    }
    err(reason: string, message: string) {
        console.warn(`${reason}:${message}`, this.state);
        if (this.options.onError && typeof this.options.onError === 'function') this.options.onError(reason, message, this.state);
    }
    historyPush(arg: string) {
        this.state.history.push(arg);
    }

    /**
     * Scripts
     **/
    browseSiteScripts() {
        // const scriptsAll = document.getElementsByTagName('script');
        const scriptsToken = document.querySelectorAll(`[${this.tokens.DATA_CCL_CATEGORY}]`);
        const scripts: any[] = [];
        scriptsToken.forEach((node: commonScriptElementType) => {
            scripts.push({
                category: node.dataset.cclCategory,
                baseURI: node.baseURI,
                async: node.async,
                src: node.src,
            });
            if (this.options.scripts.autoload) node.remove();
        });

        /*

        Other logic

        */

        this.state.scripts.site = [ ...scripts ];
    }
    appendSiteScripts() {
        console.log('append to body these <script> tags', this.state.scripts.site);
    }
    scriptsAutoloadController(event: string, data: any) {
        if (this.options.scripts.autoload) {
            // TODO: handle selected cookie category with loaded cookies ...
            // toggle remove or call selected ...
            console.log('Trigger: scriptsAutoloadController -> autoload features', event, data);
        }
    }

    /**
     * Cookies
     **/
    cookieLoaderController(event: string, data: any) {
        if (this.options.consent.autoClearCookies) {
            // TODO: Handle browser cookies when user save new settings
            // get a list of current cookies and compare to categories which is accepted and delete rest
            console.log('Trigger: cookieAutoloader() -> autoClearCookies features', event, data);
        }
    }

    /**
     * Language
     **/
    changeLanguage(lang = this.options.language, changeLocales = true) {
        this.state.language = lang;
        changeLocales && this.setLocalesContent(lang);
    }

    /**
     * Locales
     **/
    getLocales(lang = this.state.language) {
        return this.options.locales[lang];
    }
    setLocalesContent(lang = this.state.language) {
        const cookieData = this.cookies.getData();
        const locales = this.getLocales(lang);
        const elBannerBodyHtml = document.getElementById(this.selectors.banner.bodyId);
        const elDialogBodyHtml = document.getElementById(this.selectors.dialog.bodyId);
        this.nodes.acceptAllButton().forEach((node: commonElementType) => {
            node.innerText = `${locales.common.buttonAcceptAll}`;
        });
        this.nodes.acceptNecessaryButton().forEach((node: commonElementType) => {
            node.innerText = `${locales.common.buttonAcceptNecessary}`;
        });
        this.nodes.saveChangesButton().forEach((node: commonElementType) => {
            node.innerText = `${locales.common.buttonSave}`;
        });
        if (elBannerBodyHtml) elBannerBodyHtml.innerHTML = this.layout.bannerBody(locales.banner.title, locales.banner.content, cookieData.isExpiredRevision ? locales.revisionAlert : undefined);
        if (elDialogBodyHtml) elDialogBodyHtml.innerHTML = this.layout.dialogBody(locales.dialog.title, locales.dialog.primary, locales.dialog.secondary, locales.common.buttonClose);
        this.renderCategoryTable();
        this.log(`Locales has been set with "${lang}"`);
    }

    /**
     * Main callback handlers
     **/
    getCallbackData(event: preferenceStateKeyTypes) {
        const cookieData = this.cookies.getData();
        let categoriesAccepted: categoryNameType[], categoriesDeclined: categoryNameType[], categoriesChanged: categoryNameType[];
        switch (event) {

            case preferenceStateEventKeys['custom']:
                categoriesAccepted = [ ...this.state.preferences.accepted ];
                categoriesDeclined = [ ...this.state.preferences.declined ];
                categoriesChanged = [ ...this.state.preferences.changed ];
                break;

            case preferenceStateEventKeys['all']:
                categoriesAccepted = [ ...this.options.consent.categories ];
                categoriesDeclined = [];
                categoriesChanged = this.state.preferences.accepted.filter(x => this.options.consent.categories.includes(x));
                break;

            case preferenceStateEventKeys['necessary']:
            default:
                categoriesAccepted = [ ...this.options.consent.necessaryCategories ];
                categoriesDeclined = [ ...this.options.consent.categories.filter(x => !this.options.consent.necessaryCategories.includes(x)) ];
                categoriesChanged = this.state.preferences.accepted.filter(x => this.options.consent.necessaryCategories.includes(x));
                break;

        }

        return {
            preferences: {
                event,
                timestamp: getTimestamp(),
                accepted: categoriesAccepted,
                declined: categoriesDeclined,
                changed: categoriesChanged,
            },
            cookie: {
                categories: categoriesAccepted,
                uuid: this.uuid,
                revision: this.options.meta.revision,
                rfc: this.options.cookie.rfc,
                dateCreated: cookieData.createdDate,
                dateUpdated: cookieData.updatedDate,
                data: null,
            },
        };
    }
    eventCallbackHandler(event: preferenceStateKeyTypes, callback?: Function) {
        const data = this.getCallbackData(event);
        const preferences = data.preferences;
        const cookie = data.cookie;
        this.banner.hide();
        this.dialog.hide();
        this.state.preferences = preferences;
        this.state.cookie = cookie;
        this.cookies.set(cookie);
        this.adjustCategoryToggle();
        this.historyPush(event);
        this.cookieLoaderController(event, data);
        this.scriptsAutoloadController(event, data);
        if (callback && typeof callback === 'function') {
            callback(cookie, preferences);
        }
        this.log(`Event callback "${event}" triggered`);
    }
    onAcceptAllHandler() {
        this.eventCallbackHandler(preferenceStateEventKeys['all'], this.options.onAcceptAll);
    }
    onAcceptNecessaryHandler() {
        this.eventCallbackHandler(preferenceStateEventKeys['necessary'], this.options.onAcceptNecessary);
    }
    onChangeHandler() {
        this.eventCallbackHandler(preferenceStateEventKeys['custom'], this.options.onChange);
    }

    /**
     * Category toggle callback
     **/
    categoryToggleHandler(category: categoryNameType, event?: any) {
        const categories = this.options.consent.categories || [];
        const accepted = this.state.preferences.accepted ? cloneDeep(this.state.preferences.accepted) : [];
        let declined, changed;
        const index = indexOf(accepted, category);
        if (index > -1) {
            accepted.splice(index, 1);
        } else {
            accepted.push(category);
        }
        declined = categories.filter(x => !accepted.includes(x));
        changed = categories.filter(x => accepted.includes(x));
        this.state.preferences.accepted = accepted;
        this.state.preferences.declined = declined;
        this.state.preferences.changed = changed;
        this.historyPush(`toggle:${category}`);
        if (this.options.onToggle && typeof this.options.onToggle === 'function') {
            this.options.onToggle(this.state.preferences);
        }
        if (event && event.target) {
            const checked = indexOf(accepted, category) > -1;
            event.target.checked = checked && 'checked';
            event.target.classList.toggle(this.selectors.stateClassName.isChecked, checked);
        }
        this.state.categories.dirty = true;
        this.log('categoryToggleHandler', accepted, declined, changed);
    }
    adjustCategoryToggle() {
        const categories = this.options.consent.categories || [];
        const list = this.state.preferences.accepted || [];
        categories.map((ctg) => {
            const key = `${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${ctg}`;
            const nodes = document.querySelectorAll(`[${this.tokens.DATA_CCL_TOGGLE}="${key}"]`);
            nodes.forEach((node: commonInputElementType) => {
                const checked = indexOf(list, ctg) > -1;
                node.checked = checked && 'checked';
                node.classList.toggle(this.selectors.stateClassName.isChecked, checked);
            });
        });
    }

    /**
     * DOM events
     **/
    initButtonDomEvents() {
        for (let key in this.nodesEvents) {
            this.nodes[key]().forEach((node: commonElementNodeType) => { node.addEventListener('click', this.nodesEvents[key]) });
        }
        this.log(`Button events initiated`);
    }
    removeButtonDomEvents() {
        for (let key in this.nodesEvents) {
            this.nodes[key]().forEach((node: commonElementNodeType) => { node.removeEventListener('click', this.nodesEvents[key]) });
        }
        this.log(`Button events destroyed`);
    }
    initToggleDomEvents() {
        this.options.consent.categories.map((category: categoryNameType) => {
            const key = `${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${category}`;
            const nodes = document.querySelectorAll(`[${this.tokens.DATA_CCL_TOGGLE}="${key}"]`);
            nodes.forEach((node: commonInputElementType) => {
                node.addEventListener('change', (e: Event) => this.events.toggleCategory(e, category));
            });
        });
        this.log(`Categories toggle events initiated`);
    }
    removeToggleDomEvents() {
        this.options.consent.categories.map((ctg) => {
            const key = `${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${ctg}`;
            const nodes = document.querySelectorAll(`[${this.tokens.DATA_CCL_TOGGLE}="${key}"]`);
            nodes.forEach((node: commonInputElementType) => {
                node.removeEventListener('change', (e: Event) => this.events.toggleCategory(e, ctg));
            });
        });
        this.log(`Categories toggle events destroyed`);
    }

    /**
     * Renderers
     **/
    renderCategoryTable(showTable: boolean = true) {
        const locales = this.getLocales();
        const targets = document.querySelectorAll(`[${this.tokens.DATA_CCL_TARGET}="${this.tokens.CATEGORIES_TABLE_CCL}"]`);
        const categories = this.options.consent.categories || [];
        const getCategoryToggle = (category: categoryNameType) => {
            const id = `${this.selectors.categoryRows.toggleIdPrefix}${category}`;
            const disabled = indexOf(this.options.consent.necessaryCategories, category) > -1 || indexOf(this.options.consent.staticCategories, category) > -1;
            const _input = `<input type="checkbox" id="${id}" class="${this.selectors.categoryRows.toggleInputClassName}" value="${category}" ${this.tokens.DATA_CCL_TOGGLE}="${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${category}" ${disabled ? 'disabled' : ''} />`;
            const _label = `<label for="${id}" aria-labelledby="${id}" class="${this.selectors.categoryRows.toggleLabelClassName}">${_input}</label>`;

            return `<span class="${this.selectors.categoryRows.toggleClassName}" tabindex="1">${_label}</span>`;
        };
        const getCategoryTableContent = (category: categoryNameType) => {
            const list = this.options.consent.cookies[category] || [];
            let _heading = `<thead><tr>`;
            _heading += `<th>${locales.table.colName}</th>`;
            _heading += `<th>${locales.table.colDomain}</th>`;
            _heading += `<th>${locales.table.colExpiration}</th>`;
            _heading += `<th>${locales.table.colDescription}</th>`;
            _heading += `</tr></thead>`;
            let _body = `<tbody>`;
            list.map((row) => {
                _body += `<tr>`;
                _body += `<th>${row.name}</th>`;
                _body += `<td>${row.domain}</td>`;
                _body += `<td>${row.expiration}</td>`;
                _body += `<td>${row.description}</td>`;
                _body += `</tr>`;
            });
            _body += `</tbody>`;
            const _colgroup = `<colgroup><col style="width:auto;" /><col style="width:auto;" /><col style="width:150px;" /><col style="width:auto;" /></colgroup>`;

            return `${_colgroup}${_heading}${_body}`;
        };
        const getCategoryContent = (category: categoryNameType) => {
            const loc = locales.categories[category];
            const _title = `<h4 class="${this.selectors.categoryRows.blockHeadingTitle}">${loc.title ? loc.title : `undefined`}</h4>`;
            const _description = `<div class="${this.selectors.categoryRows.blockDescription}">${loc.description ? loc.description : `undefined`}</div>`;
            const _checkbox = `<div class="${this.selectors.categoryRows.blockHeadingToggle}">${getCategoryToggle(category)}</div>`;
            const _heading = `<div class="${this.selectors.categoryRows.blockHeading}">${_title}${_checkbox}</div>`;
            const _table = showTable && `<div class="${this.selectors.categoryRows.blockTable}"><table class="${this.selectors.categoryRows.categoryTableClassName}">${getCategoryTableContent(category)}</table></div>`;
            const _collapsible = `<div class="${this.selectors.categoryRows.blockCollapsible}">${_description}${_table}</div>`;

            return `<div class="${this.selectors.categoryRows.block}">${_heading}${_collapsible}</div>`;
        };

        const _category = createElement({
            className: this.selectors.categoryRows.categoryOuterClassName,
        });
        categories.map((ctg) => {
            const _content = createElement({
                tag: 'article',
                className: this.selectors.categoryRows.categoryRowClassName,
            });
            _content.appendChild(createElement({
                className: this.selectors.categoryRows.categoryRowInnerClassName,
                html: getCategoryContent(ctg),
            }));
            _category.appendChild(_content);
        });
        if (targets) {
            this.state.categories.show = true;
            this.state.categories.table = showTable;
            targets.forEach((node: Element) => {
                node.innerHTML = ``; // Clear before append to prevent content duplicities
                node.appendChild(_category);
            })
        }
        this.initToggleDomEvents();
        this.adjustCategoryToggle();
    }
    renderBannerElement() {
        const cookieData = this.cookies.getData();
        const locales = this.getLocales();
        const wrapperClass = [
          this.selectors.banner.wrapperClassName,
            `${this.selectors.common.layoutClassPfx}${this.options.banner.layout}`,
            `${this.selectors.common.positionClassPfx}${this.options.banner.position.replace(/\s/g, '-')}`,
            `${this.selectors.common.transitionClassPfx}${this.options.banner.transition}`,
        ];
        const _wrapper = createElement({
            id: this.selectors.banner.wrapperId,
            className: wrapperClass.join(' '),
            arias: {
                hidden: true,
            },
        });
        const _body = createElement({
            id: this.selectors.banner.bodyId,
            className: this.selectors.banner.bodyClassName,
            html: this.layout.bannerBody(locales.banner.title, locales.banner.content, cookieData.isExpiredRevision ? locales.revisionAlert : undefined),
        });
        const _actions = createElement({
            id: this.selectors.banner.actionsId,
            className: this.selectors.banner.actionsClassName,
        });
        const _btnAcceptAll = createButtonElement(
            this.options.banner.btnAcceptAllId,
            this.selectors.btn.acceptAllClassName,
            locales.common.buttonAcceptAll,
            this.tokens.BTN_ACCEPT_ALL_CCL,
        );
        const _btnAcceptNecessary = createButtonElement(
            this.options.banner.btnAcceptNecessaryId,
            this.selectors.btn.acceptNecessaryClassName,
            locales.common.buttonAcceptNecessary,
            this.tokens.BTN_ACCEPT_NECESSARY_CCL,
        );
        _actions.appendChild(_btnAcceptAll);
        _actions.appendChild(_btnAcceptNecessary);
        _wrapper.appendChild(_body);
        _wrapper.appendChild(_actions);
        document.body.appendChild(_wrapper);
    }
    renderDialogElement() {
        const locales = this.getLocales();
        const wrapperClass = [
          this.selectors.dialog.wrapperClassName,
            `${this.selectors.common.layoutClassPfx}${this.options.dialog.layout}`,
            `${this.selectors.common.positionClassPfx}${this.options.dialog.position}`,
            `${this.selectors.common.transitionClassPfx}${this.options.dialog.transition}`,
        ];
        const _wrapper = createElement({
            id: this.selectors.dialog.wrapperId,
            className: wrapperClass.join(' '),
            arias: {
                hidden: true,
            },
        });
        const _body = createElement({
            id: this.selectors.dialog.bodyId,
            className: this.selectors.dialog.bodyClassName,
            html: this.layout.dialogBody(locales.dialog.title, locales.dialog.primary, locales.dialog.secondary, locales.common.buttonClose),
        });
        const _actions = createElement({
            id: this.selectors.dialog.actionsId,
            className: this.selectors.dialog.actionsClassName,
        });
        const _btnAcceptAll = createButtonElement(
            this.options.dialog.btnAcceptAllId,
            this.selectors.btn.acceptAllClassName,
            locales.common.buttonAcceptAll,
            this.tokens.BTN_ACCEPT_ALL_CCL,
        );
        const _btnAcceptNecessary = createButtonElement(
            this.options.dialog.btnAcceptNecessaryId,
            this.selectors.btn.acceptNecessaryClassName,
            locales.common.buttonAcceptNecessary,
            this.tokens.BTN_ACCEPT_NECESSARY_CCL,
        );
        const _btnSave = createButtonElement(
            this.options.dialog.btnSaveId,
            this.selectors.btn.saveChangesClassName,
            locales.common.buttonSave,
            this.tokens.BTN_SAVE_CCL,
        );
        _actions.appendChild(_btnAcceptAll);
        _actions.appendChild(_btnAcceptNecessary);
        _actions.appendChild(_btnSave);
        _wrapper.appendChild(_body);
        _wrapper.appendChild(_actions);
        document.body.appendChild(_wrapper);
        this.options.consent.showCategory && this.renderCategoryTable(this.options.consent.showCategoryTable);
    }

    /**
     * Presenters
     **/
    presenterController(cookieData: CookieData) {
        if (cookieData.current) {
            this.log('Cookie was found:', cookieData);

            // Set found cookie to state
            this.state.cookie = cookieData.current;

            // Set preference state from cookie data and update state for category toggle
            if (cookieData.current.categories) {
                const categories = [ ...cookieData.current.categories ];
                this.state.preferences.accepted = categories;
                this.state.preferences.declined = this.options.consent.categories.filter(ctg => !categories.includes(ctg));
                this.adjustCategoryToggle();
            }

            // Check when revision has changed
            if (cookieData.isExpiredRevision) {
                this.state.revisionExpired = true;
                this.banner.show(this.options.meta.delay);
                if (this.options.onExpired && typeof this.options.onExpired === 'function') this.options.onExpired('revision', this.state);
            }

            // Check if date is expired
            if (cookieData.isExpiredDate) {
                this.banner.show(this.options.meta.delay);
                if (this.options.onExpired && typeof this.options.onExpired === 'function') this.options.onExpired('date', this.state);
            }

        } else {
            this.log('Cookie not found');

            // Show banner when cookie is not found
            this.banner.show(this.options.meta.delay);

            // Set all preferences when no cookie is found
            this.state.preferences.accepted = this.options.consent.categories;

            // Adjust selected category toggles
            this.adjustCategoryToggle();

        }

        // On init callback
        if (this.options.onInit && typeof this.options.onInit === 'function') {
            this.options.onInit(this.state, this.consent);
        }

        // Prepare available languages and set to state
        if (this.options.locales) {
            this.state.languages = [];
            for (const lang in this.options.locales) {
                this.state.languages.push(lang);
            }
        }

        // Change locales when calling re-init()
        if (this.state.init && (this.state.language !== this.options.language)) {
            this.state = cloneDeep(DEFAULT_STATE);
            this.changeLanguage(this.options.language);
        }

    }
    presenter() {
        const cookieData = this.cookies.getData();
        this.state.environment = process.env.BUNDLE_ENVIRONMENT as bundleEnvironmentType;
        this.state.preferences.timestamp = getTimestamp();
        this.state.preferences.event = preferenceEventKeys['init'];
        this.state.init = true;
        this.banner.init();
        this.dialog.init();
        this.presenterController(cookieData);
        this.initButtonDomEvents();

        this.browseSiteScripts();
    }

    /**
     * Initialize
     **/
    init() {
        const bot = isClientBot();
        const shouldServiceInit = (!(this.options.meta.hideFromBots && bot));
        const runner = () => {
            const windowProps: CookieConsentLayerProps = {
                getState: this._getState.bind(this),
                getPreferences: this._getPreferences.bind(this),
                getOptions: this._getOptions.bind(this),
                getNodes: this._getNodes.bind(this),
                getSelectors: this._getSelectors.bind(this),
                init: this.init.bind(this),
                initButtonDomEvents: this.initButtonDomEvents.bind(this),
                removeButtonDomEvents: this.removeButtonDomEvents.bind(this),
                initToggleDomEvents: this.initToggleDomEvents.bind(this),
                removeToggleDomEvents: this.removeToggleDomEvents.bind(this),
                changeLanguage: this.changeLanguage.bind(this),
                changeLocales: this.setLocalesContent.bind(this),
                showBanner: this.banner.show.bind(this),
                hideBanner: this.banner.hide.bind(this),
                destroyBanner: this.banner.destroy.bind(this),
                showDialog: this.dialog.show.bind(this),
                hideDialog: this.dialog.hide.bind(this),
                destroyDialog: this.dialog.destroy.bind(this),
                getCookie: this.cookies.get.bind(this),
                destroyCookie: this.cookies.destroy.bind(this),
                addConsentCookie: this.consent.addCookie.bind(this),
                removeConsentCookie: this.consent.removeCookie.bind(this),
            };
            this.presenter();
            this.historyPush('init');
            this.log(`## '${this.scope}' loaded in 'window.CookieConsentLayer'`, windowProps);
            window.CookieConsentLayer = windowProps;

            return windowProps;
        };

        return shouldServiceInit && runner();
    }

}

export default CookieConsentLayer;
