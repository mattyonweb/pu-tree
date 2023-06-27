export const allbuildings =
    [
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 12
      }
    ],
    "Recipes": [
      {
        "Inputs": [],
        "Outputs": [],
        "BuildingRecipeId": "@RIG=>",
        "DurationMs": 17280000,
        "RecipeName": "=>",
        "StandardRecipeName": "RIG:=>"
      }
    ],
    "BuildingId": "00e3d3d9ac2fc9ba7cac62519915dc43",
    "Name": "rig",
    "Ticker": "RIG",
    "Expertise": "RESOURCE_EXTRACTION",
    "Pioneers": 30,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 10,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.742896"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 6
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 8
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 12
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 4
          },
          {
            "CommodityName": "flux",
            "CommodityTicker": "FLX",
            "Amount": 4
          },
          {
            "CommodityName": "technetium",
            "CommodityTicker": "TC",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "enrichedTechnetium",
            "CommodityTicker": "ETC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xTC 4xREA 4xFLX@TNP=>1xETC",
        "DurationMs": 69120000,
        "RecipeName": "1xTC 4xREA 4xFLX=>1xETC",
        "StandardRecipeName": "TNP:4xFLX-4xREA-1xTC=>1xETC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "technetiumOxide",
            "CommodityTicker": "TCO",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "technetium",
            "CommodityTicker": "TC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xTCO@TNP=>1xTC 1xO",
        "DurationMs": 58752000,
        "RecipeName": "1xTCO=>1xTC 1xO",
        "StandardRecipeName": "TNP:1xTCO=>1xO-1xTC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "technetium",
            "CommodityTicker": "TC",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "technetiumStabilizers",
            "CommodityTicker": "TCS",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xTC@TNP=>3xTCS",
        "DurationMs": 43200000,
        "RecipeName": "1xTC=>3xTCS",
        "StandardRecipeName": "TNP:1xTC=>3xTCS"
      }
    ],
    "BuildingId": "0473a002be6c4feb92433cc819e10b5d",
    "Name": "technetiumProcessing",
    "Ticker": "TNP",
    "Expertise": "CHEMISTRY",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 80,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 30,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:14.178452"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "habitatUnit",
        "CommodityTicker": "HAB",
        "Amount": 5
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 16
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 16
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "artificialSoil",
        "CommodityTicker": "SOI",
        "Amount": 100
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 20
      },
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 10
      }
    ],
    "Recipes": [],
    "BuildingId": "06c4f7b717794c08f2913003c942e745",
    "Name": "planetaryProjectComfortSmall",
    "Ticker": "PAR",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 500,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.759483"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 3
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 3
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 150
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicDeckElements",
            "CommodityTicker": "BDE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "150xPE@PP1=>1xBDE",
        "DurationMs": 25920000,
        "RecipeName": "150xPE=>1xBDE",
        "StandardRecipeName": "PP1:150xPE=>1xBDE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicStructuralElements",
            "CommodityTicker": "BSE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xFE 2xLST@PP1=>1xBSE",
        "DurationMs": 21600000,
        "RecipeName": "1xFE 2xLST=>1xBSE",
        "StandardRecipeName": "PP1:1xFE-2xLST=>1xBSE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 50
          },
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicWindow",
            "CommodityTicker": "BTA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xFE 50xPE@PP1=>1xBTA",
        "DurationMs": 12960000,
        "RecipeName": "1xFE 50xPE=>1xBTA",
        "StandardRecipeName": "PP1:1xFE-50xPE=>1xBTA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 2
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicBulkhead",
            "CommodityTicker": "BBH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xFE 1xLST@PP1=>1xBBH",
        "DurationMs": 28512000,
        "RecipeName": "2xFE 1xLST=>1xBBH",
        "StandardRecipeName": "PP1:2xFE-1xLST=>1xBBH"
      }
    ],
    "BuildingId": "0d9c9787a38e11dd7f7cfec32245bb76",
    "Name": "prefabPlant1",
    "Ticker": "PP1",
    "Expertise": "CONSTRUCTION",
    "Pioneers": 80,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 19,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T18:30:28.468969"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "gasContainer",
            "CommodityTicker": "GC",
            "Amount": 6
          },
          {
            "CommodityName": "indigo",
            "CommodityTicker": "IND",
            "Amount": 1
          },
          {
            "CommodityName": "nylon",
            "CommodityTicker": "NL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "technicianClothing",
            "CommodityTicker": "HMS",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xNL 1xIND 6xGC@CLF=>10xHMS",
        "DurationMs": 60480000,
        "RecipeName": "1xNL 1xIND 6xGC=>10xHMS",
        "StandardRecipeName": "CLF:6xGC-1xIND-1xNL=>10xHMS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "holographicDisplay",
            "CommodityTicker": "HD",
            "Amount": 10
          },
          {
            "CommodityName": "silkProcessed",
            "CommodityTicker": "SIL",
            "Amount": 2
          },
          {
            "CommodityName": "bleach",
            "CommodityTicker": "BLE",
            "Amount": 1
          },
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "scientistClothing",
            "CommodityTicker": "LC",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "2xSIL 1xBLE 10xHD 10xPCB@CLF=>10xLC",
        "DurationMs": 69120000,
        "RecipeName": "2xSIL 1xBLE 10xHD 10xPCB=>10xLC",
        "StandardRecipeName": "CLF:1xBLE-10xHD-10xPCB-2xSIL=>10xLC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 5
          },
          {
            "CommodityName": "nylon",
            "CommodityTicker": "NL",
            "Amount": 5
          },
          {
            "CommodityName": "bleach",
            "CommodityTicker": "BLE",
            "Amount": 1
          },
          {
            "CommodityName": "sensor",
            "CommodityTicker": "SEN",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "engineerClothing",
            "CommodityTicker": "HSS",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "5xNL 1xBLE 5xSEN 5xPCB@CLF=>20xHSS",
        "DurationMs": 86400000,
        "RecipeName": "5xNL 1xBLE 5xSEN 5xPCB=>20xHSS",
        "StandardRecipeName": "CLF:1xBLE-5xNL-5xPCB-5xSEN=>20xHSS"
      }
    ],
    "BuildingId": "12aa694a199a8aa1272602e617c26ce0",
    "Name": "clothingFactory",
    "Ticker": "CLF",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 40,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 37,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.78469"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 10
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 8
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 16
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      },
      {
        "CommodityName": "mainFrameBlank",
        "CommodityTicker": "BMF",
        "Amount": 1
      },
      {
        "CommodityName": "audioDistributionSystem",
        "CommodityTicker": "ADS",
        "Amount": 1
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 16
      },
      {
        "CommodityName": "droneOperationsUnit",
        "CommodityTicker": "DOU",
        "Amount": 1
      }
    ],
    "Recipes": [],
    "BuildingId": "16d958f5b60e383c5e9f987a31b658a6",
    "Name": "planetaryProjectSafetyBig",
    "Ticker": "SDP",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.95441"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 6
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 6
      },
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 8
      },
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 8
      }
    ],
    "Recipes": [],
    "BuildingId": "181b4057c362f7b13cb87fdcf456cc45",
    "Name": "habitationLuxury",
    "Ticker": "HBL",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:41.044651"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 8
      },
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 4
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 8
      }
    ],
    "Recipes": [],
    "BuildingId": "1c5fd403a656bf1ab75e1759cdc8feac",
    "Name": "habitationManagers",
    "Ticker": "HBM",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 22,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:41.50137"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "solarPanel",
        "CommodityTicker": "SP",
        "Amount": 32
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 32
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 16
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 24
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 32
      },
      {
        "CommodityName": "workstationBlank",
        "CommodityTicker": "BWS",
        "Amount": 16
      },
      {
        "CommodityName": "mainFrameBlank",
        "CommodityTicker": "BMF",
        "Amount": 1
      }
    ],
    "Recipes": [],
    "BuildingId": "1eb7abda6a9ae345db1335a68b52e59f",
    "Name": "planetaryProjectCogc",
    "Ticker": "COG",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:58.918926"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "solarPanel",
        "CommodityTicker": "SP",
        "Amount": 32
      },
      {
        "CommodityName": "ftlFieldController",
        "CommodityTicker": "FFC",
        "Amount": 1
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 24
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 32
      },
      {
        "CommodityName": "targetingComputer",
        "CommodityTicker": "TAC",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 24
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 16
      }
    ],
    "Recipes": [],
    "BuildingId": "1f712eac2b8849b9d945b71576b3a23e",
    "Name": "corporationProjectFTLLaboratory",
    "Ticker": "CFL",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 100,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:51:01.39087"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 4
      }
    ],
    "Recipes": [],
    "BuildingId": "21f40515d5e310450bc7781f717f05af",
    "Name": "habitationEngineer",
    "Ticker": "HB4",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 16,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:37.825582"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "cryoUnit",
        "CommodityTicker": "CRU",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 16
      },
      {
        "CommodityName": "lifeSupportSystem",
        "CommodityTicker": "LIS",
        "Amount": 1
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 16
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 32
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 16
      },
      {
        "CommodityName": "solarPanel",
        "CommodityTicker": "SP",
        "Amount": 36
      }
    ],
    "Recipes": [],
    "BuildingId": "26a14d8bf24dbf05ab6763b1d01d415e",
    "Name": "corporationProjectImmortality",
    "Ticker": "CIM",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 100,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:51:01.406791"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 3
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 3
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 3
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 1
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xH2O 1xPG@FP=>10xDW",
        "DurationMs": 17280000,
        "RecipeName": "10xH2O 1xPG=>10xDW",
        "StandardRecipeName": "FP:10xH2O-1xPG=>10xDW"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 7
          }
        ],
        "BuildingRecipeId": "10xH2O@FP=>7xDW",
        "DurationMs": 8640000,
        "RecipeName": "10xH2O=>7xDW",
        "StandardRecipeName": "FP:10xH2O=>7xDW"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          },
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 1
          },
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "proteinPaste",
            "CommodityTicker": "PPA",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "1xALG 1xH2O 1xBEA@FP=>6xPPA",
        "DurationMs": 43200000,
        "RecipeName": "1xALG 1xH2O 1xBEA=>6xPPA",
        "StandardRecipeName": "FP:1xALG-1xBEA-1xH2O=>6xPPA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 3
          },
          {
            "CommodityName": "caffeinatedBeans",
            "CommodityTicker": "CAF",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pioneerLuxuryDrink",
            "CommodityTicker": "COF",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xCAF 3xDW@FP=>3xCOF",
        "DurationMs": 25920000,
        "RecipeName": "1xCAF 3xDW=>3xCOF",
        "StandardRecipeName": "FP:1xCAF-3xDW=>3xCOF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 1
          },
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xGRN 1xALG 1xNUT@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xGRN 1xALG 1xNUT=>10xRAT",
        "StandardRecipeName": "FP:1xALG-1xGRN-1xNUT=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 1
          },
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xGRN 1xALG 1xVEG@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xGRN 1xALG 1xVEG=>10xRAT",
        "StandardRecipeName": "FP:1xALG-1xGRN-1xVEG=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 1
          },
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xGRN 1xBEA 1xNUT@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xGRN 1xBEA 1xNUT=>10xRAT",
        "StandardRecipeName": "FP:1xBEA-1xGRN-1xNUT=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 1
          },
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 1
          },
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xGRN 1xBEA 1xVEG@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xGRN 1xBEA 1xVEG=>10xRAT",
        "StandardRecipeName": "FP:1xBEA-1xGRN-1xVEG=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 1
          },
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMAI 1xALG 1xNUT@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMAI 1xALG 1xNUT=>10xRAT",
        "StandardRecipeName": "FP:1xALG-1xMAI-1xNUT=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 1
          },
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 1
          },
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMAI 1xALG 1xVEG@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMAI 1xALG 1xVEG=>10xRAT",
        "StandardRecipeName": "FP:1xALG-1xMAI-1xVEG=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 1
          },
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMAI 1xBEA 1xNUT@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMAI 1xBEA 1xNUT=>10xRAT",
        "StandardRecipeName": "FP:1xBEA-1xMAI-1xNUT=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 1
          },
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 1
          },
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMAI 1xBEA 1xVEG@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMAI 1xBEA 1xVEG=>10xRAT",
        "StandardRecipeName": "FP:1xBEA-1xMAI-1xVEG=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 1
          },
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 1
          },
          {
            "CommodityName": "mushrooms",
            "CommodityTicker": "MUS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMUS 1xNUT 1xGRN@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMUS 1xNUT 1xGRN=>10xRAT",
        "StandardRecipeName": "FP:1xGRN-1xMUS-1xNUT=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 1
          },
          {
            "CommodityName": "mushrooms",
            "CommodityTicker": "MUS",
            "Amount": 1
          },
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMUS 1xNUT 1xMAI@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMUS 1xNUT 1xMAI=>10xRAT",
        "StandardRecipeName": "FP:1xMAI-1xMUS-1xNUT=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "mushrooms",
            "CommodityTicker": "MUS",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 1
          },
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMUS 1xVEG 1xGRN@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMUS 1xVEG 1xGRN=>10xRAT",
        "StandardRecipeName": "FP:1xGRN-1xMUS-1xVEG=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 1
          },
          {
            "CommodityName": "mushrooms",
            "CommodityTicker": "MUS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xMUS 1xVEG 1xMAI@FP=>10xRAT",
        "DurationMs": 21600000,
        "RecipeName": "1xMUS 1xVEG 1xMAI=>10xRAT",
        "StandardRecipeName": "FP:1xMAI-1xMUS-1xVEG=>10xRAT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 2
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "proteinPaste",
            "CommodityTicker": "PPA",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "2xALG 1xH2O@FP=>4xPPA",
        "DurationMs": 25920000,
        "RecipeName": "2xALG 1xH2O=>4xPPA",
        "StandardRecipeName": "FP:2xALG-1xH2O=>4xPPA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          },
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "proteinPaste",
            "CommodityTicker": "PPA",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "2xBEA 1xH2O@FP=>4xPPA",
        "DurationMs": 25920000,
        "RecipeName": "2xBEA 1xH2O=>4xPPA",
        "StandardRecipeName": "FP:2xBEA-1xH2O=>4xPPA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "meat",
            "CommodityTicker": "MTP",
            "Amount": 1
          },
          {
            "CommodityName": "engineerFood",
            "CommodityTicker": "FIM",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "scientistFood",
            "CommodityTicker": "MEA",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xFIM 1xMTP@FP=>2xMEA",
        "DurationMs": 56160000,
        "RecipeName": "2xFIM 1xMTP=>2xMEA",
        "StandardRecipeName": "FP:2xFIM-1xMTP=>2xMEA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "rations",
            "CommodityTicker": "RAT",
            "Amount": 2
          },
          {
            "CommodityName": "herbs",
            "CommodityTicker": "HER",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "engineerFood",
            "CommodityTicker": "FIM",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xRAT 1xHER@FP=>2xFIM",
        "DurationMs": 43200000,
        "RecipeName": "2xRAT 1xHER=>2xFIM",
        "StandardRecipeName": "FP:1xHER-2xRAT=>2xFIM"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 5
          },
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 5
          },
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "allPurposeFodder",
            "CommodityTicker": "FOD",
            "Amount": 16
          }
        ],
        "BuildingRecipeId": "5xNUT 5xMAI 5xVEG@FP=>16xFOD",
        "DurationMs": 43200000,
        "RecipeName": "5xNUT 5xMAI 5xVEG=>16xFOD",
        "StandardRecipeName": "FP:5xMAI-5xNUT-5xVEG=>16xFOD"
      }
    ],
    "BuildingId": "290f084c16f62aee1bb8e4a97adfc08b",
    "Name": "foodProcessor",
    "Ticker": "FP",
    "Expertise": "FOOD_INDUSTRIES",
    "Pioneers": 40,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 12,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.762108"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 2
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 10
          },
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "floatingTank",
            "CommodityTicker": "FLO",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xAL 4xSTL@FS=>1xFLO",
        "DurationMs": 69120000,
        "RecipeName": "10xAL 4xSTL=>1xFLO",
        "StandardRecipeName": "FS:10xAL-4xSTL=>1xFLO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "copper",
            "CommodityTicker": "CU",
            "Amount": 2
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "copperAluminiumAlloy",
            "CommodityTicker": "BRO",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xAL 2xCU@FS=>3xBRO",
        "DurationMs": 34560000,
        "RecipeName": "1xAL 2xCU=>3xBRO",
        "StandardRecipeName": "FS:1xAL-2xCU=>3xBRO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "goldIronAlloy",
            "CommodityTicker": "BGO",
            "Amount": 1
          },
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 300
          }
        ],
        "Outputs": [
          {
            "CommodityName": "blueGoldConnectors",
            "CommodityTicker": "BGC",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xBGO 300xPE@FS=>10xBGC",
        "DurationMs": 25920000,
        "RecipeName": "1xBGO 300xPE=>10xBGC",
        "StandardRecipeName": "FS:1xBGO-300xPE=>10xBGC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 300
          },
          {
            "CommodityName": "copper",
            "CommodityTicker": "CU",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "copperConnectors",
            "CommodityTicker": "BCO",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xCU 300xPE@FS=>10xBCO",
        "DurationMs": 25920000,
        "RecipeName": "1xCU 300xPE=>10xBCO",
        "StandardRecipeName": "FS:1xCU-300xPE=>10xBCO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 16
          }
        ],
        "BuildingRecipeId": "1xFE@FS=>16xSFK",
        "DurationMs": 10368000,
        "RecipeName": "1xFE=>16xSFK",
        "StandardRecipeName": "FS:1xFE=>16xSFK"
      },
      {
        "Inputs": [
          {
            "CommodityName": "goldCopperAlloy",
            "CommodityTicker": "RGO",
            "Amount": 1
          },
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 300
          }
        ],
        "Outputs": [
          {
            "CommodityName": "redGoldConnectors",
            "CommodityTicker": "HCC",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xRGO 300xPE@FS=>10xHCC",
        "DurationMs": 25920000,
        "RecipeName": "1xRGO 300xPE=>10xHCC",
        "StandardRecipeName": "FS:300xPE-1xRGO=>10xHCC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicFuelRod",
            "CommodityTicker": "BFR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSTL 1xAL@FS=>1xBFR",
        "DurationMs": 43200000,
        "RecipeName": "1xSTL 1xAL=>1xBFR",
        "StandardRecipeName": "FS:1xAL-1xSTL=>1xBFR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "1xSTL@FS=>8xMFK",
        "DurationMs": 10368000,
        "RecipeName": "1xSTL=>8xMFK",
        "StandardRecipeName": "FS:1xSTL=>8xMFK"
      },
      {
        "Inputs": [
          {
            "CommodityName": "zirconium",
            "CommodityTicker": "ZR",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedFuelRod",
            "CommodityTicker": "AFR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xZR 1xAL@FS=>1xAFR",
        "DurationMs": 51840000,
        "RecipeName": "1xZR 1xAL=>1xAFR",
        "StandardRecipeName": "FS:1xAL-1xZR=>1xAFR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 6
          },
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "universalToolset",
            "CommodityTicker": "UTS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xSFK 6xFE@FS=>1xUTS",
        "DurationMs": 34560000,
        "RecipeName": "2xSFK 6xFE=>1xUTS",
        "StandardRecipeName": "FS:6xFE-2xSFK=>1xUTS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 2
          },
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 2
          },
          {
            "CommodityName": "holographicGlasses",
            "CommodityTicker": "HOG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "surgicalEquipment",
            "CommodityTicker": "SEQ",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xSTL 2xTI 1xHOG@FS=>1xSEQ",
        "DurationMs": 25920000,
        "RecipeName": "2xSTL 2xTI 1xHOG=>1xSEQ",
        "StandardRecipeName": "FS:1xHOG-2xSTL-2xTI=>1xSEQ"
      },
      {
        "Inputs": [
          {
            "CommodityName": "gold",
            "CommodityTicker": "AU",
            "Amount": 4
          },
          {
            "CommodityName": "copper",
            "CommodityTicker": "CU",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "goldCopperAlloy",
            "CommodityTicker": "RGO",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "4xAU 1xCU@FS=>5xRGO",
        "DurationMs": 34560000,
        "RecipeName": "4xAU 1xCU=>5xRGO",
        "StandardRecipeName": "FS:4xAU-1xCU=>5xRGO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "gold",
            "CommodityTicker": "AU",
            "Amount": 4
          },
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "goldIronAlloy",
            "CommodityTicker": "BGO",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "4xAU 1xFE@FS=>5xBGO",
        "DurationMs": 34560000,
        "RecipeName": "4xAU 1xFE=>5xBGO",
        "StandardRecipeName": "FS:4xAU-1xFE=>5xBGO"
      }
    ],
    "BuildingId": "2d08c72c3801061979897525a8915fb2",
    "Name": "fineSmithy",
    "Ticker": "FS",
    "Expertise": "METALLURGY",
    "Pioneers": 0,
    "Settlers": 50,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:02:02.441788"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 20
      },
      {
        "CommodityName": "surgeryUnit",
        "CommodityTicker": "SU",
        "Amount": 1
      },
      {
        "CommodityName": "traumaCareUnit",
        "CommodityTicker": "TCU",
        "Amount": 1
      },
      {
        "CommodityName": "droneOperationsUnit",
        "CommodityTicker": "DOU",
        "Amount": 1
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 16
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 400
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 16
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 20
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 24
      }
    ],
    "Recipes": [],
    "BuildingId": "2f72b27f7ca76116d50d153f7e57392c",
    "Name": "planetaryProjectHealthBig",
    "Ticker": "HOS",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.961022"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 12
      },
      {
        "CommodityName": "laboratoryUnit",
        "CommodityTicker": "LU",
        "Amount": 4
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 16
      },
      {
        "CommodityName": "mainFrameBlank",
        "CommodityTicker": "BMF",
        "Amount": 2
      },
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 16
      },
      {
        "CommodityName": "logisticsSystem",
        "CommodityTicker": "LOG",
        "Amount": 1
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 400
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 30
      },
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 12
      }
    ],
    "Recipes": [],
    "BuildingId": "322feeb5d15b6109a92b028e711c412e",
    "Name": "planetaryProjectEducationBig",
    "Ticker": "UNI",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.95189"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 4
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fattyNuts",
            "CommodityTicker": "NUT",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "1xH2O@FRM=>12xNUT",
        "DurationMs": 129600000,
        "RecipeName": "1xH2O=>12xNUT",
        "StandardRecipeName": "FRM:1xH2O=>12xNUT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "1xH2O@FRM=>2xBEA",
        "DurationMs": 21600000,
        "RecipeName": "1xH2O=>2xBEA",
        "StandardRecipeName": "FRM:1xH2O=>2xBEA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xH2O@FRM=>4xGRN",
        "DurationMs": 43200000,
        "RecipeName": "1xH2O=>4xGRN",
        "StandardRecipeName": "FRM:1xH2O=>4xGRN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 4
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "cottonRaw",
            "CommodityTicker": "RCO",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xH2O 4xNS@FRM=>2xRCO",
        "DurationMs": 34560000,
        "RecipeName": "2xH2O 4xNS=>2xRCO",
        "StandardRecipeName": "FRM:2xH2O-4xNS=>2xRCO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "cottonRaw",
            "CommodityTicker": "RCO",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xH2O@FRM=>1xRCO",
        "DurationMs": 51840000,
        "RecipeName": "2xH2O=>1xRCO",
        "StandardRecipeName": "FRM:2xH2O=>1xRCO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "2xH2O@FRM=>4xHCP",
        "DurationMs": 43200000,
        "RecipeName": "2xH2O=>4xHCP",
        "StandardRecipeName": "FRM:2xH2O=>4xHCP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "3xH2O@FRM=>4xVEG",
        "DurationMs": 38880000,
        "RecipeName": "3xH2O=>4xVEG",
        "StandardRecipeName": "FRM:3xH2O=>4xVEG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 1
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "herbs",
            "CommodityTicker": "HER",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xH2O 1xDDT@FRM=>4xHER",
        "DurationMs": 172800000,
        "RecipeName": "4xH2O 1xDDT=>4xHER",
        "StandardRecipeName": "FRM:1xDDT-4xH2O=>4xHER"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "4xH2O@FRM=>12xMAI",
        "DurationMs": 120960000,
        "RecipeName": "4xH2O=>12xMAI",
        "StandardRecipeName": "FRM:4xH2O=>12xMAI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xH2O@FRM=>4xGRN",
        "DurationMs": 32400000,
        "RecipeName": "4xH2O=>4xGRN",
        "StandardRecipeName": "FRM:4xH2O=>4xGRN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "proteinBeans",
            "CommodityTicker": "BEA",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "6xH2O@FRM=>4xBEA",
        "DurationMs": 34560000,
        "RecipeName": "6xH2O=>4xBEA",
        "StandardRecipeName": "FRM:6xH2O=>4xBEA"
      }
    ],
    "BuildingId": "36a347fc5785101697983ddb009363ed",
    "Name": "farm",
    "Ticker": "FRM",
    "Expertise": "AGRICULTURE",
    "Pioneers": 50,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 30,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:32.913757"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 6
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 12
      },
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 8
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 250
      },
      {
        "CommodityName": "communicationSystem",
        "CommodityTicker": "COM",
        "Amount": 1
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 20
      },
      {
        "CommodityName": "logisticsSystem",
        "CommodityTicker": "LOG",
        "Amount": 1
      },
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 12
      }
    ],
    "Recipes": [],
    "BuildingId": "39d4f5709ce750c89da91628f1c2c4a0",
    "Name": "planetaryProjectEducationSmall",
    "Ticker": "LIB",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 500,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.952051"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 24
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 20
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 12
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 24
      }
    ],
    "Recipes": [],
    "BuildingId": "3c44a4cfa7e2a107f89970ca9ee29dc2",
    "Name": "planetaryProjectWarehouse",
    "Ticker": "PWH",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.764853"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 6
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "gasVent",
            "CommodityTicker": "GV",
            "Amount": 1
          },
          {
            "CommodityName": "borosilicate",
            "CommodityTicker": "BOS",
            "Amount": 10
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "combustionChamber",
            "CommodityTicker": "CHA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xBOS 1xGV 1xHE@WEL=>1xCHA",
        "DurationMs": 38880000,
        "RecipeName": "10xBOS 1xGV 1xHE=>1xCHA",
        "StandardRecipeName": "WEL:10xBOS-1xGV-1xHE=>1xCHA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "basicStructuralElements",
            "CommodityTicker": "BSE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "flowControl",
            "CommodityTicker": "FC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xAL 1xBSE 1xHE@WEL=>1xFC",
        "DurationMs": 34560000,
        "RecipeName": "1xAL 1xBSE 1xHE=>1xFC",
        "StandardRecipeName": "WEL:1xAL-1xBSE-1xHE=>1xFC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "gasVent",
            "CommodityTicker": "GV",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xAL 1xHE@WEL=>1xGV",
        "DurationMs": 21600000,
        "RecipeName": "1xAL 1xHE=>1xGV",
        "StandardRecipeName": "WEL:1xAL-1xHE=>1xGV"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "gasContainer",
            "CommodityTicker": "GC",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xFE 1xAL 1xHE@WEL=>10xGC",
        "DurationMs": 25920000,
        "RecipeName": "1xFE 1xAL 1xHE=>10xGC",
        "StandardRecipeName": "WEL:1xAL-1xFE-1xHE=>10xGC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fluidPiping",
            "CommodityTicker": "FLP",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "1xFE 1xAL 1xHE@WEL=>6xFLP",
        "DurationMs": 43200000,
        "RecipeName": "1xFE 1xAL 1xHE=>6xFLP",
        "StandardRecipeName": "WEL:1xAL-1xFE-1xHE=>6xFLP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          },
          {
            "CommodityName": "iodine",
            "CommodityTicker": "I",
            "Amount": 1
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "metalHalideLamp",
            "CommodityTicker": "MHL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xI 1xFE 1xHE@WEL=>1xMHL",
        "DurationMs": 60480000,
        "RecipeName": "1xI 1xFE 1xHE=>1xMHL",
        "StandardRecipeName": "WEL:1xFE-1xHE-1xI=>1xMHL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "nanoFiber",
            "CommodityTicker": "NFI",
            "Amount": 20
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "structuralSpacecraftComponent",
            "CommodityTicker": "SSC",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "20xNFI 2xAL 1xHE@WEL=>6xSSC",
        "DurationMs": 8640000,
        "RecipeName": "20xNFI 2xAL 1xHE=>6xSSC",
        "StandardRecipeName": "WEL:2xAL-1xHE-20xNFI=>6xSSC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 2
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "truss",
            "CommodityTicker": "TRU",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "2xAL 1xHE@WEL=>6xTRU",
        "DurationMs": 17280000,
        "RecipeName": "2xAL 1xHE=>6xTRU",
        "StandardRecipeName": "WEL:2xAL-1xHE=>6xTRU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "ceramicFabric",
            "CommodityTicker": "CF",
            "Amount": 2
          },
          {
            "CommodityName": "beryllium",
            "CommodityTicker": "BE",
            "Amount": 2
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicThermalProtectionMaterial",
            "CommodityTicker": "THP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "2xBE 2xCF 1xHE@WEL=>4xTHP",
        "DurationMs": 15552000,
        "RecipeName": "2xBE 2xCF 1xHE=>4xTHP",
        "StandardRecipeName": "WEL:2xBE-2xCF-1xHE=>4xTHP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "droneFrame",
            "CommodityTicker": "DRF",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "6xAL 1xHE@WEL=>1xDRF",
        "DurationMs": 8640000,
        "RecipeName": "6xAL 1xHE=>1xDRF",
        "StandardRecipeName": "WEL:6xAL-1xHE=>1xDRF"
      }
    ],
    "BuildingId": "3d12eaf035ff94468384bbbd94993216",
    "Name": "weldingPlant",
    "Ticker": "WEL",
    "Expertise": "CONSTRUCTION",
    "Pioneers": 70,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 19,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.741601"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 4
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 2
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 25
          },
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 100
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pioneerClothing",
            "CommodityTicker": "OVE",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "100xPE 25xPG@BMP=>20xOVE",
        "DurationMs": 51840000,
        "RecipeName": "100xPE 25xPG=>20xOVE",
        "StandardRecipeName": "BMP:100xPE-25xPG=>20xOVE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          },
          {
            "CommodityName": "pioneerClothing",
            "CommodityTicker": "OVE",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerClothing",
            "CommodityTicker": "EXO",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xOVE 1xAL 1xMFK@BMP=>10xEXO",
        "DurationMs": 14688000,
        "RecipeName": "10xOVE 1xAL 1xMFK=>10xEXO",
        "StandardRecipeName": "BMP:1xAL-1xMFK-10xOVE=>10xEXO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "pioneerClothing",
            "CommodityTicker": "OVE",
            "Amount": 10
          },
          {
            "CommodityName": "waferSmall",
            "CommodityTicker": "SWF",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerClothing",
            "CommodityTicker": "EXO",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xOVE 1xAL 1xSWF@BMP=>10xEXO",
        "DurationMs": 12960000,
        "RecipeName": "10xOVE 1xAL 1xSWF=>10xEXO",
        "StandardRecipeName": "BMP:1xAL-10xOVE-1xSWF=>10xEXO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "pioneerClothing",
            "CommodityTicker": "OVE",
            "Amount": 10
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerClothing",
            "CommodityTicker": "EXO",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xOVE 1xAL@BMP=>10xEXO",
        "DurationMs": 17280000,
        "RecipeName": "10xOVE 1xAL=>10xEXO",
        "StandardRecipeName": "BMP:1xAL-10xOVE=>10xEXO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 2
          },
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 200
          }
        ],
        "BuildingRecipeId": "1xC 2xH@BMP=>200xPE",
        "DurationMs": 24192000,
        "RecipeName": "1xC 2xH=>200xPE",
        "StandardRecipeName": "BMP:1xC-2xH=>200xPE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 10
          },
          {
            "CommodityName": "cottonProcessed",
            "CommodityTicker": "COT",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pioneerClothing",
            "CommodityTicker": "OVE",
            "Amount": 30
          }
        ],
        "BuildingRecipeId": "1xCOT 10xPG@BMP=>30xOVE",
        "DurationMs": 25920000,
        "RecipeName": "1xCOT 10xPG=>30xOVE",
        "StandardRecipeName": "BMP:1xCOT-10xPG=>30xOVE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 50
          },
          {
            "CommodityName": "cottonProcessed",
            "CommodityTicker": "COT",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pioneerLuxuryClothing",
            "CommodityTicker": "PWO",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "1xCOT 50xPG@BMP=>20xPWO",
        "DurationMs": 25920000,
        "RecipeName": "1xCOT 50xPG=>20xPWO",
        "StandardRecipeName": "BMP:1xCOT-50xPG=>20xPWO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "insuFoam",
            "CommodityTicker": "INS",
            "Amount": 8
          },
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 1
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerLuxuryTools",
            "CommodityTicker": "REP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xMFK 1xSFK 8xINS@BMP=>4xREP",
        "DurationMs": 21600000,
        "RecipeName": "1xMFK 1xSFK 8xINS=>4xREP",
        "StandardRecipeName": "BMP:8xINS-1xMFK-1xSFK=>4xREP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "magnesite",
            "CommodityTicker": "MGS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "magnesium",
            "CommodityTicker": "MG",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "1xMGS@BMP=>6xMG",
        "DurationMs": 10368000,
        "RecipeName": "1xMGS=>6xMG",
        "StandardRecipeName": "BMP:1xMGS=>6xMG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "cottonRaw",
            "CommodityTicker": "RCO",
            "Amount": 1
          },
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pioneerClothing",
            "CommodityTicker": "OVE",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "1xRCO 50xPE@BMP=>20xOVE",
        "DurationMs": 25920000,
        "RecipeName": "1xRCO 50xPE=>20xOVE",
        "StandardRecipeName": "BMP:50xPE-1xRCO=>20xOVE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sulfur",
            "CommodityTicker": "S",
            "Amount": 1
          },
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 30
          }
        ],
        "Outputs": [
          {
            "CommodityName": "sealant",
            "CommodityTicker": "SEA",
            "Amount": 30
          }
        ],
        "BuildingRecipeId": "1xS 1xSI 30xPG@BMP=>30xSEA",
        "DurationMs": 25920000,
        "RecipeName": "1xS 1xSI 30xPG=>30xSEA",
        "StandardRecipeName": "BMP:30xPG-1xS-1xSI=>30xSEA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "transistor",
            "CommodityTicker": "TRN",
            "Amount": 1
          },
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerTools",
            "CommodityTicker": "PT",
            "Amount": 7
          }
        ],
        "BuildingRecipeId": "1xSTL 1xTRN@BMP=>7xPT",
        "DurationMs": 30240000,
        "RecipeName": "1xSTL 1xTRN=>7xPT",
        "StandardRecipeName": "BMP:1xSTL-1xTRN=>7xPT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          },
          {
            "CommodityName": "wolfram",
            "CommodityTicker": "W",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerTools",
            "CommodityTicker": "PT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xSTL 1xW@BMP=>10xPT",
        "DurationMs": 30240000,
        "RecipeName": "1xSTL 1xW=>10xPT",
        "StandardRecipeName": "BMP:1xSTL-1xW=>10xPT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          },
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerTools",
            "CommodityTicker": "PT",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "1xSTL 2xSFK@BMP=>6xPT",
        "DurationMs": 30240000,
        "RecipeName": "1xSTL 2xSFK=>6xPT",
        "StandardRecipeName": "BMP:2xSFK-1xSTL=>6xPT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerTools",
            "CommodityTicker": "PT",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "1xSTL@BMP=>5xPT",
        "DurationMs": 30240000,
        "RecipeName": "1xSTL=>5xPT",
        "StandardRecipeName": "BMP:1xSTL=>5xPT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 10
          },
          {
            "CommodityName": "pioneerClothing",
            "CommodityTicker": "OVE",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "safetyUniform",
            "CommodityTicker": "SUN",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "20xOVE 10xC@BMP=>20xSUN",
        "DurationMs": 17280000,
        "RecipeName": "20xOVE 10xC=>20xSUN",
        "StandardRecipeName": "BMP:10xC-20xOVE=>20xSUN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "epoxy",
            "CommodityTicker": "EPO",
            "Amount": 20
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "officeSupplies",
            "CommodityTicker": "OFF",
            "Amount": 50
          }
        ],
        "BuildingRecipeId": "20xPG 20xEPO@BMP=>50xOFF",
        "DurationMs": 17280000,
        "RecipeName": "20xPG 20xEPO=>50xOFF",
        "StandardRecipeName": "BMP:20xEPO-20xPG=>50xOFF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "caliche",
            "CommodityTicker": "CLI",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "iodine",
            "CommodityTicker": "I",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "3xCLI@BMP=>1xI",
        "DurationMs": 17280000,
        "RecipeName": "3xCLI=>1xI",
        "StandardRecipeName": "BMP:3xCLI=>1xI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 2
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mineralConstructionGranulate",
            "CommodityTicker": "MCG",
            "Amount": 50
          }
        ],
        "BuildingRecipeId": "4xLST 2xSIO@BMP=>50xMCG",
        "DurationMs": 21600000,
        "RecipeName": "4xLST 2xSIO=>50xMCG",
        "StandardRecipeName": "BMP:4xLST-2xSIO=>50xMCG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 50
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "medicalStretcher",
            "CommodityTicker": "STR",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "50xPE 4xAL@BMP=>2xSTR",
        "DurationMs": 25920000,
        "RecipeName": "50xPE 4xAL=>2xSTR",
        "StandardRecipeName": "BMP:4xAL-50xPE=>2xSTR"
      }
    ],
    "BuildingId": "42bacbcc4bdbd98a6dddb395981fede7",
    "Name": "basicMaterialsPlant",
    "Ticker": "BMP",
    "Expertise": "MANUFACTURING",
    "Pioneers": 100,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 12,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T18:30:28.432574"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 32
      },
      {
        "CommodityName": "solarPanel",
        "CommodityTicker": "SP",
        "Amount": 24
      },
      {
        "CommodityName": "workstationBlank",
        "CommodityTicker": "BWS",
        "Amount": 8
      },
      {
        "CommodityName": "mainFrameBlank",
        "CommodityTicker": "BMF",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 16
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 32
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 8
      }
    ],
    "Recipes": [],
    "BuildingId": "4ae503904df3cd0240143f297b4d6a7a",
    "Name": "corporationProjectHeadquarters",
    "Ticker": "COR",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 100,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:51:01.381905"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 6
      },
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 6
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 4
      },
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 4
      }
    ],
    "Recipes": [],
    "BuildingId": "4bdcc7fed3606d7a403fd87d91ba178e",
    "Name": "habitationScientist",
    "Ticker": "HB5",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 18,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:38.613074"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 10
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 12
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 8
      },
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 8
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 8
      }
    ],
    "Recipes": [],
    "BuildingId": "4c75ed7cfcdc8f819a32621ac7bb3f01",
    "Name": "planetaryProjectLocalMarket",
    "Ticker": "LM",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 500,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.785883"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 2
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 2
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 4
      }
    ],
    "Recipes": [],
    "BuildingId": "52e8993d1df629b150d5800cf4066003",
    "Name": "habitationBarracks",
    "Ticker": "HBB",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 15,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:02:02.489567"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 6
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 6
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 2
      }
    ],
    "Recipes": [],
    "BuildingId": "5344702b77c50c5439acfc8438e6f004",
    "Name": "storageFacility",
    "Ticker": "STO",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 15,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.770716"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 100
          },
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 1
          },
          {
            "CommodityName": "argon",
            "CommodityTicker": "AR",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "insuFoam",
            "CommodityTicker": "INS",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "100xPE 1xAR 1xTHF@PP3=>20xINS",
        "DurationMs": 21600000,
        "RecipeName": "100xPE 1xAR 1xTHF=>20xINS",
        "StandardRecipeName": "PP3:1xAR-100xPE-1xTHF=>20xINS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          },
          {
            "CommodityName": "epoxy",
            "CommodityTicker": "EPO",
            "Amount": 50
          },
          {
            "CommodityName": "basicBulkhead",
            "CommodityTicker": "BBH",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reinforcedBulkhead",
            "CommodityTicker": "RBH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBBH 1xSTL 50xEPO@PP3=>1xRBH",
        "DurationMs": 34560000,
        "RecipeName": "1xBBH 1xSTL 50xEPO=>1xRBH",
        "StandardRecipeName": "PP3:1xBBH-50xEPO-1xSTL=>1xRBH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "epoxy",
            "CommodityTicker": "EPO",
            "Amount": 100
          },
          {
            "CommodityName": "lightweightDeckElements",
            "CommodityTicker": "LDE",
            "Amount": 1
          },
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reinforcedDeckElements",
            "CommodityTicker": "RDE",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "1xLDE 100xEPO 1xKV@PP3=>2xRDE",
        "DurationMs": 60480000,
        "RecipeName": "1xLDE 100xEPO 1xKV=>2xRDE",
        "StandardRecipeName": "PP3:100xEPO-1xKV-1xLDE=>2xRDE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "reinforcedTranslucentMaterial",
            "CommodityTicker": "RG",
            "Amount": 6
          },
          {
            "CommodityName": "lightweightWindow",
            "CommodityTicker": "LTA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reinforcedWindow",
            "CommodityTicker": "RTA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xLTA 6xRG@PP3=>1xRTA",
        "DurationMs": 34560000,
        "RecipeName": "1xLTA 6xRG=>1xRTA",
        "StandardRecipeName": "PP3:1xLTA-6xRG=>1xRTA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "magnetite",
            "CommodityTicker": "MAG",
            "Amount": 1
          },
          {
            "CommodityName": "lightweightDeckElements",
            "CommodityTicker": "LDE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "magneticFloor",
            "CommodityTicker": "MGC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xMAG 1xLDE@PP3=>1xMGC",
        "DurationMs": 95040000,
        "RecipeName": "1xMAG 1xLDE=>1xMGC",
        "StandardRecipeName": "PP3:1xLDE-1xMAG=>1xMGC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nanoFiber",
            "CommodityTicker": "NFI",
            "Amount": 250
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pressureShielding",
            "CommodityTicker": "PSH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xTI 250xNFI@PP3=>1xPSH",
        "DurationMs": 34560000,
        "RecipeName": "1xTI 250xNFI=>1xPSH",
        "StandardRecipeName": "PP3:250xNFI-1xTI=>1xPSH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          },
          {
            "CommodityName": "basicStructuralElements",
            "CommodityTicker": "BSE",
            "Amount": 2
          },
          {
            "CommodityName": "epoxy",
            "CommodityTicker": "EPO",
            "Amount": 225
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reinforcedStructuralElements",
            "CommodityTicker": "RSE",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xBSE 1xSTL 225xEPO@PP3=>2xRSE",
        "DurationMs": 60480000,
        "RecipeName": "2xBSE 1xSTL 225xEPO=>2xRSE",
        "StandardRecipeName": "PP3:2xBSE-225xEPO-1xSTL=>2xRSE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "technetiumStabilizers",
            "CommodityTicker": "TCS",
            "Amount": 1
          },
          {
            "CommodityName": "lightweightStructuralElements",
            "CommodityTicker": "LSE",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "hardenedStructuralElements",
            "CommodityTicker": "HSE",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xLSE 1xTCS@PP3=>2xHSE",
        "DurationMs": 56160000,
        "RecipeName": "2xLSE 1xTCS=>2xHSE",
        "StandardRecipeName": "PP3:2xLSE-1xTCS=>2xHSE"
      }
    ],
    "BuildingId": "558e4d0bdfd20a2e50a8161a6424a44f",
    "Name": "prefabPlant3",
    "Ticker": "PP3",
    "Expertise": "CONSTRUCTION",
    "Pioneers": 0,
    "Settlers": 20,
    "Technicians": 40,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 32,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.735697"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 4
          },
          {
            "CommodityName": "sensor",
            "CommodityTicker": "SEN",
            "Amount": 16
          }
        ],
        "Outputs": [
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "16xSEN 4xPCB@ELP=>1xSAR",
        "DurationMs": 57888000,
        "RecipeName": "16xSEN 4xPCB=>1xSAR",
        "StandardRecipeName": "ELP:4xPCB-16xSEN=>1xSAR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "copperConnectors",
            "CommodityTicker": "BCO",
            "Amount": 2
          },
          {
            "CommodityName": "twoDimensionalDisplay",
            "CommodityTicker": "DIS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "touchScreen",
            "CommodityTicker": "CD",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xDIS 2xBCO@ELP=>1xCD",
        "DurationMs": 57888000,
        "RecipeName": "1xDIS 2xBCO=>1xCD",
        "StandardRecipeName": "ELP:2xBCO-1xDIS=>1xCD"
      },
      {
        "Inputs": [
          {
            "CommodityName": "waferSmall",
            "CommodityTicker": "SWF",
            "Amount": 6
          },
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 1
          },
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 4
          },
          {
            "CommodityName": "gold",
            "CommodityTicker": "AU",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "antennaArray",
            "CommodityTicker": "AAR",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xKV 2xAU 4xPCB 6xSWF@ELP=>3xAAR",
        "DurationMs": 57888000,
        "RecipeName": "1xKV 2xAU 4xPCB 6xSWF=>3xAAR",
        "StandardRecipeName": "ELP:2xAU-1xKV-4xPCB-6xSWF=>3xAAR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 10
          },
          {
            "CommodityName": "bacteria",
            "CommodityTicker": "BAC",
            "Amount": 10
          },
          {
            "CommodityName": "magnetite",
            "CommodityTicker": "MAG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "waterFilter",
            "CommodityTicker": "AWF",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "1xMAG 10xBAC 10xPE@ELP=>5xAWF",
        "DurationMs": 56160000,
        "RecipeName": "1xMAG 10xBAC 10xPE=>5xAWF",
        "StandardRecipeName": "ELP:10xBAC-1xMAG-10xPE=>5xAWF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "holographicDisplay",
            "CommodityTicker": "HD",
            "Amount": 1
          },
          {
            "CommodityName": "motherBoard",
            "CommodityTicker": "MB",
            "Amount": 1
          },
          {
            "CommodityName": "mediumDeviceCover",
            "CommodityTicker": "DCM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "workstationBlank",
            "CommodityTicker": "BWS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xMB 1xDCM 1xHD@ELP=>1xBWS",
        "DurationMs": 43200000,
        "RecipeName": "1xMB 1xDCM 1xHD=>1xBWS",
        "StandardRecipeName": "ELP:1xDCM-1xHD-1xMB=>1xBWS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "motherBoard",
            "CommodityTicker": "MB",
            "Amount": 1
          },
          {
            "CommodityName": "smallDeviceCover",
            "CommodityTicker": "DCS",
            "Amount": 1
          },
          {
            "CommodityName": "touchScreen",
            "CommodityTicker": "CD",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "touchDeviceBlank",
            "CommodityTicker": "HPC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xMB 1xDCS 1xCD@ELP=>1xHPC",
        "DurationMs": 30240000,
        "RecipeName": "1xMB 1xDCS 1xCD=>1xHPC",
        "StandardRecipeName": "ELP:1xCD-1xDCS-1xMB=>1xHPC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tensorProcessingUnit",
            "CommodityTicker": "TPU",
            "Amount": 1
          },
          {
            "CommodityName": "largeDeviceCover",
            "CommodityTicker": "DCL",
            "Amount": 1
          },
          {
            "CommodityName": "coolingFan",
            "CommodityTicker": "FAN",
            "Amount": 1
          },
          {
            "CommodityName": "motherBoard",
            "CommodityTicker": "MB",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mainFrameBlank",
            "CommodityTicker": "BMF",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xTPU 1xFAN 1xMB 1xDCL@ELP=>1xBMF",
        "DurationMs": 60480000,
        "RecipeName": "1xTPU 1xFAN 1xMB 1xDCL=>1xBMF",
        "StandardRecipeName": "ELP:1xDCL-1xFAN-1xMB-1xTPU=>1xBMF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largeCapacitorBank",
            "CommodityTicker": "CBL",
            "Amount": 1
          },
          {
            "CommodityName": "ceramicTungstenFabric",
            "CommodityTicker": "CTF",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largeEmitter",
            "CommodityTicker": "LFE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "3xCTF 1xCBL@ELP=>1xLFE",
        "DurationMs": 43200000,
        "RecipeName": "3xCTF 1xCBL=>1xLFE",
        "StandardRecipeName": "ELP:1xCBL-3xCTF=>1xLFE"
      }
    ],
    "BuildingId": "571499afeb81e0ed9671bae69c368c3b",
    "Name": "electronicsPlant",
    "Ticker": "ELP",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 40,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 35,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:04.523543"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 6
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 10
      },
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 10
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "sensor",
            "CommodityTicker": "SEN",
            "Amount": 1
          },
          {
            "CommodityName": "waterFilter",
            "CommodityTicker": "AWF",
            "Amount": 1
          },
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 1
          },
          {
            "CommodityName": "flowControl",
            "CommodityTicker": "FC",
            "Amount": 1
          },
          {
            "CommodityName": "fluidPiping",
            "CommodityTicker": "FLP",
            "Amount": 12
          }
        ],
        "Outputs": [
          {
            "CommodityName": "waterRecycler",
            "CommodityTicker": "WR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "12xFLP 1xFC 1xAWF 1xPCB 1xSEN 1xWAI@APF=>1xWR",
        "DurationMs": 146880000,
        "RecipeName": "12xFLP 1xFC 1xAWF 1xPCB 1xSEN 1xWAI=>1xWR",
        "StandardRecipeName": "APF:1xAWF-1xFC-12xFLP-1xPCB-1xSEN-1xWAI=>1xWR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sortingAlgorithm",
            "CommodityTicker": "SAL",
            "Amount": 1
          },
          {
            "CommodityName": "mainFrameBlank",
            "CommodityTicker": "BMF",
            "Amount": 1
          },
          {
            "CommodityName": "localDatabase",
            "CommodityTicker": "LD",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "logisticsSystem",
            "CommodityTicker": "LOG",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBMF 1xLD 1xSAL@APF=>1xLOG",
        "DurationMs": 77760000,
        "RecipeName": "1xBMF 1xLD 1xSAL=>1xLOG",
        "StandardRecipeName": "APF:1xBMF-1xLD-1xSAL=>1xLOG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "radioDevice",
            "CommodityTicker": "RAD",
            "Amount": 4
          },
          {
            "CommodityName": "antennaArray",
            "CommodityTicker": "AAR",
            "Amount": 1
          },
          {
            "CommodityName": "workstationBlank",
            "CommodityTicker": "BWS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "communicationSystem",
            "CommodityTicker": "COM",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBWS 1xAAR 4xRAD@APF=>1xCOM",
        "DurationMs": 64800000,
        "RecipeName": "1xBWS 1xAAR 4xRAD=>1xCOM",
        "StandardRecipeName": "APF:1xAAR-1xBWS-4xRAD=>1xCOM"
      },
      {
        "Inputs": [
          {
            "CommodityName": "workstationBlank",
            "CommodityTicker": "BWS",
            "Amount": 1
          },
          {
            "CommodityName": "dataAnalyzer",
            "CommodityTicker": "DA",
            "Amount": 1
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          },
          {
            "CommodityName": "operatingSystem",
            "CommodityTicker": "OS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reactorControlSystem",
            "CommodityTicker": "RCS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBWS 1xOS 1xSAR 1xDA@APF=>1xRCS",
        "DurationMs": 172800000,
        "RecipeName": "1xBWS 1xOS 1xSAR 1xDA=>1xRCS",
        "StandardRecipeName": "APF:1xBWS-1xDA-1xOS-1xSAR=>1xRCS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "operatingSystem",
            "CommodityTicker": "OS",
            "Amount": 1
          },
          {
            "CommodityName": "workstationBlank",
            "CommodityTicker": "BWS",
            "Amount": 1
          },
          {
            "CommodityName": "audioTransmitter",
            "CommodityTicker": "TRA",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "audioDistributionSystem",
            "CommodityTicker": "ADS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBWS 8xTRA 1xOS@APF=>1xADS",
        "DurationMs": 86400000,
        "RecipeName": "1xBWS 8xTRA 1xOS=>1xADS",
        "StandardRecipeName": "APF:1xBWS-1xOS-8xTRA=>1xADS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "workstationBlank",
            "CommodityTicker": "BWS",
            "Amount": 1
          },
          {
            "CommodityName": "dataAnalyzer",
            "CommodityTicker": "DA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "scientistTools",
            "CommodityTicker": "WS",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "1xDA 1xBWS@APF=>20xWS",
        "DurationMs": 155520000,
        "RecipeName": "1xDA 1xBWS=>20xWS",
        "StandardRecipeName": "APF:1xBWS-1xDA=>20xWS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 1
          },
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 1
          },
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 1
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          },
          {
            "CommodityName": "flowControl",
            "CommodityTicker": "FC",
            "Amount": 1
          },
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          },
          {
            "CommodityName": "bacteria",
            "CommodityTicker": "BAC",
            "Amount": 1
          },
          {
            "CommodityName": "gasVent",
            "CommodityTicker": "GV",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "airScrubber",
            "CommodityTicker": "AIR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xHCP 1xNS 1xH2O 1xWAI 1xPCB 1xSAR 1xGV 1xFC 1xBAC@APF=>1xAIR",
        "DurationMs": 216000000,
        "RecipeName": "1xHCP 1xNS 1xH2O 1xWAI 1xPCB 1xSAR 1xGV 1xFC 1xBAC=>1xAIR",
        "StandardRecipeName": "APF:1xBAC-1xFC-1xGV-1xH2O-1xHCP-1xNS-1xPCB-1xSAR-1xWAI=>1xAIR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 10
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          },
          {
            "CommodityName": "flowControl",
            "CommodityTicker": "FC",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "automatedCoolingSystem",
            "CommodityTicker": "ACS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xWAI 1xSAR 1xFC 10xTHF@APF=>1xACS",
        "DurationMs": 51840000,
        "RecipeName": "1xWAI 1xSAR 1xFC 10xTHF=>1xACS",
        "StandardRecipeName": "APF:1xFC-1xSAR-10xTHF-1xWAI=>1xACS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "mainFrameBlank",
            "CommodityTicker": "BMF",
            "Amount": 1
          },
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "waterRecycler",
            "CommodityTicker": "WR",
            "Amount": 1
          },
          {
            "CommodityName": "airScrubber",
            "CommodityTicker": "AIR",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lifeSupportSystem",
            "CommodityTicker": "LIS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xWR 1xAIR 1xBMF 1xWAI@APF=>1xLIS",
        "DurationMs": 216000000,
        "RecipeName": "1xWR 1xAIR 1xBMF 1xWAI=>1xLIS",
        "StandardRecipeName": "APF:1xAIR-1xBMF-1xWAI-1xWR=>1xLIS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "universeMap",
            "CommodityTicker": "SNM",
            "Amount": 1
          },
          {
            "CommodityName": "scientistTools",
            "CommodityTicker": "WS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "navigation1",
            "CommodityTicker": "NV1",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xWS 1xSNM@APF=>1xNV1",
        "DurationMs": 129600000,
        "RecipeName": "1xWS 1xSNM=>1xNV1",
        "StandardRecipeName": "APF:1xSNM-1xWS=>1xNV1"
      },
      {
        "Inputs": [
          {
            "CommodityName": "localDatabase",
            "CommodityTicker": "LD",
            "Amount": 1
          },
          {
            "CommodityName": "touchDeviceBlank",
            "CommodityTicker": "HPC",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "engineerTools",
            "CommodityTicker": "PDA",
            "Amount": 32
          }
        ],
        "BuildingRecipeId": "2xHPC 1xLD@APF=>32xPDA",
        "DurationMs": 51840000,
        "RecipeName": "2xHPC 1xLD=>32xPDA",
        "StandardRecipeName": "APF:2xHPC-1xLD=>32xPDA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "mainFrameBlank",
            "CommodityTicker": "BMF",
            "Amount": 1
          },
          {
            "CommodityName": "wolfram",
            "CommodityTicker": "W",
            "Amount": 5
          },
          {
            "CommodityName": "dataAnalyzer",
            "CommodityTicker": "DA",
            "Amount": 1
          },
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "ftlFieldController",
            "CommodityTicker": "FFC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "5xW 1xWAI 1xDA 1xBMF@APF=>1xFFC",
        "DurationMs": 216000000,
        "RecipeName": "5xW 1xWAI 1xDA 1xBMF=>1xFFC",
        "StandardRecipeName": "APF:1xBMF-1xDA-5xW-1xWAI=>1xFFC"
      }
    ],
    "BuildingId": "5906adbd7fe30209dc8a475cf5fc11a0",
    "Name": "appliancesFactory",
    "Ticker": "APF",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 60,
    "Engineers": 20,
    "Scientists": 0,
    "AreaCost": 40,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:16.636266"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 1
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 4
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 2
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 2
      }
    ],
    "Recipes": [],
    "BuildingId": "59a2e9ed88c04be0b9c46437e0c14c3c",
    "Name": "habitationPioneer",
    "Ticker": "HB1",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 10,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:32.913647"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 24
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 32
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 32
      },
      {
        "CommodityName": "traumaCareUnit",
        "CommodityTicker": "TCU",
        "Amount": 1
      },
      {
        "CommodityName": "droneOperationsUnit",
        "CommodityTicker": "DOU",
        "Amount": 1
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 16
      }
    ],
    "Recipes": [],
    "BuildingId": "5adefc1db4b35c46acb5486036136e19",
    "Name": "planetaryProjectSafetyHealth",
    "Ticker": "EMC",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.953378"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 32
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 20
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 32
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 16
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 24
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "decorativeElements",
        "CommodityTicker": "DEC",
        "Amount": 10
      },
      {
        "CommodityName": "handcraftWorkshopUnit",
        "CommodityTicker": "WOR",
        "Amount": 2
      }
    ],
    "Recipes": [],
    "BuildingId": "5f10e612c4a2267ee94c9eca9ce73c37",
    "Name": "planetaryProjectCultureSmall",
    "Ticker": "ART",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 500,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.895845"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 24
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 16
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 36
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 36
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 32
      },
      {
        "CommodityName": "floatingTank",
        "CommodityTicker": "FLO",
        "Amount": 12
      },
      {
        "CommodityName": "decorativeElements",
        "CommodityTicker": "DEC",
        "Amount": 40
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 500
      }
    ],
    "Recipes": [],
    "BuildingId": "66826ce3c8b97a172cf8fcbcbc1f96e3",
    "Name": "planetaryProjectHealthComfort",
    "Ticker": "WCE",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.960291"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 6
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 2
          },
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "nanoFiber",
            "CommodityTicker": "NFI",
            "Amount": 1200
          }
        ],
        "BuildingRecipeId": "10xC 2xSI@CLR=>1200xNFI",
        "DurationMs": 69120000,
        "RecipeName": "10xC 2xSI=>1200xNFI",
        "StandardRecipeName": "CLR:10xC-2xSI=>1200xNFI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "transistor",
            "CommodityTicker": "TRN",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xAL 1xSI@CLR=>10xTRN",
        "DurationMs": 21600000,
        "RecipeName": "1xAL 1xSI=>10xTRN",
        "StandardRecipeName": "CLR:1xAL-1xSI=>10xTRN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "waferSmall",
            "CommodityTicker": "SWF",
            "Amount": 1
          },
          {
            "CommodityName": "transistor",
            "CommodityTicker": "TRN",
            "Amount": 1
          },
          {
            "CommodityName": "capacitor",
            "CommodityTicker": "CAP",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "audioTransmitter",
            "CommodityTicker": "TRA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xCAP 1xSWF 1xTRN@CLR=>1xTRA",
        "DurationMs": 17280000,
        "RecipeName": "1xCAP 1xSWF 1xTRN=>1xTRA",
        "StandardRecipeName": "CLR:1xCAP-1xSWF-1xTRN=>1xTRA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "nanoCarbonSheeting",
            "CommodityTicker": "NCS",
            "Amount": 100
          }
        ],
        "BuildingRecipeId": "1xC@CLR=>100xNCS",
        "DurationMs": 51840000,
        "RecipeName": "1xC=>100xNCS",
        "StandardRecipeName": "CLR:1xC=>100xNCS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          },
          {
            "CommodityName": "galerite",
            "CommodityTicker": "GAL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "laserDiode",
            "CommodityTicker": "LDI",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "1xGAL 1xSI@CLR=>6xLDI",
        "DurationMs": 30240000,
        "RecipeName": "1xGAL 1xSI=>6xLDI",
        "StandardRecipeName": "CLR:1xGAL-1xSI=>6xLDI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "waferSmall",
            "CommodityTicker": "SWF",
            "Amount": 30
          }
        ],
        "BuildingRecipeId": "1xSI 1xAL@CLR=>30xSWF",
        "DurationMs": 43200000,
        "RecipeName": "1xSI 1xAL=>30xSWF",
        "StandardRecipeName": "CLR:1xAL-1xSI=>30xSWF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          },
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "capacitor",
            "CommodityTicker": "CAP",
            "Amount": 15
          }
        ],
        "BuildingRecipeId": "1xSI 1xFE@CLR=>15xCAP",
        "DurationMs": 34560000,
        "RecipeName": "1xSI 1xFE=>15xCAP",
        "StandardRecipeName": "CLR:1xFE-1xSI=>15xCAP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "smallCapacitorBank",
            "CommodityTicker": "CBS",
            "Amount": 1
          },
          {
            "CommodityName": "ceramicFabric",
            "CommodityTicker": "CF",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallEmitter",
            "CommodityTicker": "SFE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xCF 1xCBS@CLR=>1xSFE",
        "DurationMs": 17280000,
        "RecipeName": "2xCF 1xCBS=>1xSFE",
        "StandardRecipeName": "CLR:1xCBS-2xCF=>1xSFE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nanoCarbonSheeting",
            "CommodityTicker": "NCS",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "megaTubeCoating",
            "CommodityTicker": "MTC",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xNCS@CLR=>2xMTC",
        "DurationMs": 34560000,
        "RecipeName": "2xNCS=>2xMTC",
        "StandardRecipeName": "CLR:2xNCS=>2xMTC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 2
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "waferMedium",
            "CommodityTicker": "MWF",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "2xSI 2xAL@CLR=>20xMWF",
        "DurationMs": 43200000,
        "RecipeName": "2xSI 2xAL=>20xMWF",
        "StandardRecipeName": "CLR:2xAL-2xSI=>20xMWF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "ceramicFabric",
            "CommodityTicker": "CF",
            "Amount": 4
          },
          {
            "CommodityName": "mediumCapacitorBank",
            "CommodityTicker": "CBM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mediumEmitter",
            "CommodityTicker": "MFE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xCF 1xCBM@CLR=>1xMFE",
        "DurationMs": 34560000,
        "RecipeName": "4xCF 1xCBM=>1xMFE",
        "StandardRecipeName": "CLR:1xCBM-4xCF=>1xMFE"
      }
    ],
    "BuildingId": "6ac8ae1e78518b94d65e6a1ebd86f7ca",
    "Name": "cleanRoom",
    "Ticker": "CLR",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 25,
    "Technicians": 15,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 27,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:04.050742"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 1
      },
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 6
      },
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 8
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "universeMap",
            "CommodityTicker": "SNM",
            "Amount": 1
          },
          {
            "CommodityName": "mainFrameBlank",
            "CommodityTicker": "BMF",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "navigation2",
            "CommodityTicker": "NV2",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBMF 1xSNM@AAF=>1xNV2",
        "DurationMs": 172800000,
        "RecipeName": "1xBMF 1xSNM=>1xNV2",
        "StandardRecipeName": "AAF:1xBMF-1xSNM=>1xNV2"
      },
      {
        "Inputs": [
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 1
          },
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "einsteinium",
            "CommodityTicker": "ES",
            "Amount": 10
          },
          {
            "CommodityName": "flowControl",
            "CommodityTicker": "FC",
            "Amount": 3
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          },
          {
            "CommodityName": "fluidPiping",
            "CommodityTicker": "FLP",
            "Amount": 6
          },
          {
            "CommodityName": "cryogenicFluid",
            "CommodityTicker": "CST",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "cryoUnit",
            "CommodityTicker": "CRU",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xCST 1xWAI 10xES 1xPCB 1xSAR 6xFLP 3xFC@AAF=>1xCRU",
        "DurationMs": 190080000,
        "RecipeName": "1xCST 1xWAI 10xES 1xPCB 1xSAR 6xFLP 3xFC=>1xCRU",
        "StandardRecipeName": "AAF:1xCST-10xES-3xFC-6xFLP-1xPCB-1xSAR-1xWAI=>1xCRU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "mainFrameBlank",
            "CommodityTicker": "BMF",
            "Amount": 1
          },
          {
            "CommodityName": "dataAnalyzer",
            "CommodityTicker": "DA",
            "Amount": 1
          },
          {
            "CommodityName": "searchAlgorithm",
            "CommodityTicker": "SA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "targetingComputer",
            "CommodityTicker": "TAC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSA 1xBMF 1xDA@AAF=>1xTAC",
        "DurationMs": 207360000,
        "RecipeName": "1xSA 1xBMF 1xDA=>1xTAC",
        "StandardRecipeName": "AAF:1xBMF-1xDA-1xSA=>1xTAC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 1
          },
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 20
          },
          {
            "CommodityName": "gasVent",
            "CommodityTicker": "GV",
            "Amount": 100
          },
          {
            "CommodityName": "flowControl",
            "CommodityTicker": "FC",
            "Amount": 8
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "climateController",
            "CommodityTicker": "CC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xWAI 1xPCB 10xSAR 100xGV 8xFC 20xTHF@AAF=>1xCC",
        "DurationMs": 207360000,
        "RecipeName": "1xWAI 1xPCB 10xSAR 100xGV 8xFC 20xTHF=>1xCC",
        "StandardRecipeName": "AAF:8xFC-100xGV-1xPCB-10xSAR-20xTHF-1xWAI=>1xCC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "tensorProcessingUnit",
            "CommodityTicker": "TPU",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "stabilitySupportSystem",
            "CommodityTicker": "STS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xWAI 1xTPU@AAF=>1xSTS",
        "DurationMs": 172800000,
        "RecipeName": "1xWAI 1xTPU=>1xSTS",
        "StandardRecipeName": "AAF:1xTPU-1xWAI=>1xSTS"
      }
    ],
    "BuildingId": "707f2723097a4f2a149a3645b53f0b40",
    "Name": "advancedAppliancesFactory",
    "Ticker": "AAF",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 40,
    "Scientists": 20,
    "AreaCost": 50,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:22.555671"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 600
      },
      {
        "CommodityName": "entertainmentUnit",
        "CommodityTicker": "FUN",
        "Amount": 10
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 42
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 40
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 42
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 42
      },
      {
        "CommodityName": "mainFrameBlank",
        "CommodityTicker": "BMF",
        "Amount": 2
      },
      {
        "CommodityName": "neonLightingSystem",
        "CommodityTicker": "LIT",
        "Amount": 2
      },
      {
        "CommodityName": "audioDistributionSystem",
        "CommodityTicker": "ADS",
        "Amount": 1
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 24
      }
    ],
    "Recipes": [],
    "BuildingId": "74a82731e1d98723a42aa116c2e1b9b8",
    "Name": "planetaryProjectComfortBig",
    "Ticker": "4DA",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.862859"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 6
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 3
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "technetium",
            "CommodityTicker": "TC",
            "Amount": 1
          },
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "technoKevlar",
            "CommodityTicker": "TK",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xKV 1xTC@WPL=>1xTK",
        "DurationMs": 77760000,
        "RecipeName": "1xKV 1xTC=>1xTK",
        "StandardRecipeName": "WPL:1xKV-1xTC=>1xTK"
      },
      {
        "Inputs": [
          {
            "CommodityName": "cottonRaw",
            "CommodityTicker": "RCO",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "cottonProcessed",
            "CommodityTicker": "COT",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xRCO@WPL=>1xCOT",
        "DurationMs": 25920000,
        "RecipeName": "1xRCO=>1xCOT",
        "StandardRecipeName": "WPL:1xRCO=>1xCOT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "silkRaw",
            "CommodityTicker": "RSI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "silkProcessed",
            "CommodityTicker": "SIL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xRSI@WPL=>1xSIL",
        "DurationMs": 43200000,
        "RecipeName": "1xRSI=>1xSIL",
        "StandardRecipeName": "WPL:1xRSI=>1xSIL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "nylon",
            "CommodityTicker": "NL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "50xPG@WPL=>1xNL",
        "DurationMs": 43200000,
        "RecipeName": "50xPG=>1xNL",
        "StandardRecipeName": "WPL:50xPG=>1xNL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 75
          },
          {
            "CommodityName": "tclAcid",
            "CommodityTicker": "TCL",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "75xPG 5xTCL@WPL=>1xKV",
        "DurationMs": 69120000,
        "RecipeName": "75xPG 5xTCL=>1xKV",
        "StandardRecipeName": "WPL:75xPG-5xTCL=>1xKV"
      }
    ],
    "BuildingId": "751918dfe422bd6837f7023f66c35f79",
    "Name": "weavingPlant",
    "Ticker": "WPL",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 70,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 40,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:02.625329"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 3
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 4
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 2
      },
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 1
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xGRN@INC=>4xC",
        "DurationMs": 86400000,
        "RecipeName": "4xGRN=>4xC",
        "StandardRecipeName": "INC:4xGRN=>4xC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 2
          },
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 4
          },
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xHCP 2xGRN 2xMAI@INC=>4xC",
        "DurationMs": 28512000,
        "RecipeName": "4xHCP 2xGRN 2xMAI=>4xC",
        "StandardRecipeName": "INC:2xGRN-4xHCP-2xMAI=>4xC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 2
          },
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xHCP 2xGRN@INC=>4xC",
        "DurationMs": 57024000,
        "RecipeName": "4xHCP 2xGRN=>4xC",
        "StandardRecipeName": "INC:2xGRN-4xHCP=>4xC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 2
          },
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xHCP 2xMAI@INC=>4xC",
        "DurationMs": 57024000,
        "RecipeName": "4xHCP 2xMAI=>4xC",
        "StandardRecipeName": "INC:4xHCP-2xMAI=>4xC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xHCP@INC=>4xC",
        "DurationMs": 86400000,
        "RecipeName": "4xHCP=>4xC",
        "StandardRecipeName": "INC:4xHCP=>4xC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xMAI@INC=>4xC",
        "DurationMs": 86400000,
        "RecipeName": "4xMAI=>4xC",
        "StandardRecipeName": "INC:4xMAI=>4xC"
      }
    ],
    "BuildingId": "772d942d77e9514d7664619fd9e605e2",
    "Name": "incinerator",
    "Ticker": "INC",
    "Expertise": "RESOURCE_EXTRACTION",
    "Pioneers": 40,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 10,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.790166"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 16
      }
    ],
    "Recipes": [
      {
        "Inputs": [],
        "Outputs": [],
        "BuildingRecipeId": "@EXT=>",
        "DurationMs": 43200000,
        "RecipeName": "=>",
        "StandardRecipeName": "EXT:=>"
      }
    ],
    "BuildingId": "7876dc0e6850a1e1bb7708f61234cd80",
    "Name": "extractor",
    "Ticker": "EXT",
    "Expertise": "RESOURCE_EXTRACTION",
    "Pioneers": 60,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:32.909516"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 2
      },
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 2
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 2
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 2
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 2
      }
    ],
    "Recipes": [],
    "BuildingId": "79f8f9bf4a56c464041c18995b00c16e",
    "Name": "habitationSettler",
    "Ticker": "HB2",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 12,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.784549"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 12
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "painkillers",
            "CommodityTicker": "PK",
            "Amount": 1
          },
          {
            "CommodityName": "breathableLiquid",
            "CommodityTicker": "BL",
            "Amount": 5
          },
          {
            "CommodityName": "heliotropeExtract",
            "CommodityTicker": "HEX",
            "Amount": 10
          },
          {
            "CommodityName": "cryogenicFluid",
            "CommodityTicker": "CST",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "sedativeSubstance",
            "CommodityTicker": "JUI",
            "Amount": 30
          }
        ],
        "BuildingRecipeId": "10xHEX 5xBL 5xCST 1xPK@LAB=>30xJUI",
        "DurationMs": 34560000,
        "RecipeName": "10xHEX 5xBL 5xCST 1xPK=>30xJUI",
        "StandardRecipeName": "LAB:5xBL-5xCST-10xHEX-1xPK=>30xJUI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 2
          },
          {
            "CommodityName": "sulfur",
            "CommodityTicker": "S",
            "Amount": 3
          },
          {
            "CommodityName": "sodiumBorohydride",
            "CommodityTicker": "NAB",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "bleach",
            "CommodityTicker": "BLE",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "10xNAB 3xS 2xO@LAB=>4xBLE",
        "DurationMs": 69120000,
        "RecipeName": "10xNAB 3xS 2xO=>4xBLE",
        "StandardRecipeName": "LAB:10xNAB-2xO-3xS=>4xBLE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 1
          },
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "chlorine",
            "CommodityTicker": "CL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xC 1xH 1xCL@LAB=>3xDDT",
        "DurationMs": 64800000,
        "RecipeName": "1xC 1xH 1xCL=>3xDDT",
        "StandardRecipeName": "LAB:1xC-1xCL-1xH=>3xDDT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "chlorine",
            "CommodityTicker": "CL",
            "Amount": 1
          },
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "tclAcid",
            "CommodityTicker": "TCL",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xCL 1xO 1xH@LAB=>3xTCL",
        "DurationMs": 51840000,
        "RecipeName": "1xCL 1xO 1xH=>3xTCL",
        "StandardRecipeName": "LAB:1xCL-1xH-1xO=>3xTCL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 1
          },
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 1
          },
          {
            "CommodityName": "einsteinium",
            "CommodityTicker": "ES",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "scientistLuxuryHealth",
            "CommodityTicker": "NST",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xES 1xALG 1xTHF@LAB=>4xNST",
        "DurationMs": 43200000,
        "RecipeName": "1xES 1xALG 1xTHF=>4xNST",
        "StandardRecipeName": "LAB:1xALG-1xES-1xTHF=>4xNST"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "fluorine",
            "CommodityTicker": "F",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "breathableLiquid",
            "CommodityTicker": "BL",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "1xF 1xO@LAB=>2xBL",
        "DurationMs": 86400000,
        "RecipeName": "1xF 1xO=>2xBL",
        "StandardRecipeName": "LAB:1xF-1xO=>2xBL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 1
          },
          {
            "CommodityName": "sulfur",
            "CommodityTicker": "S",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "bacteria",
            "CommodityTicker": "BAC",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xHCP 1xO 1xS@LAB=>10xBAC",
        "DurationMs": 190080000,
        "RecipeName": "1xHCP 1xO 1xS=>10xBAC",
        "StandardRecipeName": "LAB:1xHCP-1xO-1xS=>10xBAC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sodium",
            "CommodityTicker": "NA",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "chlorine",
            "CommodityTicker": "CL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "bleach",
            "CommodityTicker": "BLE",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xNA 1xCL 1xO@LAB=>3xBLE",
        "DurationMs": 43200000,
        "RecipeName": "1xNA 1xCL 1xO=>3xBLE",
        "StandardRecipeName": "LAB:1xCL-1xNA-1xO=>3xBLE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 1
          },
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "cryogenicFluid",
            "CommodityTicker": "CST",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "1xNS 1xDW@LAB=>3xCST",
        "DurationMs": 129600000,
        "RecipeName": "1xNS 1xDW=>3xCST",
        "StandardRecipeName": "LAB:1xDW-1xNS=>3xCST"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 4
          },
          {
            "CommodityName": "sodium",
            "CommodityTicker": "NA",
            "Amount": 4
          },
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "4xAMM 4xH2O 4xNA@LAB=>20xTHF",
        "DurationMs": 86400000,
        "RecipeName": "4xAMM 4xH2O 4xNA=>20xTHF",
        "StandardRecipeName": "LAB:4xAMM-4xH2O-4xNA=>20xTHF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "epoxy",
            "CommodityTicker": "EPO",
            "Amount": 50
          },
          {
            "CommodityName": "nanoCarbonSheeting",
            "CommodityTicker": "NCS",
            "Amount": 75
          }
        ],
        "Outputs": [
          {
            "CommodityName": "nanoResin",
            "CommodityTicker": "NR",
            "Amount": 50
          }
        ],
        "BuildingRecipeId": "50xEPO 75xNCS@LAB=>50xNR",
        "DurationMs": 69120000,
        "RecipeName": "50xEPO 75xNCS=>50xNR",
        "StandardRecipeName": "LAB:50xEPO-75xNCS=>50xNR"
      }
    ],
    "BuildingId": "7ea6a20a32069a76b0e29268dbc408bb",
    "Name": "laboratory",
    "Ticker": "LAB",
    "Expertise": "CHEMISTRY",
    "Pioneers": 0,
    "Settlers": 20,
    "Technicians": 70,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "PIBOY314",
    "Timestamp": "2023-06-24T23:16:34.322729"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xAL 3xTI@ASM=>4xAST",
        "DurationMs": 34560000,
        "RecipeName": "1xAL 3xTI=>4xAST",
        "StandardRecipeName": "ASM:1xAL-3xTI=>4xAST"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xFE 3xTI@ASM=>4xFET",
        "DurationMs": 34560000,
        "RecipeName": "1xFE 3xTI=>4xFET",
        "StandardRecipeName": "ASM:1xFE-3xTI=>4xFET"
      },
      {
        "Inputs": [
          {
            "CommodityName": "wolfram",
            "CommodityTicker": "W",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "tungstenAluminiumAlloy",
            "CommodityTicker": "WAL",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xW 3xAL@ASM=>4xWAL",
        "DurationMs": 34560000,
        "RecipeName": "1xW 3xAL=>4xWAL",
        "StandardRecipeName": "ASM:3xAL-1xW=>4xWAL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tungstenAluminiumAlloy",
            "CommodityTicker": "WAL",
            "Amount": 2
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "ceramicTungstenFabric",
            "CommodityTicker": "CTF",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xWAL 1xSI 1xO@ASM=>1xCTF",
        "DurationMs": 34560000,
        "RecipeName": "2xWAL 1xSI 1xO=>1xCTF",
        "StandardRecipeName": "ASM:1xO-1xSI-2xWAL=>1xCTF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 3
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "aluminiumIronAlloy",
            "CommodityTicker": "FAL",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "3xAL 3xFE@ASM=>6xFAL",
        "DurationMs": 34560000,
        "RecipeName": "3xAL 3xFE=>6xFAL",
        "StandardRecipeName": "ASM:3xAL-3xFE=>6xFAL"
      }
    ],
    "BuildingId": "80c71accb4ae62d26b77cab1ee3ec611",
    "Name": "advancedSmelter",
    "Ticker": "ASM",
    "Expertise": "METALLURGY",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 50,
    "Engineers": 20,
    "Scientists": 0,
    "AreaCost": 34,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:15.955645"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 32
      },
      {
        "CommodityName": "mainFrameBlank",
        "CommodityTicker": "BMF",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 5
      },
      {
        "CommodityName": "workstationBlank",
        "CommodityTicker": "BWS",
        "Amount": 10
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 750
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 25
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 16
      }
    ],
    "Recipes": [],
    "BuildingId": "82ad3e63ac92fa029d361bcb512d1291",
    "Name": "planetaryProjectAdminCenter",
    "Ticker": "ADM",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 400,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.947926"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "beryllium",
            "CommodityTicker": "BE",
            "Amount": 12
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 150
          },
          {
            "CommodityName": "redGoldConnectors",
            "CommodityTicker": "HCC",
            "Amount": 60
          },
          {
            "CommodityName": "lithium",
            "CommodityTicker": "LI",
            "Amount": 12
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largeCapacitorBank",
            "CommodityTicker": "CBL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "12xLI 12xBE 60xHCC 150xPG@ECA=>1xCBL",
        "DurationMs": 43200000,
        "RecipeName": "12xLI 12xBE 60xHCC 150xPG=>1xCBL",
        "StandardRecipeName": "ECA:12xBE-60xHCC-12xLI-150xPG=>1xCBL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "lithium",
            "CommodityTicker": "LI",
            "Amount": 4
          },
          {
            "CommodityName": "nanoCarbonSheeting",
            "CommodityTicker": "NCS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "powerCell",
            "CommodityTicker": "POW",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xNCS 4xLI@ECA=>1xPOW",
        "DurationMs": 17280000,
        "RecipeName": "1xNCS 4xLI=>1xPOW",
        "StandardRecipeName": "ECA:4xLI-1xNCS=>1xPOW"
      },
      {
        "Inputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 2
          },
          {
            "CommodityName": "copperAluminiumAlloy",
            "CommodityTicker": "BRO",
            "Amount": 1
          },
          {
            "CommodityName": "copperConnectors",
            "CommodityTicker": "BCO",
            "Amount": 4
          },
          {
            "CommodityName": "copper",
            "CommodityTicker": "CU",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "solarCell",
            "CommodityTicker": "SOL",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "2xCU 2xSI 4xBCO 1xBRO@ECA=>12xSOL",
        "DurationMs": 17280000,
        "RecipeName": "2xCU 2xSI 4xBCO 1xBRO=>12xSOL",
        "StandardRecipeName": "ECA:4xBCO-1xBRO-2xCU-2xSI=>12xSOL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tungstenAluminiumAlloy",
            "CommodityTicker": "WAL",
            "Amount": 10
          },
          {
            "CommodityName": "advancedFuelRod",
            "CommodityTicker": "AFR",
            "Amount": 8
          },
          {
            "CommodityName": "ceramicTungstenFabric",
            "CommodityTicker": "CTF",
            "Amount": 10
          },
          {
            "CommodityName": "automatedCoolingSystem",
            "CommodityTicker": "ACS",
            "Amount": 1
          },
          {
            "CommodityName": "reactorControlSystem",
            "CommodityTicker": "RCS",
            "Amount": 1
          },
          {
            "CommodityName": "enrichedEinsteinium",
            "CommodityTicker": "EES",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fissionReactor",
            "CommodityTicker": "FIR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xEES 8xAFR 10xCTF 1xACS 1xRCS 10xWAL@ECA=>1xFIR",
        "DurationMs": 302400000,
        "RecipeName": "4xEES 8xAFR 10xCTF 1xACS 1xRCS 10xWAL=>1xFIR",
        "StandardRecipeName": "ECA:1xACS-8xAFR-10xCTF-4xEES-1xRCS-10xWAL=>1xFIR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 8
          },
          {
            "CommodityName": "reactorControlSystem",
            "CommodityTicker": "RCS",
            "Amount": 1
          },
          {
            "CommodityName": "automatedCoolingSystem",
            "CommodityTicker": "ACS",
            "Amount": 1
          },
          {
            "CommodityName": "ceramicFabric",
            "CommodityTicker": "CF",
            "Amount": 6
          },
          {
            "CommodityName": "basicFuelRod",
            "CommodityTicker": "BFR",
            "Amount": 4
          },
          {
            "CommodityName": "enrichedTechnetium",
            "CommodityTicker": "ETC",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "radioisotopeGenerator",
            "CommodityTicker": "RAG",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xETC 4xBFR 6xCF 1xACS 1xRCS 8xAST@ECA=>1xRAG",
        "DurationMs": 216000000,
        "RecipeName": "4xETC 4xBFR 6xCF 1xACS 1xRCS 8xAST=>1xRAG",
        "StandardRecipeName": "ECA:1xACS-8xAST-4xBFR-6xCF-4xETC-1xRCS=>1xRAG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "lithium",
            "CommodityTicker": "LI",
            "Amount": 6
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 60
          },
          {
            "CommodityName": "copperConnectors",
            "CommodityTicker": "BCO",
            "Amount": 20
          },
          {
            "CommodityName": "beryllium",
            "CommodityTicker": "BE",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallCapacitorBank",
            "CommodityTicker": "CBS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "6xLI 6xBE 20xBCO 60xPG@ECA=>1xCBS",
        "DurationMs": 25920000,
        "RecipeName": "6xLI 6xBE 20xBCO 60xPG=>1xCBS",
        "StandardRecipeName": "ECA:20xBCO-6xBE-6xLI-60xPG=>1xCBS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "solarCell",
            "CommodityTicker": "SOL",
            "Amount": 24
          },
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "solarPanel",
            "CommodityTicker": "SP",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "8xGL 24xSOL@ECA=>12xSP",
        "DurationMs": 25920000,
        "RecipeName": "8xGL 24xSOL=>12xSP",
        "StandardRecipeName": "ECA:8xGL-24xSOL=>12xSP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 120
          },
          {
            "CommodityName": "blueGoldConnectors",
            "CommodityTicker": "BGC",
            "Amount": 40
          },
          {
            "CommodityName": "lithium",
            "CommodityTicker": "LI",
            "Amount": 8
          },
          {
            "CommodityName": "beryllium",
            "CommodityTicker": "BE",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mediumCapacitorBank",
            "CommodityTicker": "CBM",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "8xLI 8xBE 40xBGC 120xPG@ECA=>1xCBM",
        "DurationMs": 34560000,
        "RecipeName": "8xLI 8xBE 40xBGC 120xPG=>1xCBM",
        "StandardRecipeName": "ECA:8xBE-40xBGC-8xLI-120xPG=>1xCBM"
      }
    ],
    "BuildingId": "84366d9045b1502b491656dc2f28a7f2",
    "Name": "energyComponentAssembly",
    "Ticker": "ECA",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 20,
    "Technicians": 20,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 35,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:05.267507"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 24
      },
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 32
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 24
      },
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 8
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 24
      }
    ],
    "Recipes": [],
    "BuildingId": "86031695a58781cf986f21028fd20e70",
    "Name": "planetaryProjectShipyard",
    "Ticker": "PSY",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:40.278468"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 24
      },
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 10
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 12
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 24
      }
    ],
    "Recipes": [],
    "BuildingId": "870f49fb17f9709fba9c6e034965d0b2",
    "Name": "planetaryProjectSafetySmall",
    "Ticker": "SST",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 500,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.789641"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      },
      {
        "CommodityName": "largePlasticsBoard",
        "CommodityTicker": "PSL",
        "Amount": 12
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 4
      }
    ],
    "Recipes": [],
    "BuildingId": "87c5e3ae486e568559fb86ad2a78a511",
    "Name": "coreModule",
    "Ticker": "CM",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "PIBOY314",
    "Timestamp": "2023-06-25T17:38:42.893429"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 2
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 4
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 4
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 100
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 20
          },
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 100
          }
        ],
        "Outputs": [
          {
            "CommodityName": "highLoadCargoBay",
            "CommodityTicker": "WCB",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "100xAST 100xFET 20xMFK@SKF=>1xWCB",
        "DurationMs": 69120000,
        "RecipeName": "100xAST 100xFET 20xMFK=>1xWCB",
        "StandardRecipeName": "SKF:100xAST-100xFET-20xMFK=>1xWCB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 16
          },
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 100
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mediumCargoBay",
            "CommodityTicker": "MCB",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "100xAST 16xMFK@SKF=>1xMCB",
        "DurationMs": 56160000,
        "RecipeName": "100xAST 16xMFK=>1xMCB",
        "StandardRecipeName": "SKF:100xAST-16xMFK=>1xMCB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 4
          },
          {
            "CommodityName": "zirconium",
            "CommodityTicker": "ZR",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mediumFtlTank",
            "CommodityTicker": "MFL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xZR 4xMFK@SKF=>1xMFL",
        "DurationMs": 43200000,
        "RecipeName": "10xZR 4xMFK=>1xMFL",
        "StandardRecipeName": "SKF:4xMFK-10xZR=>1xMFL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 8
          },
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 125
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largeStlTank",
            "CommodityTicker": "LSL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "125xFET 8xMFK@SKF=>1xLSL",
        "DurationMs": 77760000,
        "RecipeName": "125xFET 8xMFK=>1xLSL",
        "StandardRecipeName": "SKF:125xFET-8xMFK=>1xLSL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 20
          },
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 200
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largeCargoBay",
            "CommodityTicker": "LCB",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "200xAST 20xMFK@SKF=>1xLCB",
        "DurationMs": 64800000,
        "RecipeName": "200xAST 20xMFK=>1xLCB",
        "StandardRecipeName": "SKF:200xAST-20xMFK=>1xLCB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 200
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "highVolumeCargoBay",
            "CommodityTicker": "VCB",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "200xFET 20xMFK@SKF=>1xVCB",
        "DurationMs": 69120000,
        "RecipeName": "200xFET 20xMFK=>1xVCB",
        "StandardRecipeName": "SKF:200xFET-20xMFK=>1xVCB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 4
          },
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "tinyCargoBay",
            "CommodityTicker": "TCB",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xFE 4xMFK@SKF=>1xTCB",
        "DurationMs": 34560000,
        "RecipeName": "20xFE 4xMFK=>1xTCB",
        "StandardRecipeName": "SKF:20xFE-4xMFK=>1xTCB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 20
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallStlTank",
            "CommodityTicker": "SSL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xTI 2xMFK@SKF=>1xSSL",
        "DurationMs": 43200000,
        "RecipeName": "20xTI 2xMFK=>1xSSL",
        "StandardRecipeName": "SKF:2xMFK-20xTI=>1xSSL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 8
          },
          {
            "CommodityName": "zirconium",
            "CommodityTicker": "ZR",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largeFtlTank",
            "CommodityTicker": "LFL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xZR 8xMFK@SKF=>1xLFL",
        "DurationMs": 60480000,
        "RecipeName": "20xZR 8xMFK=>1xLFL",
        "StandardRecipeName": "SKF:8xMFK-20xZR=>1xLFL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 35
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "verySmallCargoBay",
            "CommodityTicker": "VSC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "35xFE 8xMFK@SKF=>1xVSC",
        "DurationMs": 43200000,
        "RecipeName": "35xFE 8xMFK=>1xVSC",
        "StandardRecipeName": "SKF:35xFE-8xMFK=>1xVSC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 12
          },
          {
            "CommodityName": "aluminiumIronAlloy",
            "CommodityTicker": "FAL",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallCargoBay",
            "CommodityTicker": "SCB",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "50xFAL 12xMFK@SKF=>1xSCB",
        "DurationMs": 51840000,
        "RecipeName": "50xFAL 12xMFK=>1xSCB",
        "StandardRecipeName": "SKF:50xFAL-12xMFK=>1xSCB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 50
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mediumStlTank",
            "CommodityTicker": "MSL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "50xFET 4xMFK@SKF=>1xMSL",
        "DurationMs": 60480000,
        "RecipeName": "50xFET 4xMFK=>1xMSL",
        "StandardRecipeName": "SKF:50xFET-4xMFK=>1xMSL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "zirconium",
            "CommodityTicker": "ZR",
            "Amount": 5
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallFtlTank",
            "CommodityTicker": "SFL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "5xZR 1xMFK@SKF=>1xSFL",
        "DurationMs": 25920000,
        "RecipeName": "5xZR 1xMFK=>1xSFL",
        "StandardRecipeName": "SKF:1xMFK-5xZR=>1xSFL"
      }
    ],
    "BuildingId": "8e8174f9fe1eaf328571b705c8ffe27f",
    "Name": "shipKitFactory",
    "Ticker": "SKF",
    "Expertise": "METALLURGY",
    "Pioneers": 0,
    "Settlers": 40,
    "Technicians": 10,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 40,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.768792"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 4
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 6
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "lithiumOre",
            "CommodityTicker": "LIO",
            "Amount": 10
          },
          {
            "CommodityName": "halite",
            "CommodityTicker": "HAL",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lithium",
            "CommodityTicker": "LI",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "10xLIO 4xHAL@SME=>4xLI",
        "DurationMs": 57024000,
        "RecipeName": "10xLIO 4xHAL=>4xLI",
        "StandardRecipeName": "SME:4xHAL-10xLIO=>4xLI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "goldOre",
            "CommodityTicker": "AUO",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "gold",
            "CommodityTicker": "AU",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "1xC 3xAUO@SME=>2xAU",
        "DurationMs": 38880000,
        "RecipeName": "1xC 3xAUO=>2xAU",
        "StandardRecipeName": "SME:3xAUO-1xC=>2xAU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "sulfurCrystals",
            "CommodityTicker": "SCR",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "sulfur",
            "CommodityTicker": "S",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "1xSCR 1xO@SME=>6xS",
        "DurationMs": 25920000,
        "RecipeName": "1xSCR 1xO=>6xS",
        "StandardRecipeName": "SME:1xO-1xSCR=>6xS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 8
          },
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xFE 8xO@SME=>2xSTL",
        "DurationMs": 30240000,
        "RecipeName": "2xFE 8xO=>2xSTL",
        "StandardRecipeName": "SME:2xFE-8xO=>2xSTL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 3
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "3xSIO 1xAL@SME=>1xSI",
        "DurationMs": 12960000,
        "RecipeName": "3xSIO 1xAL=>1xSI",
        "StandardRecipeName": "SME:1xAL-3xSIO=>1xSI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "flux",
            "CommodityTicker": "FLX",
            "Amount": 1
          },
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "3xSIO 1xC 1xO 1xFLX@SME=>1xSI",
        "DurationMs": 10368000,
        "RecipeName": "3xSIO 1xC 1xO 1xFLX=>1xSI",
        "StandardRecipeName": "SME:1xC-1xFLX-1xO-3xSIO=>1xSI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "3xSIO 1xC 1xO@SME=>1xSI",
        "DurationMs": 17280000,
        "RecipeName": "3xSIO 1xC 1xO=>1xSI",
        "StandardRecipeName": "SME:1xC-1xO-3xSIO=>1xSI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 2
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 4
          },
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "ceramicFabric",
            "CommodityTicker": "CF",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xAL 1xSI 2xO@SME=>1xCF",
        "DurationMs": 34560000,
        "RecipeName": "4xAL 1xSI 2xO=>1xCF",
        "StandardRecipeName": "SME:4xAL-2xO-1xSI=>1xCF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "titaniumOre",
            "CommodityTicker": "TIO",
            "Amount": 4
          },
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "4xTIO 1xC 1xO@SME=>2xTI",
        "DurationMs": 64800000,
        "RecipeName": "4xTIO 1xC 1xO=>2xTI",
        "StandardRecipeName": "SME:1xC-1xO-4xTIO=>2xTI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "tectosilisite",
            "CommodityTicker": "TS",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xTS 1xO 1xAL@SME=>1xSI",
        "DurationMs": 10368000,
        "RecipeName": "4xTS 1xO 1xAL=>1xSI",
        "StandardRecipeName": "SME:1xAL-1xO-4xTS=>1xSI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 1
          },
          {
            "CommodityName": "copperOre",
            "CommodityTicker": "CUO",
            "Amount": 5
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "copper",
            "CommodityTicker": "CU",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "5xCUO 10xO 1xSIO@SME=>3xCU",
        "DurationMs": 43200000,
        "RecipeName": "5xCUO 10xO 1xSIO=>3xCU",
        "StandardRecipeName": "SME:5xCUO-10xO-1xSIO=>3xCU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminiumOre",
            "CommodityTicker": "ALO",
            "Amount": 6
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "6xALO 1xC 1xO@SME=>3xAL",
        "DurationMs": 43200000,
        "RecipeName": "6xALO 1xC 1xO=>3xAL",
        "StandardRecipeName": "SME:6xALO-1xC-1xO=>3xAL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "flux",
            "CommodityTicker": "FLX",
            "Amount": 1
          },
          {
            "CommodityName": "aluminiumOre",
            "CommodityTicker": "ALO",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "6xALO 1xO 1xC 1xFLX@SME=>4xAL",
        "DurationMs": 51840000,
        "RecipeName": "6xALO 1xO 1xC 1xFLX=>4xAL",
        "StandardRecipeName": "SME:6xALO-1xC-1xFLX-1xO=>4xAL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "ironOre",
            "CommodityTicker": "FEO",
            "Amount": 6
          },
          {
            "CommodityName": "flux",
            "CommodityTicker": "FLX",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "6xFEO 1xC 1xO 1xFLX@SME=>4xFE",
        "DurationMs": 51840000,
        "RecipeName": "6xFEO 1xC 1xO 1xFLX=>4xFE",
        "StandardRecipeName": "SME:1xC-6xFEO-1xFLX-1xO=>4xFE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          },
          {
            "CommodityName": "ironOre",
            "CommodityTicker": "FEO",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 3
          }
        ],
        "BuildingRecipeId": "6xFEO 1xC 1xO@SME=>3xFE",
        "DurationMs": 43200000,
        "RecipeName": "6xFEO 1xC 1xO=>3xFE",
        "StandardRecipeName": "SME:1xC-6xFEO-1xO=>3xFE"
      }
    ],
    "BuildingId": "9100d8e07ae53bfaf0e33d8eb5288628",
    "Name": "smelter",
    "Ticker": "SME",
    "Expertise": "METALLURGY",
    "Pioneers": 50,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 17,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.742795"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 8
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 4
      }
    ],
    "Recipes": [],
    "BuildingId": "922c10ffbaa86c5ed6ed070a38ebe384",
    "Name": "habitationTechnician",
    "Ticker": "HB3",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 14,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:36.637911"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 2
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 2
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallPlasticsBoard",
            "CommodityTicker": "PSS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xPG@PPF=>1xPSS",
        "DurationMs": 17280000,
        "RecipeName": "10xPG=>1xPSS",
        "StandardRecipeName": "PPF:10xPG=>1xPSS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 10
          },
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 1
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lowHeatFuelPump",
            "CommodityTicker": "LFP",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSFK 50xPG 10xTHF@PPF=>1xLFP",
        "DurationMs": 43200000,
        "RecipeName": "1xSFK 50xPG 10xTHF=>1xLFP",
        "StandardRecipeName": "PPF:50xPG-1xSFK-10xTHF=>1xLFP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xPG@PPF=>1xPSM",
        "DurationMs": 34560000,
        "RecipeName": "20xPG=>1xPSM",
        "StandardRecipeName": "PPF:20xPG=>1xPSM"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 2
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 40
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largeDeviceCover",
            "CommodityTicker": "DCL",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xPSL 2xMFK 40xPG@PPF=>2xDCL",
        "DurationMs": 60480000,
        "RecipeName": "2xPSL 2xMFK 40xPG=>2xDCL",
        "StandardRecipeName": "PPF:2xMFK-40xPG-2xPSL=>2xDCL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 20
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 2
          },
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mediumDeviceCover",
            "CommodityTicker": "DCM",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xPSM 8xSFK 20xPG@PPF=>2xDCM",
        "DurationMs": 43200000,
        "RecipeName": "2xPSM 8xSFK 20xPG=>2xDCM",
        "StandardRecipeName": "PPF:20xPG-2xPSM-8xSFK=>2xDCM"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 40
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "40xPG@PPF=>1xPSL",
        "DurationMs": 51840000,
        "RecipeName": "40xPG=>1xPSL",
        "StandardRecipeName": "PPF:40xPG=>1xPSL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 4
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 10
          },
          {
            "CommodityName": "smallPlasticsBoard",
            "CommodityTicker": "PSS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallDeviceCover",
            "CommodityTicker": "DCS",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "4xSFK 10xPG 1xPSS@PPF=>2xDCS",
        "DurationMs": 25920000,
        "RecipeName": "4xSFK 10xPG 1xPSS=>2xDCS",
        "StandardRecipeName": "PPF:10xPG-1xPSS-4xSFK=>2xDCS"
      }
    ],
    "BuildingId": "92ce2e2411058e58755fd4c7c2c57f3f",
    "Name": "plasticsPrinterFacility",
    "Ticker": "PPF",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 50,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 16,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.787676"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 2
      },
      {
        "CommodityName": "metalHalideLamp",
        "CommodityTicker": "MHL",
        "Amount": 16
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 4
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "cottonRaw",
            "CommodityTicker": "RCO",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "10xH2O 4xNS@HYF=>2xRCO",
        "DurationMs": 19008000,
        "RecipeName": "10xH2O 4xNS=>2xRCO",
        "StandardRecipeName": "HYF:10xH2O-4xNS=>2xRCO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 14
          },
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "14xH2O 1xNS@HYF=>8xHCP",
        "DurationMs": 34560000,
        "RecipeName": "14xH2O 1xNS=>8xHCP",
        "StandardRecipeName": "HYF:14xH2O-1xNS=>8xHCP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 1
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 16
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "16xH2O 1xNS@HYF=>6xVEG",
        "DurationMs": 17280000,
        "RecipeName": "16xH2O 1xNS=>6xVEG",
        "StandardRecipeName": "HYF:16xH2O-1xNS=>6xVEG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 16
          },
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "proteinAlgae",
            "CommodityTicker": "ALG",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "16xH2O 2xNS@HYF=>12xALG",
        "DurationMs": 38880000,
        "RecipeName": "16xH2O 2xNS=>12xALG",
        "StandardRecipeName": "HYF:16xH2O-2xNS=>12xALG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mushrooms",
            "CommodityTicker": "MUS",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xNS@HYF=>4xMUS",
        "DurationMs": 25920000,
        "RecipeName": "1xNS=>4xMUS",
        "StandardRecipeName": "HYF:1xNS=>4xMUS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 20
          },
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "carbohydrateMaize",
            "CommodityTicker": "MAI",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "20xH2O 2xNS@HYF=>12xMAI",
        "DurationMs": 69120000,
        "RecipeName": "20xH2O 2xNS=>12xMAI",
        "StandardRecipeName": "HYF:20xH2O-2xNS=>12xMAI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 22
          },
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "caffeinatedBeans",
            "CommodityTicker": "CAF",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "22xH2O 3xNS@HYF=>2xCAF",
        "DurationMs": 21600000,
        "RecipeName": "22xH2O 3xNS=>2xCAF",
        "StandardRecipeName": "HYF:22xH2O-3xNS=>2xCAF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "mushrooms",
            "CommodityTicker": "MUS",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "4xNS@HYF=>12xMUS",
        "DurationMs": 43200000,
        "RecipeName": "4xNS=>12xMUS",
        "StandardRecipeName": "HYF:4xNS=>12xMUS"
      }
    ],
    "BuildingId": "99a4e7a126e7ef70f392a5377c40df3c",
    "Name": "hydroponicsFarm",
    "Ticker": "HYF",
    "Expertise": "AGRICULTURE",
    "Pioneers": 40,
    "Settlers": 20,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 15,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.789087"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 4
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "epoxy",
            "CommodityTicker": "EPO",
            "Amount": 70
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 150
          }
        ],
        "Outputs": [
          {
            "CommodityName": "decorativeElements",
            "CommodityTicker": "DEC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "150xPG 70xEPO@POL=>1xDEC",
        "DurationMs": 43200000,
        "RecipeName": "150xPG 70xEPO=>1xDEC",
        "StandardRecipeName": "POL:70xEPO-150xPG=>1xDEC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 1
          },
          {
            "CommodityName": "chlorine",
            "CommodityTicker": "CL",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "epoxy",
            "CommodityTicker": "EPO",
            "Amount": 50
          }
        ],
        "BuildingRecipeId": "1xC 1xH 1xCL 1xO@POL=>50xEPO",
        "DurationMs": 86400000,
        "RecipeName": "1xC 1xH 1xCL 1xO=>50xEPO",
        "StandardRecipeName": "POL:1xC-1xCL-1xH-1xO=>50xEPO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "magnesium",
            "CommodityTicker": "MG",
            "Amount": 1
          },
          {
            "CommodityName": "carbon",
            "CommodityTicker": "C",
            "Amount": 1
          },
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 50
          }
        ],
        "BuildingRecipeId": "1xH 1xC 1xMG@POL=>50xPG",
        "DurationMs": 30240000,
        "RecipeName": "1xH 1xC 1xMG=>50xPG",
        "StandardRecipeName": "POL:1xC-1xH-1xMG=>50xPG"
      }
    ],
    "BuildingId": "ac0139672d1714d63f24280d79d6f1ef",
    "Name": "polymerPlant",
    "Ticker": "POL",
    "Expertise": "CHEMISTRY",
    "Pioneers": 10,
    "Settlers": 25,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 15,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.78472"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 6
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 4
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 2
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 12
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lightweightHullPlate",
            "CommodityTicker": "LHP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "12xAL 1xHE@HWP=>4xLHP",
        "DurationMs": 25920000,
        "RecipeName": "12xAL 1xHE=>4xLHP",
        "StandardRecipeName": "HWP:12xAL-1xHE=>4xLHP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 12
          },
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicHullPlate",
            "CommodityTicker": "BHP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "12xAL 1xSTL 1xHE@HWP=>4xBHP",
        "DurationMs": 25920000,
        "RecipeName": "12xAL 1xSTL 1xHE=>4xBHP",
        "StandardRecipeName": "HWP:12xAL-1xHE-1xSTL=>4xBHP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 4
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 12
          }
        ],
        "Outputs": [
          {
            "CommodityName": "hardenedHullPlate",
            "CommodityTicker": "HHP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "12xAL 4xAST 1xHE@HWP=>4xHHP",
        "DurationMs": 43200000,
        "RecipeName": "12xAL 4xAST 1xHE=>4xHHP",
        "StandardRecipeName": "HWP:12xAL-4xAST-1xHE=>4xHHP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 12
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 4
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reinforcedHullPlate",
            "CommodityTicker": "RHP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "12xAL 4xTI 1xHE@HWP=>4xRHP",
        "DurationMs": 60480000,
        "RecipeName": "12xAL 4xTI 1xHE=>4xRHP",
        "StandardRecipeName": "HWP:12xAL-1xHE-4xTI=>4xRHP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "ceramicTungstenFabric",
            "CommodityTicker": "CTF",
            "Amount": 2
          },
          {
            "CommodityName": "borosilicate",
            "CommodityTicker": "BOS",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedThermalProtectionMaterial",
            "CommodityTicker": "ATP",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xBOS 2xCTF 1xHE@HWP=>2xATP",
        "DurationMs": 21600000,
        "RecipeName": "2xBOS 2xCTF 1xHE=>2xATP",
        "StandardRecipeName": "HWP:2xBOS-2xCTF-1xHE=>2xATP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 1
          },
          {
            "CommodityName": "ceramicFabric",
            "CommodityTicker": "CF",
            "Amount": 4
          },
          {
            "CommodityName": "aluminiumIronAlloy",
            "CommodityTicker": "FAL",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicWhippleShielding",
            "CommodityTicker": "BWH",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "2xFAL 4xCF 1xKV 1xHE@HWP=>8xBWH",
        "DurationMs": 25920000,
        "RecipeName": "2xFAL 4xCF 1xKV 1xHE=>8xBWH",
        "StandardRecipeName": "HWP:4xCF-2xFAL-1xHE-1xKV=>8xBWH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          },
          {
            "CommodityName": "technoKevlar",
            "CommodityTicker": "TK",
            "Amount": 2
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 2
          },
          {
            "CommodityName": "ceramicTungstenFabric",
            "CommodityTicker": "CTF",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedWhippleShielding",
            "CommodityTicker": "AWH",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "2xTI 4xCTF 2xTK 1xHE@HWP=>8xAWH",
        "DurationMs": 43200000,
        "RecipeName": "2xTI 4xCTF 2xTK 1xHE=>8xAWH",
        "StandardRecipeName": "HWP:4xCTF-1xHE-2xTI-2xTK=>8xAWH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 10
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 8
          },
          {
            "CommodityName": "helium",
            "CommodityTicker": "HE",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedHullPlate",
            "CommodityTicker": "AHP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "8xAL 10xFET 1xHE@HWP=>4xAHP",
        "DurationMs": 77760000,
        "RecipeName": "8xAL 10xFET 1xHE=>4xAHP",
        "StandardRecipeName": "HWP:8xAL-10xFET-1xHE=>4xAHP"
      }
    ],
    "BuildingId": "ad81bde2b90db8da92f6262b599a2ea4",
    "Name": "hullWeldingPlant",
    "Ticker": "HWP",
    "Expertise": "METALLURGY",
    "Pioneers": 0,
    "Settlers": 40,
    "Technicians": 10,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.789523"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 12
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 8
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 12
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "distributedDatabase",
            "CommodityTicker": "DD",
            "Amount": 1
          },
          {
            "CommodityName": "dataAnalyzer",
            "CommodityTicker": "DA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "informationManagementSystem",
            "CommodityTicker": "IMM",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xDA 1xDD@SL=>1xIMM",
        "DurationMs": 129600000,
        "RecipeName": "1xDA 1xDD=>1xIMM",
        "StandardRecipeName": "SL:1xDA-1xDD=>1xIMM"
      },
      {
        "Inputs": [
          {
            "CommodityName": "neuralNetwork",
            "CommodityTicker": "NN",
            "Amount": 1
          },
          {
            "CommodityName": "nonVolatileMemory",
            "CommodityTicker": "ROM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xNN 1xROM@SL=>1xWAI",
        "DurationMs": 172800000,
        "RecipeName": "1xNN 1xROM=>1xWAI",
        "StandardRecipeName": "SL:1xNN-1xROM=>1xWAI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "weakArtificalIntelligence",
            "CommodityTicker": "WAI",
            "Amount": 1
          },
          {
            "CommodityName": "dataVisualizer",
            "CommodityTicker": "DV",
            "Amount": 1
          },
          {
            "CommodityName": "informationManagementSystem",
            "CommodityTicker": "IMM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "universeMap",
            "CommodityTicker": "SNM",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "1xWAI 1xDV 1xIMM@SL=>2xSNM",
        "DurationMs": 172800000,
        "RecipeName": "1xWAI 1xDV 1xIMM=>2xSNM",
        "StandardRecipeName": "SL:1xDV-1xIMM-1xWAI=>2xSNM"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "informationDataCore",
            "CommodityTicker": "IDC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SL=>1xIDC",
        "DurationMs": 86400000,
        "RecipeName": "=>1xIDC",
        "StandardRecipeName": "SL:=>1xIDC"
      }
    ],
    "BuildingId": "ae7abd89600cf704c539ad2254694662",
    "Name": "softwareLabs",
    "Ticker": "SL",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 20,
    "AreaCost": 20,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:24.392551"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 10
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 6
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "basicAiFramework",
            "CommodityTicker": "BAI",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SD=>1xBAI",
        "DurationMs": 172800000,
        "RecipeName": "=>1xBAI",
        "StandardRecipeName": "SD:=>1xBAI"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "localDatabase",
            "CommodityTicker": "LD",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SD=>1xLD",
        "DurationMs": 129600000,
        "RecipeName": "=>1xLD",
        "StandardRecipeName": "SD:=>1xLD"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "machineLearningInterface",
            "CommodityTicker": "MLI",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SD=>1xMLI",
        "DurationMs": 259200000,
        "RecipeName": "=>1xMLI",
        "StandardRecipeName": "SD:=>1xMLI"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "networkingFramework",
            "CommodityTicker": "NF",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SD=>1xNF",
        "DurationMs": 129600000,
        "RecipeName": "=>1xNF",
        "StandardRecipeName": "SD:=>1xNF"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "searchAlgorithm",
            "CommodityTicker": "SA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SD=>1xSA",
        "DurationMs": 86400000,
        "RecipeName": "=>1xSA",
        "StandardRecipeName": "SD:=>1xSA"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "sortingAlgorithm",
            "CommodityTicker": "SAL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SD=>1xSAL",
        "DurationMs": 86400000,
        "RecipeName": "=>1xSAL",
        "StandardRecipeName": "SD:=>1xSAL"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "windowManager",
            "CommodityTicker": "WM",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SD=>1xWM",
        "DurationMs": 172800000,
        "RecipeName": "=>1xWM",
        "StandardRecipeName": "SD:=>1xWM"
      }
    ],
    "BuildingId": "b5acc65e4e324d4a329fb4638da7b427",
    "Name": "softwareDevelopment",
    "Ticker": "SD",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 50,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 20,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:12.812722"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedWindow",
        "CommodityTicker": "ATA",
        "Amount": 4
      },
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 8
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 2
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 20
          },
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 1
          },
          {
            "CommodityName": "artificialSoil",
            "CommodityTicker": "SOI",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pineberries",
            "CommodityTicker": "PIB",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "20xH2O 1xDDT 2xSOI@ORC=>10xPIB",
        "DurationMs": 56160000,
        "RecipeName": "20xH2O 1xDDT 2xSOI=>10xPIB",
        "StandardRecipeName": "ORC:1xDDT-20xH2O-2xSOI=>10xPIB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "artificialSoil",
            "CommodityTicker": "SOI",
            "Amount": 3
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 30
          },
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "grapes",
            "CommodityTicker": "GRA",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "30xH2O 1xDDT 3xSOI@ORC=>5xGRA",
        "DurationMs": 69120000,
        "RecipeName": "30xH2O 1xDDT 3xSOI=>5xGRA",
        "StandardRecipeName": "ORC:1xDDT-30xH2O-3xSOI=>5xGRA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 1
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 30
          }
        ],
        "Outputs": [
          {
            "CommodityName": "pineberries",
            "CommodityTicker": "PIB",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "30xH2O 1xDDT@ORC=>10xPIB",
        "DurationMs": 69120000,
        "RecipeName": "30xH2O 1xDDT=>10xPIB",
        "StandardRecipeName": "ORC:1xDDT-30xH2O=>10xPIB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 1
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 40
          }
        ],
        "Outputs": [
          {
            "CommodityName": "grapes",
            "CommodityTicker": "GRA",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "40xH2O 1xDDT@ORC=>5xGRA",
        "DurationMs": 86400000,
        "RecipeName": "40xH2O 1xDDT=>5xGRA",
        "StandardRecipeName": "ORC:1xDDT-40xH2O=>5xGRA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "artificialSoil",
            "CommodityTicker": "SOI",
            "Amount": 4
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 40
          },
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "antibacterialTreeFlowers",
            "CommodityTicker": "HOP",
            "Amount": 15
          }
        ],
        "BuildingRecipeId": "40xH2O 2xDDT 4xSOI@ORC=>15xHOP",
        "DurationMs": 151200000,
        "RecipeName": "40xH2O 2xDDT 4xSOI=>15xHOP",
        "StandardRecipeName": "ORC:2xDDT-40xH2O-4xSOI=>15xHOP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "pesticides",
            "CommodityTicker": "DDT",
            "Amount": 2
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 60
          }
        ],
        "Outputs": [
          {
            "CommodityName": "antibacterialTreeFlowers",
            "CommodityTicker": "HOP",
            "Amount": 15
          }
        ],
        "BuildingRecipeId": "60xH2O 2xDDT@ORC=>15xHOP",
        "DurationMs": 172800000,
        "RecipeName": "60xH2O 2xDDT=>15xHOP",
        "StandardRecipeName": "ORC:2xDDT-60xH2O=>15xHOP"
      }
    ],
    "BuildingId": "b62eabbddbfef1d076aca3db7a1826f9",
    "Name": "orchard",
    "Ticker": "ORC",
    "Expertise": "AGRICULTURE",
    "Pioneers": 0,
    "Settlers": 70,
    "Technicians": 10,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 120,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:09.125195"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 12
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 16
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 10
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 24
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 24
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      }
    ],
    "Recipes": [],
    "BuildingId": "b7a5ba525d507a5bcd5f5b64ef125423",
    "Name": "planetaryProjectHealthSmall",
    "Ticker": "INF",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 500,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:28.878931"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 6
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 3
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 3
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 120
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lightweightStructuralElements",
            "CommodityTicker": "LSE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "120xPG 3xAL@PP2=>1xLSE",
        "DurationMs": 21600000,
        "RecipeName": "120xPG 3xAL=>1xLSE",
        "StandardRecipeName": "PP2:3xAL-120xPG=>1xLSE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 2
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicStructuralElements",
            "CommodityTicker": "BSE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xAL 2xLST@PP2=>1xBSE",
        "DurationMs": 21600000,
        "RecipeName": "1xAL 2xLST=>1xBSE",
        "StandardRecipeName": "PP2:1xAL-2xLST=>1xBSE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lightweightWindow",
            "CommodityTicker": "LTA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xAL 5xGL@PP2=>1xLTA",
        "DurationMs": 21600000,
        "RecipeName": "1xAL 5xGL=>1xLTA",
        "StandardRecipeName": "PP2:1xAL-5xGL=>1xLTA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicWindow",
            "CommodityTicker": "BTA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xGL 1xAL@PP2=>1xBTA",
        "DurationMs": 12960000,
        "RecipeName": "1xGL 1xAL=>1xBTA",
        "StandardRecipeName": "PP2:1xAL-1xGL=>1xBTA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 2
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicBulkhead",
            "CommodityTicker": "BBH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xAL 1xLST@PP2=>1xBBH",
        "DurationMs": 21600000,
        "RecipeName": "2xAL 1xLST=>1xBBH",
        "StandardRecipeName": "PP2:2xAL-1xLST=>1xBBH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 35
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lightweightBulkhead",
            "CommodityTicker": "LBH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "35xPE 3xAL@PP2=>1xLBH",
        "DurationMs": 21600000,
        "RecipeName": "35xPE 3xAL=>1xLBH",
        "StandardRecipeName": "PP2:3xAL-35xPE=>1xLBH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nylon",
            "CommodityTicker": "NL",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "lightweightDeckElements",
            "CommodityTicker": "LDE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "3xAL 1xNL@PP2=>1xLDE",
        "DurationMs": 21600000,
        "RecipeName": "3xAL 1xNL=>1xLDE",
        "StandardRecipeName": "PP2:3xAL-1xNL=>1xLDE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "neon",
            "CommodityTicker": "NE",
            "Amount": 1
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "aerostatFoundation",
            "CommodityTicker": "AEF",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "50xPG 1xNE@PP2=>1xAEF",
        "DurationMs": 43200000,
        "RecipeName": "50xPG 1xNE=>1xAEF",
        "StandardRecipeName": "PP2:1xNE-50xPG=>1xAEF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 75
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicDeckElements",
            "CommodityTicker": "BDE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "75xPG@PP2=>1xBDE",
        "DurationMs": 21600000,
        "RecipeName": "75xPG=>1xBDE",
        "StandardRecipeName": "PP2:75xPG=>1xBDE"
      }
    ],
    "BuildingId": "b820f0add29448530e247ac6c1e21e6a",
    "Name": "prefabPlant2",
    "Ticker": "PP2",
    "Expertise": "CONSTRUCTION",
    "Pioneers": 25,
    "Settlers": 25,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T18:30:28.467289"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 6
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 6
      },
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 1
          },
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 3
          },
          {
            "CommodityName": "galerite",
            "CommodityTicker": "GAL",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "stlFuel",
            "CommodityTicker": "SF",
            "Amount": 100
          }
        ],
        "BuildingRecipeId": "1xAMM 2xGAL 3xH@REF=>100xSF",
        "DurationMs": 12960000,
        "RecipeName": "1xAMM 2xGAL 3xH=>100xSF",
        "StandardRecipeName": "REF:1xAMM-2xGAL-3xH=>100xSF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sodiumBorohydride",
            "CommodityTicker": "NAB",
            "Amount": 5
          },
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "stlFuel",
            "CommodityTicker": "SF",
            "Amount": 150
          }
        ],
        "BuildingRecipeId": "1xAMM 5xNAB@REF=>150xSF",
        "DurationMs": 34560000,
        "RecipeName": "1xAMM 5xNAB=>150xSF",
        "StandardRecipeName": "REF:1xAMM-5xNAB=>150xSF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 4
          },
          {
            "CommodityName": "helium3",
            "CommodityTicker": "HE3",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "ftlFuel",
            "CommodityTicker": "FF",
            "Amount": 100
          }
        ],
        "BuildingRecipeId": "2xHE3 4xH@REF=>100xFF",
        "DurationMs": 12960000,
        "RecipeName": "2xHE3 4xH=>100xFF",
        "StandardRecipeName": "REF:4xH-2xHE3=>100xFF"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tectosilisite",
            "CommodityTicker": "TS",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "helium3",
            "CommodityTicker": "HE3",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "3xTS@REF=>2xHE3",
        "DurationMs": 21600000,
        "RecipeName": "3xTS=>2xHE3",
        "StandardRecipeName": "REF:3xTS=>2xHE3"
      }
    ],
    "BuildingId": "b867beff7a3a39f4ef636d3e74977143",
    "Name": "refinery",
    "Ticker": "REF",
    "Expertise": "FUEL_REFINING",
    "Pioneers": 60,
    "Settlers": 20,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:32.917598"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 32
      },
      {
        "CommodityName": "solarPanel",
        "CommodityTicker": "SP",
        "Amount": 44
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 32
      },
      {
        "CommodityName": "lifeSupportSystem",
        "CommodityTicker": "LIS",
        "Amount": 1
      },
      {
        "CommodityName": "climateController",
        "CommodityTicker": "CC",
        "Amount": 5
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 8
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 32
      }
    ],
    "Recipes": [],
    "BuildingId": "b8cc7c0d48c9b7f81e8d5fed266f19b3",
    "Name": "corporationProjectTerraforming",
    "Ticker": "CTE",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 100,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:51:01.392908"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 24
      },
      {
        "CommodityName": "decorativeElements",
        "CommodityTicker": "DEC",
        "Amount": 32
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 20
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 12
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 16
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 24
      }
    ],
    "Recipes": [],
    "BuildingId": "b9af9ae1683eafe88e546cf91f2e8762",
    "Name": "planetaryProjectComfortCulture",
    "Ticker": "ACA",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.966848"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 300
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 30
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 12
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 24
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 16
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 24
      },
      {
        "CommodityName": "communicationSystem",
        "CommodityTicker": "COM",
        "Amount": 1
      },
      {
        "CommodityName": "audioDistributionSystem",
        "CommodityTicker": "ADS",
        "Amount": 1
      }
    ],
    "Recipes": [],
    "BuildingId": "bd6368e55dac817b30f0d1ae50ab4132",
    "Name": "planetaryProjectCultureEducation",
    "Ticker": "PBH",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.895502"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 2
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "smallDeviceCover",
            "CommodityTicker": "DCS",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "coolingFan",
            "CommodityTicker": "FAN",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "1xAL 8xDCS 2xSFK@MCA=>8xFAN",
        "DurationMs": 17280000,
        "RecipeName": "1xAL 8xDCS 2xSFK=>8xFAN",
        "StandardRecipeName": "MCA:1xAL-8xDCS-2xSFK=>8xFAN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 3
          },
          {
            "CommodityName": "liquidCrystals",
            "CommodityTicker": "LCR",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "twoDimensionalDisplay",
            "CommodityTicker": "DIS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xLCR 3xGL@MCA=>1xDIS",
        "DurationMs": 57888000,
        "RecipeName": "1xLCR 3xGL=>1xDIS",
        "StandardRecipeName": "MCA:3xGL-1xLCR=>1xDIS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "smallDeviceCover",
            "CommodityTicker": "DCS",
            "Amount": 5
          },
          {
            "CommodityName": "reinforcedTranslucentMaterial",
            "CommodityTicker": "RG",
            "Amount": 1
          },
          {
            "CommodityName": "laserDiode",
            "CommodityTicker": "LDI",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "holographicDisplay",
            "CommodityTicker": "HD",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "1xRG 5xDCS 5xLDI@MCA=>5xHD",
        "DurationMs": 57888000,
        "RecipeName": "1xRG 5xDCS 5xLDI=>5xHD",
        "StandardRecipeName": "MCA:5xDCS-5xLDI-1xRG=>5xHD"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 4
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 4
          },
          {
            "CommodityName": "microProcessor",
            "CommodityTicker": "MPC",
            "Amount": 4
          },
          {
            "CommodityName": "memoryBank",
            "CommodityTicker": "RAM",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "motherBoard",
            "CommodityTicker": "MB",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xRAM 4xMPC 4xPSM 4xSFK@MCA=>4xMB",
        "DurationMs": 25920000,
        "RecipeName": "4xRAM 4xMPC 4xPSM 4xSFK=>4xMB",
        "StandardRecipeName": "MCA:4xMPC-4xPSM-4xRAM-4xSFK=>4xMB"
      }
    ],
    "BuildingId": "be0b2cfee68fd9bccf24da9bca9a1aa0",
    "Name": "mediumComponentsAssembly",
    "Ticker": "MCA",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 20,
    "Technicians": 20,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 35,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:08.298303"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 8
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 150
          },
          {
            "CommodityName": "lightweightBulkhead",
            "CommodityTicker": "LBH",
            "Amount": 2
          },
          {
            "CommodityName": "basicThermalProtectionMaterial",
            "CommodityTicker": "THP",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "thermalShielding",
            "CommodityTicker": "TSH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "150xPE 2xLBH 2xTHP@PP4=>1xTSH",
        "DurationMs": 51840000,
        "RecipeName": "150xPE 2xLBH 2xTHP=>1xTSH",
        "StandardRecipeName": "PP4:2xLBH-150xPE-2xTHP=>1xTSH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "reinforcedStructuralElements",
            "CommodityTicker": "RSE",
            "Amount": 1
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedStructuralElements",
            "CommodityTicker": "ASE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xRSE 2xTI@PP4=>1xASE",
        "DurationMs": 47520000,
        "RecipeName": "1xRSE 2xTI=>1xASE",
        "StandardRecipeName": "PP4:1xRSE-2xTI=>1xASE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nanoGlass",
            "CommodityTicker": "NG",
            "Amount": 1
          },
          {
            "CommodityName": "reinforcedWindow",
            "CommodityTicker": "RTA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedWindow",
            "CommodityTicker": "ATA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xRTA 1xNG@PP4=>1xATA",
        "DurationMs": 47520000,
        "RecipeName": "1xRTA 1xNG=>1xATA",
        "StandardRecipeName": "PP4:1xNG-1xRTA=>1xATA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tantalum",
            "CommodityTicker": "TA",
            "Amount": 1
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 1
          },
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "radiationShielding",
            "CommodityTicker": "RSH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xTA 1xSTL 1xLST@PP4=>1xRSH",
        "DurationMs": 77760000,
        "RecipeName": "1xTA 1xSTL 1xLST=>1xRSH",
        "StandardRecipeName": "PP4:1xLST-1xSTL-1xTA=>1xRSH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 2
          },
          {
            "CommodityName": "lightweightDeckElements",
            "CommodityTicker": "LDE",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedDeckElements",
            "CommodityTicker": "ADE",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xLDE 2xKV@PP4=>2xADE",
        "DurationMs": 51840000,
        "RecipeName": "2xLDE 2xKV=>2xADE",
        "StandardRecipeName": "PP4:2xKV-2xLDE=>2xADE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "reinforcedBulkhead",
            "CommodityTicker": "RBH",
            "Amount": 2
          },
          {
            "CommodityName": "nanoResin",
            "CommodityTicker": "NR",
            "Amount": 125
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedBulkhead",
            "CommodityTicker": "ABH",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xRBH 125xNR@PP4=>2xABH",
        "DurationMs": 60480000,
        "RecipeName": "2xRBH 125xNR=>2xABH",
        "StandardRecipeName": "PP4:125xNR-2xRBH=>2xABH"
      }
    ],
    "BuildingId": "c269358a931061cb76e2aa79e39aa665",
    "Name": "prefabPlant4",
    "Ticker": "PP4",
    "Expertise": "CONSTRUCTION",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 40,
    "Engineers": 30,
    "Scientists": 0,
    "AreaCost": 40,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T18:30:28.477055"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 3
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 3
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 3
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 10
          },
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "premiumFertilizer",
            "CommodityTicker": "PFE",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xAMM 4xREA@CHP=>10xPFE",
        "DurationMs": 69120000,
        "RecipeName": "10xAMM 4xREA=>10xPFE",
        "StandardRecipeName": "CHP:10xAMM-4xREA=>10xPFE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "bioreactiveMineral",
            "CommodityTicker": "BRM",
            "Amount": 20
          },
          {
            "CommodityName": "caliche",
            "CommodityTicker": "CLI",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "artificialSoil",
            "CommodityTicker": "SOI",
            "Amount": 16
          }
        ],
        "BuildingRecipeId": "10xCLI 20xBRM@CHP=>16xSOI",
        "DurationMs": 86400000,
        "RecipeName": "10xCLI 20xBRM=>16xSOI",
        "StandardRecipeName": "CHP:20xBRM-10xCLI=>16xSOI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "flux",
            "CommodityTicker": "FLX",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xLST@CHP=>10xFLX",
        "DurationMs": 43200000,
        "RecipeName": "1xLST=>10xFLX",
        "StandardRecipeName": "CHP:1xLST=>10xFLX"
      },
      {
        "Inputs": [
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "calcium",
            "CommodityTicker": "CA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xLST@CHP=>1xCA",
        "DurationMs": 25920000,
        "RecipeName": "1xLST=>1xCA",
        "StandardRecipeName": "CHP:1xLST=>1xCA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sulfur",
            "CommodityTicker": "S",
            "Amount": 1
          },
          {
            "CommodityName": "copper",
            "CommodityTicker": "CU",
            "Amount": 1
          },
          {
            "CommodityName": "magnesium",
            "CommodityTicker": "MG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "indigo",
            "CommodityTicker": "IND",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xMG 1xCU 1xS@CHP=>1xIND",
        "DurationMs": 34560000,
        "RecipeName": "1xMG 1xCU 1xS=>1xIND",
        "StandardRecipeName": "CHP:1xCU-1xMG-1xS=>1xIND"
      },
      {
        "Inputs": [
          {
            "CommodityName": "boronCrystals",
            "CommodityTicker": "BOR",
            "Amount": 1
          },
          {
            "CommodityName": "sodium",
            "CommodityTicker": "NA",
            "Amount": 1
          },
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "sodiumBorohydride",
            "CommodityTicker": "NAB",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "1xNA 1xBOR 5xH@CHP=>20xNAB",
        "DurationMs": 25920000,
        "RecipeName": "1xNA 1xBOR 5xH=>20xNAB",
        "StandardRecipeName": "CHP:1xBOR-5xH-1xNA=>20xNAB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          },
          {
            "CommodityName": "oxygen",
            "CommodityTicker": "O",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "liquidCrystals",
            "CommodityTicker": "LCR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSI 1xO@CHP=>1xLCR",
        "DurationMs": 56160000,
        "RecipeName": "1xSI 1xO=>1xLCR",
        "StandardRecipeName": "CHP:1xO-1xSI=>1xLCR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "bioreactiveMineral",
            "CommodityTicker": "BRM",
            "Amount": 25
          }
        ],
        "Outputs": [
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "25xBRM@CHP=>10xREA",
        "DurationMs": 60480000,
        "RecipeName": "25xBRM=>10xREA",
        "StandardRecipeName": "CHP:25xBRM=>10xREA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "magnesium",
            "CommodityTicker": "MG",
            "Amount": 1
          },
          {
            "CommodityName": "tantalum",
            "CommodityTicker": "TA",
            "Amount": 1
          },
          {
            "CommodityName": "calcium",
            "CommodityTicker": "CA",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "technicianLuxuryHealth",
            "CommodityTicker": "SC",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "2xCA 1xMG 1xTA@CHP=>20xSC",
        "DurationMs": 56160000,
        "RecipeName": "2xCA 1xMG 1xTA=>20xSC",
        "StandardRecipeName": "CHP:2xCA-1xMG-1xTA=>20xSC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 2
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 1
          },
          {
            "CommodityName": "nitrogen",
            "CommodityTicker": "N",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "2xH2O 2xN 1xLST@CHP=>4xNS",
        "DurationMs": 17280000,
        "RecipeName": "2xH2O 2xN 1xLST=>4xNS",
        "StandardRecipeName": "CHP:2xH2O-1xLST-2xN=>4xNS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 1
          },
          {
            "CommodityName": "halite",
            "CommodityTicker": "HAL",
            "Amount": 3
          }
        ],
        "Outputs": [
          {
            "CommodityName": "sodium",
            "CommodityTicker": "NA",
            "Amount": 2
          },
          {
            "CommodityName": "chlorine",
            "CommodityTicker": "CL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "3xHAL 1xH2O@CHP=>2xNA 1xCL",
        "DurationMs": 50112000,
        "RecipeName": "3xHAL 1xH2O=>2xNA 1xCL",
        "StandardRecipeName": "CHP:1xH2O-3xHAL=>1xCL-2xNA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "herbs",
            "CommodityTicker": "HER",
            "Amount": 1
          },
          {
            "CommodityName": "cottonProcessed",
            "CommodityTicker": "COT",
            "Amount": 4
          },
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "technicianHealth",
            "CommodityTicker": "MED",
            "Amount": 16
          }
        ],
        "BuildingRecipeId": "50xPE 1xAL 4xCOT 1xHER@CHP=>16xMED",
        "DurationMs": 69120000,
        "RecipeName": "50xPE 1xAL 4xCOT 1xHER=>16xMED",
        "StandardRecipeName": "CHP:1xAL-4xCOT-1xHER-50xPE=>16xMED"
      },
      {
        "Inputs": [
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 10
          },
          {
            "CommodityName": "fattyVegetables",
            "CommodityTicker": "VEG",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "olfactorySubstances",
            "CommodityTicker": "OLF",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "6xVEG 10xREA@CHP=>6xOLF",
        "DurationMs": 34560000,
        "RecipeName": "6xVEG 10xREA=>6xOLF",
        "StandardRecipeName": "CHP:10xREA-6xVEG=>6xOLF"
      }
    ],
    "BuildingId": "c77107883895fc08fa3ddcfc5d65d99e",
    "Name": "chemPlant",
    "Ticker": "CHP",
    "Expertise": "CHEMISTRY",
    "Pioneers": 20,
    "Settlers": 60,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 18,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T18:30:28.470003"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 12
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 20
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 100
          },
          {
            "CommodityName": "technoKevlar",
            "CommodityTicker": "TK",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedHighgSeats",
            "CommodityTicker": "AGS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "100xPG 20xAST 8xTK@SPP=>1xAGS",
        "DurationMs": 172800000,
        "RecipeName": "100xPG 20xAST 8xTK=>1xAGS",
        "StandardRecipeName": "SPP:20xAST-100xPG-8xTK=>1xAGS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "advancedThermalProtectionMaterial",
            "CommodityTicker": "ATP",
            "Amount": 5
          },
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 30
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedHeatShield",
            "CommodityTicker": "APT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "5xATP 30xTHF@SPP=>10xAPT",
        "DurationMs": 43200000,
        "RecipeName": "5xATP 30xTHF=>10xAPT",
        "StandardRecipeName": "SPP:5xATP-30xTHF=>10xAPT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 2
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicRadiationShielding",
            "CommodityTicker": "BRP",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "5xLST 2xKV@SPP=>10xBRP",
        "DurationMs": 34560000,
        "RecipeName": "5xLST 2xKV=>10xBRP",
        "StandardRecipeName": "SPP:2xKV-5xLST=>10xBRP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 5
          },
          {
            "CommodityName": "technoKevlar",
            "CommodityTicker": "TK",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedRadiationShielding",
            "CommodityTicker": "ARP",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "5xLST 2xTK@SPP=>8xARP",
        "DurationMs": 43200000,
        "RecipeName": "5xLST 2xTK=>8xARP",
        "StandardRecipeName": "SPP:5xLST-2xTK=>8xARP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tantalum",
            "CommodityTicker": "TA",
            "Amount": 5
          },
          {
            "CommodityName": "wolfram",
            "CommodityTicker": "W",
            "Amount": 5
          },
          {
            "CommodityName": "limestone",
            "CommodityTicker": "LST",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "specializedRadiationShielding",
            "CommodityTicker": "SRP",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "5xLST 5xW 5xTA@SPP=>8xSRP",
        "DurationMs": 43200000,
        "RecipeName": "5xLST 5xW 5xTA=>8xSRP",
        "StandardRecipeName": "SPP:5xLST-5xTA-5xW=>8xSRP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 20
          },
          {
            "CommodityName": "basicThermalProtectionMaterial",
            "CommodityTicker": "THP",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicHeatShield",
            "CommodityTicker": "BPT",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "5xTHP 20xTHF@SPP=>10xBPT",
        "DurationMs": 30240000,
        "RecipeName": "5xTHP 20xTHF=>10xBPT",
        "StandardRecipeName": "SPP:20xTHF-5xTHP=>10xBPT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 80
          },
          {
            "CommodityName": "aluminiumIronAlloy",
            "CommodityTicker": "FAL",
            "Amount": 14
          },
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicHighgSeats",
            "CommodityTicker": "BGS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "80xPG 14xFAL 4xKV@SPP=>1xBGS",
        "DurationMs": 129600000,
        "RecipeName": "80xPG 14xFAL 4xKV=>1xBGS",
        "StandardRecipeName": "SPP:14xFAL-4xKV-80xPG=>1xBGS"
      }
    ],
    "BuildingId": "c953ef90b5d584728f9762014abedc03",
    "Name": "spacecraftPrefabPlant",
    "Ticker": "SPP",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 50,
    "Engineers": 30,
    "Scientists": 0,
    "AreaCost": 60,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T18:30:28.443452"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 12
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 30
      },
      {
        "CommodityName": "mineralConstructionGranulate",
        "CommodityTicker": "MCG",
        "Amount": 500
      },
      {
        "CommodityName": "decorativeElements",
        "CommodityTicker": "DEC",
        "Amount": 20
      },
      {
        "CommodityName": "audioDistributionSystem",
        "CommodityTicker": "ADS",
        "Amount": 1
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 32
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 24
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 32
      }
    ],
    "Recipes": [],
    "BuildingId": "cec568a5652b1493bebb185ad6191243",
    "Name": "planetaryProjectCultureBig",
    "Ticker": "VRT",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 1000,
    "UserNameSubmitted": "KOVUS",
    "Timestamp": "2023-06-19T13:50:18.950825"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 6
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightWindow",
        "CommodityTicker": "LTA",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "mediumDeviceCover",
            "CommodityTicker": "DCM",
            "Amount": 2
          },
          {
            "CommodityName": "bodyScanner",
            "CommodityTicker": "BSC",
            "Amount": 1
          },
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 20
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "autoDoc",
            "CommodityTicker": "ADR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBSC 20xREA 4xMFK 2xDCM@PHF=>1xADR",
        "DurationMs": 77760000,
        "RecipeName": "1xBSC 20xREA 4xMFK 2xDCM=>1xADR",
        "StandardRecipeName": "PHF:1xBSC-2xDCM-4xMFK-20xREA=>1xADR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "mediumDeviceCover",
            "CommodityTicker": "DCM",
            "Amount": 1
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "bodyScanner",
            "CommodityTicker": "BSC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xDCM 1xMFK 1xSAR@PHF=>1xBSC",
        "DurationMs": 77760000,
        "RecipeName": "1xDCM 1xMFK 1xSAR=>1xBSC",
        "StandardRecipeName": "PHF:1xDCM-1xMFK-1xSAR=>1xBSC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nylon",
            "CommodityTicker": "NL",
            "Amount": 1
          },
          {
            "CommodityName": "silkProcessed",
            "CommodityTicker": "SIL",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "bandages",
            "CommodityTicker": "BND",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "1xNL 1xSIL@PHF=>20xBND",
        "DurationMs": 17280000,
        "RecipeName": "1xNL 1xSIL=>20xBND",
        "StandardRecipeName": "PHF:1xNL-1xSIL=>20xBND"
      },
      {
        "Inputs": [
          {
            "CommodityName": "calcium",
            "CommodityTicker": "CA",
            "Amount": 2
          },
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 10
          },
          {
            "CommodityName": "lithium",
            "CommodityTicker": "LI",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "painkillers",
            "CommodityTicker": "PK",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "2xCA 4xLI 10xREA@PHF=>10xPK",
        "DurationMs": 28512000,
        "RecipeName": "2xCA 4xLI 10xREA=>10xPK",
        "StandardRecipeName": "PHF:2xCA-4xLI-10xREA=>10xPK"
      }
    ],
    "BuildingId": "d1c4ee10de13ca8ff87cde369553bade",
    "Name": "pharmaFactory",
    "Ticker": "PHF",
    "Expertise": "CHEMISTRY",
    "Pioneers": 0,
    "Settlers": 25,
    "Technicians": 25,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 35,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:09.985616"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 10
      },
      {
        "CommodityName": "basicDeckElements",
        "CommodityTicker": "BDE",
        "Amount": 10
      },
      {
        "CommodityName": "basicBulkhead",
        "CommodityTicker": "BBH",
        "Amount": 8
      },
      {
        "CommodityName": "basicWindow",
        "CommodityTicker": "BTA",
        "Amount": 3
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 8
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "communicationSystem",
            "CommodityTicker": "COM",
            "Amount": 1
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 5
          },
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 10
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 10
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 20
          },
          {
            "CommodityName": "navigation1",
            "CommodityTicker": "NV1",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "commandBridge1",
            "CommodityTicker": "BR1",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xPSL 20xPSM 10xFET 1xNV1 5xSAR 1xCOM@UPF=>1xBR1",
        "DurationMs": 345600000,
        "RecipeName": "10xPSL 20xPSM 10xFET 1xNV1 5xSAR 1xCOM=>1xBR1",
        "StandardRecipeName": "UPF:1xCOM-10xFET-1xNV1-10xPSL-20xPSM-5xSAR=>1xBR1"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 10
          },
          {
            "CommodityName": "navigation2",
            "CommodityTicker": "NV2",
            "Amount": 1
          },
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 10
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 10
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 20
          },
          {
            "CommodityName": "communicationSystem",
            "CommodityTicker": "COM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "commandBridge2",
            "CommodityTicker": "BR2",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xPSL 20xPSM 10xFET 1xNV2 10xSAR 1xCOM@UPF=>1xBR2",
        "DurationMs": 432000000,
        "RecipeName": "10xPSL 20xPSM 10xFET 1xNV2 10xSAR 1xCOM=>1xBR2",
        "StandardRecipeName": "UPF:1xCOM-10xFET-1xNV2-10xPSL-20xPSM-10xSAR=>1xBR2"
      },
      {
        "Inputs": [
          {
            "CommodityName": "traumaCareUnit",
            "CommodityTicker": "TCU",
            "Amount": 1
          },
          {
            "CommodityName": "decorativeElements",
            "CommodityTicker": "DEC",
            "Amount": 10
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 10
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 20
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 10
          },
          {
            "CommodityName": "lifeSupportSystem",
            "CommodityTicker": "LIS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "crewQuartersMed",
            "CommodityTicker": "CQM",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xPSL 20xPSM 10xTI 1xLIS 10xDEC 1xTCU@UPF=>1xCQM",
        "DurationMs": 216000000,
        "RecipeName": "10xPSL 20xPSM 10xTI 1xLIS 10xDEC 1xTCU=>1xCQM",
        "StandardRecipeName": "UPF:10xDEC-1xLIS-10xPSL-20xPSM-1xTCU-10xTI=>1xCQM"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 10
          },
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 10
          },
          {
            "CommodityName": "radioDevice",
            "CommodityTicker": "RAD",
            "Amount": 4
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 20
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "commandBridgeShort",
            "CommodityTicker": "BRS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xPSL 20xPSM 10xTI 5xSAR 4xRAD@UPF=>1xBRS",
        "DurationMs": 259200000,
        "RecipeName": "10xPSL 20xPSM 10xTI 5xSAR 4xRAD=>1xBRS",
        "StandardRecipeName": "UPF:10xPSL-20xPSM-4xRAD-5xSAR-10xTI=>1xBRS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 4
          },
          {
            "CommodityName": "communicationSystem",
            "CommodityTicker": "COM",
            "Amount": 1
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "droneOperationsUnit",
            "CommodityTicker": "DOU",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xPSL 4xSAR 1xCOM@UPF=>1xDOU",
        "DurationMs": 155520000,
        "RecipeName": "10xPSL 4xSAR 1xCOM=>1xDOU",
        "StandardRecipeName": "UPF:1xCOM-10xPSL-4xSAR=>1xDOU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 12
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 8
          },
          {
            "CommodityName": "autoDoc",
            "CommodityTicker": "ADR",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "traumaCareUnit",
            "CommodityTicker": "TCU",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "12xPSL 8xPSM 1xADR@UPF=>1xTCU",
        "DurationMs": 138240000,
        "RecipeName": "12xPSL 8xPSM 1xADR=>1xTCU",
        "StandardRecipeName": "UPF:1xADR-12xPSL-8xPSM=>1xTCU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 8
          },
          {
            "CommodityName": "fullBodyInteractionDevice",
            "CommodityTicker": "BID",
            "Amount": 1
          },
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 4
          },
          {
            "CommodityName": "workstationBlank",
            "CommodityTicker": "BWS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "entertainmentUnit",
            "CommodityTicker": "FUN",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBWS 8xPSL 4xPCB 1xBID@UPF=>1xFUN",
        "DurationMs": 190080000,
        "RecipeName": "1xBWS 8xPSL 4xPCB 1xBID=>1xFUN",
        "StandardRecipeName": "UPF:1xBID-1xBWS-4xPCB-8xPSL=>1xFUN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "dataAnalyzer",
            "CommodityTicker": "DA",
            "Amount": 1
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 10
          },
          {
            "CommodityName": "scientistTools",
            "CommodityTicker": "WS",
            "Amount": 1
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "laboratoryUnit",
            "CommodityTicker": "LU",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xWS 1xDA 10xPSL 6xPSM@UPF=>1xLU",
        "DurationMs": 129600000,
        "RecipeName": "1xWS 1xDA 10xPSL 6xPSM=>1xLU",
        "StandardRecipeName": "UPF:1xDA-10xPSL-6xPSM-1xWS=>1xLU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 20
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 30
          },
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 20
          },
          {
            "CommodityName": "traumaCareUnit",
            "CommodityTicker": "TCU",
            "Amount": 1
          },
          {
            "CommodityName": "decorativeElements",
            "CommodityTicker": "DEC",
            "Amount": 20
          },
          {
            "CommodityName": "lifeSupportSystem",
            "CommodityTicker": "LIS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "crewQuarters",
            "CommodityTicker": "CQL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xPSL 30xPSM 20xFET 1xLIS 20xDEC 1xTCU@UPF=>1xCQL",
        "DurationMs": 259200000,
        "RecipeName": "20xPSL 30xPSM 20xFET 1xLIS 20xDEC 1xTCU=>1xCQL",
        "StandardRecipeName": "UPF:20xDEC-20xFET-1xLIS-20xPSL-30xPSM-1xTCU=>1xCQL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 20
          },
          {
            "CommodityName": "shipRepairDrone",
            "CommodityTicker": "SRD",
            "Amount": 4
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 30
          }
        ],
        "Outputs": [
          {
            "CommodityName": "smallShipRepairDroneUnit",
            "CommodityTicker": "RDS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xPSL 30xPSM 4xSRD@UPF=>1xRDS",
        "DurationMs": 259200000,
        "RecipeName": "20xPSL 30xPSM 4xSRD=>1xRDS",
        "StandardRecipeName": "UPF:20xPSL-30xPSM-4xSRD=>1xRDS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "universalToolset",
            "CommodityTicker": "UTS",
            "Amount": 6
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 12
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "handcraftWorkshopUnit",
            "CommodityTicker": "WOR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xPSL 6xUTS 12xPSM@UPF=>1xWOR",
        "DurationMs": 155520000,
        "RecipeName": "20xPSL 6xUTS 12xPSM=>1xWOR",
        "StandardRecipeName": "UPF:20xPSL-12xPSM-6xUTS=>1xWOR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 2
          },
          {
            "CommodityName": "mainFrameBlank",
            "CommodityTicker": "BMF",
            "Amount": 1
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 5
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 5
          },
          {
            "CommodityName": "decorativeElements",
            "CommodityTicker": "DEC",
            "Amount": 1
          },
          {
            "CommodityName": "traumaCareUnit",
            "CommodityTicker": "TCU",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "crewQuartersTiny",
            "CommodityTicker": "CQT",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xPSL 5xPSM 5xAL 1xDEC 1xTCU 1xBMF@UPF=>1xCQT",
        "DurationMs": 146880000,
        "RecipeName": "2xPSL 5xPSM 5xAL 1xDEC 1xTCU 1xBMF=>1xCQT",
        "StandardRecipeName": "UPF:5xAL-1xBMF-1xDEC-2xPSL-5xPSM-1xTCU=>1xCQT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "shipRepairDrone",
            "CommodityTicker": "SRD",
            "Amount": 8
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 30
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "largeShipRepairDroneUnit",
            "CommodityTicker": "RDL",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "30xPSL 50xPSM 8xSRD@UPF=>1xRDL",
        "DurationMs": 432000000,
        "RecipeName": "30xPSL 50xPSM 8xSRD=>1xRDL",
        "StandardRecipeName": "UPF:30xPSL-50xPSM-8xSRD=>1xRDL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "bodyScanner",
            "CommodityTicker": "BSC",
            "Amount": 2
          },
          {
            "CommodityName": "nanoGlass",
            "CommodityTicker": "NG",
            "Amount": 10
          },
          {
            "CommodityName": "surgicalEquipment",
            "CommodityTicker": "SEQ",
            "Amount": 4
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 8
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 12
          }
        ],
        "Outputs": [
          {
            "CommodityName": "surgeryUnit",
            "CommodityTicker": "SU",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xSEQ 2xBSC 12xPSL 8xPSM 10xNG@UPF=>1xSU",
        "DurationMs": 172800000,
        "RecipeName": "4xSEQ 2xBSC 12xPSL 8xPSM 10xNG=>1xSU",
        "StandardRecipeName": "UPF:2xBSC-10xNG-12xPSL-8xPSM-4xSEQ=>1xSU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "lifeSupportSystem",
            "CommodityTicker": "LIS",
            "Amount": 1
          },
          {
            "CommodityName": "traumaCareUnit",
            "CommodityTicker": "TCU",
            "Amount": 1
          },
          {
            "CommodityName": "largePlasticsBoard",
            "CommodityTicker": "PSL",
            "Amount": 5
          },
          {
            "CommodityName": "mediumPlasticsBoard",
            "CommodityTicker": "PSM",
            "Amount": 10
          },
          {
            "CommodityName": "aluminiumIronAlloy",
            "CommodityTicker": "FAL",
            "Amount": 5
          },
          {
            "CommodityName": "decorativeElements",
            "CommodityTicker": "DEC",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "crewQuartersSmall",
            "CommodityTicker": "CQS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "5xPSL 10xPSM 5xFAL 1xLIS 2xDEC 1xTCU@UPF=>1xCQS",
        "DurationMs": 172800000,
        "RecipeName": "5xPSL 10xPSM 5xFAL 1xLIS 2xDEC 1xTCU=>1xCQS",
        "StandardRecipeName": "UPF:2xDEC-5xFAL-1xLIS-5xPSL-10xPSM-1xTCU=>1xCQS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "basicBulkhead",
            "CommodityTicker": "BBH",
            "Amount": 6
          },
          {
            "CommodityName": "artificialSoil",
            "CommodityTicker": "SOI",
            "Amount": 50
          },
          {
            "CommodityName": "basicStructuralElements",
            "CommodityTicker": "BSE",
            "Amount": 10
          },
          {
            "CommodityName": "basicDeckElements",
            "CommodityTicker": "BDE",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "habitatUnit",
            "CommodityTicker": "HAB",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "6xBBH 10xBDE 10xBSE 50xSOI@UPF=>1xHAB",
        "DurationMs": 172800000,
        "RecipeName": "6xBBH 10xBDE 10xBSE 50xSOI=>1xHAB",
        "StandardRecipeName": "UPF:6xBBH-10xBDE-10xBSE-50xSOI=>1xHAB"
      }
    ],
    "BuildingId": "d22cce8eaa34e9403c52c44678374e2f",
    "Name": "unitPrefabPlant",
    "Ticker": "UPF",
    "Expertise": "CONSTRUCTION",
    "Pioneers": 20,
    "Settlers": 50,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 50,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.739715"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 8
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 2
          },
          {
            "CommodityName": "aluminiumIronAlloy",
            "CommodityTicker": "FAL",
            "Amount": 10
          },
          {
            "CommodityName": "combustionChamber",
            "CommodityTicker": "CHA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicNozzle",
            "CommodityTicker": "NOZ",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "10xFAL 2xMFK 1xCHA@SPF=>1xNOZ",
        "DurationMs": 43200000,
        "RecipeName": "10xFAL 2xMFK 1xCHA=>1xNOZ",
        "StandardRecipeName": "SPF:1xCHA-10xFAL-2xMFK=>1xNOZ"
      },
      {
        "Inputs": [
          {
            "CommodityName": "steel",
            "CommodityTicker": "STL",
            "Amount": 20
          },
          {
            "CommodityName": "fissionReactor",
            "CommodityTicker": "FIR",
            "Amount": 1
          },
          {
            "CommodityName": "mediumCapacitorBank",
            "CommodityTicker": "CBM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "highPowerReactor",
            "CommodityTicker": "HPR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xFIR 20xSTL 1xCBM@SPF=>1xHPR",
        "DurationMs": 432000000,
        "RecipeName": "1xFIR 20xSTL 1xCBM=>1xHPR",
        "StandardRecipeName": "SPF:1xCBM-1xFIR-20xSTL=>1xHPR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "smallCapacitorBank",
            "CommodityTicker": "CBS",
            "Amount": 1
          },
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 10
          },
          {
            "CommodityName": "radioisotopeGenerator",
            "CommodityTicker": "RAG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "standardReactor",
            "CommodityTicker": "RCT",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xRAG 10xAST 1xCBS@SPF=>1xRCT",
        "DurationMs": 224640000,
        "RecipeName": "1xRAG 10xAST 1xCBS=>1xRCT",
        "StandardRecipeName": "SPF:10xAST-1xCBS-1xRAG=>1xRCT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "goldIronAlloy",
            "CommodityTicker": "BGO",
            "Amount": 20
          },
          {
            "CommodityName": "smallCapacitorBank",
            "CommodityTicker": "CBS",
            "Amount": 1
          },
          {
            "CommodityName": "radioisotopeGenerator",
            "CommodityTicker": "RAG",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "quickChargeReactor",
            "CommodityTicker": "QCR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xRAG 20xBGO 1xCBS@SPF=>1xQCR",
        "DurationMs": 259200000,
        "RecipeName": "1xRAG 20xBGO 1xCBS=>1xQCR",
        "StandardRecipeName": "SPF:20xBGO-1xCBS-1xRAG=>1xQCR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 50
          },
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 1
          },
          {
            "CommodityName": "advancedThermalProtectionMaterial",
            "CommodityTicker": "ATP",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedFuelPump",
            "CommodityTicker": "AFP",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSFK 50xPG 10xATP@SPF=>1xAFP",
        "DurationMs": 34560000,
        "RecipeName": "1xSFK 50xPG 10xATP=>1xAFP",
        "StandardRecipeName": "SPF:10xATP-50xPG-1xSFK=>1xAFP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 50
          },
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 1
          },
          {
            "CommodityName": "basicThermalProtectionMaterial",
            "CommodityTicker": "THP",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "basicFuelPump",
            "CommodityTicker": "BFP",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSFK 50xPG 5xTHP@SPF=>1xBFP",
        "DurationMs": 25920000,
        "RecipeName": "1xSFK 50xPG 5xTHP=>1xBFP",
        "StandardRecipeName": "SPF:50xPG-1xSFK-5xTHP=>1xBFP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "combustionChamber",
            "CommodityTicker": "CHA",
            "Amount": 1
          },
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 20
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedNozzle",
            "CommodityTicker": "ANZ",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xFET 4xMFK 1xCHA@SPF=>1xANZ",
        "DurationMs": 60480000,
        "RecipeName": "20xFET 4xMFK 1xCHA=>1xANZ",
        "StandardRecipeName": "SPF:1xCHA-20xFET-4xMFK=>1xANZ"
      },
      {
        "Inputs": [
          {
            "CommodityName": "combustionChamber",
            "CommodityTicker": "CHA",
            "Amount": 1
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 4
          },
          {
            "CommodityName": "tungstenAluminiumAlloy",
            "CommodityTicker": "WAL",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "hyperthrustNozzle",
            "CommodityTicker": "HNZ",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xWAL 4xMFK 1xCHA@SPF=>1xHNZ",
        "DurationMs": 77760000,
        "RecipeName": "20xWAL 4xMFK 1xCHA=>1xHNZ",
        "StandardRecipeName": "SPF:1xCHA-4xMFK-20xWAL=>1xHNZ"
      },
      {
        "Inputs": [
          {
            "CommodityName": "largeCapacitorBank",
            "CommodityTicker": "CBL",
            "Amount": 1
          },
          {
            "CommodityName": "tungstenAluminiumAlloy",
            "CommodityTicker": "WAL",
            "Amount": 20
          },
          {
            "CommodityName": "fissionReactor",
            "CommodityTicker": "FIR",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "hyperPowerReactor",
            "CommodityTicker": "HYR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xFIR 20xWAL 1xCBL@SPF=>1xHYR",
        "DurationMs": 604800000,
        "RecipeName": "2xFIR 20xWAL 1xCBL=>1xHYR",
        "StandardRecipeName": "SPF:1xCBL-2xFIR-20xWAL=>1xHYR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "advancedFuelPump",
            "CommodityTicker": "AFP",
            "Amount": 4
          },
          {
            "CommodityName": "automatedCoolingSystem",
            "CommodityTicker": "ACS",
            "Amount": 1
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          },
          {
            "CommodityName": "advancedNozzle",
            "CommodityTicker": "ANZ",
            "Amount": 4
          },
          {
            "CommodityName": "ironTitaniumAlloy",
            "CommodityTicker": "FET",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "advancedEngine",
            "CommodityTicker": "AEN",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xAFP 4xANZ 20xFET 1xACS 1xMFK@SPF=>1xAEN",
        "DurationMs": 172800000,
        "RecipeName": "4xAFP 4xANZ 20xFET 1xACS 1xMFK=>1xAEN",
        "StandardRecipeName": "SPF:1xACS-4xAFP-4xANZ-20xFET-1xMFK=>1xAEN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "aluminiumTitaniumAlloy",
            "CommodityTicker": "AST",
            "Amount": 10
          },
          {
            "CommodityName": "basicFuelPump",
            "CommodityTicker": "BFP",
            "Amount": 4
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          },
          {
            "CommodityName": "automatedCoolingSystem",
            "CommodityTicker": "ACS",
            "Amount": 1
          },
          {
            "CommodityName": "basicNozzle",
            "CommodityTicker": "NOZ",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "standardEngine",
            "CommodityTicker": "ENG",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xBFP 4xNOZ 10xAST 1xACS 1xMFK@SPF=>1xENG",
        "DurationMs": 69120000,
        "RecipeName": "4xBFP 4xNOZ 10xAST 1xACS 1xMFK=>1xENG",
        "StandardRecipeName": "SPF:1xACS-10xAST-4xBFP-1xMFK-4xNOZ=>1xENG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "lowHeatFuelPump",
            "CommodityTicker": "LFP",
            "Amount": 6
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          },
          {
            "CommodityName": "automatedCoolingSystem",
            "CommodityTicker": "ACS",
            "Amount": 1
          },
          {
            "CommodityName": "basicNozzle",
            "CommodityTicker": "NOZ",
            "Amount": 6
          },
          {
            "CommodityName": "copperAluminiumAlloy",
            "CommodityTicker": "BRO",
            "Amount": 25
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fuelSavingEngine",
            "CommodityTicker": "FSE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "6xLFP 6xNOZ 25xBRO 1xACS 1xMFK@SPF=>1xFSE",
        "DurationMs": 86400000,
        "RecipeName": "6xLFP 6xNOZ 25xBRO 1xACS 1xMFK=>1xFSE",
        "StandardRecipeName": "SPF:1xACS-25xBRO-6xLFP-1xMFK-6xNOZ=>1xFSE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tungstenAluminiumAlloy",
            "CommodityTicker": "WAL",
            "Amount": 20
          },
          {
            "CommodityName": "advancedFuelPump",
            "CommodityTicker": "AFP",
            "Amount": 8
          },
          {
            "CommodityName": "hyperthrustNozzle",
            "CommodityTicker": "HNZ",
            "Amount": 4
          },
          {
            "CommodityName": "automatedCoolingSystem",
            "CommodityTicker": "ACS",
            "Amount": 1
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "hyperthrustEngine",
            "CommodityTicker": "HTE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "8xAFP 4xHNZ 20xWAL 1xACS 1xMFK@SPF=>1xHTE",
        "DurationMs": 345600000,
        "RecipeName": "8xAFP 4xHNZ 20xWAL 1xACS 1xMFK=>1xHTE",
        "StandardRecipeName": "SPF:1xACS-8xAFP-4xHNZ-1xMFK-20xWAL=>1xHTE"
      }
    ],
    "BuildingId": "d240849d1f6ce910080d31e31de2c88f",
    "Name": "spacecraftPropulsionFactory",
    "Ticker": "SPF",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 50,
    "Scientists": 20,
    "AreaCost": 40,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:24.859333"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "copper",
            "CommodityTicker": "CU",
            "Amount": 4
          },
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 100
          }
        ],
        "Outputs": [
          {
            "CommodityName": "technicianTools",
            "CommodityTicker": "SCN",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "100xPE 4xCU@EDM=>8xSCN",
        "DurationMs": 103680000,
        "RecipeName": "100xPE 4xCU=>8xSCN",
        "StandardRecipeName": "EDM:4xCU-100xPE=>8xSCN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "nanoGlass",
            "CommodityTicker": "NG",
            "Amount": 1
          },
          {
            "CommodityName": "smallDeviceCover",
            "CommodityTicker": "DCS",
            "Amount": 1
          },
          {
            "CommodityName": "holographicDisplay",
            "CommodityTicker": "HD",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "holographicGlasses",
            "CommodityTicker": "HOG",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xDCS 1xHD 1xNG@EDM=>1xHOG",
        "DurationMs": 25920000,
        "RecipeName": "1xDCS 1xHD 1xNG=>1xHOG",
        "StandardRecipeName": "EDM:1xDCS-1xHD-1xNG=>1xHOG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "fastenerKitSmall",
            "CommodityTicker": "SFK",
            "Amount": 1
          },
          {
            "CommodityName": "smallDeviceCover",
            "CommodityTicker": "DCS",
            "Amount": 1
          },
          {
            "CommodityName": "powerCell",
            "CommodityTicker": "POW",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "radioDevice",
            "CommodityTicker": "RAD",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xDCS 1xSFK 1xPOW@EDM=>1xRAD",
        "DurationMs": 17280000,
        "RecipeName": "1xDCS 1xSFK 1xPOW=>1xRAD",
        "StandardRecipeName": "EDM:1xDCS-1xPOW-1xSFK=>1xRAD"
      },
      {
        "Inputs": [
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 1
          },
          {
            "CommodityName": "audioTransmitter",
            "CommodityTicker": "TRA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "microHeadphones",
            "CommodityTicker": "MHP",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xPCB 1xTRA@EDM=>1xMHP",
        "DurationMs": 17280000,
        "RecipeName": "1xPCB 1xTRA=>1xMHP",
        "StandardRecipeName": "EDM:1xPCB-1xTRA=>1xMHP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "kevlar",
            "CommodityTicker": "KV",
            "Amount": 1
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 2
          },
          {
            "CommodityName": "touchScreen",
            "CommodityTicker": "CD",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "fullBodyInteractionDevice",
            "CommodityTicker": "BID",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xSAR 2xCD 1xKV@EDM=>2xBID",
        "DurationMs": 25920000,
        "RecipeName": "2xSAR 2xCD 1xKV=>2xBID",
        "StandardRecipeName": "EDM:2xCD-1xKV-2xSAR=>2xBID"
      }
    ],
    "BuildingId": "d3fb9dd6b79db25b693cfead40e712fd",
    "Name": "electronicDeviceManufactory",
    "Ticker": "EDM",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 50,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 30,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:53.827325"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 1
          },
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 1
          },
          {
            "CommodityName": "water",
            "CommodityTicker": "H2O",
            "Amount": 16
          }
        ],
        "Outputs": [
          {
            "CommodityName": "silkRaw",
            "CommodityTicker": "RSI",
            "Amount": 8
          }
        ],
        "BuildingRecipeId": "16xH2O 1xHCP 1xNS@IVP=>8xRSI",
        "DurationMs": 86400000,
        "RecipeName": "16xH2O 1xHCP 1xNS=>8xRSI",
        "StandardRecipeName": "IVP:16xH2O-1xHCP-1xNS=>8xRSI"
      },
      {
        "Inputs": [
          {
            "CommodityName": "proteinPaste",
            "CommodityTicker": "PPA",
            "Amount": 1
          },
          {
            "CommodityName": "hydrocarbonPlants",
            "CommodityTicker": "HCP",
            "Amount": 1
          },
          {
            "CommodityName": "nutrientSolution",
            "CommodityTicker": "NS",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "meat",
            "CommodityTicker": "MTP",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xPPA 1xNS 1xHCP@IVP=>4xMTP",
        "DurationMs": 64800000,
        "RecipeName": "1xPPA 1xNS 1xHCP=>4xMTP",
        "StandardRecipeName": "IVP:1xHCP-1xNS-1xPPA=>4xMTP"
      },
      {
        "Inputs": [
          {
            "CommodityName": "breathableLiquid",
            "CommodityTicker": "BL",
            "Amount": 2
          },
          {
            "CommodityName": "vitaEssence",
            "CommodityTicker": "VIT",
            "Amount": 2
          },
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 4
          },
          {
            "CommodityName": "bacteria",
            "CommodityTicker": "BAC",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "engineerLuxuryHealth",
            "CommodityTicker": "VG",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "2xVIT 4xREA 2xBAC 2xBL@IVP=>20xVG",
        "DurationMs": 86400000,
        "RecipeName": "2xVIT 4xREA 2xBAC 2xBL=>20xVG",
        "StandardRecipeName": "IVP:2xBAC-2xBL-4xREA-2xVIT=>20xVG"
      }
    ],
    "BuildingId": "d5531c69d520dcea5d52c054a583b757",
    "Name": "inVitroPlant",
    "Ticker": "IVP",
    "Expertise": "FOOD_INDUSTRIES",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 70,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 32,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:06.971829"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 12
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 2
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 4
          },
          {
            "CommodityName": "einsteinium",
            "CommodityTicker": "ES",
            "Amount": 1
          },
          {
            "CommodityName": "flux",
            "CommodityTicker": "FLX",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "enrichedEinsteinium",
            "CommodityTicker": "EES",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xES 4xREA 4xFLX@EEP=>1xEES",
        "DurationMs": 103680000,
        "RecipeName": "1xES 4xREA 4xFLX=>1xEES",
        "StandardRecipeName": "EEP:1xES-4xFLX-4xREA=>1xEES"
      },
      {
        "Inputs": [
          {
            "CommodityName": "liquidEinsteinium",
            "CommodityTicker": "LES",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "einsteinium",
            "CommodityTicker": "ES",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "1xLES@EEP=>10xES",
        "DurationMs": 43200000,
        "RecipeName": "1xLES=>10xES",
        "StandardRecipeName": "EEP:1xLES=>10xES"
      }
    ],
    "BuildingId": "d9780fa6772cb8294a1d15497874ed28",
    "Name": "einsteiniumEnrichmentPlant",
    "Ticker": "EEP",
    "Expertise": "CHEMISTRY",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 60,
    "Scientists": 40,
    "AreaCost": 100,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:22.932573"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 5
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 10
          },
          {
            "CommodityName": "nanoCarbonSheeting",
            "CommodityTicker": "NCS",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "nanoGlass",
            "CommodityTicker": "NG",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xGL 10xNCS@GF=>10xNG",
        "DurationMs": 103680000,
        "RecipeName": "10xGL 10xNCS=>10xNG",
        "StandardRecipeName": "GF:10xGL-10xNCS=>10xNG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sensor",
            "CommodityTicker": "SEN",
            "Amount": 1
          },
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 15
          },
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reinforcedTranslucentMaterial",
            "CommodityTicker": "RG",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xGL 15xPG 1xSEN@GF=>10xRG",
        "DurationMs": 99360000,
        "RecipeName": "10xGL 15xPG 1xSEN=>10xRG",
        "StandardRecipeName": "GF:10xGL-15xPG-1xSEN=>10xRG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "polymerGranulate",
            "CommodityTicker": "PG",
            "Amount": 15
          },
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "reinforcedTranslucentMaterial",
            "CommodityTicker": "RG",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xGL 15xPG@GF=>10xRG",
        "DurationMs": 112320000,
        "RecipeName": "10xGL 15xPG=>10xRG",
        "StandardRecipeName": "GF:10xGL-15xPG=>10xRG"
      },
      {
        "Inputs": [
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "testTubes",
            "CommodityTicker": "TUB",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "10xGL@GF=>20xTUB",
        "DurationMs": 17280000,
        "RecipeName": "10xGL=>20xTUB",
        "StandardRecipeName": "GF:10xGL=>20xTUB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "neon",
            "CommodityTicker": "NE",
            "Amount": 16
          },
          {
            "CommodityName": "reinforcedTranslucentMaterial",
            "CommodityTicker": "RG",
            "Amount": 8
          }
        ],
        "Outputs": [
          {
            "CommodityName": "neonLightingSystem",
            "CommodityTicker": "LIT",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "16xNE 8xRG@GF=>1xLIT",
        "DurationMs": 69120000,
        "RecipeName": "16xNE 8xRG=>1xLIT",
        "StandardRecipeName": "GF:16xNE-8xRG=>1xLIT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "reinforcedTranslucentMaterial",
            "CommodityTicker": "RG",
            "Amount": 20
          },
          {
            "CommodityName": "gasVent",
            "CommodityTicker": "GV",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "glassCombustionChamber",
            "CommodityTicker": "GCH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xRG 1xGV@GF=>1xGCH",
        "DurationMs": 60480000,
        "RecipeName": "20xRG 1xGV=>1xGCH",
        "StandardRecipeName": "GF:1xGV-20xRG=>1xGCH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "titanium",
            "CommodityTicker": "TI",
            "Amount": 1
          },
          {
            "CommodityName": "glassCombustionChamber",
            "CommodityTicker": "GCH",
            "Amount": 1
          },
          {
            "CommodityName": "reinforcedTranslucentMaterial",
            "CommodityTicker": "RG",
            "Amount": 20
          }
        ],
        "Outputs": [
          {
            "CommodityName": "glassNozzle",
            "CommodityTicker": "GNZ",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "20xRG 1xTI 1xGCH@GF=>1xGNZ",
        "DurationMs": 129600000,
        "RecipeName": "20xRG 1xTI 1xGCH=>1xGNZ",
        "StandardRecipeName": "GF:1xGCH-20xRG-1xTI=>1xGNZ"
      },
      {
        "Inputs": [
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 2
          },
          {
            "CommodityName": "flux",
            "CommodityTicker": "FLX",
            "Amount": 1
          },
          {
            "CommodityName": "sodium",
            "CommodityTicker": "NA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 12
          }
        ],
        "BuildingRecipeId": "2xSIO 1xNA 1xFLX@GF=>12xGL",
        "DurationMs": 62208000,
        "RecipeName": "2xSIO 1xNA 1xFLX=>12xGL",
        "StandardRecipeName": "GF:1xFLX-1xNA-2xSIO=>12xGL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sensor",
            "CommodityTicker": "SEN",
            "Amount": 1
          },
          {
            "CommodityName": "sodium",
            "CommodityTicker": "NA",
            "Amount": 1
          },
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "2xSIO 1xNA 1xSEN@GF=>10xGL",
        "DurationMs": 43200000,
        "RecipeName": "2xSIO 1xNA 1xSEN=>10xGL",
        "StandardRecipeName": "GF:1xNA-1xSEN-2xSIO=>10xGL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sodium",
            "CommodityTicker": "NA",
            "Amount": 1
          },
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "translucentMaterial",
            "CommodityTicker": "GL",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "2xSIO 1xNA@GF=>10xGL",
        "DurationMs": 51840000,
        "RecipeName": "2xSIO 1xNA=>10xGL",
        "StandardRecipeName": "GF:1xNA-2xSIO=>10xGL"
      },
      {
        "Inputs": [
          {
            "CommodityName": "thermoFluid",
            "CommodityTicker": "THF",
            "Amount": 10
          },
          {
            "CommodityName": "glassNozzle",
            "CommodityTicker": "GNZ",
            "Amount": 4
          },
          {
            "CommodityName": "nanoGlass",
            "CommodityTicker": "NG",
            "Amount": 50
          },
          {
            "CommodityName": "lowHeatFuelPump",
            "CommodityTicker": "LFP",
            "Amount": 4
          },
          {
            "CommodityName": "fastenerKitMedium",
            "CommodityTicker": "MFK",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "glassEngine",
            "CommodityTicker": "GEN",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "4xLFP 4xGNZ 50xNG 10xTHF 1xMFK@GF=>1xGEN",
        "DurationMs": 108000000,
        "RecipeName": "4xLFP 4xGNZ 50xNG 10xTHF 1xMFK=>1xGEN",
        "StandardRecipeName": "GF:4xGNZ-4xLFP-1xMFK-50xNG-10xTHF=>1xGEN"
      }
    ],
    "BuildingId": "d9a7a3c33886fe10291f2a25bb8788c7",
    "Name": "glassFurnace",
    "Ticker": "GF",
    "Expertise": "METALLURGY",
    "Pioneers": 0,
    "Settlers": 80,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 27,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:56.503646"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 3
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 2
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "smallPlasticsBoard",
            "CommodityTicker": "PSS",
            "Amount": 10
          },
          {
            "CommodityName": "blueGoldConnectors",
            "CommodityTicker": "BGC",
            "Amount": 10
          },
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "nonVolatileMemory",
            "CommodityTicker": "ROM",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xPSS 10xBGC 10xSI@SCA=>10xROM",
        "DurationMs": 25920000,
        "RecipeName": "10xPSS 10xBGC 10xSI=>10xROM",
        "StandardRecipeName": "SCA:10xBGC-10xPSS-10xSI=>10xROM"
      },
      {
        "Inputs": [
          {
            "CommodityName": "waferSmall",
            "CommodityTicker": "SWF",
            "Amount": 10
          },
          {
            "CommodityName": "transistor",
            "CommodityTicker": "TRN",
            "Amount": 10
          },
          {
            "CommodityName": "copperConnectors",
            "CommodityTicker": "BCO",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "microProcessor",
            "CommodityTicker": "MPC",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "10xSWF 10xTRN 10xBCO@SCA=>10xMPC",
        "DurationMs": 36288000,
        "RecipeName": "10xSWF 10xTRN 10xBCO=>10xMPC",
        "StandardRecipeName": "SCA:10xBCO-10xSWF-10xTRN=>10xMPC"
      },
      {
        "Inputs": [
          {
            "CommodityName": "goldIronAlloy",
            "CommodityTicker": "BGO",
            "Amount": 1
          },
          {
            "CommodityName": "waferSmall",
            "CommodityTicker": "SWF",
            "Amount": 10
          },
          {
            "CommodityName": "copperConnectors",
            "CommodityTicker": "BCO",
            "Amount": 5
          },
          {
            "CommodityName": "polyEthylene",
            "CommodityTicker": "PE",
            "Amount": 60
          }
        ],
        "Outputs": [
          {
            "CommodityName": "printedCircuitBoard",
            "CommodityTicker": "PCB",
            "Amount": 5
          }
        ],
        "BuildingRecipeId": "10xSWF 5xBCO 60xPE 1xBGO@SCA=>5xPCB",
        "DurationMs": 24192000,
        "RecipeName": "10xSWF 5xBCO 60xPE 1xBGO=>5xPCB",
        "StandardRecipeName": "SCA:5xBCO-1xBGO-60xPE-10xSWF=>5xPCB"
      },
      {
        "Inputs": [
          {
            "CommodityName": "transistor",
            "CommodityTicker": "TRN",
            "Amount": 20
          },
          {
            "CommodityName": "nitrogen",
            "CommodityTicker": "N",
            "Amount": 10
          },
          {
            "CommodityName": "hydrogen",
            "CommodityTicker": "H",
            "Amount": 10
          }
        ],
        "Outputs": [
          {
            "CommodityName": "sensor",
            "CommodityTicker": "SEN",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "20xTRN 10xH 10xN@SCA=>20xSEN",
        "DurationMs": 25056000,
        "RecipeName": "20xTRN 10xH 10xN=>20xSEN",
        "StandardRecipeName": "SCA:10xH-10xN-20xTRN=>20xSEN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "waferMedium",
            "CommodityTicker": "MWF",
            "Amount": 4
          },
          {
            "CommodityName": "transistor",
            "CommodityTicker": "TRN",
            "Amount": 4
          },
          {
            "CommodityName": "capacitor",
            "CommodityTicker": "CAP",
            "Amount": 4
          },
          {
            "CommodityName": "redGoldConnectors",
            "CommodityTicker": "HCC",
            "Amount": 4
          }
        ],
        "Outputs": [
          {
            "CommodityName": "tensorProcessingUnit",
            "CommodityTicker": "TPU",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "4xMWF 4xTRN 4xCAP 4xHCC@SCA=>4xTPU",
        "DurationMs": 56160000,
        "RecipeName": "4xMWF 4xTRN 4xCAP 4xHCC=>4xTPU",
        "StandardRecipeName": "SCA:4xCAP-4xHCC-4xMWF-4xTRN=>4xTPU"
      },
      {
        "Inputs": [
          {
            "CommodityName": "smallPlasticsBoard",
            "CommodityTicker": "PSS",
            "Amount": 6
          },
          {
            "CommodityName": "capacitor",
            "CommodityTicker": "CAP",
            "Amount": 6
          },
          {
            "CommodityName": "copperConnectors",
            "CommodityTicker": "BCO",
            "Amount": 6
          }
        ],
        "Outputs": [
          {
            "CommodityName": "memoryBank",
            "CommodityTicker": "RAM",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "6xPSS 6xCAP 6xBCO@SCA=>6xRAM",
        "DurationMs": 36288000,
        "RecipeName": "6xPSS 6xCAP 6xBCO=>6xRAM",
        "StandardRecipeName": "SCA:6xBCO-6xCAP-6xPSS=>6xRAM"
      }
    ],
    "BuildingId": "dac006a4ae56f70cc819c46b5dda9965",
    "Name": "smallComponentsAssembly",
    "Ticker": "SCA",
    "Expertise": "MANUFACTURING",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 30,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 35,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:12.396194"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 4
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "basicAiFramework",
            "CommodityTicker": "BAI",
            "Amount": 1
          },
          {
            "CommodityName": "machineLearningInterface",
            "CommodityTicker": "MLI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "neuralNetwork",
            "CommodityTicker": "NN",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBAI 1xMLI@SE=>1xNN",
        "DurationMs": 129600000,
        "RecipeName": "1xBAI 1xMLI=>1xNN",
        "StandardRecipeName": "SE:1xBAI-1xMLI=>1xNN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "localDatabase",
            "CommodityTicker": "LD",
            "Amount": 1
          },
          {
            "CommodityName": "windowManager",
            "CommodityTicker": "WM",
            "Amount": 1
          },
          {
            "CommodityName": "nonVolatileMemory",
            "CommodityTicker": "ROM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "operatingSystem",
            "CommodityTicker": "OS",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xLD 1xWM 1xROM@SE=>1xOS",
        "DurationMs": 172800000,
        "RecipeName": "1xLD 1xWM 1xROM=>1xOS",
        "StandardRecipeName": "SE:1xLD-1xROM-1xWM=>1xOS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "networkingFramework",
            "CommodityTicker": "NF",
            "Amount": 1
          },
          {
            "CommodityName": "localDatabase",
            "CommodityTicker": "LD",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "distributedDatabase",
            "CommodityTicker": "DD",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xNF 1xLD@SE=>1xDD",
        "DurationMs": 172800000,
        "RecipeName": "1xNF 1xLD=>1xDD",
        "StandardRecipeName": "SE:1xLD-1xNF=>1xDD"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sortingAlgorithm",
            "CommodityTicker": "SAL",
            "Amount": 1
          },
          {
            "CommodityName": "searchAlgorithm",
            "CommodityTicker": "SA",
            "Amount": 1
          },
          {
            "CommodityName": "nonVolatileMemory",
            "CommodityTicker": "ROM",
            "Amount": 1
          },
          {
            "CommodityName": "localDatabase",
            "CommodityTicker": "LD",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "dataAnalyzer",
            "CommodityTicker": "DA",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSAL 1xLD 1xROM 1xSA@SE=>1xDA",
        "DurationMs": 129600000,
        "RecipeName": "1xSAL 1xLD 1xROM 1xSA=>1xDA",
        "StandardRecipeName": "SE:1xLD-1xROM-1xSA-1xSAL=>1xDA"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "dataVisualizer",
            "CommodityTicker": "DV",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SE=>1xDV",
        "DurationMs": 129600000,
        "RecipeName": "=>1xDV",
        "StandardRecipeName": "SE:=>1xDV"
      },
      {
        "Inputs": [],
        "Outputs": [
          {
            "CommodityName": "entertainmentDataCore",
            "CommodityTicker": "EDC",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "@SE=>1xEDC",
        "DurationMs": 86400000,
        "RecipeName": "=>1xEDC",
        "StandardRecipeName": "SE:=>1xEDC"
      }
    ],
    "BuildingId": "dd5a5dbf6e39be647d190efc083da192",
    "Name": "softwareEngineering",
    "Ticker": "SE",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 30,
    "Scientists": 0,
    "AreaCost": 20,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:19.67716"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightStructuralElements",
        "CommodityTicker": "LSE",
        "Amount": 2
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 5
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "pineberries",
            "CommodityTicker": "PIB",
            "Amount": 4
          },
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 10
          },
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 1
          },
          {
            "CommodityName": "iodine",
            "CommodityTicker": "I",
            "Amount": 1
          },
          {
            "CommodityName": "calcium",
            "CommodityTicker": "CA",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "vitaEssence",
            "CommodityTicker": "VIT",
            "Amount": 20
          }
        ],
        "BuildingRecipeId": "10xDW 4xPIB 1xCA 1xI 1xAMM@FER=>20xVIT",
        "DurationMs": 69120000,
        "RecipeName": "10xDW 4xPIB 1xCA 1xI 1xAMM=>20xVIT",
        "StandardRecipeName": "FER:1xAMM-1xCA-10xDW-1xI-4xPIB=>20xVIT"
      },
      {
        "Inputs": [
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 20
          },
          {
            "CommodityName": "chemicalReagents",
            "CommodityTicker": "REA",
            "Amount": 15
          },
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 1
          },
          {
            "CommodityName": "grapes",
            "CommodityTicker": "GRA",
            "Amount": 15
          }
        ],
        "Outputs": [
          {
            "CommodityName": "scientistLuxuryDrink",
            "CommodityTicker": "WIN",
            "Amount": 10
          }
        ],
        "BuildingRecipeId": "20xDW 15xGRA 15xREA 1xAMM@FER=>10xWIN",
        "DurationMs": 69120000,
        "RecipeName": "20xDW 15xGRA 15xREA 1xAMM=>10xWIN",
        "StandardRecipeName": "FER:1xAMM-20xDW-15xGRA-15xREA=>10xWIN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 2
          },
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 1
          },
          {
            "CommodityName": "einsteinium",
            "CommodityTicker": "ES",
            "Amount": 1
          },
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "engineerLuxuryDrink",
            "CommodityTicker": "GIN",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "2xGRN 2xDW 1xES 1xAMM@FER=>4xGIN",
        "DurationMs": 56160000,
        "RecipeName": "2xGRN 2xDW 1xES 1xAMM=>4xGIN",
        "StandardRecipeName": "FER:1xAMM-2xDW-1xES-2xGRN=>4xGIN"
      },
      {
        "Inputs": [
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 3
          },
          {
            "CommodityName": "antibacterialTreeFlowers",
            "CommodityTicker": "HOP",
            "Amount": 1
          },
          {
            "CommodityName": "carbohydrateGrains",
            "CommodityTicker": "GRN",
            "Amount": 2
          },
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "technicianLuxuryDrink",
            "CommodityTicker": "ALE",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "2xGRN 3xDW 1xHOP 1xAMM@FER=>6xALE",
        "DurationMs": 55296000,
        "RecipeName": "2xGRN 3xDW 1xHOP 1xAMM=>6xALE",
        "StandardRecipeName": "FER:1xAMM-3xDW-2xGRN-1xHOP=>6xALE"
      },
      {
        "Inputs": [
          {
            "CommodityName": "drinkingWater",
            "CommodityTicker": "DW",
            "Amount": 4
          },
          {
            "CommodityName": "ammonia",
            "CommodityTicker": "AMM",
            "Amount": 1
          },
          {
            "CommodityName": "herbs",
            "CommodityTicker": "HER",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "settlerLuxuryDrink",
            "CommodityTicker": "KOM",
            "Amount": 6
          }
        ],
        "BuildingRecipeId": "4xDW 1xHER 1xAMM@FER=>6xKOM",
        "DurationMs": 30240000,
        "RecipeName": "4xDW 1xHER 1xAMM=>6xKOM",
        "StandardRecipeName": "FER:1xAMM-4xDW-1xHER=>6xKOM"
      }
    ],
    "BuildingId": "ee6ce53bacb81b90c716332caef03e83",
    "Name": "fermentationFacility",
    "Ticker": "FER",
    "Expertise": "FOOD_INDUSTRIES",
    "Pioneers": 0,
    "Settlers": 60,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 25,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:54.685826"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "advancedStructuralElements",
        "CommodityTicker": "ASE",
        "Amount": 6
      },
      {
        "CommodityName": "advancedDeckElements",
        "CommodityTicker": "ADE",
        "Amount": 6
      },
      {
        "CommodityName": "advancedBulkhead",
        "CommodityTicker": "ABH",
        "Amount": 10
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "boronCrystals",
            "CommodityTicker": "BOR",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 4
          },
          {
            "CommodityName": "silicon",
            "CommodityTicker": "SI",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "borosilicate",
            "CommodityTicker": "BOS",
            "Amount": 4
          }
        ],
        "BuildingRecipeId": "1xBOR 1xSI 4xAL@AML=>4xBOS",
        "DurationMs": 43200000,
        "RecipeName": "1xBOR 1xSI 4xAL=>4xBOS",
        "StandardRecipeName": "AML:4xAL-1xBOR-1xSI=>4xBOS"
      },
      {
        "Inputs": [
          {
            "CommodityName": "beryl",
            "CommodityTicker": "BER",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 1
          },
          {
            "CommodityName": "aluminium",
            "CommodityTicker": "AL",
            "Amount": 1
          },
          {
            "CommodityName": "beryllium",
            "CommodityTicker": "BE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xBER@AML=>1xBE 1xAL 1xSIO",
        "DurationMs": 8640000,
        "RecipeName": "2xBER=>1xBE 1xAL 1xSIO",
        "StandardRecipeName": "AML:2xBER=>1xAL-1xBE-1xSIO"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tantalite",
            "CommodityTicker": "TAI",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "tantalum",
            "CommodityTicker": "TA",
            "Amount": 1
          },
          {
            "CommodityName": "iron",
            "CommodityTicker": "FE",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "2xTAI@AML=>1xTA 1xFE",
        "DurationMs": 56160000,
        "RecipeName": "2xTAI=>1xTA 1xFE",
        "StandardRecipeName": "AML:2xTAI=>1xFE-1xTA"
      },
      {
        "Inputs": [
          {
            "CommodityName": "zircon",
            "CommodityTicker": "ZIR",
            "Amount": 2
          }
        ],
        "Outputs": [
          {
            "CommodityName": "zirconium",
            "CommodityTicker": "ZR",
            "Amount": 1
          },
          {
            "CommodityName": "siliconOre",
            "CommodityTicker": "SIO",
            "Amount": 2
          }
        ],
        "BuildingRecipeId": "2xZIR@AML=>1xZR 2xSIO",
        "DurationMs": 51840000,
        "RecipeName": "2xZIR=>1xZR 2xSIO",
        "StandardRecipeName": "AML:2xZIR=>2xSIO-1xZR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "tungstenResource",
            "CommodityTicker": "BTS",
            "Amount": 5
          }
        ],
        "Outputs": [
          {
            "CommodityName": "wolfram",
            "CommodityTicker": "W",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "5xBTS@AML=>1xW",
        "DurationMs": 51840000,
        "RecipeName": "5xBTS=>1xW",
        "StandardRecipeName": "AML:5xBTS=>1xW"
      }
    ],
    "BuildingId": "f173987737fbf2f1d62e29786ef7d64c",
    "Name": "advancedMaterialLab",
    "Ticker": "AML",
    "Expertise": "CHEMISTRY",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 20,
    "Engineers": 30,
    "Scientists": 0,
    "AreaCost": 45,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:15.56122"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 6
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 6
      },
      {
        "CommodityName": "reinforcedBulkhead",
        "CommodityTicker": "RBH",
        "Amount": 4
      },
      {
        "CommodityName": "reinforcedDeckElements",
        "CommodityTicker": "RDE",
        "Amount": 6
      }
    ],
    "Recipes": [
      {
        "Inputs": [
          {
            "CommodityName": "droneChassis",
            "CommodityTicker": "DCH",
            "Amount": 1
          },
          {
            "CommodityName": "bodyScanner",
            "CommodityTicker": "BSC",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "crowdControlDrone",
            "CommodityTicker": "CCD",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xBSC 1xDCH@DRS=>1xCCD",
        "DurationMs": 43200000,
        "RecipeName": "1xBSC 1xDCH=>1xCCD",
        "StandardRecipeName": "DRS:1xBSC-1xDCH=>1xCCD"
      },
      {
        "Inputs": [
          {
            "CommodityName": "powerCell",
            "CommodityTicker": "POW",
            "Amount": 1
          },
          {
            "CommodityName": "microProcessor",
            "CommodityTicker": "MPC",
            "Amount": 1
          },
          {
            "CommodityName": "solarCell",
            "CommodityTicker": "SOL",
            "Amount": 1
          },
          {
            "CommodityName": "droneFrame",
            "CommodityTicker": "DRF",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "droneChassis",
            "CommodityTicker": "DCH",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xMPC 1xPOW 1xSOL 1xDRF@DRS=>1xDCH",
        "DurationMs": 24192000,
        "RecipeName": "1xMPC 1xPOW 1xSOL 1xDRF=>1xDCH",
        "StandardRecipeName": "DRS:1xDRF-1xMPC-1xPOW-1xSOL=>1xDCH"
      },
      {
        "Inputs": [
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          },
          {
            "CommodityName": "bodyScanner",
            "CommodityTicker": "BSC",
            "Amount": 1
          },
          {
            "CommodityName": "droneChassis",
            "CommodityTicker": "DCH",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "surveillanceDrone",
            "CommodityTicker": "SUD",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSAR 1xBSC 1xDCH@DRS=>1xSUD",
        "DurationMs": 51840000,
        "RecipeName": "1xSAR 1xBSC 1xDCH=>1xSUD",
        "StandardRecipeName": "DRS:1xBSC-1xDCH-1xSAR=>1xSUD"
      },
      {
        "Inputs": [
          {
            "CommodityName": "droneChassis",
            "CommodityTicker": "DCH",
            "Amount": 1
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "rescueDrone",
            "CommodityTicker": "RED",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSAR 1xDCH@DRS=>1xRED",
        "DurationMs": 43200000,
        "RecipeName": "1xSAR 1xDCH=>1xRED",
        "StandardRecipeName": "DRS:1xDCH-1xSAR=>1xRED"
      },
      {
        "Inputs": [
          {
            "CommodityName": "universalToolset",
            "CommodityTicker": "UTS",
            "Amount": 2
          },
          {
            "CommodityName": "sensorArray",
            "CommodityTicker": "SAR",
            "Amount": 1
          },
          {
            "CommodityName": "droneChassis",
            "CommodityTicker": "DCH",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "shipRepairDrone",
            "CommodityTicker": "SRD",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSAR 2xUTS 1xDCH@DRS=>1xSRD",
        "DurationMs": 43200000,
        "RecipeName": "1xSAR 2xUTS 1xDCH=>1xSRD",
        "StandardRecipeName": "DRS:1xDCH-1xSAR-2xUTS=>1xSRD"
      },
      {
        "Inputs": [
          {
            "CommodityName": "bodyScanner",
            "CommodityTicker": "BSC",
            "Amount": 1
          },
          {
            "CommodityName": "surgicalEquipment",
            "CommodityTicker": "SEQ",
            "Amount": 1
          },
          {
            "CommodityName": "droneChassis",
            "CommodityTicker": "DCH",
            "Amount": 1
          }
        ],
        "Outputs": [
          {
            "CommodityName": "surgicalDrone",
            "CommodityTicker": "SDR",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "1xSEQ 1xBSC 1xDCH@DRS=>1xSDR",
        "DurationMs": 60480000,
        "RecipeName": "1xSEQ 1xBSC 1xDCH=>1xSDR",
        "StandardRecipeName": "DRS:1xBSC-1xDCH-1xSEQ=>1xSDR"
      },
      {
        "Inputs": [
          {
            "CommodityName": "smallDeviceCover",
            "CommodityTicker": "DCS",
            "Amount": 1
          },
          {
            "CommodityName": "nanoFiber",
            "CommodityTicker": "NFI",
            "Amount": 50
          }
        ],
        "Outputs": [
          {
            "CommodityName": "droneFrame",
            "CommodityTicker": "DRF",
            "Amount": 1
          }
        ],
        "BuildingRecipeId": "50xNFI 1xDCS@DRS=>1xDRF",
        "DurationMs": 17280000,
        "RecipeName": "50xNFI 1xDCS=>1xDRF",
        "StandardRecipeName": "DRS:1xDCS-50xNFI=>1xDRF"
      }
    ],
    "BuildingId": "f5201c73e26f897cbd3fa92ca13d4171",
    "Name": "droneShop",
    "Ticker": "DRS",
    "Expertise": "ELECTRONICS",
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 40,
    "Engineers": 20,
    "Scientists": 0,
    "AreaCost": 30,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:42:17.871311"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "basicStructuralElements",
        "CommodityTicker": "BSE",
        "Amount": 16
      }
    ],
    "Recipes": [
      {
        "Inputs": [],
        "Outputs": [],
        "BuildingRecipeId": "@COL=>",
        "DurationMs": 21600000,
        "RecipeName": "=>",
        "StandardRecipeName": "COL:=>"
      }
    ],
    "BuildingId": "f7f2fd0be81f295c39462096cf844dcf",
    "Name": "collector",
    "Ticker": "COL",
    "Expertise": "RESOURCE_EXTRACTION",
    "Pioneers": 50,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 15,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-26T13:01:25.769018"
  },
  {
    "BuildingCosts": [
      {
        "CommodityName": "lightweightDeckElements",
        "CommodityTicker": "LDE",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedStructuralElements",
        "CommodityTicker": "RSE",
        "Amount": 2
      },
      {
        "CommodityName": "reinforcedWindow",
        "CommodityTicker": "RTA",
        "Amount": 4
      },
      {
        "CommodityName": "truss",
        "CommodityTicker": "TRU",
        "Amount": 2
      },
      {
        "CommodityName": "lightweightBulkhead",
        "CommodityTicker": "LBH",
        "Amount": 4
      }
    ],
    "Recipes": [],
    "BuildingId": "fa7f076a69b0f53e2765621591cd4efd",
    "Name": "habitationCommune",
    "Ticker": "HBC",
    "Expertise": null,
    "Pioneers": 0,
    "Settlers": 0,
    "Technicians": 0,
    "Engineers": 0,
    "Scientists": 0,
    "AreaCost": 20,
    "UserNameSubmitted": "SAGANAKI",
    "Timestamp": "2023-06-19T22:41:40.107306"
  }
]