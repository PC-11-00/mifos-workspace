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
import { GetShareAccountsClientIdProductIdAccountingRule } from './getShareAccountsClientIdProductIdAccountingRule';
import { GetShareAccountsCurrency } from './getShareAccountsCurrency';
import { GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions } from './getClientIdProductIdMinimumActivePeriodFrequencyTypeOptions';
import { GetShareAccountsClientIdProductIdLockPeriodTypeEnum } from './getShareAccountsClientIdProductIdLockPeriodTypeEnum';
import { GetClientIdProductIdAccountingMappings } from './getClientIdProductIdAccountingMappings';
import { GetShareAccountsChargeOptions } from './getShareAccountsChargeOptions';
import { GetClientIdProductIdLockinPeriodFrequencyTypeOptions } from './getClientIdProductIdLockinPeriodFrequencyTypeOptions';
import { GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum } from './getShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum';


export interface GetClientIdProductIdProductOptions { 
    accountingMappingOptions?: object;
    accountingMappings?: GetClientIdProductIdAccountingMappings;
    accountingRule?: GetShareAccountsClientIdProductIdAccountingRule;
    allowDividendCalculationForInactiveClients?: boolean;
    chargeOptions?: GetShareAccountsChargeOptions;
    charges?: string;
    currency?: GetShareAccountsCurrency;
    currencyOptions?: GetShareAccountsCurrency;
    description?: string;
    id?: number;
    lockinPeriod?: number;
    lockinPeriodEnum?: GetShareAccountsClientIdProductIdLockPeriodTypeEnum;
    lockinPeriodFrequencyTypeOptions?: GetClientIdProductIdLockinPeriodFrequencyTypeOptions;
    marketPrice?: string;
    maximumShares?: number;
    minimumActivePeriod?: number;
    minimumActivePeriodForDividendsTypeEnum?: GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum;
    minimumActivePeriodFrequencyTypeOptions?: GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions;
    minimumShares?: number;
    name?: string;
    norminalShares?: number;
    shareCapital?: number;
    shortName?: string;
    totalShares?: number;
    totalSharesIssued?: number;
    unitPrice?: number;
}

