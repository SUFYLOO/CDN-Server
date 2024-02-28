/** @module ReportViewer */ /** */
interface Component<P = {}, S = {}> {
}
declare abstract class Component<P, S> {
}
type MouseEvent<T = Element> = (value: T) => void;
type EventHandler<T> = (value: T) => void;
type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
declare namespace JSXR {
    interface Element {
    }
}
import { i18n } from 'i18next';
import { rdlxParams, ResourceLocator, PageReport, Rdl } from './ar-js-pagereport';
declare type Size = 'small' | 'default' | 'large';
declare type SVGIcon = {
    type: 'svg';
    content: JSXR.Element;
    size?: Size | 'custom';
    rotate?: '90' | '180' | '270';
};
declare type FontIcon = {
    type: 'font';
    iconCssClass: string;
    fontSize?: string;
};
declare type Icon = FontIcon | SVGIcon;
declare type ToolbarStatus = 'collapsed' | 'expanded';
declare type HistoryDir = "Back" | "Fwd" | "Parent";
declare type GotoTarget = "first" | "prev" | "next" | "last";
/** @hidden Pointer to a document with required settings/parameters */
interface DocumentMoniker {
    readonly pluginKey: string;
}
/** @hidden */
declare type ReportViewerCmd = {
    type: "Goto";
    payload: {
        target: GotoTarget;
    };
} | {
    type: "GotoPage";
    payload: {
        pageIndex: number;
        scrollTo?: string;
    };
} | {
    type: "SetCurrentPage";
    payload: {
        pageIndex: number;
    };
} | {
    type: "FetchPages";
    payload: {
        startPage: number;
        pageCount: number;
    };
} | {
    type: "Refresh";
} | {
    type: "Run";
    payload?: {
        dontCutHistory: boolean;
    };
} | {
    type: "Cancel";
}
/** Resets the pages navigation history. Clears document drill history if `hard` parameter is set to true */
 | {
    type: "ClearHistory";
    payload: {
        hard?: boolean;
    };
} | {
    type: "GoHistory";
    payload: {
        direction: HistoryDir;
    };
} | {
    type: "UpdateView";
} | {
    type: "OpenDocument";
    payload: DocumentMoniker;
};
/** @hidden */
declare type ReportViewerCommandStatus = {
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    readonly canRefresh: boolean;
    readonly canCancel: boolean;
    readonly canGoHistoryBack: boolean;
    readonly canGoBackToParent: boolean;
    readonly canGoHistoryForward: boolean;
    readonly canGoHistory: {
        Back: boolean;
        Fwd: boolean;
        Parent: boolean;
    };
};
/** @module Viewer/Search */ /** */
declare class Rect {
    /** @hidden */
    constructor(left: number, top: number, width: number, height: number);
    /** Gets or sets the left coordinate of this @see:Rect. */
    left: number;
    /** Gets or sets the top coordinate of this @see:Rect. */
    top: number;
    /** Gets or sets the width of this @see:Rect. */
    width: number;
    /** Gets or sets the height of this @see:Rect. */
    height: number;
}
/** Defines options to perform search. */
declare type FindOptions = {
    /** The text to search for. */
    Text: string;
    /** Specifies whether the search is case sensitive. */
    MatchCase: boolean;
    /** Specifies whether to search for the specified whole word only. */
    WholeWord: boolean;
    /** Specifies whether to perform the search in the backward order. */
    SearchBackward: boolean;
};
/** Defines a text range. */
declare class Range {
    /** The range start */
    readonly Start: number;
    /** The range length */
    readonly Length: number;
    /**
     * Constructor of {@link Range}
     * @param start The range start
     * @param length The range length
     */
    constructor(start: number, length: number);
    /*True is range is empty */
    readonly isEmpty: boolean;
    /** Gets the empty range. */
    static readonly Empty: Range;
}
/** Defines a search result. */
declare class SearchResult {
    /** The index of the page where the occurence is found.*/
    readonly PageIndex: number;
    /** Text to display. */
    readonly DisplayText: string;
    /** The whole text item area coordinates. */
    readonly ItemArea: Rect;
    /** The logical page item number (for subsequent searches, ordered). */
    readonly ItemIndex: number;
    /** The selection text range. */
    readonly Range: Range;
    /** Plugin-specific data. */
    readonly UserData?: any;
    /** @hidden */
    constructor(
    /** The index of the page where the occurence is found.*/
    PageIndex: number, 
    /** Text to display. */
    DisplayText: string, 
    /** The whole text item area coordinates. */
    ItemArea: Rect, 
    /** The logical page item number (for subsequent searches, ordered). */
    ItemIndex: number, 
    /** The selection text range. */
    Range: Range, 
    /** Plugin-specific data. */
    UserData?: any);
    /** @hidden Result indicating page boundaries, not an actual result. */
    static readonly MakePageStart: (pageIndex: number) => SearchResult;
    /** Result indicating search is finished. Also indicates position past the end of document. */
    static readonly PastEnd: SearchResult;
    /** Special result value for Find method to begin searching from the beginning of the document/page */
    static readonly BeforeBegin: SearchResult;
}
/**
 * @module Viewer
 * Provies a facility to trigger and handle cancellation requests.
 */
/**
 * Cancellation token.
 */
declare class CancellationToken {
    private _isCancellationRequested;
    private _cancellationPromise;
    private _cancel;
    /** The parent token */
    readonly parentToken?: CancellationToken;
    private constructor();
    /**
     * Creates a cancellation token and trigger function.
     * @param parentToken The parent token.
     */
    static create(parentToken?: CancellationToken): {
        token: CancellationToken;
        cancel: (e: any) => void;
    };
    /*
    * Gets true if cancellation is being requested.
    */
    readonly isCancellationRequested: boolean;
    /*
    * Gets a promise that is triggered when cancellation is requested.
    */
    readonly promise: Promise<any>;
    /**
     * Registers a new cancellation handler. Handler is invoked when cancellation is requested.
     * @param callback
     */
    register(callback: (reason: any) => any): void;
}
/** @module Viewer/Search */ /** */
/** Defines search result */
declare enum SearchStatus {
    /** Search completed */
    Completed = "completed",
    /** Search cancelled */
    Cancelled = "cancelled",
    /** Search argument error */
    ArgumentError = "argerror"
}
/** @hidden */ /** */
declare type ChangeHandler<TState> = (state: TState) => void;
/** Provides the read/write access to state store, similar to redux store */
interface IStore<TState, TMsg> {
    dispatch(msg: TMsg): void;
    readonly state: TState;
    subscribe(onUpdate: ChangeHandler<TState>): () => void;
}
/**
 * Interface to state binder component which purpose is to allow one UI control to handle several documents.
 */
interface IStateBinder<TState> {
    /** binds component to a new state */
    bind(store: IStore<TState, any>): void;
}
declare type PanelHandle = {
    id: string;
};
/** Long running tasks API */
declare type TaskCallbacks = {
    onProgress: (message: any) => void;
    isCancelRequested: () => boolean;
};
declare type TaskSettings = {
    title?: string;
    supportCancel?: boolean;
};
/** End of long running tasks API */
/** Error reporting */
declare type ErrorSeverity = "error" | "warn" | "info" | "debug";
declare type ErrorMessage = {
    severity: ErrorSeverity;
    message: string;
    details: string;
};
declare type ErrorHandler = (error: ErrorMessage) => boolean;
/** Defines a parameter for reportError method */
interface IErrorParams {
    readonly severity?: ErrorSeverity;
    readonly message: string;
    readonly details?: string;
}
/** History API */
interface IViewerEvent {
    readonly type: string;
}
/** Action (for interactive documents) handler context */
declare type ActionContext<TEvent extends IViewerEvent> = {
    readonly document: IDocument;
    readonly view: IDocumentView | null;
    processCommand(cmd: ReportViewerCmd): void;
    processAction(action: ViewerAction): void;
    pushEvent(event: TEvent): void;
};
/** Standard viewer actions */
declare type ViewerAction = {
    Type: "goBookmark";
    Target: {
        pageNumber: number;
        selector?: string;
    };
} | {
    Type: "goHyperlink";
    Target: string;
} | {
    Type: "drillDocument";
    Target: DocumentMoniker;
};
/** end of History API */
interface IReportError {
    /** Reports the error to user/UI. */
    reportError(params: IErrorParams): void;
}
declare type PanelLocation = 'top' | 'bottom' | 'default';
/** Main component API */
declare type PanelSettings = {
    label: string;
    icon: string | Icon;
    description: string;
    visible: boolean;
    enabled: boolean;
    /**Define this property to show this panel: 'top' - on top document view, 'bottom' - on bottom document view, 'default' -  in sidebar/menu
    * This panel will be shown in sidebar/menu by default, if this property is undefined */
    location?: PanelLocation;
};
/** Represents API to access main (host) viewer components. */
interface IViewerHost extends IReportError {
    /** Creates a new UI panel
     * @param render renders DOM for the panel UI to a specified container element. Must be instance of React.ReactChild
     * @param binder instance of Binder that connects state to panel UI.
     */
    createPanel<T>(component: any, binder: IStateBinder<T>, key: string, settings: Partial<PanelSettings>): PanelHandle;
    /** Shows or hides the panel button in sidebar. */
    showPanel(panelKey: PanelHandle, visible?: boolean): void;
    /** Updates sidebar panel status. */
    updatePanel(panelKey: PanelHandle, settings: Partial<PanelSettings>): void;
    /** Ensures the panel is visible to user. */
    bringPanelToFront(panel: PanelHandle): void;
    /** Binds panel to a new document/state. */
    bindPanel<TState, TMsg>(panel: PanelHandle, store: IStore<TState, TMsg>): void;
    /** Instructs viewer that after particular action (such as clicking link or button) it should close panel when in mobile mode. */
    closePanelOnNarrowScreen(panel?: PanelHandle): void;
    /** Allows plugin to send a command to viewer window */
    processCommand(cmd: ReportViewerCmd): void;
    /** Redirects action processing to plugin */
    processAction(action: ViewerAction): void;
    /** Gets commands status */
    readonly commandStatus: ReportViewerCommandStatus;
}
declare enum TimeDirection {
    Backward = "backward",
    Forward = "forward"
}
/** Interface to plugin module to implement support for particular document types. */
interface IPluginModule<TEvent extends IViewerEvent, TAction> {
    /** Gets unique plugin identifier */
    readonly pluginKey: string;
    /** Opens a new document by URI */
    openDocument(location: DocumentMoniker, token?: CancellationToken): Promise<IDocument | null>;
    /** Renders page to a page view */
    renderPage(page: IPageData): PageView;
    /** Renders the page with highlighted results */
    renderHighlightPage?(page: IPageData, results: SearchResult[]): PageView;
    /** Fires when user switches to a new document (opens a new report) */
    onOpenDocument?(view: IDocument | null): void;
    /** Fires when user switches to a new document view */
    onOpenDocumentView(view: IDocumentView | null): void;
    /** Given the mouse event attempts to resolve the action for the viewer/plugin. */
    resolveAction(context: ActionContext<TEvent>, event: MouseEvent): TAction | ViewerAction | null;
    /** Processes the action resolved on prior step */
    processAction(context: ActionContext<TEvent>, action: TAction, processCommand: (cmd: ReportViewerCmd) => void): boolean;
    /** Translates event to a viewer commands (provides implementation for the events) */
    processEvent(context: ActionContext<TEvent>, event: TEvent, direction: TimeDirection): void;
}
declare type PageCountResult = {
    totalPageCount: number | null;
    renderedSoFar: number;
};
/** Defines a progress message for IRunEventSink.progress() method. */
declare type ProgressMessage = {
    phase: "starting";
    message: string;
} | {
    phase: "run";
    document?: IDocumentView;
    count: PageCountResult;
} | {
    phase: "complete";
    document?: IDocumentView;
    pageCount: number;
} | {
    phase: "cancelled";
};
/** Interface for communicating viewer when document rendering is in progress. */
interface IRunEventsSink extends IReportError {
    /** Changes current status and provides additional progress info. */
    progress(message: ProgressMessage): Promise<void>;
    /** Instruct viewer to reset cached page data for particular page or range of pages */
    invalidatePage(index: number, count?: number): void;
    /** Provides cancellation token for rendering routine. The latter should check cancellation status and cancel rendering as soon as possible. */
    readonly cancel: CancellationToken;
}
/** Internal document representation */
interface IDocument {
    /** Indicates whether the view can be created immediately after document is loaded. Primarily for AutoRun. */
    canView(): boolean;
    /** Creates a new document view (runs the reports or renders the document).
     * @param baseView the view to inherit settings or parameters from. Consider "refresh" behavior in report viewer.
     * @param sink the interface to communicate progress into to a viewer.
     */
    createView(baseView: IDocumentView | null, sink: IRunEventsSink): Promise<IDocumentView | undefined>;
    /** Updates the document view without data retrieval. Usually is called when view settings are changed. */
    updateView(view: IDocumentView, sink: IRunEventsSink): Promise<IDocumentView | undefined>;
}
/** Visual representation of the document. */
interface IDocumentView {
    /** Gets the number of pages within a document. */
    readonly pageCount: PageCountResult;
    /** Gets the document page. */
    awaitPage(index: number): Promise<IPageData | null>;
    /** Override to provide fulltext search implementation */
    search?(options: FindOptions, startFrom: SearchResult): AsyncIterableIterator<SearchResult>;
}
declare type PageSize = {
    /** Page width in html units. E.g. "13cm", "5in" */
    width: string;
    /** Page height. */
    height: string;
};
/** Marker interface for page data */
interface IPageData {
    /** Gets the page size */
    readonly pageSize: PageSize;
}
/** Rendering friendly page representation. */
declare type PageView = {
    kind: 'html';
    html: string;
} | {
    kind: 'dom';
    dom: Element;
};
/** @hidden */ /** */
declare type PageInfo = {
    size: PageSize | null;
    data: PageView | null;
    isLoading: boolean;
    isInvalid: boolean;
    reqIndex: number;
};
declare enum ViewerStatus {
    Empty = 0,
    Loading = 1,
    Cancelled = 2,
    Ready = 3,
    Failed = 4
}
declare enum ZoomMode {
    Value = 0,
    PageWidth = 1,
    WholePage = 2
}
declare enum ViewMode {
    SinglePage = 0,
    Continuous = 1
}
declare enum MouseMode {
    Select = 0,
    Move = 1
}
declare type UISize = 'small' | 'medium' | 'large';
declare type ZoomSettings = {
    mode: ZoomMode.PageWidth;
} | {
    mode: ZoomMode.WholePage;
} | {
    mode: ZoomMode.Value;
    factor: number;
};
declare type ZoomTarget = 'viewport' | 'page';
declare type ViewSettings = {
    zoom: ZoomSettings;
    /**
    Defines which element should be transformed when zoom applied. Default value is `'page'`
     * */
    zoomTarget: ZoomTarget;
    mode: ViewMode;
    mouseMode: MouseMode;
    isFullscreen: boolean;
    narrowScreen: boolean;
    isToolbarVisible: boolean;
    isSidebarVisible: boolean;
};
declare type DocViewModel = {
    readonly status: ViewerStatus;
    readonly pageCount: number;
    readonly pageIndex: number;
    /** Indicates last page was set by user and view should scroll to page */
    readonly scrollRequestNo: number;
    readonly scrollToSelector: string | null;
    readonly progressMessage: string;
    readonly pageBuffer: Array<PageInfo>;
    readonly highlightPage: {
        pageIndex: number;
        pageView: PageView;
    } | null;
};
declare type Model = {
    settings: ViewSettings;
    session: DocViewModel;
};
/** Defines the toolbar item settings and behavior. */
declare type ToolbarItem = {
    key: string;
    /**
    * @deprecated use icon instead
    */
    iconCssClass?: string;
    icon?: Icon;
    text?: string;
    title?: string;
    checked?: boolean;
    enabled?: boolean;
    action?: (curr?: ToolbarItem) => Partial<ToolbarItem> | void;
    onUpdate?: (args: ChangedEventArgs, curr: ToolbarItem) => Partial<ToolbarItem> | void;
};
/** Describes the toolbar items layout (order and visibility) for different view models. */
declare type ToolbarLayout = {
    /** Default (desktop) view mode. Also applied when other modes are not specified. */
    default?: string[];
    /** The layout for the full-screen mode. */
    fullscreen?: string[];
    /** The toolbar layout for mobile devices. */
    mobile?: string[];
};
/** @hidden */
interface ToolbarViewProps {
    viewer: ReportViewer;
    mobileView: boolean;
    i18n: i18n;
    size: Size;
    onToggle?: (status: ToolbarStatus) => void;
}
declare const canGoHistoryDefault: {
    Parent: boolean;
    Back: boolean;
    Fwd: boolean;
};
/** @hidden */
interface ToolbarViewState {
    readonly items: ToolbarItem[];
    readonly layout?: ToolbarLayout;
    readonly status: ViewerStatus;
    readonly fullscreen: boolean;
    readonly zoom: ZoomSettings;
    readonly mouseMode: MouseMode;
    readonly navigation: {
        readonly hasView: boolean;
        readonly canGoHistory: typeof canGoHistoryDefault;
        readonly canRefresh: boolean;
        readonly canGoForward: boolean;
        readonly canGoBackward: boolean;
        readonly pageIndex: number;
        readonly pageCount: number;
    };
}
/** @hidden */
declare class ToolbarView extends Component<ToolbarViewProps, ToolbarViewState> {
    private readonly _commands;
    private _lastViewerState;
    private _toolbar;
    constructor(props: ToolbarViewProps);
    state: ToolbarViewState;
    componentDidUpdate(prevProps: ToolbarViewProps, prevState: ToolbarViewState): void;
    private refreshToolbar;
    private generateUpdateObject;
    private onStateChange;
    private onNavigationBtnClick;
    private onHistoryBtnClick;
    private onPageInputFocus;
    private navigateTo;
    private onPageInputBlur;
    private onPageInputPress;
    private onRefresh;
    private onFullscreenToggle;
    private onZoomChange;
    private onSetMouseMode;
    addItem: (item: ToolbarItem) => void;
    removeItem: (key: string) => void;
    updateItem: (key: string, itemUpdate?: Partial<ToolbarItem> | undefined) => void;
    private onButtonItemClick;
    private getItemsDictionary;
    updateLayout: (layout: ToolbarLayout) => void;
    static builtinToolbar: string[];
    /** Gets the content (item keys) of the default toolbar. It includes all user items. */
    getDefaultToolbarItems: () => string[];
    recalculateBounds: () => void;
    render(): JSXR.Element;
}
/** Unsubscribe event handler */
declare type UnregisterHandler = () => any;
/**
 * Event
 * @typeparam TArgs event argument type
 */
declare class EventFan<TArgs> {
    private _eventHandlers;
    private _trigger;
    private static _lastKey;
    private static generateKey;
    private constructor();
    /**
     * Creates a cancellation token and the trigger function.
     * @param parentToken
     */
    static createFor<TArgs>(): {
        event: EventFan<TArgs>;
        trigger: (e: TArgs) => void;
    };
    /**
     * Registers a new event handler. The handler is invoked when the cancellation is requested.
     * @param callback
     */
    register(callback: (args: TArgs) => any): UnregisterHandler;
}
/** @hidden */ /** */
declare type LoadResult = {
    status: 'loaded';
    document: IDocument;
} | {
    status: 'error';
    message: string;
    details?: string;
} | {
    status: 'cancelled';
};
/** @module Viewer/Toolbar */ /** */
/** Viewer toolbar. */
declare class Toolbar {
    private _view;
    /** @hidden */
    constructor(_view: ToolbarView);
    /** Adds a new item to the toolbar.
     *
     * ```javascript
     * var pdfExportButton = {
     *     key: '$pdfExportButtonKey',
     *     iconCssClass: 'mdi mdi-file-pdf',
     *     enabled: true,
     *     action: function(item) {
     *         console.log('Export to PDF function works here');
     *     },
     *     onUpdate: function(arg, item) {
     *         console.log('Something in viewer was updated, check/update button state here');
     *     }
     * };
     * viewer.toolbar.addItem(pdfExportButton);
     * ```
     *
     * @param item  An item to be added.
     */
    addItem(item: ToolbarItem): void;
    /** Updates a previously added toolbar item.
     *
     * @param key  the toolbar item key, as it was specified in the addItem parameters.
     * @param itemUpdate  New toolbar item settings.
     */
    updateItem(key: string, itemUpdate?: Partial<ToolbarItem>): void;
    /** Removes a toolbar item.
     * @param key  The toolbar item key, as it was specified in the addItem parameters.
     */
    removeItem(key: string): void;
    /**
     * Defines the toolbar items layout (order and visibility) for different view modes.
     * A parameter is an object with default, full-screen, mobile mode properties (each property is an array of items to be shown in specific views). Setting to default will only affect all modes (full-screen, mobile) if they are not specified externally.
     *
     * ```javascript
     * viewer.toolbar.addItem(pdfExportButton); //now you want to remove everything except pdfExportButton and the navigation block.
     * viewer.toolbar.updateLayout({default: ['$pdfExportButtonKey', '$navigation']});
     * ```
     *
     * will create a toolbar with the export button and the "navigation" block.
     */
    updateLayout(layout: ToolbarLayout): void;
    /** Gets the list of default toolbar items. */
    getDefaultToolbarItems(): string[];
    /** @hidden */
    recalculateBounds: () => void;
}
/** @hidden */ /** */
declare class ChangedEventArgs {
    readonly state: Model;
    constructor(state: Model);
}
declare class DocumentOpenedEventArgs {
    readonly document: IDocument | null;
    constructor(document: IDocument | null);
}
declare class DocumentViewOpenedEventArgs {
    readonly view: IDocumentView | null;
    constructor(view: IDocumentView | null);
}
declare type TopBottomPanelToggle = {
    /** Defines top-bottom-panels controls position to toolbar */
    position: 'left' | 'right';
    /** Defines right separator presence */
    includeSeparator?: boolean;
};
declare type PageViewOptions = {
    /** Defines horizontal alignment for report page inside view area. horizontalAlignment = 'center' by default */
    horizontalAlignment?: 'left' | 'right' | 'center';
    /** Removes 'gray' background, shadows, paper borders, and other things that make 'paper view' */
    withoutPaperView?: boolean;
};
declare type ReportViewerOptions = {
    /** Defines where the panels (search, parameters etc) are placed */
    PanelsLocation?: 'sidebar' | 'toolbar';
    /** Allows to override default error behavior */
    ErrorHandler?: ErrorHandler;
    /** Defines initial toolbar state */
    ToolbarLayout?: ToolbarLayout;
    /** Defines UI elements size */
    UISize?: UISize;
    /** Defines top-bottom-panels controls position and separator presence*/
    TopBottomPanelToggle?: TopBottomPanelToggle;
    /** Disables focus highlighting timer for better accessibility */
    DisableFocusTimer?: boolean;
    /** Isolates this Viewer instance. Required if multiple instances are present on the same page */
    InstanceId?: string;
    /** Defines horizontal alignment and view for report page like part of the WebPage or 'paper view' */
    PageViewOptions?: PageViewOptions;
    /** Defines default width of sidebar - number of pixels or valid CSS length */
    SidebarDefaultWidth?: number | string;
    /**
     * Callback which fires each time when toolbar is collapsed or expanded.
     * @param status new status of toolbar
     */
    OnToolbarToggle?: (status: ToolbarStatus) => void;
};
/** The custom document view ctor specification. */
declare type CustomDocumentViewFactory = (connectProps: any, // props for component view (dispatch and ref)
handleViewerCmd: (cmd: ReportViewerCmd) => void, handleClick: MouseEventHandler, placeholder: Element) => void;
/** Defines the argument type for the ReportViewer.search method. */
declare type SearchOptions = {
    /** Text to search for. */
    text: string;
    /** Case-sensitive search. */
    matchCase?: boolean;
    /** Search backward from the current position. */
    searchBackward?: boolean;
    /** Match whole word. */
    wholeWord?: boolean;
    /** The page to start the search from. */
    startPage?: number;
};
/**
 * The main control implementation.
 * @hidden
 */
declare class ReportViewer implements IViewerHost {
    private readonly _viewerState;
    readonly instanceId: string;
    private readonly _stateChangeEvent;
    private readonly _documentViewOpenedEvent;
    private readonly _documentOpenedEvent;
    private readonly _documentProgressEvent;
    private readonly _menuPanelChangeEvent;
    private readonly _panelsStore;
    private readonly _errorsStore;
    private readonly _progressStore;
    private _toolbar;
    private readonly _hostElement;
    private _errorHandler;
    private readonly _disposables;
    private readonly i18n;
    private readonly _panelsOnSidebar;
    private uiInstance;
    private handleClick;
    private getZoomFactor;
    private setZoomFactor;
    private onDocViewRefUpdate;
    private _isMobile;
    constructor(element: any, options?: ReportViewerOptions, customDocumentView?: CustomDocumentViewFactory, xi18n?: i18n);
    /** disposes control and and */
    dispose(): void;
    setPlugin<TEvent extends IViewerEvent>(plugin: IPluginModule<TEvent, any>): void;
    private _panelLastKey;
    private _cancelTaskRequested;
    /** Starts long-running operation and displays progress window while operation is running. */
    executeTask(task: (callbacks: TaskCallbacks) => Promise<void>, settings?: TaskSettings): Promise<void>;
    createPanel<TState>(component: any, binder: IStateBinder<TState>, key: string, { icon, description, visible, enabled, label, location }: Partial<PanelSettings>): PanelHandle;
    /** Updates the panel visibility. */
    showPanel(panelKey: PanelHandle, visible?: boolean): void;
    /** Updates panel settings such as visibility, label or "enabled" status. */
    updatePanel(panelKey: PanelHandle, settings: Partial<PanelSettings>): void;
    /** Gets the current panel state. */
    getPanelState(panelKey: PanelHandle): PanelSettings | null;
    /** Orders and filters panel items. '*' indicates "the rest of panels". 'sep'/'separator' indicated menu separator. */
    layoutPanels(layout: string[]): void;
    bringPanelToFront(panelKey: PanelHandle): void;
    bindPanel<TState, TMsg>(panelKey: PanelHandle, store: IStore<TState, TMsg>): void;
    closePanelOnNarrowScreen(panel?: PanelHandle): void;
    processCommand: (cmd: ReportViewerCmd) => void;
    reportError(params: IErrorParams): void;
    /** Updates activeTopPanelId for to show/hide panel with setting.location = 'top' (id = null to hide panel)*/
    setActiveTopPanel(id: string | null): void;
    /** Updates activeBottomPanelId for to show/hide panel with setting.location = 'bottom' (id = null to hide panel)*/
    setActiveBottomPanel(id: string | null): void;
    /*Gets the main window's host element */
    readonly hostElement: Element;
    /*Gets or sets callback that is invoked when an error occurs in the process of displaying the report */
    errorHandler: ErrorHandler;
    /*The event indicating document was changed (new document opened, drilled or "back to parent" is issued) */
    readonly onDocumentOpen: EventFan<DocumentOpenedEventArgs>;
    /*The event indicating document view was changed (new document opened, refreshed, toggled etc) */
    readonly onDocumentViewOpen: EventFan<DocumentViewOpenedEventArgs>;
    /*The event indicating document load progress */
    readonly onDocumentProgress: EventFan<ProgressMessage>;
    /*Indicates the viewer state was changed. */
    readonly onViewerStateChange: EventFan<ChangedEventArgs>;
    /*Temporary expose event, which occurs on panel change  */
    readonly tempOnPanelChange: EventFan<string | null>;
    /** Resets report and cancel current session if any. */
    resetDocument(): Promise<void>;
    /** Loads the report (no UI), so caller has to process load result and report error if any. */
    load(moniker: DocumentMoniker, token?: CancellationToken): Promise<LoadResult>;
    /** Loads the report and reports error to error dialog. */
    open(moniker: DocumentMoniker): Promise<LoadResult>;
    readonly toolbar: Toolbar;
    /*Gets currently viewed document state */
    readonly viewerState: Model;
    /*Gets or sets view mode (single page or continuous). */
    viewMode: ViewMode;
    zoom: ZoomSettings;
    zoomTarget: ZoomTarget;
    mouseMode: MouseMode;
    processCustomAction: (action: any) => boolean;
    processAction: (action: any) => boolean;
    readonly commandStatus: ReportViewerCommandStatus;
    readonly isFullscreen: boolean;
    toggleFullscreen(fullscreen?: boolean): void;
    readonly isToolbarHidden: boolean;
    toggleToolbar(show?: boolean): void;
    /** Sets of toggles sidebar's panels visibility */
    toggleSidebar: (show?: boolean | undefined) => void;
    /*Gets the current document */
    readonly document: IDocumentView | null;
    /** Searches currently opened document for the text. */
    search({ text, matchCase, wholeWord, searchBackward, startPage }: SearchOptions, resultFn: (result: SearchResult) => void, progressFn?: (progress: {
        pageIndex: number;
        pageCount: number | null;
    }) => void, cancel?: CancellationToken): Promise<SearchStatus>;
    /** Navigates to a page containing the result and highlights found text. */
    highlight(result: SearchResult): Promise<void>;
}
/** @hidden */ /** */
interface ExportResult {
    readonly data: Blob | string;
    readonly download: (filename?: string) => void;
}
interface FontDescriptor {
    name: string;
    source: string | string[];
    weight?: string;
    style?: string;
    postscriptName?: string;
}
/** @module Viewer */ /** */
interface ReportSettings {
    /** The name of the report (when referenced from report expressions). */
    ReportName: string;
    /** Optional parameter values to be passed to a report. */
    ReportParams: {
        Name: string;
        Value: rdlxParams.ParameterVariant[];
    }[];
    ResourceLocator: Partial<ResourceLocator>;
}
/** Viewer render mode */
declare type ViewerRenderMode = 'Galley' | 'Paginated';
/** Viewer view mode */
declare type ViewerViewMode = 'Continuous' | 'SinglePage';
/** Viewer zoom mode */
declare type ViewerZoomMode = 'FitToWidth' | 'FitPage' | number;
/** Viewer mouse mode */
declare type ViewerMouseMode = 'Pan' | 'Selection';
/** Viewer panels location */
declare type PanelsLocation = 'sidebar' | 'toolbar';
/** Parameters view/panel location */
declare type ParameterPanelsLocation = PanelLocation;
/**
 * 'reportLoaded' event arg
 */
declare type ReportLoadEventArgs = {
    /** The loaded report */
    readonly report: PageReport;
};
/**
 * History api
 */
interface HistoryApi {
    /** Navigates to a next item in the browsing history. */
    moveNext(): void;
    /** Navigates to previously stored state. */
    movePrev(): void;
    /** Clears all page navigation events from history. */
    clear(): void;
    /** Gets true if history contains any "forward" actions. */
    canMoveNext(): boolean;
    /** Gets true if history contains any action that could be rolled back. */
    canMovePrev(): boolean;
}
/**
 * Defines the 'documentLoaded' event arg.
 */
declare type DocumentLoadEventArgs = {
    /** number of document pages. */
    readonly pageCount: number;
    /** true if document rendering was cancelled */
    readonly cancelled?: boolean;
};
/**
 * Viewer control settings.
 */
interface ViewerOptions {
    /**
     * Viewer language.
     */
    language?: string;
    /**
     * Custom error handler:
     *
     * ```
     * var options = {
     * 	ErrorHandler: error => {
     * 		console.error(error.message);
     * 		return true;
     *		}
     * };
     * ```
     *
     */
    ErrorHandler?: ErrorHandler;
    /**
     * Initial settings for export panel:
     *
     * ```
     * var options = {
     * 	ExportsSettings: {
     * 		pdf: { ... },
     * 		xlsx: { ... },
     * 		html: { ... }
     * 	}
     * };
     * ```
     *
     */
    ExportsSettings?: Record<string, ExportSettings>;
    /** @obsolete */
    /**
     * Location of panels.
     */
    PanelsLocation?: PanelsLocation;
    /** Layout of panels bar. */
    PanelsLayout?: PanelsLocation;
    /** Initial toolbar layout:
     *
     * ```
     * var options = {
     *  ToolbarLayout: {
     *		default: ['$navigation', '$refresh', '$zoom', '$fullscreen'],
     *		fullscreen: ['$refresh', '$print', '$fullscreen'],
     *		mobile: ['$refresh', '$navigation', '$split', '$fullscreen']}
     *  }
     * };
     * ```
     */
    ToolbarLayout?: ToolbarLayout;
    /** Parameters panel location. */
    ParameterPanelLocation?: ParameterPanelsLocation;
    /** Enables report data memoization if set to "true".  */
    memoizeData?: boolean;
}
/**
 * Initial settings for export panel:
 *
 * ``` javascript
 * var exportSettings = {
 * 	filename: 'NewFile'
 * };
 * ```
 *
 */
declare type ExportSettings = Record<string, string | boolean | number | null>;
/** Report viewer component. */
declare class Viewer {
    private readonly _viewer;
    private readonly _arPlugin;
    private readonly _exportPanelApi;
    private readonly _reportLoadedEvent;
    private readonly _documentLoadedEvent;
    /** Creates the viewer within container element (div) with id='viewer' and sets the language:
     *
     *  ```javascript
     *  var options = { language: 'ru' };
     *  var viewer = new ActiveReports.Viewer('#viewer', options );
     *  viewer.open('report.json');
     *  ```
     *
     * @param element  Where to render the viewer control.
     *  Accepts on of the following values:
     *  - string: DOM selector of the element to render viewer to. E.g. '#viewer'
     *  - DOM Element. E.g. document.getElementById('viewer')
     *  - JQuery object. E.g. $('#viewer')
     *
     * @param options  Control settings.
     *
     */
    constructor(element: any, options?: ViewerOptions);
    /**
     * Resets current viewer document
     */
    resetDocument(): Promise<void>;
    /**
     * Opens report from file or as definition (json string)).
     *
     * ```javascript
     * var viewer = new ActiveReports.Viewer(#viewerPlace);
     * viewer.open('report.json');
     * ```
     *
     * @param report  The report template. Can be report URI, or report definition, or instance of PageReport class.
     * @param settings  Additional settings for report (name, parameters).
     */
    open(report: string | Rdl.Report | PageReport, settings?: Partial<ReportSettings>): Promise<LoadResult>;
    /*Gets the viewer toolbar component. */
    readonly toolbar: Toolbar;
    /**
     * Toggle sidebar panel(hide or show it). In case if no parameter passed works as toggle.
     *
     * ```javascript
     * viewer.toggleSidebar(); //will hide toolbar if visible
     * viewer.toggleSidebar(true);//will show it regardless current state
     * ```
     *
     * @param visible  New visibility status. If value is not passed, the function will toggle current state.
     */
    toggleSidebar(visible?: boolean): void;
    /**
     * Toggle toolbar (hide or show it).
     *
     * ```javascript
     * viewer.toggleToolbar(); // toggles toolbar visibility
     * viewer.toggleToolbar(true); //will show it
     * ```
     *
     * @param show  Pass **true** to switch toolbar ON, and vise-versa. Do not pass any value to toggle visibility.
     */
    toggleToolbar(show?: boolean): void;
    /**
     * Change viewer mode to fullscreen.
     *
     * ```javascript
     * viewer.toggleFullScreen();
     * ```
     */
    toggleFullScreen(enabled?: boolean): void;
    /*
    * Gets or sets viewer render mode. Available values are: **Galley** | **Paginated**
    *
    * ```javascript
    * viewer.renderMode = 'Galley';
    * ```
    */
    renderMode: ViewerRenderMode;
    /*
    * Gets or sets viewer viewMode.
    *
    * ```javascript
    * enum ViewMode {
    *     SinglePage = 0,
    *     ContinousPage = 1
    * }
    * var viewMode = viewer.viewMode //by default SinglePage
    * //set to continous
    * viewer.viewMode = 'continuous' // or viewer.viewMode = 1;
    * ```
    */
    viewMode: ViewerViewMode | ViewMode;
    /*
    * Gets or sets current zoom value. Zoom value could be specified as factor. Valid values:
    * - **from 0 up to 3** where 0.5 indicate 50% and 3 = 300%;
    * - const values **'FitToWidth' | 'FitPage'** (case insensitive)
    *
    * ```javascript
    * var currentZoom = viewer.zoom; //by default 1 (100%)
    * //now set mode to Fit to Width
    * viewer.zoom = 'FitToWidth';
    * //now verify value
    * var newValue = viewer.zoom;
    * //newValue will be equal to FitToWidth
    * ```
    */
    zoom: ViewerZoomMode;
    /*
    * Gets or sets mouse mode in viewer. Available values are: **Pan | Selection**.
    *
    * ```javascript
    * viewer.mouseMode = "pan";
    * ```
    */
    mouseMode: ViewerMouseMode;
    /*
    *  Gets or sets error handler for viewer. Allow user to override existing and not to show error pane if user wants to customize error output.
    *
    * ```javascript
    * type ErrorMessage = {
    *     severity: "error" | "warn" | "info" | "debug";
    *     message: string,
    *     details: string);
    *
    * function handler(error: ErrorMessage){
    *     console.log(error.message);
    *     return true; // return true if you don't want to show this error in viewer's error pane
    * }
    *
    *
    * viewer.errorHandler = handler;
    * ```
    */
    errorHandler: ErrorHandler;
    /*
    * Gets the event indicating the viewer state is changed.
    * The changes include visual settings and content change such as rendering document.
    */
    readonly stateChanged: EventFan<ChangedEventArgs>;
    private noDocument;
    /**
     * Navigates to the first page.
     *
     * ```javascript
     * viewer.goToFirstPage();
     * ```
     * */
    goToFirstPage(): void;
    /**
     * Navigates to the previous page.
     *
     * ```javascript
     * viewer.goToPrevPage();
     * ```
     * */
    goToPrevPage(): void;
    /**
     * Navigates to the next page.
     *
     * ```javascript
     * viewer.goToNextPage();
     * ```
     * */
    goToNextPage(): void;
    /**
     * Navigates to the last page.
     *
     * ```javascript
     * viewer.goToLastPage();
     * ```
     * */
    goToLastPage(): void;
    /**
     * Navigates to the specified page (starting from 1).
     *
     * ```javascript
     * viewer.goToPage(3); //will navigate to 3d page
     * ```
     * */
    goToPage(pageNumber: number): void;
    /**
     * Performs backToParent action which will return user to parent report.
     *
     * ```javascript
     * viewer.backToParent();
     * ```
     */
    backToParent(): void;
    /**
     * Performs refresh operation in report (re-render report).
     *
     * ```javascript
     * viewer.refresh();
     * ```
     *  */
    refresh(): void;
    /** Gets **true** if backToParent command is applicable to current document. */
    canBackToParent(): boolean;
    /*
    * Gets current page number (1-based). Returns 0 if no document loaded.
    *
    * ```javascript
    * var pageNumber = viewer.currentPage;
    * ```
    * */
    readonly currentPage: number;
    /*
    * Gets the total number of pages available in report.
    *
    * ```javascript
    * var totalPages = viewer.pageCount;
    * ```
    * */
    readonly pageCount: number;
    /*Provides access to the "history" API. */
    readonly history: HistoryApi;
    private _availableExports;
    /*
    * Set exports which should be displayed in export panel when export plugins attached to viewer.
    *
    * ```javascript
    * viewer.availableExports = [''] //disable all loaded export modules
    * viewer.availableExports = ['pdf'] //filters out any export formats other than PDF
    * viewer.availableExports = [] //enable all loaded export modules
    * ```
    */
    availableExports: string[];
    /**
     * Exports currently displayed report to specified output format. Returns object which contains result data as blob object | string and download function. So you could either use this blob object or download file immediately. Please note that you can specify settings in PDF export as plain list (like **{title: 'Title', author: 'Author Name', ownerPassword: '1'}** etc...
     *
     * ```javascript
     * var options = {filename:"Invoice List"};
     * var cancelCallback = function(){
     *     return false; // continue export. Return true to cancel export process
     * }
     * viewer.export('pdf', options, {cancel: cancelCallback }).then(result => doSmthWithBlob(result.data));
     * //or you can download file
     * viewer.export('pdf', options, {cancel: cancelCallback }).then(result => result.download('Invoice List'));
     * ```
     *
     * @param format  Export format identifier. One of 'pdf', 'xlsx' or 'html'.
     * @param settings  Format specific export settings.
     * @param params  Additional export customization.
     */
    export(format: string, settings: Record<string, string | boolean | number>, params?: {
        cancel?: () => boolean;
    }): Promise<ExportResult>;
    /**
     * @deprecated Use FontStore.registerFonts instead.
     *
     * Register specified fonts in CSS and pdf export. Helps display export correctly on machines where fonts can be missed.
     *
     * ```javascript
     * type FontDescriptor = {
     *     name: string,
     *     source: string,
     *     weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
     *     style?: 'normal' | 'italic' | 'oblique'
     * }
     *
     *
     * var arial = {
     *     name: 'Arial',
     *     source: 'fonts/arial.ttf',
     *     style: 'italic',
     *     weight: '700',
     * };
     *
     *
     * var gothic = {
     *     name: 'MS PGothic',
     *     source: 'fonts/MS-PGothic.ttf'
     * };
     *
     *
     * viewer.registerFont(arial);
     * //OR
     * viewer.registerFont(arial, gothic);
     * //OR
     * var fonts = [arial, gothic]; viewer.registerFont(...fonts);
     * ```
     */
    registerFont(...fonts: FontDescriptor[]): Promise<void>;
    /**
     * @deprecated Use FontStore.registerFonts instead.
     *
     * Register specified fonts in CSS and pdf export. Helps display export correctly on machines where fonts can be missed.
     *
     * ```javascript
     * viewer.registerFont('./fontsConfig.json');
     * ```
     */
    registerFont(configUri: string): Promise<void>;
    /**
     * Prints currently displayed report.
     *
     * ```javascript
     * viewer.print();
     * ```
     */
    print(): void;
    /*
    * Set and register reportLoaded event which occurs once report is loaded in viewer. Doesn't account for drill through reports.
    *
    * ```javascript
    *  type ReportLoadedEventArgs = {
    *     reportSource: string | RDL.Report;
    *     parameters: ParameterDescriptor[];
    * }
    *
    *
    * viewer.reportLoaded.register(args => console.log('Report just loaded ', args));
    * ```
    */
    readonly reportLoaded: EventFan<ReportLoadEventArgs>;
    /*
    * Set and register documentLoaded event which occurs once document is fully rendered in viewer. Also works on refresh.
    *
    * ```javascript
    * type DocumentLoadedEventArgs = {
    *     pageCount: number;
    *     cancelled?: boolean;
    * }
    *
    * viewer.documentLoaded.register(args => console.log('Report was fully rendered ', args));
    * ```
    */
    readonly documentLoaded: EventFan<DocumentLoadEventArgs>;
    /**
     * Performs search operation in currently rendered report. Allows you to create your own custom search pane.
     *
     * ```javascript
     * viewer.search({
     *     text: "Ship",
     *     matchCase: true
     * }, function(result){
     *     console.log(result)
     * }, function(progress){
     *     console.log(progress)
     * })
     * ```
     */
    search(options: SearchOptions, resultFn: (result: SearchResult) => void, progressFn?: (progress: {
        pageIndex: number;
        pageCount: number | null;
    }) => void, cancel?: CancellationToken): Promise<SearchStatus>;
    /**
     * Highlights the search result returned by a search method.
     *
     * ```javascript
     * results = [];
     *
     *
     * function search(text){
     *     viewer.search({text}, function(result){
     *         results.push(result)
     *     }).then(function(status){
     *         console.log(status)
     *     })
     * }
     *
     *
     * function nextSearchResult(index){
     *     if(results.length == 0){
     *         viewer.highlight(null);
     *         return;
     *     }
     *     viewer.hightlight(resutls[index]);
     * }
     * ```
     */
    highlight(result: SearchResult | null): Promise<void>;
    /** Removes the control from the DOM and disposes any resources (internal). */
    dispose(): void;
    /*@ignore Gets access to diagnostics API. For INTERNAL use only, won't available in production. */
    readonly diag: {
        processCommand(cmd: ReportViewerCmd): void;
        fetchPages(startPageIndex?: number | undefined, count?: number | undefined): void;
    };
}
export { CancellationToken, DocumentLoadEventArgs, EventFan, ExportResult, ExportSettings, FontDescriptor, HistoryApi, LoadResult, MouseMode, PanelsLocation, ParameterPanelsLocation, Range, Rect, ReportLoadEventArgs, ReportSettings, SearchOptions, SearchResult, SearchStatus, Toolbar, ToolbarItem, ToolbarLayout, UnregisterHandler, ViewMode, Viewer, ViewerMouseMode, ViewerOptions, ViewerRenderMode, ViewerStatus, ViewerViewMode, ViewerZoomMode, ZoomMode };
