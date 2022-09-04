"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var cloneDeep_1 = require("lodash/cloneDeep");
var merge_1 = require("lodash/merge");
var indexOf_1 = require("lodash/indexOf");
var helpers_1 = require("../helpers");
var const_1 = require("./const");
var enums_1 = require("./enums");
var CookieConsentLayer = /** @class */ (function () {
    function CookieConsentLayer(options, scope, uuid) {
        var _this = this;
        this.tokens = {
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
            DATA_CCL_TOGGLE: 'data-ccl-toggle'
        };
        this.banner = {
            init: function () {
                if (!_this.state.dialog.destroyed) {
                    _this.renderBannerElement();
                    _this.state.banner.render = true;
                }
                else {
                    _this.err('banner', 'Banner has been removed from DOM, try reload page');
                }
            },
            show: function (delay) {
                if (delay === void 0) { delay = 0; }
                var elem = document.getElementById(_this.options.banner.id);
                var runner = function () {
                    if (elem) {
                        elem.style.display = 'block';
                        elem.ariaHidden = 'false';
                        _this.state.banner.show = true;
                    }
                };
                if (delay > 0) {
                    setTimeout(runner, delay);
                }
                else {
                    runner();
                }
            },
            hide: function () {
                var elem = document.getElementById(_this.options.banner.id);
                if (elem) {
                    elem.style.display = 'none';
                    elem.ariaHidden = 'true';
                    _this.state.banner.show = false;
                }
            },
            destroy: function () {
                var elem = document.getElementById(_this.options.banner.id);
                if (elem) {
                    elem.remove();
                    _this.state.banner.render = false;
                    _this.state.banner.show = false;
                    _this.state.banner.destroyed = true;
                }
            }
        };
        this.dialog = {
            init: function () {
                if (!_this.state.dialog.destroyed) {
                    _this.renderDialogElement();
                    _this.state.dialog.render = true;
                }
                else {
                    _this.err('dialog', 'Dialog has been removed from DOM, try reload page');
                }
            },
            show: function (delay) {
                if (delay === void 0) { delay = 0; }
                var elem = document.getElementById(_this.options.dialog.id);
                var runner = function () {
                    if (elem) {
                        elem.style.display = 'block';
                        elem.ariaHidden = 'false';
                        _this.state.dialog.show = true;
                    }
                };
                if (delay > 0) {
                    setTimeout(runner, delay);
                }
                else {
                    runner();
                }
            },
            hide: function () {
                var elem = document.getElementById(_this.options.dialog.id);
                if (elem) {
                    elem.style.display = 'none';
                    elem.ariaHidden = 'true';
                    _this.state.categories.dirty = false;
                    _this.state.dialog.show = false;
                }
            },
            destroy: function () {
                var elem = document.getElementById(_this.options.dialog.id);
                if (elem) {
                    elem.remove();
                    _this.state.categories.dirty = false;
                    _this.state.categories.show = false;
                    _this.state.categories.table = false;
                    _this.state.dialog.render = false;
                    _this.state.dialog.show = false;
                    _this.state.dialog.destroyed = true;
                }
            }
        };
        this.layout = {
            bannerBody: function (title, content, revision) {
                var _title = "<div class=\"".concat(_this.selectors.banner.bodyTitleClassName, "\">").concat(title, "</div>");
                var _content = "<div class=\"".concat(_this.selectors.banner.bodyContentClassName, "\">").concat(content, "</div>");
                var _revision = revision && "<div id=\"".concat(_this.tokens.REVISION_ALERT_CCL, "\" class=\"").concat(_this.selectors.banner.bodyRevisionClassName, "\">").concat(revision, "</div>");
                return "".concat(_title).concat(_revision).concat(_content);
            },
            dialogBody: function (title, primary, secondary, close) {
                var _close = "<button type=\"button\" ".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_HIDE_DIALOG_CCL, "\" class=\"").concat(_this.selectors.dialog.bodyCloseClassName, "\">").concat(close, "</button>");
                var _title = "<div class=\"".concat(_this.selectors.dialog.bodyTitleClassName, "\">").concat(title, "</div>");
                var _primary = "<div class=\"".concat(_this.selectors.dialog.bodyPrimaryClassName, "\">").concat(primary, "</div>");
                var _secondary = secondary && "<div class=\"".concat(_this.selectors.dialog.bodySecondaryClassName, "\">").concat(secondary, "</div>");
                var _table = "<div ".concat(_this.tokens.DATA_CCL_TARGET, "=\"").concat(_this.tokens.CATEGORIES_TABLE_CCL, "\" class=\"").concat(_this.selectors.dialog.bodyTableClassName, "\">Loading table, please wait</div>");
                return "".concat(_close).concat(_title).concat(_primary).concat(_table).concat(_secondary);
            },
            categoryBody: function () {
                // TODO
            },
            tableBody: function () {
                // TODO
            }
        };
        this.cookies = {
            get: function (name) {
                if (name === void 0) { name = _this.options.cookie.name; }
                var value = (0, helpers_1.getCookie)(name);
                return value && (_this.options.cookie.rfc ? JSON.parse(decodeURIComponent(value)) : JSON.parse(value));
            },
            getData: function () {
                var cookie = _this.cookies.get();
                var today = new Date();
                var updated = cookie && cookie.dateUpdated;
                console.log('compare two dates, if date is expired ... (updated + expiration) >= today ... ', today.toISOString(), updated);
                return {
                    current: cookie,
                    createdDate: updated || today.toISOString(),
                    updatedDate: today.toISOString(),
                    isExpiredDate: false,
                    isExpiredRevision: cookie ? (cookie.revision !== _this.options.meta.revision) : false
                };
            },
            set: function (value, name, expiration) {
                if (name === void 0) { name = _this.options.cookie.name; }
                if (expiration === void 0) { expiration = _this.options.cookie.expiration; }
                var parsedValue = _this.options.cookie.rfc ? encodeURIComponent(JSON.stringify(value)) : JSON.stringify(value);
                (0, helpers_1.setCookie)(name, parsedValue, expiration);
            },
            destroy: function (name) {
                if (name === void 0) { name = _this.options.cookie.name; }
                return (0, helpers_1.setCookie)('', name, -1);
            }
        };
        this.state = (0, cloneDeep_1["default"])(const_1.DEFAULT_STATE);
        this.options = (0, merge_1["default"])(const_1.DEFAULT_OPTIONS, options);
        this.scope = scope || 'default';
        this.uuid = uuid || (0, helpers_1.getToken)(6);
        this.selectors = {
            btn: {
                acceptAllClassName: "".concat(this.options.meta.classPrefix, "button ").concat(this.options.meta.classPrefix, "button-primary"),
                acceptNecessaryClassName: "".concat(this.options.meta.classPrefix, "button ").concat(this.options.meta.classPrefix, "button-secondary"),
                saveChangesClassName: "".concat(this.options.meta.classPrefix, "button ").concat(this.options.meta.classPrefix, "button-secondary")
            },
            banner: {
                wrapperId: this.options.banner.id,
                wrapperClassName: "".concat(this.options.meta.classPrefix, "banner-wrapper"),
                bodyId: "".concat(this.options.banner.id, "_body"),
                bodyClassName: "".concat(this.options.meta.classPrefix, "banner-body"),
                bodyTitleClassName: "".concat(this.options.meta.classPrefix, "banner-body-title"),
                bodyRevisionClassName: "".concat(this.options.meta.classPrefix, "banner-body-revision"),
                bodyContentClassName: "".concat(this.options.meta.classPrefix, "banner-body-content"),
                actionsId: "".concat(this.options.banner.id, "_actions"),
                actionsClassName: "".concat(this.options.meta.classPrefix, "banner-actions")
            },
            dialog: {
                wrapperId: this.options.dialog.id,
                wrapperClassName: "".concat(this.options.meta.classPrefix, "dialog-wrapper"),
                bodyId: "".concat(this.options.dialog.id, "_body"),
                bodyClassName: "".concat(this.options.meta.classPrefix, "dialog-body"),
                bodyCloseClassName: "".concat(this.options.meta.classPrefix, "dialog-body-close"),
                bodyTitleClassName: "".concat(this.options.meta.classPrefix, "dialog-body-title"),
                bodyTableClassName: "".concat(this.options.meta.classPrefix, "dialog-body-table"),
                bodyPrimaryClassName: "".concat(this.options.meta.classPrefix, "dialog-body-primary"),
                bodySecondaryClassName: "".concat(this.options.meta.classPrefix, "dialog-body-secondary"),
                actionsId: "".concat(this.options.dialog.id, "_actions"),
                actionsClassName: "".concat(this.options.meta.classPrefix, "dialog-actions")
            },
            categoryRows: {
                categoryRowClassName: "".concat(this.options.meta.classPrefix, "category-row"),
                categoryOuterClassName: "".concat(this.options.meta.classPrefix, "category-outer"),
                categoryRowInnerClassName: "".concat(this.options.meta.classPrefix, "category-row-inner"),
                categoryTableClassName: "".concat(this.options.meta.classPrefix, "category-table"),
                toggleIdPrefix: "".concat(this.uuid, "_toggle_"),
                toggleClassName: "".concat(this.options.meta.classPrefix, "category-toggle"),
                toggleLabelClassName: "".concat(this.options.meta.classPrefix, "category-toggle-label"),
                toggleInputClassName: "".concat(this.options.meta.classPrefix, "category-toggle-input"),
                block: "".concat(this.options.meta.classPrefix, "category-block"),
                blockHeading: "".concat(this.options.meta.classPrefix, "category-block-heading"),
                blockHeadingToggle: "".concat(this.options.meta.classPrefix, "category-block-heading-toggle"),
                blockTable: "".concat(this.options.meta.classPrefix, "category-block-table"),
                blockCollapsible: "".concat(this.options.meta.classPrefix, "category-block-collapsible"),
                blockHeadingTitle: "".concat(this.options.meta.classPrefix, "category-block-heading-title"),
                blockDescription: "".concat(this.options.meta.classPrefix, "category-block-description")
            },
            state: {
                isChecked: 'is-checked'
            }
        };
        this.nodes = {
            showDialog: function () { return document.querySelectorAll("[".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_SHOW_DIALOG_CCL, "\"]")); },
            hideDialog: function () { return document.querySelectorAll("[".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_HIDE_DIALOG_CCL, "\"]")); },
            showBanner: function () { return document.querySelectorAll("[".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_SHOW_BANNER_CCL, "\"]")); },
            hideBanner: function () { return document.querySelectorAll("[".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_HIDE_BANNER_CCL, "\"]")); },
            acceptAll: function () { return document.querySelectorAll("[".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_ACCEPT_ALL_CCL, "\"]")); },
            acceptNecessary: function () { return document.querySelectorAll("[".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_ACCEPT_NECESSARY_CCL, "\"]")); },
            saveChanges: function () { return document.querySelectorAll("[".concat(_this.tokens.DATA_CCL, "=\"").concat(_this.tokens.BTN_SAVE_CCL, "\"]")); }
        };
        this.events = {
            showBanner: function (e) {
                e.preventDefault();
                _this.banner.show();
            },
            hideBanner: function (e) {
                e.preventDefault();
                _this.banner.hide();
            },
            showDialog: function (e) {
                e.preventDefault();
                _this.dialog.show();
            },
            hideDialog: function (e) {
                e.preventDefault();
                _this.dialog.hide();
            },
            acceptNecessary: function (e) {
                e.preventDefault();
                _this.onAcceptNecessaryHandler();
            },
            acceptAll: function (e) {
                e.preventDefault();
                _this.onAcceptAllHandler();
            },
            saveChanges: function (e) {
                e.preventDefault();
                _this.onChangeHandler();
            },
            toggleCategory: function (e, category) {
                e.preventDefault();
                _this.categoryToggleHandler(category, e);
            }
        };
        this.init();
    }
    /**
     * References
     **/
    CookieConsentLayer.prototype._getState = function () {
        return this.state;
    };
    CookieConsentLayer.prototype._getPreferences = function () {
        return this.state.preferences;
    };
    CookieConsentLayer.prototype._getOptions = function () {
        return this.options;
    };
    CookieConsentLayer.prototype._getNodes = function () {
        return this.nodes;
    };
    CookieConsentLayer.prototype._getSelectors = function () {
        return this.selectors;
    };
    /**
     * Common
     **/
    CookieConsentLayer.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options.meta.debug)
            console.log.apply(console, args);
    };
    CookieConsentLayer.prototype.err = function (reason, message) {
        console.warn("".concat(reason, ":").concat(message), this.state);
        if (this.options.onError && typeof this.options.onError === 'function')
            this.options.onError(reason, message, this.state);
    };
    CookieConsentLayer.prototype.historyPush = function (arg) {
        this.state.history.push(arg);
    };
    /**
     * Scripts
     **/
    CookieConsentLayer.prototype.scriptsAutoloadController = function (event, data) {
        if (this.options.scripts.autoload) {
            // TODO: handle selected cookie category with loaded cookies ...
            // toggle remove or call selected ...
            console.log('Trigger: scriptsAutoloadController -> autoload features', event, data);
        }
    };
    /**
     * Cookies
     **/
    CookieConsentLayer.prototype.cookieLoaderController = function (event, data) {
        if (this.options.consent.autoClearCookies) {
            // TODO: Handle browser cookies when user save new settings
            // get a list of current cookies and compare to categories which is accepted and delete rest
            console.log('Trigger: cookieAutoloader() -> autoClearCookies features', event, data);
        }
    };
    /**
     * Language
     **/
    CookieConsentLayer.prototype.changeLanguage = function (lang, changeLocales) {
        if (lang === void 0) { lang = this.options.language; }
        if (changeLocales === void 0) { changeLocales = true; }
        this.state.language = lang;
        changeLocales && this.setLocalesContent(lang);
    };
    /**
     * Locales
     **/
    CookieConsentLayer.prototype.getLocales = function (lang) {
        if (lang === void 0) { lang = this.state.language; }
        return this.options.locales[lang];
    };
    CookieConsentLayer.prototype.setLocalesContent = function (lang) {
        if (lang === void 0) { lang = this.state.language; }
        var cookieData = this.cookies.getData();
        var locales = this.getLocales(lang);
        var elBannerBodyHtml = document.getElementById(this.selectors.banner.bodyId);
        var elDialogBodyHtml = document.getElementById(this.selectors.dialog.bodyId);
        this.nodes.acceptAll().forEach(function (node) {
            node.innerText = "".concat(locales.common.buttonAcceptAll);
        });
        this.nodes.acceptNecessary().forEach(function (node) {
            node.innerText = "".concat(locales.common.buttonAcceptNecessary);
        });
        this.nodes.saveChanges().forEach(function (node) {
            node.innerText = "".concat(locales.common.buttonSave);
        });
        if (elBannerBodyHtml)
            elBannerBodyHtml.innerHTML = this.layout.bannerBody(locales.banner.title, locales.banner.content, cookieData.isExpiredRevision ? locales.revisionAlert : undefined);
        if (elDialogBodyHtml)
            elDialogBodyHtml.innerHTML = this.layout.dialogBody(locales.dialog.title, locales.dialog.primary, locales.dialog.secondary, locales.common.buttonClose);
        this.renderCategoryTable();
        this.log("Locales has been set with \"".concat(lang, "\""));
    };
    /**
     * Main callback handlers
     **/
    CookieConsentLayer.prototype.getCallbackData = function (event) {
        var _this = this;
        var cookieData = this.cookies.getData();
        var categoriesAccepted, categoriesDeclined, categoriesChanged;
        switch (event) {
            case enums_1.preferenceStateEventKeys['custom']:
                categoriesAccepted = __spreadArray([], this.state.preferences.accepted, true);
                categoriesDeclined = __spreadArray([], this.state.preferences.declined, true);
                categoriesChanged = __spreadArray([], this.state.preferences.changed, true);
                break;
            case enums_1.preferenceStateEventKeys['all']:
                categoriesAccepted = __spreadArray([], this.options.consent.categories, true);
                categoriesDeclined = [];
                categoriesChanged = this.state.preferences.accepted.filter(function (x) { return _this.options.consent.categories.includes(x); });
                break;
            case enums_1.preferenceStateEventKeys['necessary']:
            default:
                categoriesAccepted = __spreadArray([], this.options.consent.necessaryCategories, true);
                categoriesDeclined = __spreadArray([], this.options.consent.categories.filter(function (x) { return !_this.options.consent.necessaryCategories.includes(x); }), true);
                categoriesChanged = this.state.preferences.accepted.filter(function (x) { return _this.options.consent.necessaryCategories.includes(x); });
                break;
        }
        return {
            preferences: {
                event: event,
                timestamp: (0, helpers_1.getTimestamp)(),
                accepted: categoriesAccepted,
                declined: categoriesDeclined,
                changed: categoriesChanged
            },
            cookie: {
                categories: categoriesAccepted,
                uuid: this.uuid,
                revision: this.options.meta.revision,
                rfc: this.options.cookie.rfc,
                dateCreated: cookieData.createdDate,
                dateUpdated: cookieData.updatedDate,
                data: null
            }
        };
    };
    CookieConsentLayer.prototype.eventCallbackHandler = function (event, callback) {
        var data = this.getCallbackData(event);
        var preferences = data.preferences;
        var cookie = data.cookie;
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
        this.log("Event callback \"".concat(event, "\" triggered"));
    };
    CookieConsentLayer.prototype.onAcceptAllHandler = function () {
        this.eventCallbackHandler(enums_1.preferenceStateEventKeys['all'], this.options.onAcceptAll);
    };
    CookieConsentLayer.prototype.onAcceptNecessaryHandler = function () {
        this.eventCallbackHandler(enums_1.preferenceStateEventKeys['necessary'], this.options.onAcceptNecessary);
    };
    CookieConsentLayer.prototype.onChangeHandler = function () {
        this.eventCallbackHandler(enums_1.preferenceStateEventKeys['custom'], this.options.onChange);
    };
    /**
     * Category toggle callback
     **/
    CookieConsentLayer.prototype.categoryToggleHandler = function (category, event) {
        var categories = this.options.consent.categories || [];
        var accepted = this.state.preferences.accepted ? (0, cloneDeep_1["default"])(this.state.preferences.accepted) : [];
        var declined, changed;
        var index = (0, indexOf_1["default"])(accepted, category);
        if (index > -1) {
            accepted.splice(index, 1);
        }
        else {
            accepted.push(category);
        }
        declined = categories.filter(function (x) { return !accepted.includes(x); });
        changed = categories.filter(function (x) { return accepted.includes(x); });
        this.state.preferences.accepted = accepted;
        this.state.preferences.declined = declined;
        this.state.preferences.changed = changed;
        this.historyPush("toggle:".concat(category));
        if (this.options.onToggle && typeof this.options.onToggle === 'function') {
            this.options.onToggle(this.state.preferences);
        }
        if (event && event.target) {
            var checked = (0, indexOf_1["default"])(accepted, category) > -1;
            event.target.checked = checked && 'checked';
            event.target.classList.toggle(this.selectors.state.isChecked, checked);
        }
        this.state.categories.dirty = true;
        this.log('categoryToggleHandler', accepted, declined, changed);
    };
    CookieConsentLayer.prototype.adjustCategoryToggle = function () {
        var _this = this;
        var categories = this.options.consent.categories || [];
        var list = this.state.preferences.accepted || [];
        categories.map(function (ctg) {
            var key = "".concat(_this.tokens.CATEGORY_TOGGLE_PFX_CCL).concat(ctg);
            var nodes = document.querySelectorAll("[".concat(_this.tokens.DATA_CCL_TOGGLE, "=\"").concat(key, "\"]"));
            nodes.forEach(function (node) {
                var checked = (0, indexOf_1["default"])(list, ctg) > -1;
                node.checked = checked && 'checked';
                node.classList.toggle(_this.selectors.state.isChecked, checked);
            });
        });
    };
    /**
     * DOM events
     **/
    CookieConsentLayer.prototype.initButtonDomEvents = function () {
        var _this = this;
        this.nodes.showDialog().forEach(function (node) { node.addEventListener('click', _this.events.showDialog); });
        this.nodes.hideDialog().forEach(function (node) { node.addEventListener('click', _this.events.hideDialog); });
        this.nodes.showBanner().forEach(function (node) { node.addEventListener('click', _this.events.showBanner); });
        this.nodes.hideBanner().forEach(function (node) { node.addEventListener('click', _this.events.hideBanner); });
        this.nodes.acceptAll().forEach(function (node) { node.addEventListener('click', _this.events.acceptAll); });
        this.nodes.acceptNecessary().forEach(function (node) { node.addEventListener('click', _this.events.acceptNecessary); });
        this.nodes.saveChanges().forEach(function (node) { node.addEventListener('click', _this.events.saveChanges); });
        this.log("Button events initiated");
    };
    CookieConsentLayer.prototype.removeButtonDomEvents = function () {
        var _this = this;
        this.nodes.showDialog().forEach(function (node) { node.removeEventListener('click', _this.events.showDialog); });
        this.nodes.hideDialog().forEach(function (node) { node.removeEventListener('click', _this.events.hideDialog); });
        this.nodes.showBanner().forEach(function (node) { node.removeEventListener('click', _this.events.showBanner); });
        this.nodes.hideBanner().forEach(function (node) { node.removeEventListener('click', _this.events.hideBanner); });
        this.nodes.acceptAll().forEach(function (node) { node.removeEventListener('click', _this.events.acceptAll); });
        this.nodes.acceptNecessary().forEach(function (node) { node.removeEventListener('click', _this.events.acceptNecessary); });
        this.nodes.saveChanges().forEach(function (node) { node.removeEventListener('click', _this.events.saveChanges); });
        this.log("Button events destroyed");
    };
    CookieConsentLayer.prototype.initToggleDomEvents = function () {
        var _this = this;
        var categories = this.options.consent.categories || [];
        categories.map(function (category) {
            var key = "".concat(_this.tokens.CATEGORY_TOGGLE_PFX_CCL).concat(category);
            var nodes = document.querySelectorAll("[".concat(_this.tokens.DATA_CCL_TOGGLE, "=\"").concat(key, "\"]"));
            nodes.forEach(function (node) {
                node.addEventListener('change', function (e) { return _this.events.toggleCategory(e, category); });
            });
        });
        this.log("Categories toggle events initiated");
    };
    CookieConsentLayer.prototype.removeToggleDomEvents = function () {
        var _this = this;
        var categories = this.options.consent.categories || [];
        categories.map(function (ctg) {
            var key = "".concat(_this.tokens.CATEGORY_TOGGLE_PFX_CCL).concat(ctg);
            var nodes = document.querySelectorAll("[".concat(_this.tokens.DATA_CCL_TOGGLE, "=\"").concat(key, "\"]"));
            nodes.forEach(function (node) {
                node.removeEventListener('change', function (e) { return _this.events.toggleCategory(e, ctg); });
            });
        });
        this.log("Categories toggle events destroyed");
    };
    /**
     * Renderers
     **/
    CookieConsentLayer.prototype.renderCategoryTable = function (showTable) {
        var _this = this;
        if (showTable === void 0) { showTable = true; }
        var locales = this.getLocales();
        var targets = document.querySelectorAll("[".concat(this.tokens.DATA_CCL_TARGET, "=\"").concat(this.tokens.CATEGORIES_TABLE_CCL, "\"]"));
        var categories = this.options.consent.categories || [];
        var getCategoryToggle = function (category) {
            var id = "".concat(_this.selectors.categoryRows.toggleIdPrefix).concat(category);
            var disabled = (0, indexOf_1["default"])(_this.options.consent.necessaryCategories, category) > -1 || (0, indexOf_1["default"])(_this.options.consent.staticCategories, category) > -1;
            var _input = "<input type=\"checkbox\" id=\"".concat(id, "\" class=\"").concat(_this.selectors.categoryRows.toggleInputClassName, "\" value=\"").concat(category, "\" ").concat(_this.tokens.DATA_CCL_TOGGLE, "=\"").concat(_this.tokens.CATEGORY_TOGGLE_PFX_CCL).concat(category, "\" ").concat(disabled ? 'disabled' : '', " />");
            var _label = "<label for=\"".concat(id, "\" aria-labelledby=\"").concat(id, "\" class=\"").concat(_this.selectors.categoryRows.toggleLabelClassName, "\">").concat(_input, "</label>");
            return "<span class=\"".concat(_this.selectors.categoryRows.toggleClassName, "\" tabindex=\"1\">").concat(_label, "</span>");
        };
        var getCategoryTableContent = function (category) {
            var list = _this.options.consent.cookies[category] || [];
            var _heading = "<thead><tr>";
            _heading += "<th>".concat(locales.table.colName, "</th>");
            _heading += "<th>".concat(locales.table.colDomain, "</th>");
            _heading += "<th>".concat(locales.table.colExpiration, "</th>");
            _heading += "<th>".concat(locales.table.colDescription, "</th>");
            _heading += "</tr></thead>";
            var _body = "<tbody>";
            list.map(function (row) {
                _body += "<tr>";
                _body += "<th>".concat(row.name, "</th>");
                _body += "<td>".concat(row.domain, "</td>");
                _body += "<td>".concat(row.expiration, "</td>");
                _body += "<td>".concat(row.description, "</td>");
                _body += "</tr>";
            });
            _body += "</tbody>";
            var _colgroup = "<colgroup><col style=\"width:auto;\" /><col style=\"width:auto;\" /><col style=\"width:150px;\" /><col style=\"width:auto;\" /></colgroup>";
            return "".concat(_colgroup).concat(_heading).concat(_body);
        };
        var getCategoryContent = function (category) {
            var loc = locales.categories[category];
            var _title = "<div class=\"".concat(_this.selectors.categoryRows.blockHeadingTitle, "\">").concat(loc.title ? loc.title : "undefined", "</div>");
            var _description = "<div class=\"".concat(_this.selectors.categoryRows.blockDescription, "\">").concat(loc.description ? loc.description : "undefined", "</div>");
            var _checkbox = "<div class=\"".concat(_this.selectors.categoryRows.blockHeadingToggle, "\">").concat(getCategoryToggle(category), "</div>");
            var _heading = "<div class=\"".concat(_this.selectors.categoryRows.blockHeading, "\">").concat(_title).concat(_checkbox, "</div>");
            var _table = showTable && "<div class=\"".concat(_this.selectors.categoryRows.blockTable, "\"><table class=\"").concat(_this.selectors.categoryRows.categoryTableClassName, "\">").concat(getCategoryTableContent(category), "</table></div>");
            var _collapsible = "<div class=\"".concat(_this.selectors.categoryRows.blockCollapsible, "\">").concat(_description).concat(_table, "</div>");
            return "<div class=\"".concat(_this.selectors.categoryRows.block, "\">").concat(_heading).concat(_collapsible, "</div>");
        };
        var _category = (0, helpers_1.createElement)({
            className: this.selectors.categoryRows.categoryOuterClassName
        });
        categories.map(function (ctg) {
            var _content = (0, helpers_1.createElement)({
                tag: 'article',
                className: _this.selectors.categoryRows.categoryRowClassName
            });
            _content.appendChild((0, helpers_1.createElement)({
                className: _this.selectors.categoryRows.categoryRowInnerClassName,
                html: getCategoryContent(ctg)
            }));
            _category.appendChild(_content);
        });
        if (targets) {
            this.state.categories.show = true;
            this.state.categories.table = showTable;
            targets.forEach(function (node) {
                node.innerHTML = ""; // Clear before append to prevent content duplicities
                node.appendChild(_category);
            });
        }
        this.initToggleDomEvents();
        this.adjustCategoryToggle();
    };
    CookieConsentLayer.prototype.renderBannerElement = function () {
        var cookieData = this.cookies.getData();
        var locales = this.getLocales();
        var _wrapper = (0, helpers_1.createElement)({
            id: this.selectors.banner.wrapperId,
            className: this.selectors.banner.wrapperClassName,
            arias: {
                hidden: true
            }
        });
        var _body = (0, helpers_1.createElement)({
            id: this.selectors.banner.bodyId,
            className: this.selectors.banner.bodyClassName,
            html: this.layout.bannerBody(locales.banner.title, locales.banner.content, cookieData.isExpiredRevision ? locales.revisionAlert : undefined)
        });
        var _actions = (0, helpers_1.createElement)({
            id: this.selectors.banner.actionsId,
            className: this.selectors.banner.actionsClassName
        });
        var _btnAcceptAll = (0, helpers_1.createButtonElement)(this.options.banner.btnAcceptAllId, this.selectors.btn.acceptAllClassName, locales.common.buttonAcceptAll, this.tokens.BTN_ACCEPT_ALL_CCL);
        var _btnAcceptNecessary = (0, helpers_1.createButtonElement)(this.options.banner.btnAcceptNecessaryId, this.selectors.btn.acceptNecessaryClassName, locales.common.buttonAcceptNecessary, this.tokens.BTN_ACCEPT_NECESSARY_CCL);
        _actions.appendChild(_btnAcceptAll);
        _actions.appendChild(_btnAcceptNecessary);
        _wrapper.appendChild(_body);
        _wrapper.appendChild(_actions);
        document.body.appendChild(_wrapper);
    };
    CookieConsentLayer.prototype.renderDialogElement = function () {
        var locales = this.getLocales();
        var _wrapper = (0, helpers_1.createElement)({
            id: this.selectors.dialog.wrapperId,
            className: this.selectors.dialog.wrapperClassName,
            arias: {
                hidden: true
            }
        });
        var _body = (0, helpers_1.createElement)({
            id: this.selectors.dialog.bodyId,
            className: this.selectors.dialog.bodyClassName,
            html: this.layout.dialogBody(locales.dialog.title, locales.dialog.primary, locales.dialog.secondary, locales.common.buttonClose)
        });
        var _actions = (0, helpers_1.createElement)({
            id: this.selectors.dialog.actionsId,
            className: this.selectors.dialog.actionsClassName
        });
        var _btnAcceptAll = (0, helpers_1.createButtonElement)(this.options.dialog.btnAcceptAllId, this.selectors.btn.acceptAllClassName, locales.common.buttonAcceptAll, this.tokens.BTN_ACCEPT_ALL_CCL);
        var _btnAcceptNecessary = (0, helpers_1.createButtonElement)(this.options.dialog.btnAcceptNecessaryId, this.selectors.btn.acceptNecessaryClassName, locales.common.buttonAcceptNecessary, this.tokens.BTN_ACCEPT_NECESSARY_CCL);
        var _btnSave = (0, helpers_1.createButtonElement)(this.options.dialog.btnSaveId, this.selectors.btn.saveChangesClassName, locales.common.buttonSave, this.tokens.BTN_SAVE_CCL);
        _actions.appendChild(_btnAcceptAll);
        _actions.appendChild(_btnAcceptNecessary);
        _actions.appendChild(_btnSave);
        _wrapper.appendChild(_body);
        _wrapper.appendChild(_actions);
        document.body.appendChild(_wrapper);
        this.options.consent.showCategory && this.renderCategoryTable(this.options.consent.showCategoryTable);
    };
    /**
     * Presenters
     **/
    CookieConsentLayer.prototype.presenterController = function (cookieData) {
        if (cookieData.current) {
            this.log('Cookie was found:', cookieData);
            // Set found cookie to state
            this.state.cookie = cookieData.current;
            // Set preference state from cookie data and update state for category toggle
            if (cookieData.current.categories) {
                var categories_1 = __spreadArray([], cookieData.current.categories, true);
                this.state.preferences.accepted = categories_1;
                this.state.preferences.declined = this.options.consent.categories.filter(function (ctg) { return !categories_1.includes(ctg); });
                this.adjustCategoryToggle();
            }
            // Check when revision has changed
            if (cookieData.isExpiredRevision) {
                this.state.revisionExpired = true;
                this.banner.show(this.options.meta.delay);
                if (this.options.onExpired && typeof this.options.onExpired === 'function')
                    this.options.onExpired('revision', this.state);
            }
            // Check if date is expired
            if (cookieData.isExpiredDate) {
                this.banner.show(this.options.meta.delay);
                if (this.options.onExpired && typeof this.options.onExpired === 'function')
                    this.options.onExpired('date', this.state);
            }
        }
        else {
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
            this.options.onInit(this.state);
        }
        // Prepare available languages and set to state
        if (this.options.locales) {
            this.state.languages = [];
            for (var lang in this.options.locales) {
                this.state.languages.push(lang);
            }
        }
        // Change locales when calling re-init()
        if (this.state.init && (this.state.language !== this.options.language)) {
            this.state = (0, cloneDeep_1["default"])(const_1.DEFAULT_STATE);
            this.changeLanguage(this.options.language);
        }
    };
    CookieConsentLayer.prototype.presenter = function () {
        var cookieData = this.cookies.getData();
        this.state.environment = process.env.BUNDLE_ENVIRONMENT;
        this.state.preferences.timestamp = (0, helpers_1.getTimestamp)();
        this.state.preferences.event = enums_1.preferenceEventKeys['init'];
        this.state.init = true;
        this.banner.init();
        this.dialog.init();
        this.presenterController(cookieData);
        this.initButtonDomEvents();
    };
    /**
     * Initialize
     **/
    CookieConsentLayer.prototype.init = function () {
        var _this = this;
        var bot = (0, helpers_1.isClientBot)();
        var shouldServiceInit = (!(this.options.meta.hideFromBots && bot));
        var runner = function () {
            var windowProps = {
                getState: _this._getState.bind(_this),
                getPreferences: _this._getPreferences.bind(_this),
                getOptions: _this._getOptions.bind(_this),
                getNodes: _this._getNodes.bind(_this),
                getSelectors: _this._getSelectors.bind(_this),
                init: _this.init.bind(_this),
                initButtonDomEvents: _this.initButtonDomEvents.bind(_this),
                removeButtonDomEvents: _this.removeButtonDomEvents.bind(_this),
                initToggleDomEvents: _this.initToggleDomEvents.bind(_this),
                removeToggleDomEvents: _this.removeToggleDomEvents.bind(_this),
                changeLanguage: _this.changeLanguage.bind(_this),
                changeLocales: _this.setLocalesContent.bind(_this),
                showBanner: _this.banner.show.bind(_this),
                hideBanner: _this.banner.hide.bind(_this),
                destroyBanner: _this.banner.destroy.bind(_this),
                showDialog: _this.dialog.show.bind(_this),
                hideDialog: _this.dialog.hide.bind(_this),
                destroyDialog: _this.dialog.destroy.bind(_this),
                getCookie: _this.cookies.get.bind(_this),
                destroyCookie: _this.cookies.destroy.bind(_this)
            };
            _this.presenter();
            _this.historyPush('init');
            _this.log("## '".concat(const_1.DEFAULT_META_NAME, "' loaded in 'window.CookieConsentLayer'"), windowProps);
            window.CookieConsentLayer = windowProps;
            return windowProps;
        };
        return shouldServiceInit && runner();
    };
    return CookieConsentLayer;
}());
exports["default"] = CookieConsentLayer;
