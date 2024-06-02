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
import { GetAccountTransfersTemplateRefundByTransferFromOffice } from './getAccountTransfersTemplateRefundByTransferFromOffice';
import { GetAccountTransfersTemplateRefundByTransferToAccount } from './getAccountTransfersTemplateRefundByTransferToAccount';
import { GetAccountTransfersTemplateRefundByTransferFromAccountOptions } from './getAccountTransfersTemplateRefundByTransferFromAccountOptions';
import { GetAccountTransfersPageItemsToAccountType } from './getAccountTransfersPageItemsToAccountType';
import { GetAccountTransfersTemplateRefundByTransferCurrency } from './getAccountTransfersTemplateRefundByTransferCurrency';
import { GetAccountTransfersTemplateRefundByTransferFromOfficeOptions } from './getAccountTransfersTemplateRefundByTransferFromOfficeOptions';
import { GetAccountTransfersTemplateRefundByTransferFromAccount } from './getAccountTransfersTemplateRefundByTransferFromAccount';
import { GetAccountTransfersTemplateRefundByTransferFromClientOptions } from './getAccountTransfersTemplateRefundByTransferFromClientOptions';
import { GetAccountTransfersFromAccountType } from './getAccountTransfersFromAccountType';
import { GetAccountTransfersTemplateRefundByTransferFromClient } from './getAccountTransfersTemplateRefundByTransferFromClient';
import { GetAccountTransfersTemplateRefundByTransferToClient } from './getAccountTransfersTemplateRefundByTransferToClient';


/**
 * GetAccountTransfersTemplateRefundByTransferResponse
 */
export interface GetAccountTransfersTemplateRefundByTransferResponse { 
    currency?: GetAccountTransfersTemplateRefundByTransferCurrency;
    fromAccount?: GetAccountTransfersTemplateRefundByTransferFromAccount;
    fromAccountOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromAccountOptions>;
    fromAccountType?: GetAccountTransfersPageItemsToAccountType;
    fromAccountTypeOptions?: Set<GetAccountTransfersFromAccountType>;
    fromClient?: GetAccountTransfersTemplateRefundByTransferFromClient;
    fromClientOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromClientOptions>;
    fromOffice?: GetAccountTransfersTemplateRefundByTransferFromOffice;
    fromOfficeOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>;
    toAccount?: GetAccountTransfersTemplateRefundByTransferToAccount;
    toAccountOptions?: Set<GetAccountTransfersTemplateRefundByTransferToAccount>;
    toAccountType?: GetAccountTransfersFromAccountType;
    toAccountTypeOptions?: Set<GetAccountTransfersFromAccountType>;
    toClient?: GetAccountTransfersTemplateRefundByTransferToClient;
    toClientOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromClientOptions>;
    toOffice?: GetAccountTransfersTemplateRefundByTransferFromOffice;
    toOfficeOptions?: Set<GetAccountTransfersTemplateRefundByTransferFromOfficeOptions>;
    transferAmount?: number;
    transferDate?: string;
}

