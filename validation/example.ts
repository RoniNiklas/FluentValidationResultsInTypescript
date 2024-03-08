/**
 * Example of a failure message that the API might return when the request is invalid for a CreateShippingDocumentCommand
 */
import { failureMessage } from "./example.failureMessage"
/**
 * Example of the type that the API generator creates for the CreateShippingDocumentCommand
 */
import { CreateOrUpdateShippingDocument } from "./models/modelsFromGeneratedAPI/CreateOrUpdateShippingDocument"
/**
 * Type for the validation error that the API would return for type T 
 */
import { FluentValidationError } from "./models/validationResult"
/**
 * Utility function for extracting a single error message from the validation error type for type T
 */
import getBackendErrorMessage from "./utils/getBackEndErrorMessage"

const resultRaw = JSON.parse(failureMessage)
const resultTyped = resultRaw as FluentValidationError<CreateOrUpdateShippingDocument>

// Keys that exist in NestedKeys of type T return the error when it exists
console.log(getBackendErrorMessage(resultTyped, 'WasteHolderHouseHold')) // ["Household must be null/empty when Wasteholder company is sent."]
console.log(getBackendErrorMessage(resultTyped, 'WasteHolderCompany.BusinessId')) // ["A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"]
console.log(getBackendErrorMessage(resultTyped, 'Destination.Location.Latitude')) // ["This value is not within Finland's borders."],
console.log(getBackendErrorMessage(resultTyped, 'Wastes[0].RecoveryCode')) // ["Waste has to end up in a laboratory analysis (ShippedToLaboratoryForAnalysis), or have a recovery code or a disposal code. It can not have more than one of these three."]

// Keys that exist in NestedKeys of type T return undefined when there is no validation error
console.log(getBackendErrorMessage(resultTyped, 'WasteHolderContact.Email')) // undefined

// Keys that do not exist in NestedKeys of type T are not allowed and will throw a compile time error
console.log(getBackendErrorMessage(resultTyped, 'WasteHolderContact.KeyDoesntExist'))

// VS Code will recommend and autocomplete keys that exist in NestedKeys of type T
console.log(getBackendErrorMessage(resultTyped, ''))