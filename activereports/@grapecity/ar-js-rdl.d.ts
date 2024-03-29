/** @module Core.Rdl */ /** */
/**
 * Represents a report
 */
export declare type Report = {
    /**
     * Gets or sets a value indicating properties for the header of report pages.
     */
    PageHeader?: PageSection;
    /**
     * Gets or sets a value indicating properties for the body of report pages.
     */
    Body?: Body;
    /**
     * Gets or sets a value indicating properties for the footer of report pages.
     */
    PageFooter?: PageSection;
    /**
     * Represents properties for a fixed page layout.
     */
    FixedPage?: {
        /**
         * Gets or sets a value indicating a collection of pages in a fixed page layout.
         */
        Pages?: FixedPageSection[];
        /**
         * Gets or sets a value indicating the expressions by which to group the data in a fixed page layout.
         */
        Group?: Grouping;
        /**
         * Gets or sets the name of the dataset to use to bind data to a fixed page layout.
         */
        DataSetName?: string;
        /**
         * Gets or sets a value indicating a collection of filters to be applied to the data for each row of a fixed page layout.
         */
        Filters?: Filter[];
        /**
         * Gets or sets a value indicating a collection of expressions that are applied to the filtered data of a fixed page layout to order the data.
         */
        SortExpressions?: SortExpression[];
        /**
         * @ignore
         */
        DataElementName?: string;
        /**
         * @ignore
         */
        DataElementOutput?: DataElementOutput;
    };
    /**
     * @ignore
     */
    CollateBy?: "Value" | "Simple" | "ValueIndex";
    /**
     * Gets or sets a unique identifier for a Report
     */
    Name?: string;
    /**
     * Gets or sets the description of a Report
     */
    Description?: string;
    /**
     * Gets or sets the author of a Report
     */
    Author?: string;
    /**
     * Gets or sets a value indicating the structure and layout information of report pages.
     */
    Page?: Page;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of the body of a report.
     */
    Width?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  the default language to use for dates and number formatting within a report.
     */
    Language?: string;
    /**
     * Gets or sets a value indicating whether all whitespace in a report should be consumed when contents grow
     */
    ConsumeContainerWhitespace?: boolean;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementStyle?: "Auto" | "AttributeNormal" | "ElementNormal";
    /**
     * Gets or sets a value indicating properties for the map of a report.
     */
    DocumentMap?: DocumentMap;
    /**
     * Gets or sets a value indicating a collection of parameters of a report.
     */
    ReportParameters?: ReportParameter[];
    /**
     * Gets or sets a value indicating a collection of data sources of a report.
     */
    DataSources?: DataSource[];
    /**
     * Gets or sets a value indicating a collection of data sets of a report.
     */
    DataSets?: DataSet[];
    /**
     * Gets or sets a value indicating a collection of embedded images of a report.
     */
    EmbeddedImages?: EmbeddedImage[];
    /**
     * Gets or sets the pages order layout ('Z' or 'N').
    */
    LayoutOrder?: "ZOrder" | "NOrder";
    /**
     * Gets or sets a value indicating the number of the first page for page numbering of a report.
     */
    StartPageNumber?: number;
    /**
     * @ignore
     */
    Layers?: Layer[];
    /**
     * Gets or sets a value indicating a collection of themes available for a report
     */
    Themes?: string[];
    /**
     * Gets or sets a value indicating the location of a report theme
     */
    ThemeUri?: string;
    /**
     * @ignore
     */
    Code?: string;
    Classes?: {
        ClassName?: string;
        InstanceName?: string;
    }[];
    CodeModules?: string[];
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    LocalizationResources?: {
        Language?: string;
        Data?: {
            Name?: string;
            Value?: string;
        }[];
    }[];
};
/**
 * Represents the structure and layout information for the page header or page footer
 */
export declare type PageSection = {
    /**
     * Get or sets a unique identifier for a page section
     */
    Name?: string;
    /**
     * Gets or sets the height of a page section in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     */
    Height?: string;
    /**
     * Gets or sets the collection of report items contained in a page section
     */
    ReportItems?: ReportItem[];
    /**
     * Represents appearance information for a page section
     */
    Style?: {
        /**
         * Gets or sets the [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a page section
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a page section
         */
        BackgroundImage?: BackgroundImage;
        /**
         * Gets or sets the default border properties for a page section
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a page section
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a page section
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a page section
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a page section
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Get or sets the value indicating whether the page header or page footer is shown on the first rendered page in a report
     */
    PrintOnFirstPage?: boolean;
    /**
     * Get or sets the value indicating whether the page header or page footer is shown on the last rendered page in a report
     */
    PrintOnLastPage?: boolean;
};
/**
 * Represents the structure and layout information for the body of a report
 */
export declare type Body = {
    /**
     * Get or sets a unique identifier for the body of a report
     */
    Name?: string;
    /**
     * Gets or sets the height of the body of a report in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     */
    Height?: string;
    /**
     * Gets or sets the collection of report items contained in the body of a report
     */
    ReportItems?: ReportItem[];
    /**
     * Represents appearance information for the body of a report
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of the body of a report
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for the body of a report
         */
        BackgroundImage?: BackgroundImage;
        /**
         * Gets or sets the default border properties for the body of a report
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for the body of a report
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for the body of a report
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for the body of a report
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for the body of a report
         */
        LeftBorder?: BorderStyle;
    };
};
/**
 *  Represent an image that is embedded within a report
 */
export declare type EmbeddedImage = {
    /**
     * Get or sets a unique identifier for an embedded image
     */
    Name?: string;
    /**
     * Gets or sets image data in [base64 format](https://www.rfc-editor.org/rfc/rfc4648.txt) for an embedded image
     */
    ImageData?: string;
    /**
     * Get or sets the image format of an embedded image
     * Supported values are "image/jpeg", "image/gif", "image/png", and "image/svg+xml"
     */
    MIMEType?: string;
};
/**
 * Represents the structure and layout information for a page of a [fixed layout report](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-page-layout)
 */
export declare type FixedPageSection = {
    /**
     * Gets or sets the collection of report items contained in a fixed page
     */
    ReportItems?: ReportItem[];
    /**
     * Represents appearance information for a fixed page
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a fixed page
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a fixed page
         */
        BackgroundImage?: BackgroundImage;
        /**
         * Gets or sets the default border properties for a fixed page
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a fixed page
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a fixed page
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a fixed page
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a fixed page
         */
        LeftBorder?: BorderStyle;
    };
    ThrowIfPlaceHoldersEmpty?: boolean;
    Visibility?: Visibility;
    Width?: string;
    Height?: string;
    LeftMargin?: string;
    RightMargin?: string;
    TopMargin?: string;
    BottomMargin?: string;
};
/**
 * Represents the structure and layout information of report pages
 */
export declare type Page = {
    /**
     * Gets or sets the width for rendering in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     * @default "8.5in"
     */
    PageWidth?: string;
    /**
     * Gets or sets the height for rendering in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     * @default "11in"
     */
    PageHeight?: string;
    /**
     * Gets or sets the width of the right margin of a page in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     * @default "1in"
     */
    RightMargin?: string;
    /**
     * Gets or sets the width of the left margin of a page in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     * @default "1in"
     */
    LeftMargin?: string;
    /**
     * Gets or sets the width of the top margin of a page in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     * @default "1in"
     */
    TopMargin?: string;
    /**
     * Gets or sets the width of the bottom margin of a page in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     * @default "1in"
     */
    BottomMargin?: string;
    /**
     * Gets or sets the default number of columns used to render a report
     * @default 1
     */
    Columns?: number;
    /**
     * Gets or sets the spacing between each column for a multi-column rendering of a report in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     * @default "0in"
     */
    ColumnSpacing?: string;
};
/**
 * Represents the structure and layout information for a [report map](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Interactivity/index#report-map)
 */
export declare type DocumentMap = {
    /**
     * Gets or sets a value indicating which items are included in the report map
     */
    Source?: "None" | "Labels" | "Headings" | "All";
    /**
     * Gets or sets a value indicating the marker of an item in the report map
     */
    NumberingStyle?: "None" | "Decimal" | "DecimalLeadingZero" | "CircledNumber" | "LowerRoman" | "UpperRoman" | "LowerLatin" | "UpperLatin" | "LowerGreek" | "UpperGreek" | "Katakana" | "KatakanaBrackets" | "KatakanaIrohaBrackets" | "KatakanaIroha" | "KatakanaLower" | "KatakanaIrohaLower" | "LowerArmenian" | "UpperArmenian" | "Georgian";
    /**
     * Indicates the marker of items for individual hierarchy levels in the report map
     */
    Levels?: ("None" | "Decimal" | "DecimalLeadingZero" | "CircledNumber" | "LowerRoman" | "UpperRoman" | "LowerLatin" | "UpperLatin" | "LowerGreek" | "UpperGreek" | "Katakana" | "KatakanaBrackets" | "KatakanaIrohaBrackets" | "KatakanaIroha" | "KatakanaLower" | "KatakanaIrohaLower" | "LowerArmenian" | "UpperArmenian" | "Georgian")[];
};
/**
 * Represents information about a parameter to a report
 */
export declare type ReportParameter = {
    /**
     * Gets or sets a unique identifier for a report parameter
     */
    Name: string;
    /**
     * Gets or sets the data type of a report parameter
     */
    DataType: "String" | "Boolean" | "Date" | "DateTime" | "Integer" | "Float";
    /**
     * Gets or sets a value indicating whether a report parameter is not displayed to the user at runtime
     */
    Hidden?: boolean;
    /**
     * Gets or sets a value indicating whether the input control for a report parameter value allows multiple lines
     */
    Multiline?: boolean;
    /**
     * Get or sets a value indicating whether an empty string is allowed as a value for a report parameter
     */
    AllowBlank?: boolean;
    /**
     *  Get or sets the default value or values to use for a report parameter if values are not provided by the user
     */
    DefaultValue?: DefaultValue;
    /**
     * Gets or sets a value indicating whether a report parameter can take a set of values rather than a single value
     */
    MultiValue?: boolean;
    /**
     * Gets or sets a value indicating whether the value of a report parameter can be null
     */
    Nullable?: boolean;
    /**
     * Get or sets the text or an [expression] to use when prompting the user to provide the value or values for a report parameter
     */
    Prompt?: string;
    /**
     * Gets or sets the text that appears for the "Select All" option for the input of a multi-value report parameter
     */
    SelectAllValue?: string;
    /**
     * @ignore
     */
    UsedInQuery?: ThreeStateBoolean;
    /**
     * Gets or sets the possible values that can be used for the a report parameter
     */
    ValidValues?: ValidValues;
};
/**
 * Represents possible values for a report parameter and for populating UI selection lists for users to select a parameter value
 */
export declare type ValidValues = {
    /**
     * Get or sets the list of values and, optionally, labels for use in value validation and for populating the UI for the report parameter
     */
    ParameterValues?: ParameterValue[];
    /**
     * Gets or sets the fields from a dataset to use to obtain a list of values and, optionally, labels for use in value validation and for populating the UI for the report parameter
     */
    DataSetReference?: DataSetReference;
};
/**
 * Represent the DataSet to use to obtain a list of values and, optionally, labels for the valid values or the default value of a report parameter
 */
export declare type DataSetReference = {
    /**
     * Gets or sets the name of the DataSet that is being referenced
     */
    DataSetName: string;
    /**
     * Gets or sets the name of the field in the referenced DataSet from which values are retrieved to populate the values of a parameter’s valid values or default value
     */
    ValueField: string;
    /**
     * Gets or sets the name of the field in the referenced DataSet from which values are retrieved to populate the labels of a parameter’s valid values
     */
    LabelField?: string;
};
/**
 * Represents a value/label pair for a report parameter's valid values
 */
export declare type ParameterValue = {
    /**
     * Gets or sets the value for a report parameter
     */
    Value?: string;
    /**
     * Gets or sets the text to use to describe the report parameter value to display in a parameter drop-down at runtime
     */
    Label?: string;
};
/**
 * Reprsents the default values for a report parameter
 */
export declare type DefaultValue = {
    /**
     * Gets or sets the default values to use for a report parameter
     */
    Values?: string[];
    /**
     * Gets or sets the DataSet reference to use to obtain the default value or values for a report parameter
     */
    DataSetReference?: DataSetReference;
};
/**
 * Represents information about a set of data to be used as a part of a report
 */
export declare type DataSet = {
    /**
     * Gets or sets a unique identifier for a DataSet
     */
    Name: string;
    /**
     * Gets or sets a set of filters to apply to each row in a DataSet
     */
    Filters?: Filter[];
    /**
     * Gets or sets a set of fields to include in a DataSet
     */
    Fields?: Field[];
    /**
     * Gets or sets the query information that is necessary to retrieve data from a data source
     */
    Query?: Query;
    /**
     * @ignore
     */
    CaseSensitivity?: ThreeStateBoolean;
    /**
     * @ignore
     */
    Collation?: string;
    /**
     * @ignore
     */
    KanatypeSensitivity?: ThreeStateBoolean;
    /**
     * @ignore
     */
    AccentSensitivity?: ThreeStateBoolean;
    /**
     * @ignore
     */
    WidthSensitivity?: ThreeStateBoolean;
};
/**
 * Represents information about a DataSet field
 */
export declare type Field = {
    /**
     * Gets or sets a unique identifier for a field
     */
    Name: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to a value for this field
     */
    Value?: string;
    /**
     * Gets or sets the name of the field that is returned by the DataSet query
     */
    DataField?: string;
};
/**
 * Represents the information that is necessary to execute and retrieve data for a DataSet
 */
export declare type Query = {
    /**
     * Gets or sets the name of a data source against which to execute a query
     */
    DataSourceName: string;
    /**
     * @ignore
     */
    CommandType?: "Text" | "StoredProcedure" | "TableDirect";
    /**
     * Gets or sets the query to execute to obtain data for a DataSet
     */
    CommandText?: string;
    /**
     * @ignore
     */
    QueryParameters?: {
        [x: string]: any;
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    Timeout?: number;
};
/**
 * Represents information about a data source
 */
export declare type DataSource = {
    /**
     * Gets or sets a unique identifier for a data source
     */
    Name?: string;
    /**
     * @ignore
     */
    Transaction?: boolean;
    /**
     * @ignore
     */
    DataSourceReference?: string;
    /**
     * Gets or sets information about how to connect to a data source
     */
    ConnectionProperties?: ConnectionProperties;
};
/**
 * Represents information about how to connect to a data source
 */
export declare type ConnectionProperties = {
    /**
     * @ignore
     */
    DataProvider: string;
    /**
     * @ignore
     */
    Prompt?: string;
    /**
     * Gets or sets the information necessary to connect to a data source
     */
    ConnectString?: string;
    /**
     * @ignore
     */
    IntegratedSecurity?: boolean;
};
/**
 * Represents a filter to apply to rows of data within a DataSet, a group, or a data region
 */
export declare type Filter = {
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that is evaluated for each instance of a group, or for each row of data that is associated with a DataSet, a group, or a data region.
     * This expression is then compared to the value of the FilterValues element by using the Operator.
     * Failed comparisons result in the row or instance being filtered out of its containing group, dataset, or data region.
     */
    FilterExpression: string;
    /**
     * Gets or sets an operator to use to compare the values of FilterExpression and FilterValues
     */
    Operator: FilterOperator;
    /**
     * Gets or sets the values to compare to a FilterExpression
     */
    FilterValues: string[];
};
/**
 * Represents the opeator to use to compare the values of Filer.FilterExpression and Filter.FilterValues
 */
export declare type FilterOperator = "Between" | "Equal" | "Like" | "NotEqual" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual" | "TopN" | "BottomN" | "TopPercent" | "BottomPercent" | "In";
/**
 * @ignore
 */
export declare type ThreeStateBoolean = "False" | "Auto" | "True";
/**
 * @ignore
 */
export declare type DataElementOutput = "Auto" | "Output" | "NoOutput" | "ContentsOnly";
export declare type Layer = {
    Name: string;
    DesignerLock?: boolean;
    DesignerTransparency?: number;
    DesignerVisible?: boolean;
    DesignerDataFieldVisible?: boolean;
    TargetDevice?: string;
};
/**
 * Represents appearance properties for a border for a report item
 */
export declare type BorderStyle = {
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the color of a border
     * @value should be either a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    Color?: string;
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the style of a border
     * @value "None" indicates that no border is drawn.
     * @value "Dotted" indicates a dotted line for a border.
     * @value "Dashed" indicates a dashed line for a border.
     * @value "Solid" indicates a solid line for a border.
     * @value "Double" indicates a double solid line for a border.
     * @value "Groove" indicates a 3D grooved border. The effect depends on the border color value.
     * @value "Ridge" indicates a 3D ridged border. The effect depends on the border color value.
     * @value "Inset" indicates a 3D inset border. The effect depends on the border color value.
     * @value "Outset" indicates a 3D outset border. The effect depends on the border color value.
     */
    Style?: string;
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the width of a border
     * @value should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     */
    Width?: string;
};
/**
 * @ignore
 */
export declare type SideStyle = {
    Color?: string;
    Style?: string;
    Width?: string;
};
/**
 * Represents the background images for a report item.
 */
export declare type BackgroundImage = {
    /**
     * Gets or sets the type of source that is associated with a background image
     * @value "External" indicates that the Value property specifies the location of an image
     * @value "Embedded" indicates that the Value property specifies the name of an embedded image within a report
     * @value "Database" indicates that the Value property specifies an expression (such as a field in the database) that evaluates to the binary data for an image
     */
    Source?: "External" | "Embedded" | "Database";
    /**
     * Gets or sets either the location or the actual data of a background image, depending on the value of the BackgroundImage.Source
     */
    Value?: string;
    /**
     * Get or sets the image format of a background image.
     * Supported values are "image/jpeg", "image/gif", "image/png", and "image/svg+xml".
     */
    MIMEType?: string;
    /**
     * Gets or sets a value indicating how a background image fills the available space within its container.
     *
     * @value "Repeat" specifies that the image repeats both horizontally and vertically to fill the space.
     * @value "RepeatX" specifies that the image repeats horizontally to fill the space.
     * @value "RepeatY" specifies that the image repeats vertically to fill the space.
     * @value "NoRepeat" specifies that the image does not repeat to fill the space.
     */
    BackgroundRepeat?: string;
};
/**
 * Represents properties to determine whether a report item is displayed in a rendered report.
 */
export declare type Visibility = {
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  whether a report item is initially hidden
     */
    Hidden?: string;
    /**
     * Gets or sets the name of a Textbox that is used to hide or unhide the containing report item
     */
    ToggleItem?: string;
};
/**
 * Represents a hyperlink, bookmark link, or drillthrough action that is associated with a report item.
 * Visit [Interactive Reports](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Interactivity/index) for more information.
 */
export declare type Action = {
    /**
     * Gets or sets a hyperlink that is viewed by clicking the containing report item for this action
     */
    Hyperlink?: string;
    /**
     * Indicates a drillthrough report to be executed and viewed by clicking the containing report item for this action.
     */
    Drillthrough?: {
        /**
         * Gets or sets the ID of the Report to use as a drillthrough report.
         * The value could be a path to the report template file, or an ID that is resolved by the [custom resource locator](https://www.grapecity.com/activereportsjs/docs/DeveloperGuide/ActiveReportsJSViewer/LoadingReports/ResourceLocator)
         */
        ReportName?: string;
        /**
         * Indicates the parameters to be passed to a drillthrough report
         */
        Parameters?: {
            /**
             * Gets or sets the name of the ReportParameter of a dependent Report
             */
            ParameterName: string;
            /**
             * Gets or sets the value or expression that evaluates to the value to pass in for the report parameter to the drillthrough report
             */
            Value?: string;
            /**
             * @ignore
             */
            Omit?: string;
        }[];
    };
    /**
     * Gets or sets the ID of the bookmark that is located in a report to go to when the containing report item for this action is clicked
     */
    BookmarkLink?: string;
};
/**
 * Represents information about an end-user sort control that is displayed as part of a Textbox in a rendering of a Report
 */
export declare type UserSort = {
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) on which to sort
     */
    SortExpression: string;
    /**
     * Gets or sets the name of the scope (data region or Group) in which to evaluate the SortExpression.
     */
    SortExpressionScope?: string;
    /**
     * Gets or sets the name of a data region, Group, or DataSet to which to apply the sort
     */
    SortTarget?: string;
};
/**
 * Represents information about data categorization
 */
export declare type Grouping = {
    /**
     * Gets or sets a unique identifier for a grouping
     */
    Name?: string;
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text of a link to the instance of grouping in the [Report Map](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Interactivity/index#report-map)
     */
    DocumentMapLabel?: string;
    /**
     * Gets or sets the collection of [expressions](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) by which to group the data in a grouping.
     */
    GroupExpressions?: string[];
    /**
     * Gets or sets a value indicating the location of page breaks generated by instances of a grouping.
     * @value "None" indicates that no page breaks are generated.
     * @value "Start" indicates each instance of a grouping inserts the page break before its content
     * @value "End" indicates each instance of a grouping inserts the page break after its content
     * @value "StartAndEnd" indicates each instance of a grouping inserts the page break before and after its content
     * @value "Between" indicates each instance of a grouping starts on a new page
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to a value indicating whether the page break option should be ignored
     */
    PageBreakDisabled?: string;
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a collection of filters to be applied to the data for each instance of a grouping
     */
    Filters?: Filter[];
    /**
     * Gets or sets an expression that identifies the parent group in a recursive hierarchy
     */
    ParentGroup?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * @ignore
     */
    DataCollectionName?: string;
    /**
     * Gets or sets a value indicating whether each instance of a grouping has its page numbering.
     */
    NewSection?: boolean;
};
/**
 * Represents an expression used in sorting
 */
export declare type SortExpression = {
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that results in a data by which to order
     */
    Value?: string;
    /**
     * Gets or sets a value indicating the sort order.
     * @value "Ascending" indicates that the data is sorted in ascending order
     * @value "Descending" indicates that the data is sorted in descending order
     * @default "Ascending"
     */
    Direction?: "Ascending" | "Descending";
};
/**
 * Represents properties for a [Textbox](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Visualizers/TextBox/index) in a report
 */
export declare type Textbox = {
    /**
     * Gets or sets a unique identifier for a Textbox
     */
    Name: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that is displayed for a Textbox
     */
    Value?: string;
    /**
     * Should be set to "textbox"
     */
    Type: "textbox";
    /**
     * Gets or sets an action (such as a hyperlink) associated with a Textbox
     */
    Action?: Action;
    /**
     * Gets or sets a value indicating whether the height of a Textbox can increase to accommodate its contents
     */
    CanGrow?: boolean;
    /**
     * Gets or sets a value indicating whether the height of a Textbox can decrease to match its contents
     */
    CanShrink?: boolean;
    /**
     * @ignore
     */
    DataElementStyle?: "Auto" | "AttributeNormal" | "ElementNormal";
    /**
     * Gets or sets a value indicating whether the entire contents of a Textbox should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     *  Represents the initial state (+/-) of a toggle image if it is displayed as part of a Textbox
     */
    ToggleImage?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) initial state of a toggle image.
         * If the value or expression result is true, then the toggle image is interpreted as expanded and displays a minus sign.
         * If the value or expression result is false, then the toggle image is interpreted as collapsed and displays a plus sign.
         */
        InitialState: string;
    };
    /**
     * Gets or sets an end-user sort configuration that is displayed as part of a Textbox within the UI.
     */
    UserSort?: UserSort;
    /**
     * Represents style information for a Textbox
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Textbox
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a Textbox
         */
        BackgroundImage?: BackgroundImage;
        /**
         * @ignore
         */
        LineHeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) determining the height of a line of text for a textbox.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        LineSpacing?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the space between characters of text for a textbox.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
         */
        CharacterSpacing?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating how words should break when reaching the end of a line for a textbox.
         * The value or the expression result should be one of the following.
         * @value "NoWrap" indicates that line breaks do not occur
         * @value "CharWrap" indicates that line breaks occur at any character
         * @value "WordWrap" indicates that line breaks occur at the end of words
         */
        WrapMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the position of a textbox content in the Table of Contents hierarchy.
         * The value or the expression result should be a number.
         */
        HeadingLevel?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether a textbox can decrease the font size of its content to fit it into the report item's size
         */
        ShrinkToFit?: string;
        /**
         * Gets or sets a value indicating text arrangement for a textbox that has TextAlign set to "Justify"
         * @value "Auto" indicates that a textbox changes the space between words, except for the last line
         * @value "Distribute" is the same as "Auto"
         * @value "DistributeAllLines" indicates that a textbox changes the space between words for all lines
         */
        TextJustify?: "Auto" | "Distribute" | "DistributeAllLines";
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text rotation in degrees relative to the text baseline.
         * The value or the expression result should be a number.
         */
        Angle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the lower bound for the ratio of the decreased font size to the original one.
         * The value or the expression result should be a percentage value, such as "50%"
         */
        MinCondenseRate?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a Textbox is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a TextBox.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the text within a textbox.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a textbox aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a textbox aligns the text to the left
         * @value "Right" indicates that a textbox aligns the text to the right
         * @value "Center" indicates that a textbox centers the text
         * @value "Justify" indicates that a textbox stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the vertical alignment for the text within a textbox.
         * The value or the expression result should be one of the following.
         * @value "Top" indicates top-aligned text
         * @value "Middle" indicates vertically-centered text alignment
         * @value "Bottom" indicates bottom-aligned text
         */
        VerticalAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a textbox
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  whether text within a textbox is written left-to-right or right-to-left.
         * The value or the expression result should be one of the following.
         * @value "LTR" indicates that text is written left-to-right.
         * @value "RTL" indicates that the text is written right-to-left.
         */
        Direction?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the textual content within a textbox is laid out horizontally or vertically as well as the direction in which text moves.
         * The value or the expression result should be one of the following.
         * @value "lr-tb" indicates that if the TextBox.Direction is "LTR", textual content flows horizontally from left to right. For RTL direction, content moves horizontally from right to left. The following horizontal line resides below the previous line.
         * @value "tb-rl" indicates that id if the TextBox.Direction is LTR, textual content flows vertically from top to bottom, and the following vertical line resides to the left of the previous line. For RTL direction, content flows vertically from bottom to top, and the following vertical line resides to the right of the previous line.
         */
        WritingMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  the default language to use for dates and number formatting within a textbox.
         */
        Language?: string;
        /**
         * @ignore
         */
        Calendar?: string;
        /**
         * @ignore
         */
        NumeralLanguage?: string;
        /**
         * @ignore
         */
        NumeralVariant?: string;
        /**
         * @ignore
         */
        UnicodeBiDi?: string;
        /**
         * @ignore
         */
        UprightInVerticalText?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a textbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a textbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a textbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a textbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text in a textbox.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a textbox
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text in a textbox.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a textbox
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a textbox
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a fixed page
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a fixed page
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a fixed page
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a fixed page
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a textbox
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Textbox is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a textbox at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a textbox for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a textbox that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Textbox from the left of the text box's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Textbox from the top of the text box's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Textbox
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Textbox
     */
    Height?: string;
};
/**
 * Represents properties for a [Checkbox](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Visualizers/CheckBox/index) in a report
 */
export declare type Checkbox = {
    /**
     * Gets or sets a unique identifier for a Checkbox
     */
    Name: string;
    /**
     * Should be set to "checkbox"
     */
    Type: "checkbox";
    /**
     * @ignore
     */
    DataElementStyle?: "Auto" | "AttributeNormal" | "ElementNormal";
    /**
     *  Represents style information for a Checkbox
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Checkbox
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a Checkbox
         */
        BackgroundImage?: BackgroundImage;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a Checkbox.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating how words should break when reaching the end of a line for a Checkbox.
         * The value or the expression result should be one of the following.
         * @value "NoWrap" indicates that line breaks do not occur
         * @value "CharWrap" indicates that line breaks occur at any character
         * @value "WordWrap" indicates that line breaks occur at the end of words
         */
        WrapMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a Checkbox
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text in a Checkbox.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a Checkbox
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text in a Checkbox.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a Checkbox
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a Checkbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a Checkbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a Checkbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a Checkbox and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets the default border properties for a textbox
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a textbox
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a textbox
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a textbox
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a textbox
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a checkbox
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Checkbox is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a checkbox at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a checkbox for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a checkbox that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the checked or unchecked box position relative to the report item bounds.
     */
    CheckAlignment?: "MiddleLeft" | "TopLeft" | "TopCenter" | "TopRight" | "MiddleCenter" | "MiddleRight" | "BottomLeft" | "BottomCenter" | "BottomRight";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the textual the content to be displayed in the checkbox.
     */
    Text?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the box displayed along with the text is checked or unchecked
     */
    Checked?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Checkbox from the left of the checkbox's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Checkbox from the top of the checkbox's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Checkbox
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Checkbox
     */
    Height?: string;
};
/**
 * Represents properties for a [List](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Regions/List/index) in a report
 */
export declare type List = {
    /**
     * Gets or sets a unique identifier for a List
     */
    Name: string;
    /**
     * Should be set to "list"
     */
    Type: "list";
    /**
     * Gets or sets a value indicating whether the entire contents of a List should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Represents style information for a List
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a List
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a List
         */
        BackgroundImage?: BackgroundImage;
        /**
         * @ignore
         */
        LineHeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a NoRowsMessage is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a List aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a List aligns the text to the left
         * @value "Right" indicates that a List aligns the text to the right
         * @value "Center" indicates that a List centers the text
         * @value "Justify" indicates that a List stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the vertical alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Top" indicates top-aligned text
         * @value "Middle" indicates vertically-centered text alignment
         * @value "Bottom" indicates bottom-aligned text
         */
        VerticalAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a NoRowsMessage
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  whether text within a NoRowsMessage is written left-to-right or right-to-left.
         * The value or the expression result should be one of the following.
         * @value "LTR" indicates that text is written left-to-right.
         * @value "RTL" indicates that the text is written right-to-left.
         */
        Direction?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the textual content within a NoRowsMessage is laid out horizontally or vertically as well as the direction in which text moves.
         * The value or the expression result should be one of the following.
         * @value "lr-tb" indicates that if the Direction is "LTR", textual content flows horizontally from left to right. For RTL direction, content moves horizontally from right to left. The following horizontal line resides below the previous line.
         * @value "tb-rl" indicates that id if the Direction is LTR, textual content flows vertically from top to bottom, and the following vertical line resides to the left of the previous line. For RTL direction, content flows vertically from bottom to top, and the following vertical line resides to the right of the previous line.
         */
        WritingMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  the default language to use for dates and number formatting within a NoRowsMessage.
         */
        Language?: string;
        /**
         * @ignore
         */
        Calendar?: string;
        /**
         * @ignore
         */
        NumeralLanguage?: string;
        /**
         * @ignore
         */
        NumeralVariant?: string;
        /**
         * @ignore
         */
        UnicodeBiDi?: string;
        /**
         * @ignore
         */
        UprightInVerticalText?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a NoRowsMessage
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text in a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a List
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a List
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a List
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a List
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a List
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a List
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a List is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a List at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a List for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a List that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a List
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating a collection of filters to be applied to the data for each row of a List
     */
    Filters?: Filter[];
    /**
     * Gets or sets a value indicating a List has its page numbering
     */
    NewSection?: boolean;
    /**
     * Gets or sets a value indicating a collection of expressions by which to sort repeated list regions
     */
    SortExpressions?: SortExpression[];
    /**
     * Gets or sets a value indicating whether all whitespace in a List should be consumed when contents grow
     */
    ConsumeWhiteSpace?: boolean;
    /**
     * @ignore
     */
    DataInstanceName?: string;
    /**
     * @ignore
     */
    DataInstanceElementOutput?: "Output" | "NoOutput";
    /**
     * Gets or sets a value indicating the expressions by which to group the data in a List
     */
    Group?: Grouping;
    /**
     * Gets or sets a value indicating a collection of the report items within a List
     */
    ReportItems?: ReportItem[];
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text to render instead of the list layout when no rows of data are available for a List.
     */
    NoRowsMessage?: string;
    /**
     * Gets or sets the name of the dataset to use to bind data to a List.
     */
    DataSetName?: string;
    /**
     * @ignore
     */
    DataSetParameters?: {
        [x: string]: any;
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    PageName?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a List from the left of the list's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a List from the top of the list's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a List
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a List
     */
    Height?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed width](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a List
     */
    FixedWidth?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed height](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a List
     */
    FixedHeight?: string;
    /**
     * Gets or sets a value indicating the name of the [overflow place holder](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#overflow-place-holder) for a fixed List layout.
     */
    OverflowName?: string;
};
/**
 * Represents properties for a [Table](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Regions/Table/index) in a report
 */
export declare type Table = {
    /**
     * Gets or sets a unique identifier for a table
     */
    Name: string;
    /**
     * Should be set to "table"
     */
    Type: "table";
    /**
     * Gets or sets a value indicating whether the entire contents of a Table should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Represents style information for a Table
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Table
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a Table
         */
        BackgroundImage?: BackgroundImage;
        /**
         * @ignore
         */
        LineHeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a NoRowsMessage is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a Table aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a Table aligns the text to the left
         * @value "Right" indicates that a Table aligns the text to the right
         * @value "Center" indicates that a Table centers the text
         * @value "Justify" indicates that a Table stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the vertical alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Top" indicates top-aligned text
         * @value "Middle" indicates vertically-centered text alignment
         * @value "Bottom" indicates bottom-aligned text
         */
        VerticalAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a NoRowsMessage
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  whether text within a NoRowsMessage is written left-to-right or right-to-left.
         * The value or the expression result should be one of the following.
         * @value "LTR" indicates that text is written left-to-right.
         * @value "RTL" indicates that the text is written right-to-left.
         */
        Direction?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the textual content within a NoRowsMessage is laid out horizontally or vertically as well as the direction in which text moves.
         * The value or the expression result should be one of the following.
         * @value "lr-tb" indicates that if the TextBox.Direction is "LTR", textual content flows horizontally from left to right. For RTL direction, content moves horizontally from right to left. The following horizontal line resides below the previous line.
         * @value "tb-rl" indicates that id if the TextBox.Direction is LTR, textual content flows vertically from top to bottom, and the following vertical line resides to the left of the previous line. For RTL direction, content flows vertically from bottom to top, and the following vertical line resides to the right of the previous line.
         */
        WritingMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  the default language to use for dates and number formatting within a NoRowsMessage.
         */
        Language?: string;
        /**
         * @ignore
         */
        Calendar?: string;
        /**
         * @ignore
         */
        NumeralLanguage?: string;
        /**
         * @ignore
         */
        NumeralVariant?: string;
        /**
         * @ignore
         */
        UnicodeBiDi?: string;
        /**
         * @ignore
         */
        UprightInVerticalText?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a NoRowsMessage
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text in a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a Checkbox
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a Table
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Table
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Table
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Table
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Table
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Table
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Table is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Table at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Table for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Table that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a Table
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating a collection of filters to be applied to the data for each row of a Table
     */
    Filters?: Filter[];
    /**
     * Gets or sets a value indicating a Table has its page numbering
     */
    NewSection?: boolean;
    /**
     * Gets or sets a value indicating a collection of expressions by which to sort repeated table rows
     */
    SortExpressions?: SortExpression[];
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text to render instead of the list layout when no rows of data are available for a Table.
     */
    NoRowsMessage?: string;
    /**
     * Gets or sets the name of the dataset to use to bind data to a Table.
     */
    DataSetName?: string;
    /**
     * @ignore
     */
    DataSetParameters?: {
        [x: string]: any;
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    PageName?: string;
    /**
     * @ignore
     */
    FillPage?: boolean;
    /**
     * @ignore
     */
    DetailDataElementName?: string;
    /**
     * @ignore
     */
    DetailDataCollectionName?: string;
    /**
     * @ignore
     */
    DetailDataElementOutput?: DataElementOutput;
    /**
     * @ignore
     */
    FrozenRows?: number;
    /**
     * @ignore
     */
    FrozenColumns?: number;
    /**
     * Gets or sets a value indicating whether a fixed table layout should fill the unused space with empty table rows
     */
    RepeatToFill?: boolean;
    RepeatBlankRows?: "None" | "FillPage" | "FillGroup";
    /**
     * Gets or sets a value indicating whether a lonely table footer should be prevented.
     */
    PreventOrphanedFooter?: boolean;
    /**
     * Gets or sets a value indicating the collection of columns in a Table.
     */
    TableColumns?: TableColumn[];
    /**
     * Gets or sets a value indicating the collection of header rows in a Table.
     */
    Header?: TableHeader;
    /**
     * Gets or sets a value indicating the collection of table groups consisting of group expressions, group headers, and group footers for a table.
     */
    TableGroups?: TableGroup[];
    /**
     * Gets or sets a value indicating the collection of detail rows for a Table.
     */
    Details?: TableDetails;
    /**
     * Gets or sets a value indicating the collection of footer rows in a Table.
     */
    Footer?: TableFooter;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Table from the left of the table's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Table from the top of the table's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Table
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Table
     */
    Height?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed width](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a Table
     */
    FixedWidth?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed height](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a Table
     */
    FixedHeight?: string;
    /**
     * Gets or sets a value indicating the name of the [overflow place holder](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#overflow-place-holder) for a fixed Table layout
     */
    OverflowName?: string;
};
/**
 * Represents a column in a Table
 */
export declare type TableColumn = {
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a column
     */
    Width?: string;
    /**
     * @ignore
     */
    FixedHeader?: boolean;
    /**
     * Gets or sets a value indicating the presence of a column in a Table
     */
    Visibility?: Visibility;
    AutoWidth?: "None" | "Proportional";
};
/**
 * Represents the header rows for a Table
 */
export declare type TableHeader = {
    /**
     * @ignore
     */
    FixedHeader?: boolean;
    /**
     * Gets or sets a value indicating a collection of the header rows for a Table
     */
    TableRows?: TableRow[];
    /**
     * Gets or sets a value indicating whether rendered header rows are repeated on every Page where the header’s parent Table is rendered
     */
    RepeatOnNewPage?: boolean;
};
/**
 * Represents a row of cells in a table
 */
export declare type TableRow = {
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a row
     */
    Height?: string;
    /**
     * Gets or sets a value indicating the presence of a row in a Table.
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value indicating the contents of a row in a Table.
     */
    TableCells?: TableCell[];
};
/**
 * Represents the footer rows for a Table
 */
export declare type TableFooter = {
    /**
     * Gets or sets a value indicating whether a table footer always prints at the bottom of the page
     */
    PrintAtBottom?: boolean;
    /**
     * Gets or sets a value indicating a collection of the footer rows for a Table
     */
    TableRows?: TableRow[];
    /**
     * Gets or sets a value indicating whether rendered footer rows are repeated on every Page where the header’s parent Table is rendered
     */
    RepeatOnNewPage?: boolean;
};
/**
 * Represents the details rows for a Table
 */
export declare type TableDetails = {
    /**
     * Gets or sets a value indicating a collection of the details rows for a Table
     */
    TableRows?: TableRow[];
    /**
     * Gets or sets a value indicating the expressions by which to group the detail data in a Table.
     */
    Group?: Grouping;
    /**
     * Gets or sets a value indicating a collection of expressions by which to sort detail data in a Table
     */
    SortExpressions?: SortExpression[];
    /**
     * Gets or sets a value indicating the presence of the detail rows in a Table.
     */
    Visibility?: Visibility;
};
/**
 * Represents a group in a Table
 */
export declare type TableGroup = {
    /**
     * Gets or sets a value indicating expressions by which to group the data in a TableGroup.
     */
    Group?: Grouping;
    /**
     * Gets or sets a value indicating a collection of expressions by which to the data in a TableGroup
     */
    SortExpressions?: SortExpression[];
    /**
     * Gets or sets a value indicating a header for a TableGroup.
     */
    Header?: TableHeader;
    /**
     * Gets or sets a value indicating a footer for a TableGroup.
     */
    Footer?: TableFooter;
    /**
     * Gets or sets a value indicating the presence of a TableGroup.
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value indicating whether the entire contents of a TableGroup should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Gets or sets a value indicating whether a lonely TableGroup footer should be prevented.
     */
    PreventOrphanedFooter?: boolean;
};
/**
 * Represents the contents of a cell in a Table.
 */
export declare type TableCell = {
    /**
     * Gets or sets a value indicating a report item that is contained within a cell of a Table
     */
    Item: ReportItem;
    /**
     * Gets or sets a value indicating the number of columns that the cell spans.
     */
    ColSpan?: number;
    /**
     * Gets or sets a value indicating the number of rows that the cell spans.
     */
    RowSpan?: number;
    /**
     * @ignore
     */
    AutoMergeMode?: "Never" | "Always" | "Restricted";
};
/**
 * Represents properties for a [Tablix](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Regions/Tablix/index) in a report
 */
export declare type Tablix = {
    /**
     * Gets or sets a unique identifier for a Tablix
     */
    Name: string;
    /**
     * Should be set to "tablix"
     */
    Type: "tablix";
    /**
     * Gets or sets a value indicating whether the entire contents of a Tablix should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Represents style information for a Tablix
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Tablix
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a Tablix
         */
        BackgroundImage?: BackgroundImage;
        /**
         * @ignore
         */
        LineHeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a NoRowsMessage is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a Tablix aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a Tablix aligns the text to the left
         * @value "Right" indicates that a Tablix aligns the text to the right
         * @value "Center" indicates that a Tablix centers the text
         * @value "Justify" indicates that a Tablix stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the vertical alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Top" indicates top-aligned text
         * @value "Middle" indicates vertically-centered text alignment
         * @value "Bottom" indicates bottom-aligned text
         */
        VerticalAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a NoRowsMessage
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  whether text within a NoRowsMessage is written left-to-right or right-to-left.
         * The value or the expression result should be one of the following.
         * @value "LTR" indicates that text is written left-to-right.
         * @value "RTL" indicates that the text is written right-to-left.
         */
        Direction?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the textual content within a NoRowsMessage is laid out horizontally or vertically as well as the direction in which text moves.
         * The value or the expression result should be one of the following.
         * @value "lr-tb" indicates that if the TextBox.Direction is "LTR", textual content flows horizontally from left to right. For RTL direction, content moves horizontally from right to left. The following horizontal line resides below the previous line.
         * @value "tb-rl" indicates that id if the TextBox.Direction is LTR, textual content flows vertically from top to bottom, and the following vertical line resides to the left of the previous line. For RTL direction, content flows vertically from bottom to top, and the following vertical line resides to the right of the previous line.
         */
        WritingMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  the default language to use for dates and number formatting within a NoRowsMessage.
         */
        Language?: string;
        /**
         * @ignore
         */
        Calendar?: string;
        /**
         * @ignore
         */
        NumeralLanguage?: string;
        /**
         * @ignore
         */
        NumeralVariant?: string;
        /**
         * @ignore
         */
        UnicodeBiDi?: string;
        /**
         * @ignore
         */
        UprightInVerticalText?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a List and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a NoRowsMessage
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text in a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a Checkbox
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a Tablix
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Tablix
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Tablix
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Tablix
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Tablix
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Tablix
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Tablix is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Tablix at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Tablix for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Tablix that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a Tablix
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating a collection of filters to be applied to the data for each row of a Tablix
     */
    Filters?: Filter[];
    /**
     * Gets or sets a value indicating a Tablix has its page numbering
     */
    NewSection?: boolean;
    /**
     * Gets or sets a value indicating a collection of expressions that are applied to the filtered data of a Tablix to order the data.
     */
    SortExpressions?: SortExpression[];
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text to render instead of the tablix layout when no rows of data are available for a Tablix.
     */
    NoRowsMessage?: string;
    /**
     * Gets or sets the name of the dataset to use to bind data to a Tablix.
     */
    DataSetName?: string;
    /**
     * @ignore
     */
    DataSetParameters?: {
        [x: string]: any;
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    PageName?: string;
    /**
     * @ignore
     */
    FrozenRows?: number;
    /**
     * @ignore
     */
    FrozenColumns?: number;
    /**
     * Gets or sets a value indicating whether tablix column headers are repeated on each page where the column traverses a page break.
     */
    RepeatColumnHeaders?: boolean;
    /**
     * Gets or sets a value indicating whether Tablix row headers are repeated on each page where the row traverses a page break.
     */
    RepeatRowHeaders?: boolean;
    /**
     * Gets or sets a value indicating the count of dynamic member columns of the first Tablix column group to render before the tablix row header.
     */
    GroupsBeforeRowHeaders?: number;
    /**
     * Gets or sets a value indicating the layout direction of Tablix columns.
     * @value "LTR" indicates that Tablix columns are rendered starting at the left and progressing to the right.
     * @value "RTL" indicates that Tablix columns are rendered starting at the right and progressing to the left.
     */
    LayoutDirection?: "LTR" | "RTL";
    /**
     * Gets or sets a value indicating the row hierarchy of a Tablix.
     */
    RowHierarchy?: TablixHierarchy;
    /**
     * Gets or sets a value indicating the column hierarchy of a Tablix.
     */
    ColumnHierarchy?: TablixHierarchy;
    /**
     * Gets or sets a value indicating the corner of a Tablix.
     */
    Corner?: TablixCornerRow[];
    /**
     * Gets or sets a value indicating the body of a Tablix.
     */
    Body?: TablixBody;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Tablix from the left of the tablix's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Tablix from the top of the tablix's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Tablix
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Tablix
     */
    Height?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed width](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a Tablix
     */
    FixedWidth?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed height](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a Tablix
     */
    FixedHeight?: string;
    /**
     * Gets or sets a value indicating the name of the [overflow place holder](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#overflow-place-holder) for a fixed Tablix layout.
     */
    OverflowName?: string;
};
/**
 * Represents the rows and columns of a Tablix.
 */
export declare type TablixBody = {
    /**
     * Gets or sets a value indicating the widths of the columns of the body of a Tablix.
     * The widths should be specified in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     */
    Columns?: string[];
    /**
     * Gets or sets a value indicating the rows of the body of a Tablix.
     */
    Rows?: TablixBodyRow[];
};
/**
 * Represents a collection of cells that form the TablixBody.
 */
export declare type TablixBodyRow = {
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a row in a Tablix
     */
    Height?: string;
    /**
     * Gets or sets a value indicating a collection of cells of a row in the body of a Tablix.
     */
    Cells?: TablixBodyCell[];
};
/**
 * Represents the content of a cell in the TablixBody.
 */
export declare type TablixBodyCell = {
    /**
     * @ignore
     */
    AutoMergeMode?: "Never" | "Always" | "Restricted";
    /**
     * Gets or sets a value indicating the number of rows that the cell spans.
     */
    RowSpan?: number;
    /**
     * Gets or sets a value indicating the number of columns that the cell spans.
     */
    ColSpan?: number;
    /**
     * Gets or sets a value indicating a report item that is contained within a cell of a TablixBody.
     */
    Item?: ReportItem;
};
/**
 * Represents a row in a TablixCorner
 */
export declare type TablixCornerRow = TablixCornerCell[];
/**
 * Represents the content of a cell in the TablixCorner.
 */
export declare type TablixCornerCell = {
    /**
     * Gets or sets a value indicating the number of rows that the cell spans.
     */
    RowSpan?: number;
    /**
     * Gets or sets a value indicating the number of columns that the cell spans.
     */
    ColSpan?: number;
    /**
     * Gets or sets a value indicating a report item that is contained within a cell of a TablixCorner.
     */
    Item?: ReportItem;
};
/**
 * Represents the hierarchy of TablixMembers for a Tablix.
 */
export declare type TablixHierarchy = {
    /**
     * @ignore
     */
    LevelSizes?: string[];
    /**
     * Gets or sets a value indicating members of a TablixHierarchy.
     */
    Members?: TablixMember[];
};
/**
 * Represents the structure of an item in a Tablix hierarchy.
 */
export declare type TablixMember = {
    /**
     * Gets os sets a cell of a row header or a column header.
     */
    Header?: TablixHeader;
    BodyIndex?: number;
    BodyCount?: number;
    /**
     * Gets or sets a value indicating the presence of a TablixMember element.
     */
    Visibility?: Visibility;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value indicating whether the entire contents of a TablixMember should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Gets or sets a value indicating the group for a TablixMember element.
     */
    Group?: TablixGrouping;
    /**
     * Gets or sets a value indicating whether an attempt is made to keep each rendered instance of a parent static member with the closest non-hidden instance of a preceding or subsequent sibling dynamic member.
     */
    KeepWithGroup?: "None" | "Before" | "After";
    /**
     * Gets or sets a value indicating whether instances of rendered static members are repeated on every Page on which at least one complete instance of the associated dynamic member is rendered.
     */
    RepeatOnNewPage?: boolean;
    /**
     * Gets or sets a value indicating a collection of expressions that determine the order of the TablixMember data.
     */
    SortExpressions?: SortExpression[];
} & {
    /**
     * Gets or sets a value indicating a collection of child tablix members for the current member.
     */
    Children?: TablixMember[];
};
/**
 * Represents contents in a tablix column group area or row group area.
 */
export declare type TablixHeader = {
    /**
     * Gets or sets a value indicating a report item that is contained within a TablixHeader
     */
    Item?: ReportItem;
    /**
     * @ignore
     */
    LevelCount?: number;
};
/**
 * Represents expressions by which to categorize data and properties of the resulting data categorization in a Tablix
 */
export declare type TablixGrouping = {
    /**
     * Gets or sets a value indicating whether a group footer always prints at the bottom of the page
     */
    PrintFooterAtBottom?: boolean;
    /**
     * Gets or sets a value indicating a unique identifier for a TablixGrouping.
     */
    Name?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Tablix Group instance that appears in the Report Map and Table of Contents
     */
    DocumentMapLabel?: string;
    /**
     * Gets or sets a value indicating a collection of [expressions](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) of a Tablix Group.
     */
    GroupExpressions?: string[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a Tablix Group.
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the generated page break should be disabled.
     * The value or the expression result should be either "true" or "false"
     */
    PageBreakDisabled?: string;
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating a collection of filters for a Tablix Group.
     */
    Filters?: Filter[];
    /**
     * Gets or sets a value indicating an Id of a parent group
     */
    ParentGroup?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * @ignore
     */
    DataCollectionName?: string;
    /**
     * Gets or sets a value indicating a Tablix Member has its page numbering
     */
    NewSection?: boolean;
};
/**
 * Represents properties for a [Line](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Supplemental-Report-Items/Line/index) in a report
 */
export declare type Line = {
    /**
     * Gets or sets a unique identifier for a Line
     */
    Name: string;
    /**
     * Should be set to "line"
     */
    Type: "line";
    /**
     * Gets or sets a value indicating the stack order of a Line
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Line is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Line for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Line that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Represents the start point of a line
     */
    StartPoint?: {
        /**
         * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of the start point a line from the left of the line's container.
         */
        X?: string;
        /**
         * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of the start point of a line from the top of the line's container.
         */
        Y?: string;
    };
    /**
     * Represents the end point of a line
     */
    EndPoint?: {
        /**
         * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of the end point a line from the left of the line's container.
         */
        X?: string;
        /**
         * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of the end point a line from the top of the line's container.
         */
        Y?: string;
    };
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the width of a Line
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     */
    LineWidth?: string;
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the style of a Line
     * @value "None" indicates that no border is drawn.
     * @value "Dotted" indicates a dotted line for a border.
     * @value "Dashed" indicates a dashed line for a border.
     * @value "Solid" indicates a solid line for a border.
     * @value "Double" indicates a double solid line for a border.
     * @value "Groove" indicates a 3D grooved border. The effect depends on the border color value.
     * @value "Ridge" indicates a 3D ridged border. The effect depends on the border color value.
     * @value "Inset" indicates a 3D inset border. The effect depends on the border color value.
     * @value "Outset" indicates a 3D outset border. The effect depends on the border color value.
     */
    LineStyle?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the color of a Line
     * The value or the expression result should be either a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    LineColor?: string;
};
/**
 * Represents properties for a [Container](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Supplemental-Report-Items/Container/index) in a report
 */
export declare type Rectangle = {
    /**
     * Gets or sets a unique identifier for a Rectangle
     */
    Name: string;
    /**
     * Should be set to "rectangle"
     */
    Type: "rectangle";
    /**
     * Gets or sets a value indicating whether the entire contents of a Container should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Represents style information for a Container
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Container
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a Container
         */
        BackgroundImage?: BackgroundImage;
        /**
         * Gets or sets the default border properties for a Container
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Container
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Container
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Container
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Container
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Container
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Container is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Container at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Container for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Container that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a Container
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating whether all whitespace in a Container should be consumed when contents grow
     */
    ConsumeWhiteSpace?: boolean;
    /**
     * Gets or sets a value indicating a collection of report items that are contained within a Container
     */
    ReportItems?: ReportItem[];
    /**
     * @ignore
     */
    PageName?: string;
    /**
     * Gets or sets a value indicating the container's border radius.
     */
    RoundingRadius?: RoundingRadius;
    /**
     * @ignore
     */
    LinkToChild?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Container from the left of the container's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Container from the top of the container's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Container
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Container
     */
    Height?: string;
};
/**
 * Represents the border radius of a container
 */
export declare type RoundingRadius = {
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the default border radius of a container
     */
    Default?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the top left border radius of a container
     */
    TopLeft?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the top right border radius of a container
     */
    TopRight?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the bottom left border radius of a container
     */
    BottomLeft?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the bottom right border radius of a container
     */
    BottomRight?: string;
};
/**
 * Represents properties of a [Banded List](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Regions/BandedList/index) in a report
 */
export declare type BandedList = {
    /**
     * Gets or sets a unique identifier for a Banded List
     */
    Name: string;
    /**
     * Should be set to "bandedlist"
     */
    Type: "bandedlist";
    /**
     * Gets or sets a value indicating whether the entire contents of a Banded List should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Gets or sets a value indicating the stack order of a Banded List
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Banded List is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Banded List at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Banded List for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Banded List that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a Banded List
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating a collection of filters to be applied to the data for each row of a Banded List
     */
    Filters?: Filter[];
    /**
     * Gets or sets a value indicating a Banded List has its page numbering
     */
    NewSection?: boolean;
    /**
     * Gets or sets a value indicating whether all whitespace in a Banded List should be consumed when contents grow
     */
    ConsumeWhiteSpace?: boolean;
    /**
     * Gets or sets the name of the dataset to use to bind data to a Banded List.
     */
    DataSetName?: string;
    /**
     * @ignore
     */
    DataSetParameters?: {
        [x: string]: any;
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    PageName?: string;
    /**
     * Gets or sets a value indicating whether a lonely Banded List footer should be prevented.
     */
    PreventOrphanedFooter?: boolean;
    /**
     * Gets or sets a value indicating the collection of header bands in a BandedList.
     */
    Header?: BandedListHeader;
    /**
     * Gets or sets a value indicating the collection of detail bands in a Banded List.
     */
    Details?: {
        /**
         * Gets or sets a value indicating a collection of reports item that are contained within the Details band of a Banded List
         */
        ReportItems?: ReportItem[];
        /**
         * Gets or sets a unique identifier for the Details band
         */
        Name?: string;
        /**
         * Gets or sets a value indicating whether the height of the Details band can decrease to match its contents
         */
        CanShrink?: boolean;
        /**
         * Gets or sets a value indicating whether the height of the Details band can increase to match its contents
         */
        CanGrow?: boolean;
        /**
         * Gets or sets a value indicating whether the entire contents of the Details band should be kept together on one Page if possible
         */
        KeepTogether?: boolean;
        /**
         * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of the Details band in a Banded List
         */
        Height?: string;
        /**
         * Gets or sets a value indicating whether the Details band is hidden
         */
        Visibility?: Visibility;
        /**
         * Gets or sets a value indicating the location of a page breaks generated by the Details band
         */
        PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
        NewPage?: "Next" | "Odd" | "Even";
    };
    /**
     * Gets or sets a value indicating the collection of footer bands in a BandedList.
     */
    Footer?: BandedListFooter;
    /**
     * Gets or sets a value indicating whether a lonely Banded List header should be prevented.
     */
    PreventOrphanedHeader?: boolean;
    /**
     * Gets or sets a value indicating the collection of banded list groups consisting of group expressions, group headers, and group footers for a Banded List.
     */
    Groups?: BandedListGroup[];
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Banded List from the left of the banded list's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Banded List from the top of the banded list's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Banded List
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Banded List
     */
    Height?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed width](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a Banded List
     */
    FixedWidth?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the [fixed height](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-size) of a Banded List
     */
    FixedHeight?: string;
    /**
     * Gets or sets a value indicating the name of the [overflow place holder](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#overflow-place-holder) for a fixed Banded List layout
     */
    OverflowName?: string;
};
/**
 * Represents properties of the header band of a Banded List
 */
export declare type BandedListHeader = {
    /**
     * Gets or sets a value indicating whether rendered header bands are repeated on every Page where the header’s parent Banded List is rendered
     */
    RepeatOnNewPage?: boolean;
    /**
     * Gets or sets a value indicating a collection of reports item that are contained within the Header band of a Banded List
     */
    ReportItems?: ReportItem[];
    /**
     * Gets or sets a unique identifier for the Header band
     */
    Name?: string;
    /**
     * Gets or sets a value indicating whether the height of the Header band can decrease to match its contents
     */
    CanShrink?: boolean;
    /**
     * Gets or sets a value indicating whether the height of the Header band can increase to match its contents
     */
    CanGrow?: boolean;
    /**
     * Gets or sets a value indicating whether the entire contents of the Header band should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of the Header band in a Banded List
     */
    Height?: string;
    /**
     * Gets or sets a value indicating whether the Header band is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value indicating the location of a page breaks generated by the Header band
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
};
/**
 * Represents properties of the footer band of a Banded List
 */
export declare type BandedListFooter = {
    /**
     * Gets or sets a value indicating whether rendered footer bands are repeated on every Page where the footer’s parent Banded List is rendered
     */
    RepeatOnNewPage?: boolean;
    /**
     * Gets or sets a value indicating whether a banded list footer always prints at the bottom of the page
     */
    PrintAtBottom?: boolean;
    /**
     * Gets or sets a value indicating a collection of reports item that are contained within the Footer band of a Banded List
     */
    ReportItems?: ReportItem[];
    /**
     * Gets or sets a unique identifier for the Footer band
     */
    Name?: string;
    /**
     * Gets or sets a value indicating whether the height of the Footer band can decrease to match its contents
     */
    CanShrink?: boolean;
    /**
     * Gets or sets a value indicating whether the height of the Footer band can increase to match its contents
     */
    CanGrow?: boolean;
    /**
     * Gets or sets a value indicating whether the entire contents of the Footer band should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of the Footer band in a Banded List
     */
    Height?: string;
    /**
     * Gets or sets a value indicating whether the Footer band is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value indicating the location of a page breaks generated by the Header band
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
};
/**
 * Represents a group in a Banded List
 */
export declare type BandedListGroup = {
    /**
     * Gets or sets a value indicating expressions by which to group the data in a Banded List Group.
     */
    Group?: Grouping;
    /**
     * Gets or sets a value indicating a collection of expressions by which to sort the data in a Banded List Group.
     */
    SortExpressions?: SortExpression[];
    /**
     * Gets or sets a value indicating the presence of a Banded List Group.
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value indicating whether the entire contents of a Banded List Group should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Gets or sets a value indicating whether a lonely Banded List Group Header should be prevented.
     */
    PreventOrphanedHeader?: boolean;
    /**
     * Gets or sets a value indicating whether a lonely Banded List Group Footer should be prevented.
     */
    PreventOrphanedFooter?: boolean;
    /**
     * Gets or sets a value indicating a collection of bands in a Banded List Group Header.
     */
    Header?: BandedListHeader;
    /**
     * Gets or sets a value indicating a collection of bands in a Banded List Group Footer.
     */
    Footer?: BandedListFooter;
};
/**
 * Represents properties for a [Subreport](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Supplemental-Report-Items/Subreport/index) in a report
 */
export declare type Subreport = {
    /**
     * Gets or sets a unique identifier for a Subreport
     */
    Name: string;
    /**
     * Should be set to "subreport"
     */
    Type: "subreport";
    /**
     * Gets or sets a value indicating whether the entire contents of a Subreport should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Represents style information for a Subreport
     */
    Style?: {
        /**
         * @ignore
         */
        LineHeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a NoRowsMessage is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a Subreport aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a Subreport aligns the text to the left
         * @value "Right" indicates that a Subreport aligns the text to the right
         * @value "Center" indicates that a Subreport centers the text
         * @value "Justify" indicates that a Subreport stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the vertical alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Top" indicates top-aligned text
         * @value "Middle" indicates vertically-centered text alignment
         * @value "Bottom" indicates bottom-aligned text
         */
        VerticalAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a NoRowsMessage
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  whether text within a NoRowsMessage is written left-to-right or right-to-left.
         * The value or the expression result should be one of the following.
         * @value "LTR" indicates that text is written left-to-right.
         * @value "RTL" indicates that the text is written right-to-left.
         */
        Direction?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the textual content within a NoRowsMessage is laid out horizontally or vertically as well as the direction in which text moves.
         * The value or the expression result should be one of the following.
         * @value "lr-tb" indicates that if the TextBox.Direction is "LTR", textual content flows horizontally from left to right. For RTL direction, content moves horizontally from right to left. The following horizontal line resides below the previous line.
         * @value "tb-rl" indicates that id if the TextBox.Direction is LTR, textual content flows vertically from top to bottom, and the following vertical line resides to the left of the previous line. For RTL direction, content flows vertically from bottom to top, and the following vertical line resides to the right of the previous line.
         */
        WritingMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  the default language to use for dates and number formatting within a NoRowsMessage.
         */
        Language?: string;
        /**
         * @ignore
         */
        Calendar?: string;
        /**
         * @ignore
         */
        NumeralLanguage?: string;
        /**
         * @ignore
         */
        NumeralVariant?: string;
        /**
         * @ignore
         */
        UnicodeBiDi?: string;
        /**
         * @ignore
         */
        UprightInVerticalText?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a Table and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a NoRowsMessage
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text in a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a Checkbox
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a Subreport
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Subreport
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Subreport
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Subreport
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Subreport
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Subreport
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Subreport is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Subreport at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Subreport for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Subreport that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text to render instead of the subreport layout when no rows of data are available for a Subreport.
     */
    NoRowsMessage?: string;
    /**
     * @ignore
     */
    PageName?: string;
    /**
     * Gets or sets a value indicating either the location of the report definition to use for the Subreport or the Id to be resolved by the [custom resource locator](https://www.grapecity.com/activereportsjs/docs/DeveloperGuide/ActiveReportsJSViewer/LoadingReports/ResourceLocator)
     */
    ReportName?: string;
    /**
     * @ignore
     */
    MergeTransactions?: boolean;
    /**
     * @ignore
     */
    SubstituteThemeOnSubreport?: boolean;
    /**
     * @ignore
     */
    InheritStyleSheet?: boolean;
    /**
     * Gets or sets a value indicating the parameters to be evaluated and passed to the Subreport.
     */
    Parameters?: {
        ParameterName?: string;
        Value?: string;
        Omit?: string;
    }[];
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Subreport from the left of the subreport's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Subreport from the top of the subreport's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Subreport
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Subreport
     */
    Height?: string;
    /**
     * @ignore
     */
    OverflowName?: string;
};
/**
 * Represents properties for a [Shape](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Supplemental-Report-Items/Shape/index) in a report
 */
export declare type Shape = {
    /**
     * Gets or sets a unique identifier for a Shape
     */
    Name: string;
    /**
     * Should be set to "shape"
     */
    Type: "shape";
    /**
     * Represents style information for a Shape
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Shape.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a Shape
         */
        BackgroundImage?: BackgroundImage;
        /**
         * Gets or sets the default border properties for a Shape
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Shape
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Shape
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Shape
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Shape
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Shape
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Shape is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Shape at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Shape for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Shape that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the shape's border radius.
     */
    RoundingRadius?: RoundingRadius;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the shape type.
     * The value or the expression result should be one of the following.
     * @value "Rectangle" indicates a rectangular shape
     * @value "RoundRect" indicates a rectangular shape with rounded corners
     * @value "Ellipse" indicates an ellipse
     */
    ShapeStyle?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Shape from the left of the shape's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Shape from the top of the shape's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Shape
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Shape
     */
    Height?: string;
};
/**
 * Represents properties for a [Table of Contents](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Supplemental-Report-Items/TableOfContents/index) in a report
 */
export declare type TableOfContents = {
    /**
     * Gets or sets a unique identifier for a Table of Contents
     */
    Name: string;
    /**
     * Should be set to "tableofcontents"
     */
    Type: "tableofcontents";
    /**
     * Represents style information for a Table of Contents
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Table of Contents
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the allowed depth of the levels hierarchy of a Table of Contents
         */
        MaxLevel?: string;
        /**
         * Gets or sets the default border properties for a Table of Contents
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Table of Contents
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Table of Contents
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Table of Contents
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Table of Contents
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Table of Contents
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Table of Contents is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Table of Contents at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Table of Contents for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * @ignore
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a Table of Contents
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating a collection of levels in the hierarchy of a Table of Contents
     */
    Levels?: TableOfContentsLevel[];
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Table of Contents from the left of its container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Table of Contents from the top of its container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Table of Contents
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Table of Contents
     */
    Height?: string;
    /**
     * @ignore
     */
    FixedHeight?: string;
    /**
     * @ignore
     */
    OverflowName?: string;
};
/**
 * Represents a level of the hierarchy in a Table of Contents
 */
export declare type TableOfContentsLevel = {
    /**
     * Gets or sets a value indicating a unique identifier for a level in a Table of Contents.
     */
    LevelName?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * Gets or sets a value indicating whether a level should fill space between the text and the page number
     */
    DisplayFillCharacters?: boolean;
    /**
     * Gets or sets a value indicating whether a level should display the page number
     */
    DisplayPageNumber?: boolean;
    /**
     * Represents style information for a level in a Table of Contents
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a level in a Table of Contents.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a level in a Table of Contents.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the text within a level in a Table of Contents.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a Level aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a Level aligns the text to the left
         * @value "Right" indicates that a Level aligns the text to the right
         * @value "Center" indicates that a Level centers the text
         * @value "Justify" indicates that a Level stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a the text within a level in a Table of Contents.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the indetation of a level text.
         */
        TextIndent?: string;
        /**
         * Gets or sets a value indicating the character that should be used to fill the space between the text and the page number.
         */
        LeadingChar?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a Table of Contents and a level's text.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a Table of Contents and a level's text.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a Table of Contents and a level's text.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a Table of Contents and a level's text.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text within a level in a Table of Contents.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within within a level in a Table of Contents.
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for textwithin within a level in a Table of Contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a level in a Table of Contents.
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
    };
};
/**
 * Represents properties for a [Barcode](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Visualizers/Barcode/index) in a report
 */
export declare type Barcode = {
    /**
     * Gets or sets a unique identifier for a List
     */
    Name: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that is displayed for a Barcode
     */
    Value?: string;
    /**
     * Should be set to "barcode"
     */
    Type: "barcode";
    /**
     * @ignore
     */
    DataElementStyle?: "Auto" | "AttributeNormal" | "ElementNormal";
    /**
     * Represents style information for a Barcode
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Barcode
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a Barcode caption is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for the caption in a Barcode.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the caption in a Barcode
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a barcode aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a barcode aligns the text to the left
         * @value "Right" indicates that a barcode aligns the text to the right
         * @value "Center" indicates that a barcode centers the text
         * @value "Justify" indicates that a barcode stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of the caption in a Barcode
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a barcode and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a barcode and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a barcode and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a barcode and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for the caption in a Barcode.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for the caption in a Barcode.
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for the caption in a Barcode.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for the caption in a Barcode.
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a Barcode
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Barcode
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Barcode
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Barcode
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Barcode
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Barcode
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Barcode is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Barcode at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Barcode for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Barcode that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text that shows in case a Barcode's value is invalid.
     */
    InvalidBarcodeText?: string;
    /**
     * Gets or sets a value indicating the Barcode type.
     * Supported values are
     * @value "Ansi39"
     * @value "Ansi39x"
     * @value "Codabar"
     * @value "Code_128_A"
     * @value "Code_128_B"
     * @value "Code_128_C"
     * @value "Code_128auto"
     * @value "Code_93"
     * @value "Code25intlv"
     * @value "Code39"
     * @value "Code39x"
     * @value "Code49"
     * @value "Code93x"
     * @value "DataMatrix"
     * @value "EAN_13"
     * @value "EAN_8"
     * @value "GS1QRCode"
     * @value "ITF14"
     * @value "JapanesePostal"
     * @value "Pdf417"
     * @value "QRCode"
     * @value "RSS14"
     * @value "RSS14Stacked"
     * @value "RSS14StackedOmnidirectional"
     * @value "RSS14Truncated"
     * @value "RSSLimited"
     * @value "UCCEAN128"
     * @value "UPC_A"
     * @value "UPC_E0"
     * @value "UPC_E1"
     */
    Symbology?: "None" | "Ansi39" | "Ansi39x" | "Aztec" | "BC412" | "Codabar" | "Code_11" | "Code_128_A" | "Code_128_B" | "Code_128_C" | "Code_128auto" | "Code_2_of_5" | "Code_93" | "Code25intlv" | "Code39" | "Code39x" | "Code49" | "Code93x" | "DataMatrix" | "EAN_13" | "EAN_8" | "EAN128FNC1" | "GS1DataMatrix" | "GS1QRCode" | "HIBCCode128" | "HIBCCode39" | "IATA_2_of_5" | "IntelligentMail" | "IntelligentMailPackage" | "ISBN" | "ISMN" | "ISSN" | "ITF14" | "JapanesePostal" | "Matrix_2_of_5" | "MaxiCode" | "MicroPDF417" | "MicroQRCode" | "MSI" | "Pdf417" | "Pharmacode" | "Plessey" | "PostNet" | "PZN" | "QRCode" | "RM4SCC" | "RSS14" | "RSS14Stacked" | "RSS14StackedOmnidirectional" | "RSS14Truncated" | "RSSExpanded" | "RSSExpandedStacked" | "RSSLimited" | "SSCC_18" | "Telepen" | "UCCEAN128" | "UPC_A" | "UPC_E0" | "UPC_E1";
    /**
     * Gets or sets a value indicating whether a barcode requires a checksum.
     */
    CheckSum?: boolean;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of the barcode's bars.
     */
    BarHeight?: string;
    /**
     * Gets or sets a value indicating whether to add spaces between groups of characters in the caption to make long numbers easier to read.
     */
    CaptionGrouping?: boolean;
    /**
     * Gets or sets a value indicating the vertical alignment of the caption in a Barcode.
     */
    CaptionLocation?: "None" | "Above" | "Below";
    AztecOptions?: BarcodeAztecOptions;
    /**
     * Gets or sets a value indicating options for a Code49 barcode
     */
    Code49Options?: BarcodeCode49Options;
    /**
     * Gets or sets a value indicating options for a DataMatrix barcode
     */
    DataMatrixOptions?: BarcodeDataMatrixOptions;
    /**
     * @ignore
     */
    Ean128Fnc1Options?: BarcodeEan128Fnc1Options;
    /**
     * Gets or sets a value indicating options for a GC1QRCode barcode
     */
    Gs1CompositeOptions?: BarcodeGs1CompositeOptions;
    /**
     * @ignore
     */
    MaxiCodeOptions?: BarcodeMaxiCodeOptions;
    /**
     * @ignore
     */
    MicroPdf417Options?: BarcodeMicroPdf417Options;
    /**
     * @ignore
     */
    MicroQrCodeOptions?: BarcodeMicroQrCodeOptions;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of the narrowest part of the barcode.
     */
    NarrowBarWidth?: string;
    /**
     * Gets or sets a value indicating the multiple of the ratio between the narrow and wide bars in symbologies that contain bars in only two widths.
     */
    NWRation?: number;
    /**
     * Gets or sets a value indicating options for a Pdf417 barcode
     */
    Pdf417Options?: BarcodePdf417Options;
    /**
     * Gets or sets a value indicating options for a QRCode barcode
     */
    QrCodeOptions?: BarcodeQrCodeOptions;
    /**
     * Gets or sets a value indicating an area of blank space on each side of a barcode that tells the scanner where the symbology starts and stops.
     */
    QuietZone?: {
        Left?: string;
        Right?: string;
        Top?: string;
        Bottom?: string;
    };
    /**
     * Gets or sets the amount of rotation to use for the barcode.
     * Supported values are
     * @value "Rotate90Degress"
     * @value "Rotate180Degress"
     * @value "Rotate270Degress"
     */
    Rotation?: string;
    /**
     * @ignore
     */
    RssExpandedStacked?: BarcodeRssExpandedStacked;
    /**
     * @ignore
     */
    SupplementOptions?: BarcodeSupplementOptions;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Barcode from the left of the barcode's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Barcode from the top of the barcode's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Barcode
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Barcode
     */
    Height?: string;
};
export declare type BarcodeAztecOptions = {
    /**
     * Percentage of "check digits" in barcode body. Typically is between 5% and 95%, default is 33%
     */
    ErrorCorrection?: number;
    /**
     * Barcode layers count. More layers - more data can be encoded. Can be from 1 to 32. 0 is auto. Values from -1 to -4 means 1 to 4 layers with compressed mode.
     */
    Layers?: number;
    Encoding?: string;
};
/**
 * Represents options of a Code49 Barcode
 */
export declare type BarcodeCode49Options = {
    /**
     * Gets or sets a value indicating whether to use grouping for the Code49 barcode.
     */
    Grouping?: boolean;
    /**
     * Gets or sets a value between 0 and 8 indicating for the Code49 barcode grouping.
     */
    GroupNumber?: number;
};
/**
 * Represents options of a DataMatrix Barcode
 */
export declare type BarcodeDataMatrixOptions = {
    EccMode?: "ECC200" | "ECC000" | "ECC050" | "ECC080" | "ECC100" | "ECC140";
    Ecc200SymbolSize?: "SquareAuto" | "RectangularAuto" | "Square10" | "Square12" | "Square14" | "Square16" | "Square18" | "Square20" | "Square22" | "Square24" | "Square26" | "Square32" | "Square36" | "Square40" | "Square44" | "Square48" | "Square52" | "Square64" | "Square72" | "Square80" | "Square88" | "Square96" | "Square104" | "Square120" | "Square132" | "Square144" | "Rectangular8x18" | "Rectangular8x32" | "Rectangular12x26" | "Rectangular12x36" | "Rectangular16x36" | "Rectangular16x48";
    Ecc200EncodingMode?: "Auto" | "Text" | "ASCII" | "C40" | "X12" | "EDIFACT" | "Base256";
    Ecc000_140SymbolSize?: "Auto" | "Square9" | "Square11" | "Square13" | "Square15" | "Square17" | "Square19" | "Square21" | "Square23" | "Square25" | "Square27" | "Square29" | "Square31" | "Square33" | "Square35" | "Square37" | "Square39" | "Square41" | "Square43" | "Square45" | "Square47" | "Square49";
    StructuredAppend?: boolean;
    StructureNumber?: number;
    FileIdentifier?: number;
    Encoding?: string;
};
/**
 * @ignore
 */
export declare type BarcodeEan128Fnc1Options = {
    Resolution?: number;
    ModuleSize?: number;
    BarAdjust?: number;
};
/**
 * @ignore
 */
export declare type BarcodeGs1CompositeOptions = {
    CompositeType?: "None" | "CCA";
    Value?: string;
};
/**
 * @ignore
 */
export declare type BarcodeMaxiCodeOptions = {
    Mode?: "Mode4" | "Mode2" | "Mode3" | "Mode5" | "Mode6";
};
/**
 * @ignore
 */
export declare type BarcodeMicroPdf417Options = {
    CompactionMode?: "Auto" | "TextCompactionMode" | "NumericCompactionMode" | "ByteCompactionMode";
    Version?: "ColumnPriorAuto" | "RowPriorAuto" | "Version1X11" | "Version1X14" | "Version1X17" | "Version1X20" | "Version1X24" | "Version1X28" | "Version2X8" | "Version2X11" | "Version2X14" | "Version2X17" | "Version2X20" | "Version2X23" | "Version2X26" | "Version3X6" | "Version3X8" | "Version3X10" | "Version3X12" | "Version3X15" | "Version3X20" | "Version3X26" | "Version3X32" | "Version3X38" | "Version3X44" | "Version4X4" | "Version4X6" | "Version4X8" | "Version4X10" | "Version4X12" | "Version4X15" | "Version4X20" | "Version4X26" | "Version4X32" | "Version4X38" | "Version4X44";
    SegmentIndex?: number;
    SegmentCount?: number;
    FileID?: number;
};
/**
 * @ignore
 */
export declare type BarcodeMicroQrCodeOptions = {
    Version?: "Auto" | "M1" | "M2" | "M3" | "M4";
    ErrorLevel?: "L" | "M" | "Q";
    Mask?: "Auto" | "Mask00" | "Mask01" | "Mask10" | "Mask11";
    Encoding?: string;
};
/**
 * Represents options for a Pdf417 Barcode.
 */
export declare type BarcodePdf417Options = {
    Columns?: number;
    Rows?: number;
    ErrorCorrectionLevel?: "Level0" | "Level1" | "Level2" | "Level3" | "Level4" | "Level5" | "Level6" | "Level7" | "Level8";
    Pdf417Type?: "Normal" | "Simple";
};
/**
 * Represents options for a QRCodeBarcode.
 */
export declare type BarcodeQrCodeOptions = {
    Connection?: boolean;
    ConnectionNumber?: number;
    Version?: number;
    ErrorLevel?: "L" | "M" | "Q" | "H";
    Mask?: "Auto" | "Mask000" | "Mask001" | "Mask010" | "Mask011" | "Mask100" | "Mask101" | "Mask110" | "Mask111";
    Model?: "Model2" | "Model1";
    Encoding?: string;
};
/**
 * @ignore
 */
export declare type BarcodeRssExpandedStacked = {
    RowCount?: number;
};
/**
 * @ignore
 */
export declare type BarcodeSupplementOptions = {
    Value?: string;
    BarHeight?: string;
    CaptionLocation?: string;
    Spacing?: string;
};
/**
 * Represents properties for a [Chart](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Regions/Chart/index) in a report
 */
export declare type DvChart = {
    /**
     * Gets or sets a unique identifier for a Chart
     */
    Name: string;
    /**
     * Should be set to "dvchart"
     */
    Type: "dvchart";
    /**
     * Represents style information for a Chart
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a Chart.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the end color for the background gradient of a Chart.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundGradientEndColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the type of background gradient of a Chart.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no background gradient
         * @value "LeftRight" indicates a horizontal background gradient
         * @value "TopBottom" indicates a vertical background gradient
         * @value "Center" indicates a circular background gradient
         * @value "DiagonalLeft" indicates a diagonal gradient that goes from top-left to bottom-right
         * @value "DiagonalRight" indicates a diagonal gradient that goes from top-right to bottom-left
         * @value "HorizontalCenter" indicates a horizontal gradient that goes out from the center to both the top and the bottom
         * @value "VerticalCenter" indicates a vertical gradient that goes out from the center to both the left and the right
         */
        BackgroundGradientType?: string;
        /**
         * Gets or sets the background image properties for a Chart
         */
        BackgroundImage?: BackgroundImage;
        /**
         * @ignore
         */
        LineHeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a NoRowsMessage is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "None" indicates that there is no text formatting
         * @value "Underline" indicates that the text is underlined
         * @value "Overline" indicates that the text has an overline
         * @value "LineThrough" indicates that the text has a strikethrough
         */
        TextDecoration?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that a Chart aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that a Chart aligns the text to the left
         * @value "Right" indicates that a Chart aligns the text to the right
         * @value "Center" indicates that a Chart centers the text
         * @value "Justify" indicates that a Chart stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the vertical alignment for the text within NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Top" indicates top-aligned text
         * @value "Middle" indicates vertically-centered text alignment
         * @value "Bottom" indicates bottom-aligned text
         */
        VerticalAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of a NoRowsMessage
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  whether text within a NoRowsMessage is written left-to-right or right-to-left.
         * The value or the expression result should be one of the following.
         * @value "LTR" indicates that text is written left-to-right.
         * @value "RTL" indicates that the text is written right-to-left.
         */
        Direction?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether the textual content within a NoRowsMessage is laid out horizontally or vertically as well as the direction in which text moves.
         * The value or the expression result should be one of the following.
         * @value "lr-tb" indicates that if the Direction is "LTR", textual content flows horizontally from left to right. For RTL direction, content moves horizontally from right to left. The following horizontal line resides below the previous line.
         * @value "tb-rl" indicates that id if the Direction is LTR, textual content flows vertically from top to bottom, and the following vertical line resides to the left of the previous line. For RTL direction, content flows vertically from bottom to top, and the following vertical line resides to the right of the previous line.
         */
        WritingMode?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating  the default language to use for dates and number formatting within a NoRowsMessage.
         */
        Language?: string;
        /**
         * @ignore
         */
        Calendar?: string;
        /**
         * @ignore
         */
        NumeralLanguage?: string;
        /**
         * @ignore
         */
        NumeralVariant?: string;
        /**
         * @ignore
         */
        UnicodeBiDi?: string;
        /**
         * @ignore
         */
        UprightInVerticalText?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a Chart and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a Chart and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a Chart and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a Chart and a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a NoRowsMessage
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text in a NoRowsMessage.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text in a NoRowsMessage.
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a Chart
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a Chart
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a Chart
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a Chart
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a Chart
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a Chart
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Chart is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Chart at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Chart for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Chart that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating the location of a page breaks generated by a Chart
     */
    PageBreak?: "None" | "Start" | "End" | "StartAndEnd" | "Between";
    NewPage?: "Next" | "Odd" | "Even";
    /**
     * Gets or sets a value indicating a collection of filters to be applied to the data for each row of a Chart
     */
    Filters?: Filter[];
    /**
     * @ignore
     */
    NewSection?: boolean;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text to render instead of the list layout when no rows of data are available for a Chart.
     */
    NoRowsMessage?: string;
    /**
     * Gets or sets the name of the dataset to use to bind data to a Chart.
     */
    DataSetName?: string;
    /**
     * @ignore
     */
    DataSetParameters?: {
        [x: string]: any;
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    PageName?: string;
    /**
     * Gets or sets a value indicating the properties for the header of a Chart.
     */
    Header?: DvChartHeaderFooter;
    /**
     * Gets or sets a value indicating the properties for the footer of a Chart.
     */
    Footer?: DvChartHeaderFooter;
    /**
     * Represents the dimensions and form of columns and bars for Bar and Column charts.
     */
    Bar?: {
        /**
         * Gets or sets a value indicating the size of a bottom or top part if columns or bars are split to two parts using the NeckHeight property.
         */
        BottomWidth?: number;
        /**
         * Gets or sets a value indicating the point that breaks down the containing column or bar into two parts that may have different width or height.
         */
        NeckHeight?: number;
        /**
         * Gets or sets a value indicating the gap between adjacent columns or bars relative to the containing category's size.
         */
        Overlap?: number;
        /**
         * Gets or sets a value indicating the size of a top or right part if columns or bars are split to two parts using the NeckHeight property.
         */
        TopWidth?: number;
        /**
         * Gets or sets a value indicating the column width or bar height relative to the size that the plot allocates for the containing category along the horizontal or vertical axis.
         */
        Width?: number;
    };
    /**
     * Gets or sets a value indicating the color palette of a Chart.
     */
    Palette?: DvChartPalette;
    /**
     * Gets or sets a value indicating the colors for a custom color palette.
     * The array items should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    CustomPalette?: string[];
    /**
     * Gets or sets a value indicating the properties for the global legend of a Chart.
     */
    Legend?: DvChartGlobalLegend;
    /**
     * Gets or sets a value indicating the properties for the plot area of a Chart.
     */
    PlotArea?: DvChartPlotArea;
    /**
     * Gets or sets a value indicating a collection of chart plots.
     */
    Plots?: DvChartPlot[];
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Chart from the left of the chart's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Chart from the top of the chart's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Chart
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Chart
     */
    Height?: string;
};
/**
 * Represents the properties for the global legend of a chart.
 */
export declare type DvChartGlobalLegend = {
    /**
     * @ignore
     */
    Wrapping?: boolean;
    /**
     * Gets or sets a value indicating whether the global legend of a chart is hidden.
     */
    Hidden?: boolean;
    /**
     * Gets or sets a value indicating the arrangement of labels in the global legend of a chart.
     */
    Orientation?: "Horizontal" | "Vertical";
    /**
     * Gets or sets a value indicating the position of the global legend of a chart relative to the sides and corners of the plot area.
     */
    Position?: "Left" | "Right" | "Top" | "Bottom";
    /**
     * Represents style information for the global legend of a Chart.
     */
    Style?: {
        /**
         * Gets or sets the border properties for the global legend of a chart.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of the global legend in a chart.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of the global legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of the global legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of the global legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of the global legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
    };
    /**
     * Gets or sets a value indicating the appearance of labels in the global legend of a chart.
     */
    TextStyle?: DvChartTextStyle;
    /**
     * Gets or sets a value indicating the appearance of the title of the global legend of a chart.
     */
    TitleStyle?: DvChartTextStyle;
};
/**
 * Represents properties for the plot of a chart.
 */
export declare type DvChartPlot = {
    /**
     * @ignore
     */
    PlotType?: "Bar" | "Line" | "Area" | "Scatter" | "HighLowOpenClose" | "Candlestick";
    /**
     * Gets or sets a unique identifier for a plot of a chart.
     */
    PlotName?: string;
    /**
     * Gets or sets a value indicating the graphical representation of the data for a plot of a chart.
     */
    Encodings?: DvChartEncodings;
    /**
     * Gets or sets a value indicating the configuration for a plot of a chart.
     */
    Config?: DvChartPlotConfig;
    /**
     * Gets or sets a value indicating the type for a plot of a chart.
     */
    PlotChartType?: "Custom" | "Bar" | "Line" | "Area" | "Scatter" | "HighLowOpenClose" | "Candlestick" | "Column" | "Pie" | "Pyramid" | "Funnel" | "Bubble" | "Gantt" | "HighLowClose" | "PolarColumn" | "PolarBar" | "RadarArea" | "RadarBubble" | "RadarScatter" | "RadarLine";
    /**
     * Gets or sets a value indicating the sub-type for a plot of a chart.
     */
    PlotChartSubtype?: "Plain" | "Clustered" | "Stacked";
};
/**
 * Represents the graphical representation of the data for a plot of a chart.
 */
export declare type DvChartEncodings = {
    /**
     * Gets or sets a value indicating the data values for a plot of a chart.
     */
    Values?: DvChartValueAggregateEncoding[];
    /**
     * Gets or sets a value indicating the categories for a plot of a chart.
     */
    Category?: DvChartCategoryEncoding;
    /**
     * Gets or sets a value indicating the category details for a plot of a chart.
     */
    Details?: DvChartDetailEncoding[];
    /**
     * Gets or sets a value indicating the color encoding for a plot of a chart.
     */
    Color?: DvChartAggregateEncoding;
    /**
     * Gets or sets a value indicating the shape encoding for a plot of a chart.
     */
    Shape?: DvChartAggregateEncoding;
    /**
     * Gets or sets a value indicating the size encoding for a plot of a chart.
     */
    Size?: DvChartAggregateEncoding;
    Texts?: {
        Field?: {
            FieldType?: "Simple";
            Value?: string[];
            Captions?: string[];
        };
        Target?: "ToolTip" | "Label";
        Aggregate?: DvChartAggregate;
    }[];
};
/**
 * Represents the properties for an encoding of a plot of a chart.
 */
export declare type DvChartAggregateEncoding = {
    /**
     * Represents an encoding value
     */
    Field?: {
        /**
         * @ignore
         */
        FieldType?: "Simple";
        /**
         * Gets or sets a value indicating a collection of encoding [expressions](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression)
         */
        Value?: string[];
        Captions?: string[];
    };
    /**
     * Gets or sets a value indicating the aggregate function that applies to the encoding values.
     */
    Aggregate?: DvChartAggregate;
};
/**
 * Represents properties of the categories for a plot of a chart.
 */
export declare type DvChartCategoryEncoding = {
    /**
     * Represents categories value.
     */
    Field?: {
        /**
         * @ignore
         */
        FieldType?: "Simple";
        /**
         * Gets or sets a value indicating a collection of categories [expressions](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression)
         */
        Value?: string[];
        Captions?: string[];
    };
    /**
     * Gets or sets a value indicating the sort order of categories appearance.
     */
    Sort?: "None" | "Ascending" | "Descending";
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the order of categories appearance.
     */
    SortingField?: string;
    /**
     * Gets or sets a value indicating the aggregate function that applies to the SortingField values.
     */
    SortingAggregate?: DvChartAggregate;
};
/**
 * Represents the properties for data values of a plot of a chart.
 */
export declare type DvChartValueAggregateEncoding = {
    /**
     * Represents an encoding value
     */
    Field?: {
        FieldType?: "Complex";
        Subfields?: {
            Key?: string;
            Value?: string;
            Caption?: string;
        }[];
    } | {
        /**
         * @ignore
         */
        FieldType?: "Simple";
        /**
         * Gets or sets a value indicating a collection of data values [expressions](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression)
         */
        Value?: string[];
        Captions?: string[];
    };
    /**
     * Gets or sets a value indicating the aggregate function that applies to the encoding values.
     */
    Aggregate?: DvChartAggregate;
};
/**
 * Represents the properties for category details of a plot of a chart.
 */
export declare type DvChartDetailEncoding = {
    /**
     * Represents an encoding value
     */
    Field?: {
        /**
         * @ignore
         */
        FieldType?: "Simple";
        /**
         * Gets or sets a value indicating a collection of category details [expressions](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression)
         */
        Value?: string[];
        Captions?: string[];
    };
    /**
     * Gets or sets a value indicating the arrangement of details within the parent category.
     */
    Group?: "None" | "Cluster" | "Stack";
    /**
     * Gets or sets a value indicating whether the details encoding should exclude null values.
     */
    ExcludeNulls?: boolean;
    /**
     * Gets or sets a value indicating the sort order of details appearance within the parent category.
     */
    Sort?: "None" | "Ascending" | "Descending";
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the order of details appearance within the parent category.
     */
    SortingField?: string;
    /**
     * Gets or sets a value indicating the aggregate function that applies to the SortingField values.
     */
    SortingAggregate?: DvChartAggregate;
};
/**
 * Represents the function that reduces many values into a single value.
 */
export declare type DvChartAggregate = "None" | "Average" | "Count" | "CountOfAll" | "List" | "Max" | "Min" | "PopulationStandardDeviation" | "PopulationVariance" | "Range" | "StandardDeviation" | "Sum" | "Variance";
/**
 * Represents the configuration for a plot of a chart.
 */
export declare type DvChartPlotConfig = {
    /**
     * Gets or sets an action (such as a hyperlink) associated with a plot of a chart.
     */
    Action?: Action;
    /**
     * Gets or sets a value indicating the type of axes for a plot of a chart.
     * @value "Radial" is applicable for "Pie", "PolarColumn", "PolarBar" plots.
     * @value "Cartesian" is applicable for "Bar", "Line", "Area", "Scatter", "HighLowOpenClose", "Candlestick","Column", "Pyramid", "Funnel", "Bubble", "Gantt", "HighLowClose" plots.
     * @value "Polygonal" is applicable for "RadarArea", "RadarBubble", "RadarScatter", "RadarLine" plots.
     */
    AxisMode?: "Cartesian" | "Radial" | "Polygonal";
    /**
     * @ignore
     */
    Bar?: {
        BottomWidth?: number;
        NeckHeight?: number;
        Overlap?: number;
        TopWidth?: number;
        Width?: number;
    };
    /**
     * Gets or sets a value indicating whether to display the connecting lines between plot parts that belong to the same category or details.
     */
    BarLines?: boolean;
    BarLineStyle?: BorderStyle;
    /**
     * Gets or sets a value indicating the manner that the plot area draws a plot that does not fit.
     * @value "None" equals to "Fit"
     * @value "Clip" indicates that the plot area cuts off a plot on the edge of its right or bottom padding
     * @value "Fit" indicates that the plot area should use all the available space to fit a plot
     */
    ClippingMode?: "None" | "Clip" | "Fit";
    /**
     * Gets or sets a value in percentage of the outer radius indicating the size of a hole in the center of the disk for "Pie", "PolarColumn", and "PolarBar" plots.
     */
    InnerRadius?: number;
    /**
     * Gets or sets a value indicating the style of the line that connects data points for "Line" and "Area" plots.
     * @value "Default" indicates the straight line
     * @value "Spline" indicates the bezier curve
     * @value "StepCenter" indicates the stepped line
     * @value "StepLeft" indicates the stepped line
     * @value "StepRight" indicates the stepped line
     */
    LineAspect?: "Default" | "Spline" | "StepCenter" | "StepLeft" | "StepRight";
    /**
     * Gets or sets a value indicating the properties of the line connecting data points for "Line" and "Area" plots, or the properties of the border of geometrical shapes for other plots.
     */
    LineStyle?: BorderStyle;
    /**
     * Gets or sets a value in percentage that translates geometrical shapes of a plot.
     */
    Offset?: number;
    /**
     * Gets or sets a value in percentage indicating the opacity of geometrical shapes of a plot.
     */
    Opacity?: number;
    Overlays?: DVOverlay[];
    /**
     * Gets or sets a value indicating whether a plot has radial shape.
     */
    Radial?: boolean;
    /**
     * Gets or sets a value indicating the arrangement of data points for Null values.
     * @value "Gaps" indicates that the plot will prevent connection between a null data point and its previous and next points
     * @value "Zero" indicates that null data points will be considered to have 0 value
     * @value "Connected" indicates that the plot will connect the previous and the next points of a null point
     */
    ShowNulls?: "Gaps" | "Connected" | "Zeros";
    /**
     * Gets or sets a value in arcdegree indicating the rotation of a "Pie", "PolarColumn", or "PolarBar" plot clockwise.
     */
    StartAngle?: number;
    /**
     * Represents the style of geometrical shapes of a plot.
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of geometrical shapes of a plot in a chart.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
    };
    /**
     * @ignore
     */
    SwapAxes?: boolean;
    /**
     * Gets or sets a value in arcdegree from 0 to 360 that determines the arc length occupied by a "Pie", "PolarColumn", or "PolarBar" plot.
     */
    Sweep?: number;
    /**
     * Gets or sets a value in percentage indicating the opacity of symbols in a "Line" or "Area" plot.
     */
    SymbolOpacity?: number;
    /**
     * Gets or sets a value indicating whether a "Line" or "Area" plot displays symbols.
     */
    Symbols?: boolean;
    /**
     * Gets or sets a value indicating the symbols shape for a "Line" or "Area" plot.
     */
    SymbolShape?: "Auto" | "X" | "Dot" | "Box" | "Diamond" | "Triangle" | "Dash" | "Plus";
    /**
     * Represents the style of symbols for a "Line" or "Area" plot.
     */
    SymbolStyle?: {
        /**
         * Gets or sets the border properties for symbols in a "Line" or "Area" plot.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of the symbols in a "Line" or "Area" plots.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
    };
    /**
     * Represents properties for labels of a plot of a chart.
     */
    Text?: {
        /**
         * Represents properties of connecting lines between labels and respective parts of a plot.
         */
        ConnectingLine?: {
            /**
             * Gets or sets the line properties for connecting lines.
             */
            Border?: BorderStyle;
        };
        /**
         * Gets or sets a value indicating the starting point of the connecting line relative to the respective part of a plot.
         */
        LinePosition?: "Auto" | "Center";
        /**
         * Gets or sets a value indicating the offset of labels relative to the respective part of a plot
         */
        Offset?: number;
        /**
         * Gets or sets a value indicating the handling of overlapping labels.
         * @value "Auto" hides some labels to prevent the overlapping
         * @value "Show" shows all labels even if the overlapping persists
         */
        OverlappingLabels?: "Auto" | "Show";
        /**
         * Gets or sets a value indicating the position of  labels relative to the respective part of a plot
         */
        TextPosition?: "Auto" | "Center" | "Inside" | "Outside";
        /**
         * Gets or sets a value indicating the contents of a label.
         */
        Template?: string;
        /**
         * Represents the style for labels of a plot of a chart.
         */
        Style?: {
            /**
             * Gets or sets the  border properties for labels of a plot of a chart.
             */
            Border?: BorderStyle;
            /**
             * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background for labels of a plot of a chart.
             */
            BackgroundColor?: string;
            /**
             * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting for labels of a plot of a chart.
             * The value or the expression result should be one of the following.
             * @value "None" indicates that there is no text formatting
             * @value "Underline" indicates that the text is underlined
             * @value "Overline" indicates that the text has an overline
             * @value "LineThrough" indicates that the text has a strikethrough
             */
            TextDecoration?: string;
            /**
             * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color for labels of a plot of a chart.
             * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
             */
            Color?: string;
            /**
             * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for labels of a plot of a chart.
             * The value or the expression result should be one of the following.
             * @value "Normal" indicates that the font is not italicized.
             * @value "Italic" indicates that that the font is italicized.
             */
            FontStyle?: string;
            /**
             * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for labels of a plot of a chart.
             */
            FontFamily?: string;
            /**
             * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for labels of a plot of a chart.
             * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
             */
            FontSize?: string;
            /**
             * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for labels of a plot of a chart.
             * The value or the expression result should be one of the following.
             * @value "Thin" indicates a font thickness that matches CSS font weight 100
             * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
             * @value "Light" indicates a font thickness that matches CSS font weight 300
             * @value "Normal" indicates a font thickness that matches CSS font weight 400
             * @value "Medium" indicates a font thickness that matches CSS font weight 500
             * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
             * @value "Bold" indicates a font thickness that matches CSS font weight 700
             * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
             * @value "Heavy" indicates a font thickness that matches CSS font weight 900
             */
            FontWeight?: string;
        };
    };
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a part of a plot.
     */
    Tooltip?: {
        Template?: string;
    };
    /**
     * Gets or sets a value indicating the additional rules of plot appearance.
     */
    Rules?: DvChartRule[];
    UnpivotData?: boolean;
};
/**
 * Represents the additional rules of plot appearance.
 */
export declare type DvChartRule = {
    Name?: string;
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that should evaluate to a boolean value indicating whether the rule should be applied.
     */
    Condition?: string;
    /**
     * Represents the effect of a rule.
     */
    RuleProperties?: {
        /**
         * Gets or sets a value indicating a property of a plot's geometrical shape that the rule should be applied to.
         */
        TargetProperty?: "BackgroundColor" | "LineWidth" | "LineStyle" | "LineColor" | "SymbolBackgroundColor" | "SymbolLineColor" | "SymbolLineStyle" | "SymbolLineWidth" | "LabelTemplate" | "TooltipTemplate";
        /**
         * Gets or sets a value that the TargetProperty should be set to.
         */
        Value?: string;
    }[];
};
/**
 * Represents properties of the plot area of a chart.
 */
export declare type DvChartPlotArea = {
    /**
     * Gets or sets a value indicating a collection of axes within the plot area of a chart.
     */
    Axes?: DvChartAxis[];
    /**
     * Gets or sets a value indicating a collection of legends within the plot area of a chart.
     */
    Legends?: DvChartLegendOption[];
    /**
     * Represents style information for the plot area of a chart.
     */
    Style?: {
        /**
         * Gets or sets the border properties for the plot area a Chart.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of the plot area of a chart.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of the plot area and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of the plot area and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of the plot area and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of the plot area and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
    };
};
/**
 * Represents properties for a Color, Shape or Size Legend of a plot of a chart.
 */
export declare type DvChartLegendOption = {
    /**
     * Gets or sets a value in percentage relative to the plot area height indicating the maximum height of a legend.
     */
    MaxHeight?: number;
    /**
     * Gets or sets a value in percentage relative to the plot area height indicating the maximum width of a legend.
     */
    MaxWidth?: number;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the title of a legend.
     */
    Title?: string;
    /**
     * Gets or sets a value indicating the type of a legend.
     */
    LegendType?: "Color" | "Shape" | "Size";
    /**
     * @ignore
     */
    IconColor?: string;
    /**
     * Represents  custom ranges and titles for a size legend of a Chart.
     */
    RangeOptions?: {
        Title?: string;
        To?: number;
    }[];
    /**
     * Gets or sets a value indicating whether a legend of a chart is hidden.
     */
    Hidden?: boolean;
    /**
     * Gets or sets a value indicating the arrangement of labels in a legend of a chart.
     */
    Orientation?: "Horizontal" | "Vertical";
    /**
     * Gets or sets a value indicating the position of a legend of a chart relative to the sides and corners of the plot area.
     */
    Position?: "Left" | "Right" | "Top" | "Bottom";
    /**
     * Represents style information for a legend of a Chart.
     */
    Style?: {
        /**
         * Gets or sets the border properties for a global legend of a chart.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a legend in a chart.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a legend of a chart and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
    };
    /**
     * Gets or sets a value indicating the appearance of labels in a legend of a chart.
     */
    TextStyle?: DvChartTextStyle;
    /**
     * Gets or sets a value indicating the appearance of the title of a legend of a chart.
     */
    TitleStyle?: DvChartTextStyle;
};
/**
 * Represents properties of an axis of a chart.
 */
export declare type DvChartAxis = {
    /**
     * Gets or sets a value indicating whether the axis line is displayed.
     */
    AxisLine?: boolean;
    /**
     * Gets or sets a value indicating the type of axis
     * @value "X" indicates an axis that handles categorical values
     * @value "Y" indicates an axis that handles data values
     */
    AxisType?: "X" | "Y";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a NoRowsMessage is formatted.
     * Supported formats are
     * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
     * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
     * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
     * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
     */
    Format?: string;
    /**
     * Gets or sets a value from -90 to 90 indicating the labels' rotation in degrees relative to the axis line.
     */
    LabelAngle?: number;
    LabelField?: string;
    /**
     * Gets or sets a value indicating whether axis labels are displayed.
     */
    Labels?: boolean;
    /**
     * Gets or sets a value indicating visual appearance of labels
     */
    LabelStyle?: DvChartAxisLabelStyle;
    /**
     * Represents style information for an axis line
     */
    LineStyle?: {
        /**
         * Gets or sets a value indicating the axis line properties.
         */
        Border?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating logarithm base for an axis with Logarithmic scale.
     */
    LogBase?: number;
    /**
     * Gets or sets a value indicating whether the major grid lines are displayed.
     */
    MajorGrid?: boolean;
    /**
     * Represents style information for the major grid lines of an axis.
     */
    MajorGridStyle?: {
        /**
         * Gets or sets a value indicating the major grid lines properties.
         */
        Border?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the position of major ticks relative to the axis line.
     */
    MajorTicks?: "None" | "Inside" | "Outside" | "Cross";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the size of the major ticks.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    MajorTickSize?: string;
    /**
     * Represents style information for the major ticks of an axis.
     */
    MajorTickStyle?: {
        /**
         * Gets or sets a value indicating the major ticks properties.
         */
        Border?: BorderStyle;
    };
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the interval between major grid lines.
     * The value or the expression result should be a number.
     */
    MajorUnit?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the lower bound of the range of values that an axis can handle.
     */
    Max?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the upper bound of the range of values that an axis can handle.
     */
    Min?: string;
    /**
     * Gets or sets a value indicating whether the minor grid lines are displayed.
     */
    MinorGrid?: boolean;
    /**
     * Represents style information for the minor grid lines of an axis.
     */
    MinorGridStyle?: {
        /**
         * Gets or sets a value indicating the minor grid lines properties.
         */
        Border?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the position of minor ticks relative to the axis line.
     */
    MinorTicks?: "None" | "Inside" | "Outside" | "Cross";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the size of the minor ticks.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    MinorTickSize?: string;
    /**
     * Represents style information for the minor ticks of an axis.
     */
    MinorTickStyle?: {
        Border?: BorderStyle;
    };
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the interval between minor grid lines.
     * The value or the expression result should be a number.
     */
    MinorUnit?: string;
    /**
     * Gets or sets a value of an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating an axis's location relative to the orthogonal axis.
     */
    Origin?: string;
    /**
     * Gets or sets a value indicating the appearance of overlapping axis labels.
     * @value "Auto" hides some labels to prevent the overlapping
     * @value "Show" shows all labels even if the overlapping persists
     */
    OverlappingLabels?: "Auto" | "Show";
    /**
     * Gets or sets a value indicating a collection of plots for which an axis provides the coordinate system
     */
    Plots?: string[];
    /**
     * Gets or sets a value indicating the position of an axis relative to the containing plot area.
     */
    Position?: "None" | "Near" | "Far";
    /**
     * Gets or sets a value indicating whether the default direction of a vertical axis should be set to Top-to-Bottom, and the default direction of a horizontal axis should be set to Right-To-Left.
     */
    Reversed?: boolean;
    /**
     * Gets or sets a value indicating the axis type.
     * @value "Linear" scale evenly distributes the range of available values along the axis.
     * @value "Logarithmic" scale uses the logarithm of values instead of the values themselves.
     * @value "Ordinal" applies to non-numerical values which evenly distribute along the axis as per their order.
     * @value "Percentage" scale used for Percentage Stacked plots.
     */
    Scale?: "Linear" | "Logarithmic" | "Ordinal" | "Percentage";
    /**
     * @ignore
     */
    Style?: {
        Border?: BorderStyle;
    };
    /**
     * @ignore
     */
    TextStyle?: DvChartAxisTextStyle;
    /**
     * Gets or sets a value of an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the title of an axis.
     */
    Title?: string;
    /**
     * Gets or sets a value indicating visual appearance of the title of an axis.
     */
    TitleStyle?: DvChartAxisTextStyle;
    MaxHeight?: number;
    MaxWidth?: number;
    Width?: number;
    Height?: number;
};
/**
 * Represents properties for the header or footer of a chart.
 */
export declare type DvChartHeaderFooter = {
    /**
     * Represents style information for the header or footer of a chart.
     */
    Style?: {
        /**
         * Gets or sets a value indicating the border properties for the header or footer of a chart.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of the header of footer of a chart.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of the chart's header or footer and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of the chart's header or footer and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of the chart's header or footer and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of the chart's header or footer and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
    };
    /**
     * Gets or sets a value indicating the appearance of text within the header or footer of a chart.
     */
    TextStyle?: DvChartTextStyle;
    /**
     * Gets or sets a value of an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed in the header or footer of a chart.
     */
    Title?: string;
    /**
     * Gets or sets a value in the percentage of the containing chart's height indicating the height of the header of footer of a chart.
     */
    Height?: string | number;
    /**
     * Gets or sets a value indicating the horizontal alignment for the text within the header or footer of a chart.
     */
    HAlign?: "Center" | "Left" | "Right";
    /**
     * Gets or sets a value indicating the vertical alignment for the text within the header or footer of a chart.
     */
    VAlign?: "Top" | "Middle" | "Bottom";
};
/**
 * Represents the color paletter of a chart.
 */
export declare type DvChartPalette = "Light" | "Office" | "Aspect" | "Blue" | "Blue2" | "BlueGreen" | "BlueWarm" | "Cerulan" | "Cocoa" | "Coral" | "Cyborg" | "Dark" | "Darkly" | "Flatly" | "Grayscale" | "Green" | "GreenYellow" | "HighContrast" | "Marquee" | "Median" | "Midnight" | "Modern" | "Office2010" | "Orange" | "OrangeRed" | "Organic" | "Paper" | "Red" | "RedOrange" | "RedViolet" | "Slate" | "Slipstream" | "Standard" | "Superhero" | "Violet" | "Violet2" | "Yellow" | "YellowOrange" | "Zen" | "Custom";
export declare type DvChartAxisTextStyle = {
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    PaddingLeft?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    PaddingRight?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    PaddingTop?: string;
    PaddingBottom?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting.
     * The value or the expression result should be one of the following.
     * @value "None" indicates that there is no text formatting
     * @value "Underline" indicates that the text is underlined
     * @value "Overline" indicates that the text has an overline
     * @value "LineThrough" indicates that the text has a strikethrough
     */
    TextDecoration?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of text.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    Color?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text.
     * The value or the expression result should be one of the following.
     * @value "Normal" indicates that the font is not italicized.
     * @value "Italic" indicates that that the font is italicized.
     */
    FontStyle?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text.
     */
    FontFamily?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    FontSize?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text.
     * The value or the expression result should be one of the following.
     * @value "Thin" indicates a font thickness that matches CSS font weight 100
     * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
     * @value "Light" indicates a font thickness that matches CSS font weight 300
     * @value "Normal" indicates a font thickness that matches CSS font weight 400
     * @value "Medium" indicates a font thickness that matches CSS font weight 500
     * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
     * @value "Bold" indicates a font thickness that matches CSS font weight 700
     * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
     * @value "Heavy" indicates a font thickness that matches CSS font weight 900
     */
    FontWeight?: string;
};
/**
 * Represets style information for textual elements of a chart.
 */
export declare type DvChartTextStyle = {
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting.
     * The value or the expression result should be one of the following.
     * @value "None" indicates that there is no text formatting
     * @value "Underline" indicates that the text is underlined
     * @value "Overline" indicates that the text has an overline
     * @value "LineThrough" indicates that the text has a strikethrough
     */
    TextDecoration?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of text.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    Color?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text.
     * The value or the expression result should be one of the following.
     * @value "Normal" indicates that the font is not italicized.
     * @value "Italic" indicates that that the font is italicized.
     */
    FontStyle?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text.
     */
    FontFamily?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    FontSize?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text.
     * The value or the expression result should be one of the following.
     * @value "Thin" indicates a font thickness that matches CSS font weight 100
     * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
     * @value "Light" indicates a font thickness that matches CSS font weight 300
     * @value "Normal" indicates a font thickness that matches CSS font weight 400
     * @value "Medium" indicates a font thickness that matches CSS font weight 500
     * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
     * @value "Bold" indicates a font thickness that matches CSS font weight 700
     * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
     * @value "Heavy" indicates a font thickness that matches CSS font weight 900
     */
    FontWeight?: string;
};
/**
 * Represets extended style information for textual elements of a chart.
 */
export declare type DvChartAxisLabelStyle = {
    WritingMode?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    PaddingLeft?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    PaddingRight?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    PaddingTop?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of text area and its contents.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    PaddingBottom?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating text formatting.
     * The value or the expression result should be one of the following.
     * @value "None" indicates that there is no text formatting
     * @value "Underline" indicates that the text is underlined
     * @value "Overline" indicates that the text has an overline
     * @value "LineThrough" indicates that the text has a strikethrough
     */
    TextDecoration?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of text.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    Color?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text.
     * The value or the expression result should be one of the following.
     * @value "Normal" indicates that the font is not italicized.
     * @value "Italic" indicates that that the font is italicized.
     */
    FontStyle?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text.
     */
    FontFamily?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    FontSize?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text.
     * The value or the expression result should be one of the following.
     * @value "Thin" indicates a font thickness that matches CSS font weight 100
     * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
     * @value "Light" indicates a font thickness that matches CSS font weight 300
     * @value "Normal" indicates a font thickness that matches CSS font weight 400
     * @value "Medium" indicates a font thickness that matches CSS font weight 500
     * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
     * @value "Bold" indicates a font thickness that matches CSS font weight 700
     * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
     * @value "Heavy" indicates a font thickness that matches CSS font weight 900
     */
    FontWeight?: string;
};
export declare type DVOverlay = {
    Name?: string;
    OverlayType?: DVOverlayType;
    Display?: "Front" | "Back";
    Style?: {
        Border?: BorderStyle;
        BackgroundColor?: string;
    };
    Field?: string;
    DetailLevel?: "Group" | "Total";
    LegendLabel?: string;
    Value?: string;
    Axis?: "X" | "Y";
    AggregateType?: DVOverlayAggregateType;
    Start?: number;
    End?: number;
    Order?: number;
    Period?: number;
    ForwardForecastPeriod?: number;
    BackwardForecastPeriod?: number;
    Intercept?: number;
};
export declare type DVOverlayType = "ReferenceLine" | "ReferenceBand" | "LinearTrendline" | "ExponentialTrendline" | "PowerTrendline" | "LogarithmicTrendline" | "PolynomialTrendline" | "FourierTrendline" | "MovingAverageTrendline" | "CumulativeMovingAverageTrendline" | "ExponentialMovingAverageTrendline" | "WeightedMovingAverageTrendline" | "MovingAnnualTotalTrendline";
export declare type DVOverlayAggregateType = "Median" | "Average" | "Count" | "Max" | "Min" | "Sum" | "Percentile";
/**
 * Represents properties for an [Image](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Visualizers/Image/index) in a Report.
 */
export declare type Image = {
    /**
     * Gets or sets a unique identifier for an image
     */
    Name: string;
    /**
     * Gets or sets a value indicating location or the actual data of an image, depending on the value of the Source property.
     */
    Value?: string;
    /**
     * Should be set to "image"
     */
    Type: "image";
    /**
     * Gets or sets an action (such as hyperlinks) that is associated with an Image.
     */
    Action?: Action;
    /**
     * Represents style information for an Image.
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of an Image and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of an Image and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of an Image and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of an Image and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets the default border properties for an Image
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for an Image
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for an Image
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for an Image
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for an Image
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of an Image
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether an Image is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over an Image at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of an Image for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with an Image that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets the type of source for an Image
     * @value "External" indicates that the Value property must contain a string constant or an expression that evaluates to the location of an image.
     * @value "Embedded" indicates that the Value property must contain a string constant or an expression that evaluates to the name of an embedded image in the report.
     * @value "Database" indicates that the Value property contain an expression (such as a field in the database) that evaluates to the binary data for an image.
     */
    Source?: "External" | "Embedded" | "Database";
    /**
     * Get or sets the image format of an Image.
     * Supported values are "image/jpeg", "image/gif", "image/png", and "image/svg+xml".
     */
    MIMEType?: string;
    /**
     * Gets or sets a value indicating the behavior of an Image if the actual image does not fit within the specified size of the image.
     * @value "AutoSize" indicates that the border of the image will grow or shrink to accommodate the dimensions of the actual image.
     * @value "Fit" indicates that the actual image is resized to exactly match both the Height and Width dimensions of an Image report item.
     * @value "FitProportional" indicates that the actual image is resized to fit within the image dimensions, while preserving the aspect ratio.
     * @value "Clip" indicates that the actual image is clipped to fit the dimensions of the image report item.
     */
    Sizing?: "Clip" | "Fit" | "AutoSize" | "FitProportional";
    /**
     * Gets or sets a value or [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for the actual image within an Image report item.
     * The value or the expression result should be one of the following.
     * @value "Left" indicates that an Image aligns the actual image to the left
     * @value "Center" indicates that an Image centers the actual image
     * @value "Right" indicates that an Image aligns the actual image to the right
     */
    HorizontalAlignment?: string;
    /**
     * Gets or sets a value or [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the vertical alignment for the actual image within an Image report item.
     * The value or the expression result should be one of the following.
     * @value "Top" indicates top-aligned image
     * @value "Middle" indicates vertically-centered image alignment
     * @value "Bottom" indicates bottom-aligned image
     */
    VerticalAlignment?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Image from the left of the image's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Image from the top of the image's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of an Image
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of an Image
     */
    Height?: string;
};
/**
 * Represents properties for a [Bullet chart](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Regions/BulletChart/index) in a report
 */
export declare type Bullet = {
    /**
     * Gets or sets a unique identifier for a Bullet chart
     */
    Name: string;
    Value?: string;
    /**
     * Should be set to "bullet"
     */
    Type: "bullet";
    /**
     * Gets or sets a value indicating the stack order of a Bullet chart
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Bullet chart is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Bullet chart at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Bullet chart for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Bullet chart that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value in a Bullet chart label is formatted.
     * Supported formats are
     * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
     * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
     * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
     * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
     */
    LabelFormat?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for Bullet chart labels.
     */
    LabelFontFamily?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for Bullet chart labels.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    LabelFontSize?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for Bullet chart labels.
     * The value or the expression result should be one of the following.
     * @value "Normal" indicates that the font is not italicized.
     * @value "Italic" indicates that that the font is italicized.
     */
    LabelFontStyle?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of Bullet chart labels.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    LabelFontColor?: string;
    /**
     * Gets or sets a value indicating the orientation of a Bullet chart.
     */
    Orientation?: "Horizontal" | "Vertical";
    /**
     * Gets or sets a value indicating whether labels of Bullet chart are displayed.
     */
    ShowLabels?: boolean;
    /**
     * Gets or sets a value indicating the shape of the target value graphical representation.
     */
    TargetShape?: "Line" | "Dot" | "Square";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground of the target value's graphical representation.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    TargetLineColor?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the border thickness of the target value's graphical representation.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    TargetLineWidth?: string;
    /**
     * Gets or sets a value indicating the position of tick marks relative to an axis of a Bullet chart.
     */
    TickMarks?: "None" | "Inside" | "Outside";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground of tick marks of a Bullet chart.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    TicksLineColor?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the border thickness of tick marks of a Bullet chart.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    TicksLineWidth?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground of the actual value's graphical representation.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    ValueColor?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the upper value of a Bullet chart.
     */
    BestValue?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the interval between tick marks of a Bullet chart.
     */
    Interval?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the first range of values in a Bullet chart.
     */
    Range1Boundary?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the second range of values in a Bullet chart.
     */
    Range2Boundary?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the target value of a Bullet chart.
     */
    TargetValue?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the lower value of a Bullet chart.
     */
    WorstValue?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Bullet chart from the left of the chart's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Bullet chart from the top of the chart's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Bullet chart.
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Bullet chart.
     */
    Height?: string;
};
/**
 * @ignore
 */
export declare type FormattedText = {
    Name: string;
    Type: "formattedtext";
    Style?: {
        BackgroundColor?: string;
        BackgroundImage?: BackgroundImage;
        Border?: BorderStyle;
        TopBorder?: BorderStyle;
        RightBorder?: BorderStyle;
        BottomBorder?: BorderStyle;
        LeftBorder?: BorderStyle;
    };
    ZIndex?: number;
    Visibility?: Visibility;
    ToolTip?: string;
    Bookmark?: string;
    DataElementName?: string;
    DataElementOutput?: DataElementOutput;
    Label?: string;
    LayerName?: string;
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    EncodeMailMergeFields?: boolean;
    Html?: string;
    MailMergeFields?: {
        Name?: string;
        Value?: string;
    }[];
    Left?: string;
    Top?: string;
    Width?: string;
    Height?: string;
};
/**
 * Represents the input control for fillable PDF forms.
 */
export declare type InputField = InputFieldText | InputFieldCheckbox;
/**
 * Represents properties for a text [Input Field](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Supplemental-Report-Items/InputField/index)
 */
export declare type InputFieldText = {
    /**
     * Gets or sets a unique identifier for an Input Field
     */
    Name: string;
    /**
     * Should be set to "inputfield"
     */
    Type: "inputfield";
    /**
     * Gets or sets a value indicating the stack order of an Input Field
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether an Input Field is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over an Input Field at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of an Input Field for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with an Input Field that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets the name of an Input Field in the fillable PDF form
     */
    FieldName?: string;
    /**
     * Gets or sets a value indicating whether a PDF document reader is allowed to modify the field's value.
     */
    Readonly?: boolean;
    /**
     * Gets or sets a value indicating whether a PDF document reader must provide the field's value.
     */
    Required?: boolean;
    /**
     * Gets or sets a value indicating whether the fillable PDF form displays the field's value as a series of asterisks.
     */
    Password?: boolean;
    /**
     * Gets or sets a value indicating whether a multi-line value for a field is accepted.
     */
    Multiline?: boolean;
    /**
     * Gets or sets a value indicating whether the field's value is handled by spell-check.
     */
    SpellCheck?: boolean;
    /**
     * Gets or sets a value indicating the maximum allowed length of the field's value.
     */
    MaxLength?: number;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the initial field's value.
     */
    Value?: string;
    /**
     * Represents style information for an Input Field.
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a field in the fillable PDF form
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating a formatting code that is used when the numeric value of a field in the fillable PDF form is formatted.
         * Supported formats are
         * - [Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
         * - [Custom Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
         * - [Standard Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
         * - [Custom Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
         */
        Format?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for text within a field in the fillable PDF form.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that an input field aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that an input field aligns the text to the left
         * @value "Right" indicates that an input field aligns the text to the right
         * @value "Center" indicates that an input field centers the text
         * @value "Justify" indicates that an input field stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of text within a field in the fillable PDF form.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text within a field in the fillable PDF form.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a field in the fillable PDF form.
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text within a field in the fillable PDF form.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a field in the fillable PDF form.
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for an Input Field.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for an Input Field.
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for an Input Field.
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for an Input Field.
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for an Input Field.
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Input Field from the left of the field's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Input Field from the top of the field's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of an Input Field.
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of an Input Field.
     */
    Height?: string;
};
/**
 * Represents properties for a checkbox [Input Field](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Supplemental-Report-Items/InputField/index)
 */
export declare type InputFieldCheckbox = {
    /**
     * Gets or sets a unique identifier for an Input Field
     */
    Name: string;
    /**
     * Should be set to "inputfield"
     */
    Type: "inputfield";
    /**
     * Gets or sets a value indicating the stack order of an Input Field
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether an Input Field is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over an Input Field at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of an Input Field for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with an Input Field that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets the name of a field in the fillable PDF form
     */
    FieldName?: string;
    /**
     * Gets or sets a value indicating whether a PDF document reader is allowed to modify the field's value.
     */
    Readonly?: boolean;
    /**
     * Gets or sets a value indicating whether a PDF document reader must provide the field's value.
     */
    Required?: boolean;
    /**
     * @ignore
     */
    InputType?: "CheckBox";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating whether a Checkbox Input Field is initially checked.
     */
    Checked?: string;
    /**
     * Gets or sets a value indicating the style of the check mark for a CheckBox Input Field.
     */
    CheckStyle?: "Cross" | "Diamond" | "Square" | "Check" | "Circle" | "Star";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the size of the check mark for a Checkbox Input Field.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    CheckSize?: string;
    /**
     * Represents style information for an Input Field.
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a field in the fillable PDF form
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the horizontal alignment for text within a field in the fillable PDF form.
         * The value or the expression result should be one of the following.
         * @value "General" indicates that an input field aligns numbers and dates to the right and everything else to the left
         * @value "Left" indicates that an input field aligns the text to the left
         * @value "Right" indicates that an input field aligns the text to the right
         * @value "Center" indicates that an input field centers the text
         * @value "Justify" indicates that an input field stretches the multiline text so that each line has equal width
         */
        TextAlign?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of text within a field in the fillable PDF form.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets the default border properties for an Input Field.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for an Input Field.
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for an Input Field.
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for an Input Field.
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for an Input Field.
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Input Field from the left of the field's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Input Field from the top of the field's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of an Input Field.
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of an Input Field.
     */
    Height?: string;
};
/**
 * Represents properties for a [Sparkline](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Regions/Sparkline/index)
 */
export declare type Sparkline = {
    /**
     * Gets or sets a unique identifier for a Sparkline
     */
    Name: string;
    /**
     * Should be set to "sparkline"
     */
    Type: "sparkline";
    /**
     * Gets or sets a value indicating the stack order of a Sparkline
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a Sparkline is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a Sparkline at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a Sparkline for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a Sparkline that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value indicating a collection of filters to be applied to the data for each row of a Sparkline
     */
    Filters?: Filter[];
    /**
     * Gets or sets a value indicating a collection of expressions by which to sort the data in a Sparkline.
     */
    SortExpressions?: SortExpression[];
    /**
     * Gets or sets a value indicating expressions by which to group the data in a Sparkline.
     */
    Group?: Grouping;
    /**
     * Gets or sets the name of the dataset to use to bind data to a Sparkline.
     */
    DataSetName?: string;
    /**
     * @ignore
     */
    DataSetParameters?: {
        [x: string]: any;
        Name: string;
        Value: string;
    }[];
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the line width for a sparkline of "Line" type.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length)
     */
    LineWidth?: string;
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the line color for a sparkline of "Line" type.
     * The value or the expression result should be either a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    LineColor?: string;
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the background color of geometrical shapes within a sparkline of "Area", "Columns", "Whiskers", and "Stacked Columns" types.
     * The value or the expression result should be either a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    FillColor?: string;
    /**
     * Gets or sets a value  indicating the type of background gradient of geometrical shapes within a sparkline.
     */
    GradientStyle?: SparklineGradientStyle;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the end color for the background gradient of geometrical shapes within a sparkline of "Area", "Columns", "Whiskers", and "Stacked Columns" types.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    GradientEndColor?: string;
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the foreground color of a marker at the last point of a sparkline of "Line" type.
     * The value or the expression result should be either a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    MarkerColor?: string;
    /**
     * Gets or sets a value indicating whether to display a marker at the last point of a sparkline of Line type.
     */
    MarkerVisibility?: boolean;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the maximum width of columns for a sparkline of "Columns" and "Whiskers" types.
     * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
     */
    MaximumColumnWidth?: string;
    /**
     * Gets or sets [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that evaluates to the background color of the range within a sparkline.
     * The value or the expression result should be either a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    RangeFillColor?: string;
    /**
     * Gets or sets a value  indicating the type of background gradient of the range within a sparkline.
     */
    RangeGradientStyle?: SparklineGradientStyle;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the end color for the background gradient of the range within a sparkline.
     * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
     */
    RangeGradientEndColor?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the lower bound of the range for a sparkline.
     */
    RangeLowerBound?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the upper bound of the range for a sparkline.
     */
    RangeUpperBound?: string;
    /**
     * Gets or sets a value indicating whether to display a range of values for a sparkline.
     */
    RangeVisibility?: boolean;
    /**
     * Gets or sets a value indicating the type of a Sparkline.
     */
    SparklineType?: "Line" | "Area" | "Columns" | "Whiskers" | "StackedBar";
    /**
     * Gets or sets an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the range of data values displayed in a sparkline.
     */
    SeriesValue?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Sparkline from the left of the sparkline's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a Sparkline from the top of the sparkline's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a Sparkline.
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a Sparkline.
     */
    Height?: string;
};
/**
 * Represents the type of background gradient of a Sparkline.
 */
export declare type SparklineGradientStyle = "None" | "LeftRight" | "TopBottom" | "Center" | "DiagonalLeft" | "DiagonalRight" | "HorizontalCenter" | "VerticalCenter";
/**
 * Represents properties for an [Overflow Place Holder](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#overflow-place-holder) in a report
 */
export declare type OverflowPlaceholder = {
    /**
     * Gets or sets a unique identifier for an Overflow Place Holder
     */
    Name: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Overflow Place Holder from the left of its container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of an Overflow Place Holder from the top of its container
     */
    Top?: string;
    /**
     * Should be set to "overflowplaceholder"
     */
    Type: "overflowplaceholder";
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of an Overflow Place Holder.
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of an Overflow Place Holder.
     */
    Height?: string;
    /**
     * Gets or sets the name of the OverflowPlaceHolder that should be used in case of more data needs to be arranged.
     * Check the [Fixed Page Layout](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Layouts/index#fixed-page-layout) documentation for more information.
     */
    OverflowName?: string;
};
export declare type Richtext = RichtextPara | RichtextHtml;
/**
 * Represents properties for a [RichText](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Data-Visualizers/RichText/index) in a report
 */
export declare type RichtextHtml = {
    /**
     * Gets or sets a unique identifier for a RichText
     */
    Name: string;
    /**
     * Should be set to "richtext"
     */
    Type: "richtext";
    /**
     * Gets or sets a value indicating whether the height of a RichText can increase to match its contents
     */
    CanGrow?: boolean;
    /**
     * @ignore
     */
    DataElementStyle?: "Auto" | "AttributeNormal" | "ElementNormal";
    /**
     * Gets or sets a value indicating whether the entire contents of a RichText should be kept together on one Page if possible
     */
    KeepTogether?: boolean;
    /**
     * Represents style information for a RichText
     */
    Style?: {
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the color of the background of a RichText.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        BackgroundColor?: string;
        /**
         * Gets or sets the background image properties for a RichText
         */
        BackgroundImage?: BackgroundImage;
        /**
         * @ignore
         */
        LineHeight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the foreground color of text within a RichText.
         * The value or the expression result should be a [cross-browser color name](https://www.w3schools.com/colors/colors_hex.asp) or to a hexadecimal color code, such as ```#face0d```.
         */
        Color?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the left edge of a RichText and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingLeft?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the right edge of a RichText and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingRight?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the top edge of a RichText and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingTop?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the padding between the bottom edge of a RichText and its contents.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        PaddingBottom?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font style for text within a RichText.
         * The value or the expression result should be one of the following.
         * @value "Normal" indicates that the font is not italicized.
         * @value "Italic" indicates that that the font is italicized.
         */
        FontStyle?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the name of the font family for text within a RichText.
         */
        FontFamily?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the font size for text within a RichText.
         * The value or the expression result should be in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length).
         */
        FontSize?: string;
        /**
         * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the thickness of font for text within a RichText.
         * The value or the expression result should be one of the following.
         * @value "Thin" indicates a font thickness that matches CSS font weight 100
         * @value "ExtraLight" indicates a font thickness that matches CSS font weight 200
         * @value "Light" indicates a font thickness that matches CSS font weight 300
         * @value "Normal" indicates a font thickness that matches CSS font weight 400
         * @value "Medium" indicates a font thickness that matches CSS font weight 500
         * @value "SemiBold" indicates a font thickness that matches CSS font weight 600
         * @value "Bold" indicates a font thickness that matches CSS font weight 700
         * @value "ExtraBold" indicates a font thickness that matches CSS font weight 800
         * @value "Heavy" indicates a font thickness that matches CSS font weight 900
         */
        FontWeight?: string;
        /**
         * Gets or sets the default border properties for a RichText.
         */
        Border?: BorderStyle;
        /**
         * Gets or sets the top border properties for a RichText.
         */
        TopBorder?: BorderStyle;
        /**
         * Gets or sets the right border properties for a RichText.
         */
        RightBorder?: BorderStyle;
        /**
         * Gets or sets the bottom border properties for a RichText.
         */
        BottomBorder?: BorderStyle;
        /**
         * Gets or sets the left border properties for a RichText.
         */
        LeftBorder?: BorderStyle;
    };
    /**
     * Gets or sets a value indicating the stack order of a RichText.
     */
    ZIndex?: number;
    /**
     * Gets or sets a value indicating whether a RichText is hidden
     */
    Visibility?: Visibility;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text displayed when a report reader hovers over a RichText at preview time
     */
    ToolTip?: string;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the Id of a RichText for a Jump To Bookmark interactivity action.
     */
    Bookmark?: string;
    /**
     * @ignore
     */
    DataElementName?: string;
    /**
     * @ignore
     */
    DataElementOutput?: DataElementOutput;
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) indicating the text associated with a RichText that appears in the Report Map and Table of Contents
     */
    Label?: string;
    /**
     * @ignore
     */
    LayerName?: string;
    /**
     * @ignore
     */
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    /**
     * @ignore
     */
    MarkupType?: "HTML";
    /**
     * Gets or sets a value or an [expression](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#expression) that is displayed for a RichText.
     */
    Value?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a RichText from the left of the richtext's container
     */
    Left?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the distance of a RichText from the top of the richtext's container
     */
    Top?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the width of a RichText
     */
    Width?: string;
    /**
     * Gets or sets a value in [Length units](https://www.grapecity.com/activereportsjs/docs/ReportAuthorGuide/Report-Items/Common-Properties/index#length) indicating the height of a RichText
     */
    Height?: string;
};
/**
 * @ignore
 */
export declare type RichtextPara = {
    Name: string;
    Type: "richtext";
    CanGrow?: boolean;
    DataElementStyle?: "Auto" | "AttributeNormal" | "ElementNormal";
    KeepTogether?: boolean;
    Style?: {
        BackgroundColor?: string;
        BackgroundImage?: BackgroundImage;
        LineHeight?: string;
        Color?: string;
        PaddingLeft?: string;
        PaddingRight?: string;
        PaddingTop?: string;
        PaddingBottom?: string;
        FontStyle?: string;
        FontFamily?: string;
        FontSize?: string;
        FontWeight?: string;
        Border?: BorderStyle;
        TopBorder?: BorderStyle;
        RightBorder?: BorderStyle;
        BottomBorder?: BorderStyle;
        LeftBorder?: BorderStyle;
    };
    ZIndex?: number;
    Visibility?: Visibility;
    ToolTip?: string;
    Bookmark?: string;
    DataElementName?: string;
    DataElementOutput?: DataElementOutput;
    Label?: string;
    LayerName?: string;
    CustomProperties?: {
        Name: string;
        Value: string;
    }[];
    Paragraphs?: Paragraph[];
    Left?: string;
    Top?: string;
    Width?: string;
    Height?: string;
};
/**
 * @ignore
 */
export declare type Paragraph = {
    TextRuns?: TextRun[];
    LeftIndent?: string;
    RightIndent?: string;
    HangingIndent?: string;
    StyleName?: string;
    Style?: {
        FontFamily?: string;
        FontSize?: string;
        FontStyle?: "Default" | "Normal" | "Italic";
        FontWeight?: "Default" | "Normal" | "Lighter" | "Thin" | "ExtraLight" | "Light" | "Medium" | "SemiBold" | "Bold" | "ExtraBold" | "Heavy" | "Bolder";
        Color?: string;
        LineSpacing?: string;
        BackgroundColor?: string;
        TextDecoration?: "Default" | "None" | "Underline" | "DoubleUnderline" | "Overline" | "LineThrough";
        TextAlign?: "Center" | "Left" | "Right";
    };
    ListStyle?: "None" | "Numbered" | "Bullet";
    ListLevel?: number;
    ListItemIndex?: number;
    SpaceBefore?: string;
    SpaceAfter?: string;
    ListStyleType?: "None" | "Square" | "Circle" | "Disc" | "Decimal" | "DecimalLeadingZero" | "CircledNumber" | "LowerRoman" | "UpperRoman" | "LowerLatin" | "UpperLatin" | "LowerGreek" | "UpperGreek" | "Katakana" | "KatakanaBrackets" | "KatakanaIrohaBrackets" | "KatakanaIroha" | "KatakanaLower" | "KatakanaIrohaLower";
};
/**
 * @ignore
 */
export declare type TextRun = TextRunText | TextRunImage;
export declare type TextRunText = {
    Type: "text";
    Value?: string;
    Action?: Action;
    Style?: {
        FontFamily?: string;
        FontSize?: string;
        FontStyle?: "Default" | "Normal" | "Italic";
        FontWeight?: "Default" | "Normal" | "Lighter" | "Thin" | "ExtraLight" | "Light" | "Medium" | "SemiBold" | "Bold" | "ExtraBold" | "Heavy" | "Bolder";
        Color?: string;
        LineSpacing?: string;
        BackgroundColor?: string;
        TextDecoration?: "Default" | "None" | "Underline" | "DoubleUnderline" | "Overline" | "LineThrough";
        TextAlign?: "Center" | "Left" | "Right";
    } & {
        Subscript?: string;
        Superscript?: string;
    };
    ToolTip?: string;
    Label?: string;
    StyleName?: string;
};
export declare type TextRunImage = {
    Type: "image";
    Value?: string;
    Action?: Action;
    ToolTip?: string;
    Label?: string;
    Width?: string;
    Height?: string;
    Source?: "External" | "Embedded" | "Database";
    MIMEType?: string;
};
/**
 * Represents names of supported Report Item Types
 */
export declare type ReportItemType = "textbox" | "checkbox" | "list" | "table" | "tablix" | "line" | "rectangle" | "bandedlist" | "subreport" | "shape" | "tableofcontents" | "barcode" | "dvchart" | "image" | "bullet" | "formattedtext" | "inputfield" | "sparkline" | "richtext" | "overflowplaceholder";
/**
 * Represents supported Report Item Types
 */
export declare type ReportItem = Textbox | Checkbox | List | Table | Tablix | Line | Rectangle | BandedList | Subreport | Shape | TableOfContents | Barcode | DvChart | Image | Bullet | FormattedText | InputFieldText | InputFieldCheckbox | Sparkline | RichtextPara | RichtextHtml | OverflowPlaceholder;
