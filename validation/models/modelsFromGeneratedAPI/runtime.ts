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


export const BASE_PATH = "http://localhost/siirtoasiakirjarekisteri/api".replace(/\/+$/, "");

const isBlob = (value: any) => typeof Blob !== 'undefined' && value instanceof Blob;

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {

    private middleware: Middleware[];

    constructor(protected configuration = new Configuration()) {
        this.middleware = configuration.middleware;
    }

    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
        const next = this.clone<T>();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }

    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware<T>(...middlewares);
    }

    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware<T>(...middlewares);
    }

    protected async request(context: RequestOpts, initOverrides?: RequestInit): Promise<Response> {
        const { url, init } = this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        throw response;
    }

    private createFetchParams(context: RequestOpts, initOverrides?: RequestInit) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }
        const body = ((typeof FormData !== "undefined" && context.body instanceof FormData) || context.body instanceof URLSearchParams || isBlob(context.body))
        ? context.body
        : JSON.stringify(context.body);

        const headers = Object.assign({}, this.configuration.headers, context.headers);
        const init = {
            method: context.method,
            headers: headers,
            body,
            credentials: this.configuration.credentials,
            ...initOverrides
        };
        return { url, init };
    }

    private fetchApi = async (url: string, init: RequestInit) => {
        let fetchParams = { url, init };
        for (const middleware of this.middleware) {
            if (middleware.pre) {
                fetchParams = await middleware.pre({
                    fetch: this.fetchApi,
                    ...fetchParams,
                }) || fetchParams;
            }
        }
        let response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
        for (const middleware of this.middleware) {
            if (middleware.post) {
                response = await middleware.post({
                    fetch: this.fetchApi,
                    url: fetchParams.url,
                    init: fetchParams.init,
                    response: response.clone(),
                }) || response;
            }
        }
        return response;
    }

    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone<T extends BaseAPI>(this: T): T {
        const constructor = this.constructor as any;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
};

export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export type FetchAPI = GlobalFetch['fetch'];

export interface ConfigurationParameters {
    basePath?: string; // override base path
    fetchApi?: FetchAPI; // override for fetch implementation
    middleware?: Middleware[]; // middleware to apply before/after fetch requests
    queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
    username?: string; // parameter for basic security
    password?: string; // parameter for basic security
    apiKey?: string | ((name: string) => string); // parameter for apiKey security
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
    headers?: HTTPHeaders; //header params we want to use on every request
    credentials?: RequestCredentials; //value for the credentials param we want to use on each request
}

export class Configuration {
    constructor(private configuration: ConfigurationParameters = {}) {}

    get basePath(): string {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }

    get fetchApi(): FetchAPI | undefined {
        return this.configuration.fetchApi;
    }

    get middleware(): Middleware[] {
        return this.configuration.middleware || [];
    }

    get queryParamsStringify(): (params: HTTPQuery) => string {
        return this.configuration.queryParamsStringify || querystring;
    }

    get username(): string | undefined {
        return this.configuration.username;
    }

    get password(): string | undefined {
        return this.configuration.password;
    }

    get apiKey(): ((name: string) => string) | undefined {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }

    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : async () => accessToken;
        }
        return undefined;
    }

    get headers(): HTTPHeaders | undefined {
        return this.configuration.headers;
    }

    get credentials(): RequestCredentials | undefined {
        return this.configuration.credentials;
    }
}

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | HTTPQuery };
export type HTTPBody = Json | FormData | URLSearchParams;
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

export interface FetchParams {
    url: string;
    init: RequestInit;
}

export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}

export function exists(json: any, key: string) {
    const value = json[key];
    return value !== null && value !== undefined;
}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
    return Object.keys(params)
        .map((key) => {
            const fullKey = prefix + (prefix.length ? `[${key}]` : key);
            const value = params[key];
            if (value instanceof Array) {
                const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
                    .join(`&${encodeURIComponent(fullKey)}=`);
                return `${encodeURIComponent(fullKey)}=${multiValue}`;
            }
            if (value instanceof Date) {
                return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
            }
            if (value instanceof Object) {
                return querystring(value as HTTPQuery, fullKey);
            }
            return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
        })
        .filter(part => part.length > 0)
        .join('&');
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function canConsumeForm(consumes: Consume[]): boolean {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}

export interface Consume {
    contentType: string
}

export interface RequestContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
}

export interface ResponseContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    response: Response;
}

export interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams | void>;
    post?(context: ResponseContext): Promise<Response | void>;
}

export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}

export interface ResponseTransformer<T> {
    (json: any): T;
}

export class JSONApiResponse<T> {
    constructor(public raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {}

    async value(): Promise<T> {
        return this.transformer(await this.raw.json());
    }
}

export class VoidApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<void> {
        return undefined;
    }
}

export class BlobApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<Blob> {
        return await this.raw.blob();
    };
}

export class TextApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<string> {
        return await this.raw.text();
    };
}
