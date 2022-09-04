import { CookieConsentLayer, constructorPropType } from './CookieConsentLayer';

declare global {
    interface Window { initCookieConsentLayer: Function }
}

const initCookieConsentLayer = (
    options: constructorPropType['options'],
    scope?: constructorPropType['scope'],
    uuid?: constructorPropType['uuid'],
) => new CookieConsentLayer(options, scope, uuid);

window.initCookieConsentLayer = initCookieConsentLayer;
