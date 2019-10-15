export interface ILanguageInfo {
    /** 本地键值 */
    key: string;
    /** 显示名称 */
    displayName: string;
    /** 图标 */
    icon?: string;
    /** 是否为默认,默认值false */
    isDefault?: boolean;
}


export interface IExtendI18N {
    /** 所有语言 */
    languages: ILanguageInfo[];
    /** 当前语言 */
    currentLanguage: ILanguageInfo;
    /** 当前语言的本地化信息 */
    languageData: any;
}