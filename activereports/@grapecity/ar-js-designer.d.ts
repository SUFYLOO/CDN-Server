/** @module ReportDesigner */ /** */
import { Rdl, ResourceLocator } from './ar-js-pagereport';
/** Defines a dataset template for data panel. */
declare type DataSetTemplate = {
    /** Template ID */
    id: string;
    /** Title */
    title: string;
    /** Instructs designer to show edit dialog */
    shouldEdit?: boolean;
    /** Instructs if DataSet, created from template, can be edited */
    canEdit?: boolean;
    /** RDLX definition of DataSet */
    template: Rdl.DataSet;
    /** RDLX definitions for nested DataSets */
    nestedTemplates?: Rdl.DataSet[];
};
/** Defines the datasource template for data panel. */
declare type DataSourceTemplate = {
    /** Template ID */
    id: string;
    /** Title */
    title: string;
    /** Instructs designer to show edit dialog */
    shouldEdit?: boolean;
    /** Instructs if DataSet, created from template, can be edited */
    canEdit?: boolean;
    /** RDLX definition of DataSource */
    template: Rdl.DataSource;
    /** DataSet templates for DataSource based on template */
    datasets?: DataSetTemplate[];
};
/** Report info representing report by ID. */
declare type ReportLink = {
    /** Report ID */
    id: string;
    /** Report display name. */
    displayName?: string;
};
/** Report info representing report by definition. */
declare type ReportDefinition = {
    /** Report id. */
    id?: string;
    /** Report display name. */
    displayName?: string;
    /** RDLX report definition. */
    definition: Rdl.Report;
};
/** Report info. */
declare type Report = ReportLink | ReportDefinition;
/** Report info representing new report to be created. */
declare type NewReport = {
    /** Report id. */
    id?: string;
    /** Report display name. */
    displayName?: string;
    /** Type of report. */
    reportType: 'CPL' | 'FPL';
};
/** New report info. */
declare type NewReportInfo = {
    /** Type of report. */
    reportType: 'CPL' | 'FPL';
};
declare type CustomInitTemplates = {
    imperialTemplates?: Report[];
    metricTemplates?: Report[];
};
/** Report theme short representation. */
declare type ThemeInfo = {
    /** Dark1 theme color */
    Dark1: string;
    /** Dark2 theme color */
    Dark2: string;
    /** Light1 theme color */
    Light1: string;
    /** Light2 theme color */
    Light2: string;
    /** Accent1 theme color */
    Accent1: string;
    /** Accent2 theme color */
    Accent2: string;
    /** Accent3 theme color */
    Accent3: string;
    /** Accent4 theme color */
    Accent4: string;
    /** Accent5 theme color */
    Accent5: string;
    /** Accent6 theme color */
    Accent6: string;
    /** Major text theme font family */
    MajorFontFamily: string;
    /** Minor text theme font family */
    MinorFontFamily: string;
};
/** Represents external resource information. */
declare type ReportResourceInfo = {
    /** Resource ID. */
    id: string;
    /** Resource display name. */
    displayName?: string;
};
/** Represents theme information. */
declare type ThemeResourceInfo = {
    /** Resource ID. */
    id: string;
    /** Resource display name. */
    displayName?: string;
    /** Theme short representation. */
    info: ThemeInfo;
};
/** Represents image information. */
declare type ImageResourceInfo = {
    /** Resource ID. */
    id: string;
    /** Resource display name. */
    displayName?: string;
    /** Mime type. */
    mimeType: string;
    /** Thumbnail. */
    thumbnail?: string;
};
/** Represents external resources provider. */
interface ResourceProvider extends ResourceLocator {
    /**
     * Gets available reports list.
     * @returns List or available reports.
     */
    getReportsList(): Promise<ReportResourceInfo[]>;
    /**
     * Gets available themes list.
     * @returns List or available themes.
     */
    getThemesList(): Promise<ThemeResourceInfo[]>;
    /**
     * Gets available images list.
     * @returns List or available images.
     */
    getImagesList(): Promise<ImageResourceInfo[]>;
}
/**
 * Fonts set.
 *
 * ```
 * default: predefined fonts
 * registered: fonts registered in FontStore
 * all: predefined an registered in FontStore fonts
 * ```
 */
declare type FontSet = 'default' | 'registered' | 'all';
/** Command name. */
declare type DesignerCommand = 'save' | 'saveAs' | 'create' | 'open' | 'render';
/** Designer configuration */
declare type DesignerConfig = {
    /**
     * Application language, for example 'en', 'ja or 'zh'.
     * Default value is 'en'.
    */
    language?: string;
    /** If set to 'true' disables default open and save report hotkeys,  */
    disableOpenSaveHotkeys?: boolean;
    /** Templates with default values for report and report items. */
    customInitTemplates?: CustomInitTemplates;
};
/** Current report info to be saved. */
declare type SaveReportInfo = {
    /** Current report ID. */
    id: string;
    /** Current report display name. */
    displayName?: string;
    /** Current RDLX report definittion. */
    definition: Rdl.Report;
};
/** Current report info to be saved as new one. */
declare type SaveNewReportInfo = {
    /** Current report ID. */
    id?: string;
    /** Current report display name. */
    displayName?: string;
    /** Current RDLX report definittion. */
    definition: Rdl.Report;
};
/** Represents result of "save report" operation. */
declare type SaveResult = {
    /** Report display name after save. */
    displayName?: string;
};
/** Represents result of "save new report" operation. */
declare type SaveAsResult = {
    /** New report ID. */
    id: string;
    /** Report display name. */
    displayName?: string;
};
/** Represents toolbar buttons actions and hotkeys action handlers */
interface ActionHandlers {
    /**
     * Called on saving report.
     * @param options Current report info.
     * @returns Promise with new report info if report was saved or 'undefined' if operation was cancelled.
     */
    onSave?(options: SaveReportInfo): Promise<SaveResult | undefined>;
    /**
     * Called on saving report as new.
     * @param options Current report info.
     * @returns Promise with new report info if report was saved or 'undefined' if operation was cancelled.
     */
    onSaveAs?(options: SaveNewReportInfo): Promise<SaveAsResult | undefined>;
    /**
     * Called on opening report.
     * @returns Promise with report info or 'undefined' if operation was cancelled.
     */
    onOpen?(): Promise<Report | undefined>;
    /**
     * Called on open report.
     * @returns Promise with report info or 'undefined' if operation was cancelled.
     */
    onCreate?(): Promise<Report | NewReport | undefined>;
    /**
     * Called on render current report.
     * @param report Current report info.
     * @param resourceLocator ResourceLocator instance.
     */
    onRender?(report: ReportDefinition, resourceLocator?: Partial<ResourceLocator>): Promise<void>;
    /**
     * Called on open custom file menu.
     */
    onOpenFileMenu?(): void;
}
/**
 * Represents action to perform in case of dirty report.
 *
 * ```
 * ask: show comfirmation dialog
 * override: override dirty report
 * throw: throw error
 * ```
 */
declare type WhenDirty = 'ask' | 'override' | 'throw';
/** Represents current report information. */
declare type ReportInfo = {
    /** Report id. */
    id: string | null;
    /** Report display name. */
    displayName: string;
    /** RDLX report definition. */
    definition: Rdl.Report;
    /** True if report is in dirty (not saved) state. */
    isDirty: boolean;
};
/** Report designer component. */
declare class Designer {
    private impl;
    /**
     * Creates report designer component instance.
     * @param element Component host element.
     * @param config Designer settings.
     */
    constructor(element: string | Element | object, config?: DesignerConfig);
    private _fontSet;
    /*Gets available set of fonts.
    Sets available set of fonts. */
    fontSet: FontSet;
    /**
     * Creates report.
     * @param reportInfo Report info to load.
     * @param whenDirty Action to perform in case of 'dirty' report.
     */
    createReport(reportInfo: NewReportInfo, whenDirty?: WhenDirty): Promise<void>;
    /**
     * Sets report.
     * @param report Report info to load.
     * @param whenDirty Action to perform in case of 'dirty' report.
     * @param isDirtyInitial Initial value for 'dirty' state after load.
     */
    setReport(report: Report, whenDirty?: WhenDirty, isDirtyInitial?: boolean): Promise<void>;
    /** Gets current report. */
    getReport(): Promise<ReportInfo>;
    /**
     * Sets actions handlers.
     * @param actions Actions handlers.
     */
    setActionHandlers(actions: ActionHandlers): Promise<void>;
    /**
     * Sets resource provider.
     * @param resourceProvider Resources provider.
     */
    setResourceProvider(resourceProvider: Partial<ResourceProvider>): Promise<void>;
    /**
     * Process command.
     * @param cmd Command name.
     */
    processCommand(cmd: DesignerCommand): Promise<void>;
    /**
     * Sets DataSource templates
     * @param templates List of DataSource templates
     */
    setDataSourceTemplates(templates: DataSourceTemplate[]): Promise<void>;
    /**
     * Sets component control items. For internal use only.
     * @hidden
     */
    setControlItems(items: any[]): void;
}
export { ActionHandlers, CustomInitTemplates, DataSetTemplate, DataSourceTemplate, Designer, DesignerCommand, DesignerConfig, FontSet, ImageResourceInfo, NewReport, NewReportInfo, Report, ReportDefinition, ReportInfo, ReportLink, ReportResourceInfo, ResourceProvider, SaveAsResult, SaveNewReportInfo, SaveReportInfo, SaveResult, ThemeInfo, ThemeResourceInfo, WhenDirty };
