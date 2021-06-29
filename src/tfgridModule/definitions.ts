/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        "Farm": {
          "version": "u32",
          "id": "u32",
          "name": "Vec<u8>",
          "twin_id": "u32",
          "pricing_policy_id": "u32",
          "certification_type": "CertificationType",
          "country_id": "u32",
          "city_id": "u32"
        },
        "Entity": {
          "version": "u32",
          "id": "u32",
          "name": "Vec<u8>",
          "country_id": "u32",
          "city_id": "u32",
          "address": "MultiAddress"
        },
        "Twin": {
          "version": "u32",
          "id": "u32",
          "address": "MultiAddress",
          "ip": "Vec<u8>",
          "entities": "Vec<EntityProof>"
        },
        "EntityProof": {
          "entity_id": "u32",
          "signature": "Vec<u8>"
        },
        "Node": {
          "version": "u32",
          "id": "u32",
          "farm_id": "u32",
          "resources": "Resources",
          "location": "Location",
          "country_id": "u32",
          "city_id": "u32",
          "pub_key": "Vec<u8>",
          "address": "MultiAddress",
          "role": "Role"
        },
        "Role": {
          "_enum": ["Node", "Gateway"]
        },
        "Location": {
          "longitude": "Vec<u8>",
          "latitude": "Vec<u8>"
        },
        "Resources": {
          "hru": "u64",
          "sru": "u64",
          "cru": "u64",
          "mru": "u64"
        },
        "CertificationType": {
          "_enum": ["None", "Silver", "Gold"]
        },
        "CertificationCodeType": {
          "_enum": ["Farm", "Entity"]
        },
        "CertificationCodes": {
          "version": "u32",
          "id": "u32",
          "name": "Vec<u8>",
          "description": "Vec<u8>",
          "certification_code_type": "CertificationCodeType"
        },
        "PricingPolicy": {
          "version": "u32",
          "id": "u32",
          "name": "Vec<u8>",
          "currency": "Vec<u8>",
          "su": "u32",
          "cu": "u32",
          "nu": "u32"
        },
        "Address": "MultiAddress",
        "LookupSource": "MultiAddress",
        "PerDispatchClassU32": {
          "normal": "u32",
          "operational": "u32",
          "mandatory": "u32"
        },
        "BlockLength": {
          "max": "PerDispatchClassU32"
        },
        "BalanceOf": "Balance",
        "Public": "[u8;32]",
        "U16F16": "[u8; 4]",
        "VestingInfo": {
          "locked": "Balance",
          "perBlock": "Balance",
          "startingBlock": "BlockNumber",
          "tft_price": "U16F16",
          "lastReleasedBlock": "BlockNumber"
        },
        "StellarTransaction": {
          "amount": "Balance",
          "target": "MultiAddress"
        }
      }      
  };
  