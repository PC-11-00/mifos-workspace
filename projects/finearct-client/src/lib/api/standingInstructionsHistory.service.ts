/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.11.0-SNAPSHOT
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { GetStandingInstructionRunHistoryResponse } from '../model/getStandingInstructionRunHistoryResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class StandingInstructionsHistoryService {

    protected basePath = 'http://localhost/fineract-provider/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
            if (firstBasePath != undefined) {
                basePath = firstBasePath;
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Standing Instructions Logged History
     * The list capability of history can support pagination and sorting   Example Requests :  standinginstructionrunhistory  standinginstructionrunhistory?orderBy&#x3D;name&amp;sortOrder&#x3D;DESC  standinginstructionrunhistory?offset&#x3D;10&amp;limit&#x3D;50
     * @param externalId externalId
     * @param offset offset
     * @param limit limit
     * @param orderBy orderBy
     * @param sortOrder sortOrder
     * @param transferType transferType
     * @param clientName clientName
     * @param clientId clientId
     * @param fromAccountId fromAccountId
     * @param fromAccountType fromAccountType
     * @param locale locale
     * @param dateFormat dateFormat
     * @param fromDate fromDate
     * @param toDate toDate
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveAll20(externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, locale?: string, dateFormat?: string, fromDate?: object, toDate?: object, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<GetStandingInstructionRunHistoryResponse>;
    public retrieveAll20(externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, locale?: string, dateFormat?: string, fromDate?: object, toDate?: object, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<GetStandingInstructionRunHistoryResponse>>;
    public retrieveAll20(externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, locale?: string, dateFormat?: string, fromDate?: object, toDate?: object, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<GetStandingInstructionRunHistoryResponse>>;
    public retrieveAll20(externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, locale?: string, dateFormat?: string, fromDate?: object, toDate?: object, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (externalId !== undefined && externalId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>externalId, 'externalId');
        }
        if (offset !== undefined && offset !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>offset, 'offset');
        }
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (orderBy !== undefined && orderBy !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>orderBy, 'orderBy');
        }
        if (sortOrder !== undefined && sortOrder !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>sortOrder, 'sortOrder');
        }
        if (transferType !== undefined && transferType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>transferType, 'transferType');
        }
        if (clientName !== undefined && clientName !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>clientName, 'clientName');
        }
        if (clientId !== undefined && clientId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>clientId, 'clientId');
        }
        if (fromAccountId !== undefined && fromAccountId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromAccountId, 'fromAccountId');
        }
        if (fromAccountType !== undefined && fromAccountType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromAccountType, 'fromAccountType');
        }
        if (locale !== undefined && locale !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>locale, 'locale');
        }
        if (dateFormat !== undefined && dateFormat !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>dateFormat, 'dateFormat');
        }
        if (fromDate !== undefined && fromDate !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromDate, 'fromDate');
        }
        if (toDate !== undefined && toDate !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>toDate, 'toDate');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (basicAuth) required
        localVarCredential = this.configuration.lookupCredential('basicAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        // authentication (tenantid) required
        localVarCredential = this.configuration.lookupCredential('tenantid');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('fineract-platform-tenantid', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v1/standinginstructionrunhistory`;
        return this.httpClient.request<GetStandingInstructionRunHistoryResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                
                reportProgress: reportProgress
            }
        );
    }

}
