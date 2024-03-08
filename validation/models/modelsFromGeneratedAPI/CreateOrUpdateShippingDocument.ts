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
    CompanyInput,
    CompanyInputFromJSON,
    CompanyInputFromJSONTyped,
    CompanyInputToJSON,
    ConsigneeHouseHoldInput,
    ConsigneeHouseHoldInputFromJSON,
    ConsigneeHouseHoldInputFromJSONTyped,
    ConsigneeHouseHoldInputToJSON,
    ContactInput,
    ContactInputFromJSON,
    ContactInputFromJSONTyped,
    ContactInputToJSON,
    HouseHoldInput,
    HouseHoldInputFromJSON,
    HouseHoldInputFromJSONTyped,
    HouseHoldInputToJSON,
    WasteInput,
    WasteInputFromJSON,
    WasteInputFromJSONTyped,
    WasteInputToJSON,
    WasteShipmentOriginInput,
    WasteShipmentOriginInputFromJSON,
    WasteShipmentOriginInputFromJSONTyped,
    WasteShipmentOriginInputToJSON,
    WasteShipmentSiteBaseInput,
    WasteShipmentSiteBaseInputFromJSON,
    WasteShipmentSiteBaseInputFromJSONTyped,
    WasteShipmentSiteBaseInputToJSON,
} from '.';

/**
 * Creates a new Shipping Document or updates an existing one. Only one waste origin, either a wasteHolderCompany or a wasteHolderHouseHold, should be sent.
 * @export
 * @interface CreateOrUpdateShippingDocument
 */
export type CreateOrUpdateShippingDocument = {
    /**
     * 
     * @type {CompanyInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    WasteHolderCompany: CompanyInput;
    /**
     * 
     * @type {HouseHoldInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    WasteHolderHouseHold: HouseHoldInput;
    /**
     * 
     * @type {CompanyInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    Carrier: CompanyInput;
    /**
     * 
     * @type {CompanyInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    Consignee: CompanyInput;
    /**
     * 
     * @type {ConsigneeHouseHoldInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    ConsigneeHouseHold: ConsigneeHouseHoldInput;
    /**
     * 
     * @type {ContactInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    WasteHolderContact: ContactInput;
    /**
     * 
     * @type {ContactInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    CarrierContact: ContactInput;
    /**
     * 
     * @type {ContactInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    ConsigneeContact: ContactInput;
    /**
     * The date and time (UTC) when the shipment is sent by the Waste Holder. The date is required. The time is optional, and will default to midnight if not sent by the user.
     * @type {Date}
     * @memberof CreateOrUpdateShippingDocument
     */
    DispatchDate: Date;
    /**
     * The date and time (UTC) when the shipment is received by the Consignee. The date is required. The time is optional, and will default to midnight if not sent by the user. A shipping document can be modified up to 90 days after its received date.
     * @type {Date}
     * @memberof CreateOrUpdateShippingDocument
     */
    ReceivedDate: Date;
    /**
     * 
     * @type {WasteShipmentOriginInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    Origin: WasteShipmentOriginInput;
    /**
     * 
     * @type {WasteShipmentSiteBaseInput}
     * @memberof CreateOrUpdateShippingDocument
     */
    Destination: WasteShipmentSiteBaseInput;
    /**
     * How the waste is transported i.e. the Transport Type of the document as specified in https://koodistot.suomi.fi/codescheme;registryCode=jttj;schemeCode=kuljetustapa
     * <br />
     * Required if hazardous or POP waste.
     * @type {string}
     * @memberof CreateOrUpdateShippingDocument
     */
    TransportTypeCode?: string | null;
    /**
     * Transport description for Other type.
     * @type {string}
     * @memberof CreateOrUpdateShippingDocument
     */
    TransportTypeDescription?: string | null;
    /**
     * Transport vehicle(s) registration numbers as comma separated list.
     * @type {string}
     * @memberof CreateOrUpdateShippingDocument
     */
    RegistrationCodesForTransport?: string | null;
    /**
     * Originator of the shipping document. This can be used by 3rd parties to identify
     * their service, which creates documents using exposed API.
     * @type {string}
     * @memberof CreateOrUpdateShippingDocument
     */
    DocumentOriginator?: string | null;
    /**
     * Version of the shipping document. This can be used by 3rd parties to identify
     * version of the document
     * @type {string}
     * @memberof CreateOrUpdateShippingDocument
     */
    DocumentVersion?: string | null;
    /**
     * Collection of the wastes included in one shipping document having the same origin and destination.
     * Must contain at least one waste.
     * @type {Array<WasteInput>}
     * @memberof CreateOrUpdateShippingDocument
     */
    Wastes: Array<WasteInput>;
}

export function CreateOrUpdateShippingDocumentFromJSON(json: any): CreateOrUpdateShippingDocument {
    return CreateOrUpdateShippingDocumentFromJSONTyped(json, false);
}

export function CreateOrUpdateShippingDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdateShippingDocument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'WasteHolderCompany': CompanyInputFromJSON(json['wasteHolderCompany']),
        'WasteHolderHouseHold': HouseHoldInputFromJSON(json['wasteHolderHouseHold']),
        'Carrier': CompanyInputFromJSON(json['carrier']),
        'Consignee': CompanyInputFromJSON(json['consignee']),
        'ConsigneeHouseHold': ConsigneeHouseHoldInputFromJSON(json['consigneeHouseHold']),
        'WasteHolderContact': ContactInputFromJSON(json['wasteHolderContact']),
        'CarrierContact': ContactInputFromJSON(json['carrierContact']),
        'ConsigneeContact': ContactInputFromJSON(json['consigneeContact']),
        'DispatchDate': (new Date(json['dispatchDate'])),
        'ReceivedDate': (new Date(json['receivedDate'])),
        'Origin': WasteShipmentOriginInputFromJSON(json['origin']),
        'Destination': WasteShipmentSiteBaseInputFromJSON(json['destination']),
        'TransportTypeCode': !exists(json, 'transportTypeCode') ? undefined : json['transportTypeCode'],
        'TransportTypeDescription': !exists(json, 'transportTypeDescription') ? undefined : json['transportTypeDescription'],
        'RegistrationCodesForTransport': !exists(json, 'registrationCodesForTransport') ? undefined : json['registrationCodesForTransport'],
        'DocumentOriginator': !exists(json, 'documentOriginator') ? undefined : json['documentOriginator'],
        'DocumentVersion': !exists(json, 'documentVersion') ? undefined : json['documentVersion'],
        'Wastes': ((json['wastes'] as Array<any>).map(WasteInputFromJSON)),
    };
}

export function CreateOrUpdateShippingDocumentToJSON(value?: CreateOrUpdateShippingDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'wasteHolderCompany': CompanyInputToJSON(value.WasteHolderCompany),
        'wasteHolderHouseHold': HouseHoldInputToJSON(value.WasteHolderHouseHold),
        'carrier': CompanyInputToJSON(value.Carrier),
        'consignee': CompanyInputToJSON(value.Consignee),
        'consigneeHouseHold': ConsigneeHouseHoldInputToJSON(value.ConsigneeHouseHold),
        'wasteHolderContact': ContactInputToJSON(value.WasteHolderContact),
        'carrierContact': ContactInputToJSON(value.CarrierContact),
        'consigneeContact': ContactInputToJSON(value.ConsigneeContact),
        'dispatchDate': (value.DispatchDate.toISOString()),
        'receivedDate': (value.ReceivedDate.toISOString()),
        'origin': WasteShipmentOriginInputToJSON(value.Origin),
        'destination': WasteShipmentSiteBaseInputToJSON(value.Destination),
        'transportTypeCode': value.TransportTypeCode,
        'transportTypeDescription': value.TransportTypeDescription,
        'registrationCodesForTransport': value.RegistrationCodesForTransport,
        'documentOriginator': value.DocumentOriginator,
        'documentVersion': value.DocumentVersion,
        'wastes': ((value.Wastes as Array<any>).map(WasteInputToJSON)),
    };
}

