# Cookie Consent Layer v1.0.0

## Description
Simple typescript component bundled as ES6 compatible JavaScript code, so browser can load without compiler process. Motivation was to create simple and deeply customizable EU cookie consent javascript component with easy implementation.
Inspiration for me was Orestbida's https://www.npmjs.com/package/vanilla-cookieconsent.

## Features
- Lightweight
- Cross modern browsers
- Multi-language
- Customization & callbacks

## Implementation
- GitHub repo `https://github.com/zpectah/cookie-consent-layer-es6`
- CDN styles (local server) ``http://cdn.zpecter.com/cookie-consent-layer-es6/latest/index[.min].css``
- CDN scripts (local server) ``http://cdn.zpecter.com/cookie-consent-layer-es6/latest/index[.min].js``

### Import
```javascript
import { CookieConsentLayer } from './CookieConsentLayer';

const ccl_class = new CookieConsentLayer(<options>, <scope>, <uuid>);
    
ccl_class.init(); // Returns CookieConsentLayerProps
```

## Implementation
```html
<html>
    <head>
        ...
        <link
                rel="stylesheet"
                href="<path-to-cookieconsent.css>"
                media="print"
                onload="this.media='all'"
        />
        ...
    </head>
    <body>
        ...
        <script
                src="<path-to-cookieconsent.js>"
                defer
        ></script>
    ...
    </body>
</html>
```

## Options
Option | Type | Default | Description
--- | --- | --- | ---
`meta` | `Object` | | Options meta object
`meta.name` | `string` | `'CookieConsentLayer'` | Will be used in local purpose
`meta.revision` | `number` | `0` | Instance revision, if value is changed and user have already accepted, banner will trigger again
`meta.debug` | `boolean` | `false` | If true, it wil display console logs with events for easier debugging
`meta.delay` | `number` | `0` | When set, banner will show after this value in ms
`meta.classPrefix` | `string` | `'ccl-'` | Global class prefix used also in styles. Be sure you know, why changing this value
`meta.hideFromBots` | `boolean` | `false` | If you want to hide service from bot/crawler/webdriver. If set to true and service detects one of bot, will be not initialized
`meta.ltr` | `boolean` | `false` | If you want to keep text right-to-left, set to false
`cookie` | `Object` | | Cookie options object
`cookie.name` | `string` | `'CC_LAYER'` | Name of a cookie which be save in browser
`cookie.domain` | `string` | `'.your-domain.some'` | Cookie domain
`cookie.expiration` | `number` | `365` | Expiration of consent, if expires, banner will be showed again
`cookie.path` | `string` | `'/'` | Cookie path
`cookie.sameSite` | `string` | `'Lax'` | Cookie on same site
`cookie.rfc` | `boolean` | `false` | Use RFC format of cookie, otherwise is JSON as string
`scripts` | `type` | `default` | ...
`consent` | `type` | `default` | ...
`banner` | `type` | `default` | ...
`dialog` | `type` | `default` | ...
`language` | `type` | `default` | ...
`locales` | `type` | `default` | ...
`onAcceptAll` | `(cookie: Cookie, preferences: Preferences) => void` | | When user clicks on 'Accept all' button
`onAcceptNecessary` | `(cookie: Cookie, preferences: Preferences) => void` | | When user clicks on 'Accept necessary' or 'Decline' button
`onChange` | `(cookie: Cookie, preferences: Preferences) => void` | | When user click on 'Save' button in dialog
`onInit` | `(state: CookieConsentLayerState, consent: layerConsentType) => void` | | Triggers only when cookie is found on page load
`onToggle` | `(preferences: Preferences) => void` | | When user trigger toggle button, but not save yet
`onExpired` | `(reason: string, state: CookieConsentLayerState) => void` | | Triggers only when cookie found and is expired (date/revision)
`onError` | `(reason: string, message: string, state: CookieConsentLayerState) => void` | | When some errors occurred

## Api
Option | Type | Default value | Description
--- | --- | --- | ---
`getState` | `() => CookieConsentLayerState` | | Returns component state
`getPreferences` | `() => Preferences` | | Returns preferences object
`getOptions` | `() => CookieConsentLayerOptions` | | Returns options object
`getNodes` | `() => layerNodesType` | | Returns defined nodes
`getSelectors` | `() => layerSelectorsType` | | Returns defined selectors
`init` | `() => void` | | Re-initialize service (reset)
`initButtonDomEvents` | `() => void` | | Initialize button DOM events
`removeButtonDomEvents` | `() => void` | | Destroys button DOM events
`initToggleDomEvents` | `() => void` | | Initialize category toggle DOM events
`removeToggleDomEvents` | `() => void` | | Destroys category toggle DOM events
`changeLanguage` | `(language?: string) => void` | `state.language` | Change component language
`changeLocales` | `(language?: string) => void` | `state.language` | Change component locales and re-render
`showBanner` | `(delay?: number) => void` | `0` | Shows banner
`hideBanner` | `() => void` | | Hides banner
`destroyBanner` | `() => void` | | Removes banner from DOM
`showDialog` | `(delay?: number) => void` | `0` | Shows dialog
`hideDialog` | `() => void` | | Hides dialog
`destroyDialog` | `() => void` | | Removes dialog from DOM
`getCookie` | `(name?: string) => any` | `options.cookie.name` | Returns defined cookie
`destroyCookie` | `(name?: string) => void` | `options.cookie.name` | Destroys defined cookie
`addConsentCookie` | `(category: categoryNameType, cookies: consentCookieObjectType[]) => void` | | Add consent cookie item to category
`removeConsentCookie` | `(category: categoryNameType, cookies: consentCookieObjectType[]) => void` | | Remove consent cookie from category



<details><summary>TODO LIST</summary>
<p>

- Scripts loading mechanism
- Cookie handling mechanism
- Styles & customizations
- Toggle hide/show category table

</p>
</details>

