/* tslint:disable */
/* eslint-disable */
/**
 * Siirtoasiakirjarekisteri Test
 * <p>      Tämä on Suomen sisäisten jätesiirtojen siirtoasiakirjojen tietojen lähettämistä varten kehitetyn SIIRTO-rekisterin rajapinnan kuvaus.  </p>    <p>      Rajapinta on tarkoitettu tietojen tuomiseen rekisteriin muista palveluista. Rajapinnan kehitys on saatu valmiiksi 8.3.2022. Mahdollisia tulevia muutoksia on lueteltu kohdassa Kehityskohteet.  </p>    <p>      Rajapintaan tunnistautuminen tapahtuu OIDC-standardin mukaisesti. Mikäli tarvitset pääsyn rajapintaan, ota yhteyttä kontaktiosoitteeseen.  </p>    <p>      Rekisterissä olevia siirtoasiakirjojen tietoja voivat tuoda ja päivittää siihen liittyneet yritykset. Tietoja voidaan päivittää maksimissaan 90 päivää siirron päättymisen jälkeen.  </p>    <p>      Tutustu tietomalliin sivun alareunan Schemas-osiossa.  </p>    <p>      <b>Rajapinnan toiminnallisuus</b>      <ul>          <li>Siirtoasiakirjan haku          <li>Siirtoasiakirjan luominen          <li>Siirtoasiakirjan muokkaaminen      </ul>  </p>    <p>      <b>Mahdolliset kehityskohteet</b>      <ul>          <li>Siirtoasiakirjan tilatieto</li>      </ul>  </p>    <details open>      <summary><b>News</b></summary>      <p>          <ul>              <li>                  <b> Version 3 has been removed on 15.8.2023. Please switch to using version 4.</b>              </li>              <li>                  <b>The GET-endpoint that returns all data has been removed from version 4 on 15.8.2023. Use the /paginated endpoint instead.</b>              </li>          </ul>      </p>  </details>    <details open>      <summary>          <b>              Changes in version 4          </b>      </summary>      <div>          <p>              <b>API structure: </b>              <ul>                  <li>                      A new endpoint for querying shippingdocuments with pagination has been added under shippingdocuments/paginated.                      The Get endpoint for fetching all shippingdocuments will be removed on 15.8.2023.                  </li>              </ul>          </p>          <p>              <b>Models: </b>          </p>          <p>              <b>CarrierContact</b>              <ul>                  <li>                      The PhoneNumber field is now required.                  </li>              </ul>              <b>WasteHolderContact / ConsigneeContact</b>              <ul>                  <li>                      The PhoneNumber field for these is now required when they are the contact for a company. The PhoneNumber field is not required when they are the contact for a household. <br />                      I.e. <br />                      1. WasteHolderCompany is not null => WasteHolderContact needs a phone number. <br />                      2. WasteHolderCompany is null => WasteHolderContact does not need a phone number. <br />                      3. Consignee is not null => ConsigneeContact needs a phone number. <br />                      4. Consignee is null => ConsigneeContact does not need a phone number. <br />                  </li>              </ul>              <b>ContactInput</b>              <ul>                  <li>The email field now has a maximum length limit of 100 characters.</li>              </ul>              <b>WasteShipmentOriginInput / WasteShipmentOriginOutput</b>              <ul>                  <li>                      New optional field ReasonForNoIdentifier added. <br />                      If a septic waste shipment (LoWCode 200304) is sent from a construction site or other location without a valid PropertyIdentifier or PermanentBuildingNumber, you can use this field to provide the reason why you are not providing the required PropertyIdentifier/PermanentBuildingNumber. <br />                      So a septic waste shipment\'s origin requires either a PropertyIdentifier, PermanentBuildingNumber or a ReasonForNoIdentifier.                  </li>              </ul>              <b>                  WasteInput / WasteOutput              </b>              <ul>                  <li>                      New optional field ShippedToLaboratoryForAnalysis added. <br />                      You can use this boolean field to indicate the waste is shipped to a laboratory for analysis instead of being shipped to a waste treatment facility for a recovery or disposal process. <br />                      I.e. A waste has to have exactly one of the following: <br />                      1. RecoveryCode <br />                      2. DisposalCode <br />                      3. ShippedToLaboratoryForAnalysis with value true <br />                  </li>              </ul>              <b>                  CompanyInput / CompanyOutput              </b>              <ul>                  <li>                      New optional field IsOrganizationWithoutBusinessId added. <br />                      You can use this boolean field to indicate the Company is an organization without a business id (e.g. hoitokunta, osakaskunta). <br />                      This obviously makes it not a company, but renaming the Company model to Organization would be a breaking change. <br />                      This is an alternative to BusinessId and ForeignBusinessId when those are not applicable to the organization <br />                      This is currently only allowed for WasteHolders. If you have a case where a Consignee or Carrier is an organization without a business id, please contact the contact person for the API. <br />                      I.e. A Company has to have exactly one of the following: <br />                      1. BusinessId <br />                      2. ForeignBusinessId <br />                      3. IsOrganizationWithoutBusinessId with value true <br />                  </li>              </ul>              <b>                  WasteHolderHouseHold / ConsigneeHouseHold              </b>              <ul>                  <li>                      New optional field ForeignAddress added. <br />                      You can use this field to indicate that the owner of the household where the shipment starts or ends at resides abroad <br />                      This is an alternative to the Address field <br />                      Note that if the origin or destination of the waste is abroad, the shipment should be reported in a different system. Contact the support email for SIIRTO-rekisteri in this case. <br />                      I.e. A WasteHolderHouseHold / ConsigneeHouseHold has to have exactly one of the following: <br />                      1. Address <br />                      2. ForeignAddress <br />                  </li>              </ul>          </p>      </div>  </details>  
 *
 * The version of the OpenAPI document: 4
 * Contact: siirtorekisteri-tuki@syke.fi
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from './runtime';
import {
    QuantityUnits,
    QuantityUnitsFromJSON,
    QuantityUnitsFromJSONTyped,
    QuantityUnitsToJSON,
} from '../../../../api/siirtorekisteri/models';

/**
 * Information of Waste
 * @export
 * @interface WasteInput
 */
export interface WasteInput {
    /**
     * Waste entry in accordance with the EC list of waste (LoW) as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=jateluettelo
     * <br />
     * LoW-Codes are accepted either with or without spacing, eg. 01 01 01 or 010101. The API will only Input values without spaces.
     * <br />
     * Code with asterisk mandatory if dangerous waste.
     * <br />
     * The following LoWCodes also require the WasteOilTypeCode to be declared.
     * 120106* ,
     * 120107* ,
     * 120108* ,
     * 120109* ,
     * 120110* ,
     * 120118* ,
     * 120119* ,
     * 130101* ,
     * 130104* ,
     * 130105* ,
     * 130109* ,
     * 130110* ,
     * 130111* ,
     * 130112* ,
     * 130113* ,
     * 130204* ,
     * 130205* ,
     * 130206* ,
     * 130207* ,
     * 130208* ,
     * 130301* ,
     * 130306* ,
     * 130307* ,
     * 130308* ,
     * 130309* ,
     * 130310* ,
     * 130506* ,
     * 190207* ,
     * 200126*
     * @type {string}
     * @memberof WasteInput
     */
    LoWCode: string;
    /**
     * Quantity of the waste. Maximum precision 28. Maximum decimals 6.
     * @type {number}
     * @memberof WasteInput
     */
    Quantity: number;
    /**
     * 
     * @type {QuantityUnits}
     * @memberof WasteInput
     */
    QuantityUnit: QuantityUnits;
    /**
     * Free-form description of the waste.
     * @type {string}
     * @memberof WasteInput
     */
    Description: string;
    /**
     * Description of the (hazardous) waste composition. Required if hazardous waste.
     * @type {string}
     * @memberof WasteInput
     */
    Composition?: string | null;
    /**
     * If the waste is hazardous, what are its properties as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=vaaraominaisuudet
     * <br />
     * Required if hazardous waste.
     * @type {Array<string>}
     * @memberof WasteInput
     */
    HazardousProperties: Array<string>;
    /**
     * How the (hazardous or/and POP) waste is packaged as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=pakkaustapa
     * <br />
     * Required if hazardous or POP waste.
     * @type {string}
     * @memberof WasteInput
     */
    PackagingTypeCode?: string | null;
    /**
     * Packaging description is mandatory when type Other chosen.
     * @type {string}
     * @memberof WasteInput
     */
    PackagingTypeDescription?: string | null;
    /**
     * The physical state of the (hazardous) waste as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=jatteenolomuoto 
     * <br />
     * Required if hazardous waste.
     * @type {string}
     * @memberof WasteInput
     */
    PhysicalStateCode?: string | null;
    /**
     * Physical state description is mandatory when type Other chosen.
     * @type {string}
     * @memberof WasteInput
     */
    PhysicalStateDescription?: string | null;
    /**
     * Persistent Organic Pollutant (POP)-compounds in waste, according to Regulation (EU) 2019/1021 https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=POPyhdisteet
     * @type {Array<string>}
     * @memberof WasteInput
     */
    PopCodes: Array<string>;
    /**
     * The code for describing how waste originated as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=toiminta
     * @type {string}
     * @memberof WasteInput
     */
    CodeOfOrigin: string;
    /**
     * Code of Origin description is mandatory when type Other chosen.
     * @type {string}
     * @memberof WasteInput
     */
    CodeOfOriginDescription?: string | null;
    /**
     * The type of waste as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=jatteentyyppi
     * @type {string}
     * @memberof WasteInput
     */
    WasteTypeCode: string;
    /**
     * The type of waste oil as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=jateoljyntyyppi
     * <br />
     * Required with the following LoWCodes:
     * 120106* , 
     * 120107* ,
     * 120108* ,
     * 120109* ,
     * 120110* ,
     * 120118* ,
     * 120119* ,
     * 130101* ,
     * 130104* ,
     * 130105* ,
     * 130109* ,
     * 130110* ,
     * 130111* ,
     * 130112* ,
     * 130113* ,
     * 130204* ,
     * 130205* ,
     * 130206* ,
     * 130207* ,
     * 130208* ,
     * 130301* ,
     * 130306* ,
     * 130307* ,
     * 130308* ,
     * 130309* ,
     * 130310* ,
     * 130506* ,
     * 190207* ,
     * 200126* ,
     * @type {string}
     * @memberof WasteInput
     */
    WasteOilTypeCode?: string | null;
    /**
     * The waste has been shipped to a laboratory for analysis.
     * Waste has to be either shipped to a laboratory for analysis, or have a Recovery Code or a Disposal Code.
     * @type {boolean}
     * @memberof WasteInput
     */
    ShippedToLaboratoryForAnalysis: boolean;
    /**
     * The R Code for the wastes of the document as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=hyodyntamistoimet
     * <br />
     * Waste has to be either shipped to a laboratory for analysis, or have a Recovery Code or a Disposal Code.
     * @type {string}
     * @memberof WasteInput
     */
    RecoveryCode?: string | null;
    /**
     * A description of the processes involved in the recovery and disposal of the waste.
     * @type {string}
     * @memberof WasteInput
     */
    RecoveryDescription?: string | null;
    /**
     * The D Code for the wastes of the document as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=loppukasittelytoimet
     * <br />
     * Waste has to be either shipped to a laboratory for analysis, or have a Recovery Code or a Disposal Code.
     * @type {string}
     * @memberof WasteInput
     */
    DisposalCode?: string | null;
    /**
     * A description of the processes involved in the disposal of the waste.
     * @type {string}
     * @memberof WasteInput
     */
    DisposalDescription?: string | null;
    /**
     * Required when the LoWCode of the waste is 200304 (lietejätettä) and the dispatch date is greater than or equal to 1.1.2023
     * <br /> AKA Lietesäiliön tyyppi. https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=lietesailiontyyppi
     * @type {string}
     * @memberof WasteInput
     */
    SludgeHoldingTankTypeCode?: string | null;
    /**
     * Required when SludgeHoldingTankTypeCode is Other/Muu
     * @type {string}
     * @memberof WasteInput
     */
    SludgeHoldingTankTypeDescription?: string | null;
}

export function WasteInputFromJSON(json: any): WasteInput {
    return WasteInputFromJSONTyped(json, false);
}

export function WasteInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): WasteInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'LoWCode': json['loWCode'],
        'Quantity': json['quantity'],
        'QuantityUnit': QuantityUnitsFromJSON(json['quantityUnit']),
        'Description': json['description'],
        'Composition': !exists(json, 'composition') ? undefined : json['composition'],
        'HazardousProperties': json['hazardousProperties'],
        'PackagingTypeCode': !exists(json, 'packagingTypeCode') ? undefined : json['packagingTypeCode'],
        'PackagingTypeDescription': !exists(json, 'packagingTypeDescription') ? undefined : json['packagingTypeDescription'],
        'PhysicalStateCode': !exists(json, 'physicalStateCode') ? undefined : json['physicalStateCode'],
        'PhysicalStateDescription': !exists(json, 'physicalStateDescription') ? undefined : json['physicalStateDescription'],
        'PopCodes': json['popCodes'],
        'CodeOfOrigin': json['codeOfOrigin'],
        'CodeOfOriginDescription': !exists(json, 'codeOfOriginDescription') ? undefined : json['codeOfOriginDescription'],
        'WasteTypeCode': json['wasteTypeCode'],
        'WasteOilTypeCode': !exists(json, 'wasteOilTypeCode') ? undefined : json['wasteOilTypeCode'],
        'ShippedToLaboratoryForAnalysis': json['shippedToLaboratoryForAnalysis'],
        'RecoveryCode': !exists(json, 'recoveryCode') ? undefined : json['recoveryCode'],
        'RecoveryDescription': !exists(json, 'recoveryDescription') ? undefined : json['recoveryDescription'],
        'DisposalCode': !exists(json, 'disposalCode') ? undefined : json['disposalCode'],
        'DisposalDescription': !exists(json, 'disposalDescription') ? undefined : json['disposalDescription'],
        'SludgeHoldingTankTypeCode': !exists(json, 'sludgeHoldingTankTypeCode') ? undefined : json['sludgeHoldingTankTypeCode'],
        'SludgeHoldingTankTypeDescription': !exists(json, 'sludgeHoldingTankTypeDescription') ? undefined : json['sludgeHoldingTankTypeDescription'],
    };
}

export function WasteInputToJSON(value?: WasteInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'loWCode': value.LoWCode,
        'quantity': value.Quantity,
        'quantityUnit': QuantityUnitsToJSON(value.QuantityUnit),
        'description': value.Description,
        'composition': value.Composition,
        'hazardousProperties': value.HazardousProperties,
        'packagingTypeCode': value.PackagingTypeCode,
        'packagingTypeDescription': value.PackagingTypeDescription,
        'physicalStateCode': value.PhysicalStateCode,
        'physicalStateDescription': value.PhysicalStateDescription,
        'popCodes': value.PopCodes,
        'codeOfOrigin': value.CodeOfOrigin,
        'codeOfOriginDescription': value.CodeOfOriginDescription,
        'wasteTypeCode': value.WasteTypeCode,
        'wasteOilTypeCode': value.WasteOilTypeCode,
        'shippedToLaboratoryForAnalysis': value.ShippedToLaboratoryForAnalysis,
        'recoveryCode': value.RecoveryCode,
        'recoveryDescription': value.RecoveryDescription,
        'disposalCode': value.DisposalCode,
        'disposalDescription': value.DisposalDescription,
        'sludgeHoldingTankTypeCode': value.SludgeHoldingTankTypeCode,
        'sludgeHoldingTankTypeDescription': value.SludgeHoldingTankTypeDescription,
    };
}

