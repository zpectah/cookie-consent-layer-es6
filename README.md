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
`option` | `type` | `default` | ...

## Api
Option | Type | Default | Description
--- | --- | --- | ---
`getState` | `() => void` | | Returns component state
`getPreferences` | `() => void` | | Returns preferences object
`getOptions` | `() => void` | | Returns options object
`getNodes` | `() => void` | | Returns defined nodes
`getSelectors` | `() => void` | | Returns defined selectors
`init` | `() => void` | | For re-initialize service (reset)
`initButtonDomEvents` | `() => void` | | Initialize button DOM events
`removeButtonDomEvents` | `() => void` | | Destroys button DOM events
`initToggleDomEvents` | `() => void` | | Initialize category toggle DOM events
`removeToggleDomEvents` | `() => void` | | Destroys category toggle DOM events
`changeLanguage` | `(language?: string) => void` | | Change component language
`changeLocales` | `(language?: string) => void` | | Change component locales and re-render
`showBanner` | `(delay?: number) => void` | | Shows banner
`hideBanner` | `() => void` | | Hides banner
`destroyBanner` | `() => void` | | Removes banner from DOM
`showDialog` | `(delay?: number) => void` | | Shows dialog
`hideDialog` | `() => void` | | Hides dialog
`destroyDialog` | `() => void` | | Removes dialog from DOM
`getCookie` | `(name?: string) => any` | | Returns defined cookie
`destroyCookie` | `() => void` | | Destroys defined cookie



<details><summary>TODO LIST</summary>
<p>

- Scripts loading mechanism
- Cookie handling mechanism
- Styles & customizations
- Toggle hide/show category table

</p>
</details>

