## Example of Typescript types and utils to access the returned error from FluentValidation in a .NET API   
   
This gist contains utility types and functions to help a React app access a validation error from FluentValidation in a .NET API   
   
- validation/example.ts contains the actual example of how the utility types and functions are used to access the validation errors from the backend for a CreateShippingDocument   
- validation/example.failureMessage.ts contains an example of a failure message that the API might return when the request contents are invalid for a CreateShippingDocument   
- validation/Models/validationResult.ts contains the generic utility types that the validation error message accessing logic uses for type T
- validation/Utils/getBackEndErrorMessage.ts contains an utility function for extracting a single key's messages from the validation error for type T
- validation/Models/modelsFromGeneratedAPI/* contains the typescript representations of the API models that the backend validates (created by API generator from the swagger.json)   
   
Run by calling 
> npx ts-node validation/example.ts    

## Problems   
1. Currently the BE does not localize validation errors based on the user language in React apps. Instead they're always sent in English. So:
    - Either a language header needs to be sent and the errors localized in BE 
    - OR the BE needs to send a translation key instead of the full error message in the error.
2. Currently the BE sends validation keys in PascalCase (e.g. WasteHolderCompany.BusinessId) as per .NET standards, whereas api generators by default create API models with camelCase (i.e. wasteHolderCompany.businessId) to match Typescript standards. Either
    - Validation models have to be generated separately in the FE with the option to Capitalize the first letters
    - OR use the same model and use the option to Capitalize the first letters and frontend has to start using PascalCase when using the API models
    - OR figure out how to get FluentValidation to use camelCase when outputting its error keys. Possibly [https://github.com/FluentValidation/FluentValidation/issues/226](https://github.com/FluentValidation/FluentValidation/issues/226). Probably the easiest solution if it works.