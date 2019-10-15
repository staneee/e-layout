import { Injectable } from '@angular/core';
import { ILanguageInfo, IExtendI18N } from './interface';


@Injectable({ providedIn: 'root' })
export class I18NService {

    protected _languages: ILanguageInfo[];

    protected _currentLanguage: ILanguageInfo;

    /** 语言数据 */
    protected languageData: any = {};

    /** 所有的语言 */
    get languages(): ILanguageInfo[] {
        return this._languages;
    }

    /** 当前语言 */
    get currentLanguage(): ILanguageInfo {
        return this._currentLanguage;
    }

    constructor() {

    }

    /**
     * 填充数据到服务
     * @param input 数据
     */
    extend(input: IExtendI18N) {
        this._languages = input.languages;
        this._currentLanguage = input.currentLanguage;
        this.languageData = input.languageData;
    }


    /**
     * 本地化处理
     * @param key 本地化key 
     * @param args 参数
     */
    l(key: string, ...args: any[]): string {
        let value: string = this.languageData[key];
        if (!value) {
            return key;
        }

        if (!args || !args.length) {
            return value;
        }

        return this.formatString(value, args);
    }


    /**
     * 填充参数到字符串占位符 如: 你好{0} -> 你好世界
     * @param str 有占位符的模板
     * @param args 参数
     */
    formatString(str: string, args: any[]): string {
        let result: string = str;
        for (var i = 0; i < args.length; i++) {
            var placeHolder = '{' + i + '}';
            result = this.replaceAll(result, placeHolder, args[i]);
        }
        return result;
    }

    /**
     * 替换占位字符串
     * @param str 
     * @param search 
     * @param replacement 
     */
    private replaceAll(str, search, replacement): string {
        let fix = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return str.replace(new RegExp(fix, 'g'), replacement);
    };

}
