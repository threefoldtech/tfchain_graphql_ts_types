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
        "city_id": "u32",
        "public_ips": "Vec<PublicIP>"
      },
      "PublicIP": {
        "ip": "Vec<u8>",
        "gateway": "Vec<u8>",
        "contract_id": "u64"
      },
      "Entity": {
        "version": "u32",
        "id": "u32",
        "name": "Vec<u8>",
        "country_id": "u32",
        "city_id": "u32",
        "account_id": "AccountId"
      },
      "Twin": {
        "version": "u32",
        "id": "u32",
        "account_id": "AccountId",
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
        "twin_id": "u32",
        "resources": "Resources",
        "location": "Location",
        "country_id": "u32",
        "city_id": "u32",
        "public_config": "Option<PublicConfig>"
      },
      "PublicConfig": {
        "ipv4": "Vec<u8>",
        "ipv6": "Vec<u8>",
        "gw4": "Vec<u8>",
        "gw6": "Vec<u8>"
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
        "_enum": [
          "Diy",
          "Certified"
        ]
      },
      "CertificationCodeType": {
        "_enum": [
          "Farm",
          "Entity"
        ]
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
        "unit": "Unit",
        "su": "u32",
        "cu": "u32",
        "nu": "u32",
        "ipu": "u32"
      },
      "Unit": {
        "_enum": [
          "Bytes",
          "Kilobytes",
          "Megabytes",
          "Gigabytes"
        ]
      },
      "Address": "MultiAddress",
      "LookupSource": "MultiAddress",
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
  