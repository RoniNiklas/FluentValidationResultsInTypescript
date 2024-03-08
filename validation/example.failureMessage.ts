
export const failureMessage = `{
    "WasteHolderHouseHold": [
      "Household must be null/empty when Wasteholder company is sent."
    ],
    "WasteHolderCompany": [
      "WasteHolderCompany must be null/empty when a household is sent."
    ],
    "WasteHolderHouseHold.Address": [
      "A household can not have both a Finnish address and a foreign address."
    ],
    "WasteHolderHouseHold.ForeignAddress": [
      "A household can not have both a Finnish address and a foreign address."
    ],
    "WasteHolderHouseHold.ForeignAddress.CountryISO2": [
      "string is not a valid ISO 3166-1 Alpha-2 country code. Country codes are two letters, e.g. EE == Estonia. Please consult the codelists API for acceptable values."
    ],
    "WasteHolderCompany.BusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"
    ],
    "WasteHolderCompany.ForeignBusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"
    ],
    "WasteHolderCompany.IsOrganizationWithoutBusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"
    ],
    "WasteHolderCompany.Address": [
      "Only either a Finnish address or a foreign address should be sent. Both can not be present at the same time."
    ],
    "WasteHolderCompany.ForeignAddress": [
      "Only either a Finnish address or a foreign address should be sent. Both can not be present at the same time."
    ],
    "WasteHolderCompany.ForeignAddress.CountryISO2": [
      "string is not a valid ISO 3166-1 Alpha-2 country code. Country codes are two letters, e.g. EE == Estonia. Please consult the codelists API for acceptable values."
    ],
    "ConsigneeHouseHold": [
      "Only either a receiving household or company should be sent. Both can not be present at the same time."
    ],
    "Consignee": [
      "Only either a receiving household or company should be sent. Both can not be present at the same time."
    ],
    "ConsigneeHouseHold.Address": [
      "A household can not have both a Finnish address and a foreign address."
    ],
    "ConsigneeHouseHold.ForeignAddress": [
      "A household can not have both a Finnish address and a foreign address."
    ],
    "ConsigneeHouseHold.ForeignAddress.CountryISO2": [
      "string is not a valid ISO 3166-1 Alpha-2 country code. Country codes are two letters, e.g. EE == Estonia. Please consult the codelists API for acceptable values."
    ],
    "Consignee.BusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"
    ],
    "Consignee.ForeignBusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"
    ],
    "Consignee.IsOrganizationWithoutBusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)",
      "Organizations without a Finnish or foreign business identification are only allowed as waste holders."
    ],
    "Consignee.Address": [
      "Only either a Finnish address or a foreign address should be sent. Both can not be present at the same time."
    ],
    "Consignee.ForeignAddress": [
      "Only either a Finnish address or a foreign address should be sent. Both can not be present at the same time."
    ],
    "Consignee.ForeignAddress.CountryISO2": [
      "string is not a valid ISO 3166-1 Alpha-2 country code. Country codes are two letters, e.g. EE == Estonia. Please consult the codelists API for acceptable values."
    ],
    "Carrier.BusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"
    ],
    "Carrier.ForeignBusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)"
    ],
    "Carrier.IsOrganizationWithoutBusinessId": [
      "A company has to either have a Finnish business identifier (Y-tunnus), a foreign business identifier or be an organization without a business identifier (e.g. hoitokunta, osakaskunta)",
      "Organizations without a Finnish or foreign business identification are only allowed as waste holders."
    ],
    "Carrier.Address": [
      "Only either a Finnish address or a foreign address should be sent. Both can not be present at the same time."
    ],
    "Carrier.ForeignAddress": [
      "Only either a Finnish address or a foreign address should be sent. Both can not be present at the same time."
    ],
    "Carrier.ForeignAddress.CountryISO2": [
      "string is not a valid ISO 3166-1 Alpha-2 country code. Country codes are two letters, e.g. EE == Estonia. Please consult the codelists API for acceptable values."
    ],
    "Origin.Location": [
      "Only either the Address or Location should be sent. Both can not be present at the same time."
    ],
    "Origin.Address": [
      "Only either the Address or Location should be sent. Both can not be present at the same time."
    ],
    "Origin.Location.Latitude": [
      "This value is not within Finland's borders."
    ],
    "Origin.Location.Longitude": [
      "This value is not within Finland's borders."
    ],
    "Origin.ReasonForNoIdentifier": [
      "ReasonForNoIdentifier must be empty when a PropertyIdentifier or PermanentBuildingNumber is provided."
    ],
    "Destination.Location": [
      "Only either the Address or Location should be sent. Both can not be present at the same time."
    ],
    "Destination.Address": [
      "Only either the Address or Location should be sent. Both can not be present at the same time."
    ],
    "Destination.Location.Latitude": [
      "This value is not within Finland's borders."
    ],
    "Destination.Location.Longitude": [
      "This value is not within Finland's borders."
    ],
    "Wastes[0].RecoveryCode": [
      "Waste has to end up in a laboratory analysis (ShippedToLaboratoryForAnalysis), or have a recovery code or a disposal code. It can not have more than one of these three."
    ],
    "Wastes[0].DisposalCode": [
      "Waste has to end up in a laboratory analysis (ShippedToLaboratoryForAnalysis), or have a recovery code or a disposal code. It can not have more than one of these three."
    ],
    "Wastes[0].ShippedToLaboratoryForAnalysis": [
      "Waste has to end up in a laboratory analysis (ShippedToLaboratoryForAnalysis), or have a recovery code or a disposal code. It can not have more than one of these three."
    ]
  }`
