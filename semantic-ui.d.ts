// Type definitions for Semantic-UI 2.1.8
// Project: https://github.com/Semantic-Org/Semantic-UI
// Definitions by: Hugo Mesquita <https://github.com/hugohomesquita/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface AccordionSettings {
    name            ?: string,
    namespace       ?: string,

    debug           ?: boolean,
    verbose         ?: boolean,
    performance     ?: boolean,

    on              ?: string, // event on title that opens accordion

    observeChanges  ?: boolean,  // whether accordion should automatically refresh on DOM insertion

    exclusive       ?: boolean,  // whether a single accordion content panel should be open at once
    collapsible     ?: boolean,  // whether accordion content can be closed
    closeNested     ?: boolean, // whether nested content should be closed when a panel is closed
    animateChildren ?: boolean,  // whether children opacity should be animated

    duration        ?: number, // duration of animation
    easing          ?: string, // easing equation for animation


    onOpening       ?: () => void, // callback before open animation
    onOpen          ?: () => void, // callback after open animation
    onClosing       ?: () => void, // callback before closing animation
    onClose         ?: () => void, // callback after closing animation
    onChange        ?: () => void, // callback after closing or opening animation

    error?: {
        method : string
    },

    className   ?: {
        active    ?: string,
        animating ?: string
    },

    selector    ?: {
        accordion ?: string,
        title     ?: string,
        trigger   ?: string,
        content   ?: string
    }
}

interface ApiSettings {
    name              ?: string,
    namespace         ?: string,

    debug             ?: boolean,
    verbose           ?: boolean,
    performance       ?: boolean,

    // object containing all templates endpoints
    api               ?: {},

    // whether to cache responses
    cache             ?: boolean,

    // whether new requests should abort previous requests
    interruptRequests ?: boolean,

    // event binding
    on                ?: string,

    // context for applying state classes
    stateContext      ?: boolean,

    // duration for loading state
    loadingDuration   ?: number,

    // whether to hide errors after a period of time
    hideError         ?: string,

    // duration for error state
    errorDuration     ?: number,

    // whether parameters should be encoded with encodeURIComponent
    encodeParameters  ?: boolean,

    // API action to use
    action            ?: boolean,

    // templated URL to use
    url               ?: boolean,

    // base URL to apply to all endpoints
    base              ?: string,

    // data that will
    urlData           ?: {},

    // whether to add default data to url data
    defaultData       ?: boolean,

    // whether to serialize closest form
    serializeForm     ?: boolean,

    // how long to wait before request should occur
    throttle          ?: number,

    // whether to throttle first request or only repeated
    throttleFirstRequest ?: boolean,

    // standard ajax settings
    method            ?: string,
    data              ?: {},
    dataType          ?: string,

    // mock response
    mockResponse      ?: boolean,
    mockResponseAsync ?: boolean,

    // aliases for mock
    response          ?: boolean,
    responseAsync     ?: boolean,

    // callbacks before request
    beforeSend        ?: (settings: any) => void,
    beforeXHR         ?: (xhr: any) => void,
    onRequest         ?: (promise: any, xhr: any) => void,

// after request
    onResponse        ?: boolean, // function(response) { },

    // response was successful, if JSON passed validation
    onSuccess         ?: (response: any, $module: any) => void,

    // request finished without aborting
    onComplete        ?: (response: any, $module: any) => void,

    // failed JSON success test
    onFailure         ?: (response: any, $module: any) => void,

    // server error
    onError           ?: (errorMessage: any, $module: any) => void,

    // request aborted
    onAbort           ?: (errorMessage: any, $module: any) => void,

    successTest       ?: boolean,

    // errors
    error : {
        beforeSend        ?: string,
        error             ?: string,
        exitConditions    ?: string,
        JSONParse         ?: string,
        legacyParameters  ?: string,
        method            ?: string,
        missingAction     ?: string,
        missingSerialize  ?: string,
        missingURL        ?: string,
        noReturnedValue   ?: string,
        noStorage         ?: string,
        parseError        ?: string,
        requiredParameter ?: string,
        statusMessage     ?: string,
        timeout           ?: string
    },

    regExp     ?: {
        required ?: string,
        optional ?: string,
    },

    className ?: {
        loading ?: string,
        error   ?: string
    },

    selector  ?: {
        disabled?: string,
        form    ?: string
    },

    metadata  ?: {
        action  ?: string,
        url     ?: string
    }
}

interface TabSettings {
    name            ?: string
    namespace       ?: string,

    debug           ?: boolean,
    verbose         ?: boolean,
    performance     ?: boolean,

    auto            ?: boolean,  // uses pjax style endpoints fetching content from same url with remote-content headers
    history         ?: boolean,  // use browser history
    historyType     ?: string, // #/ or html5 state
    path            ?: boolean,  // base path of url

    context         ?: boolean,  // specify a context that tabs must appear inside
    childrenOnly    ?: boolean,  // use only tabs that are children of context
    maxDepth        ?: number,     // max depth a tab can be nested

    alwaysRefresh   ?: boolean,  // load tab content new every tab click
    cache           ?: boolean,   // cache the content requests to pull locally
    ignoreFirstLoad ?: boolean,  // don't load remote content on first load

    apiSettings     ?: boolean,  // settings for api call
    evaluateScripts ?: string,

    onFirstLoad     ?: () => void,
    onLoad          ?: () => void,
    onVisible       ?: () => void,
    onRequest       ?: () => void,

    templates ?: {
        determineTitle ?: () => void // returns page title for path
    },

    error?:{
        api        ?: string,
        method     ?: string,
        missingTab ?: string,
        noContent  ?: string,
        path       ?: string,
        recursion  ?: string,
        legacyInit ?: string,
        legacyLoad ?: string,
        state      ?: string
    }

    metadata ?:{
        tab     ?: string,
        loaded  ?: string,
        promise ?: string
    },

    className ?:{
        loading ?: string,
        active  ?: string
    },

    selector ?:{
        tabs ?: string,
        ui   ?: string
    }

}

interface JQuery {

    accordion (params?: AccordionSettings):JQuery;
    accordion (behavior: string, ...args: any[]): JQuery;
    api       (params?: ApiSettings):JQuery;
    checkbox  (params?: any):JQuery;
    checkbox  (behavior: string, ...args: any[]): JQuery;
    colorize  (params?:any):JQuery;
    dimmer    (params?:any):JQuery;
    dimmer  (behavior: string, ...args: any[]): JQuery;
    dropdown  (params?:any):JQuery;
    dropdown  (behavior: string, ...args: any[]): JQuery;
    embed     (params?:any):JQuery;
    embed  (behavior: string, ...args: any[]): JQuery;
    form      (params?:any):JQuery;
    modal     (params?: any):JQuery;
    modal     (behavior: string, ...args: any[]): JQuery;
    nag       (params?:any):JQuery;
    nag  (behavior: string, ...args: any[]): JQuery;
    popup     (params?:any): JQuery;
    popup  (behavior: string, ...args: any[]): JQuery;
    progress  (params?:any):JQuery;
    progress  (behavior: string, ...args: any[]): JQuery;
    rating    (params?:any):JQuery;
    rating  (behavior: string, ...args: any[]): JQuery;
    search    (params?:any):JQuery;
    search  (behavior: string, ...args: any[]): JQuery;
    shape     (params?:any):JQuery;
    shape  (behavior: string, ...args: any[]): JQuery;
    sidebar   (behavior: string, ...args: any[]): JQuery;
    sidebar   (params?: any): JQuery;
    site      (params?:any):JQuery;//check
    state     (params?:any):JQuery;
    sticky    (params?:any):JQuery;
    sticky  (behavior: string, ...args: any[]): JQuery;
    tab       (params: TabSettings): JQuery;
    tab  (behavior: string, ...args: any[]): JQuery;
    transition(params?: any): JQuery;
    transition(behavior: string, ...args: any[]): JQuery;
    transition(transition?: string, duration?: string|number, callback?: () => void): JQuery;
    video     (params?:any):JQuery;
    visibility(params?:any):JQuery;
    visit     (params?:any):JQuery;//check
}
