"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SingleSpaContext=null;var o={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function r(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function a(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof r)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=s(e,t),i=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(r,t);p({elementToRender:a,domElement:i,whenFinished:function(){n(this)},opts:e});e.domElements[t.name]=i}))}function i(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function c(e,t){return new Promise((function(n,o){p({elementToRender:s(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function p(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(o).render(n,r):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(o).render(n,r):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,o,r):t.ReactDOM.render(n,o,r)}function s(e,t){var n=e.React.createElement(e.rootComponent,t),o=exports.SingleSpaContext?e.React.createElement(exports.SingleSpaContext.Provider,{value:t},n):n;return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(e),o=e.React.createElement(e.errorBoundaryClass,t,o)),o}exports.default=function(p){if("object"!==e(p))throw new Error("single-spa-react requires a configuration object");var s=function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},o,{},p);if(!s.React)throw new Error("single-spa-react must be passed opts.React");if(!s.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!s.rootComponent&&!s.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(s.errorBoundary&&"function"!=typeof s.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!exports.SingleSpaContext&&s.React.createContext&&(exports.SingleSpaContext=s.React.createContext());var u={bootstrap:r.bind(null,s),mount:a.bind(null,s),unmount:i.bind(null,s)};return s.parcelCanUpdate&&(u.update=c.bind(null,s)),u};
//# sourceMappingURL=single-spa-react.js.map