export const bubu = [{
    "BuildingTicker": "SME",
    "RecipeName": "6xALO 1xC 1xO=>3xAL",
    "StandardRecipeName": "SME:6xALO-1xC-1xO=>3xAL",
    "Inputs": [
        {
            "Ticker": "O",
            "Amount": 1
        },
        {
            "Ticker": "C",
            "Amount": 1
        },
        {
            "Ticker": "ALO",
            "Amount": 6
        }
    ],
    "Outputs": [
        {
            "Ticker": "AL",
            "Amount": 3
        }
    ],
    "TimeMs": 43200000
},
    {
        "BuildingTicker": "SME",
        "RecipeName": "6xALO 1xO 1xC 1xFLX=>4xAL",
        "StandardRecipeName": "SME:6xALO-1xC-1xFLX-1xO=>4xAL",
        "Inputs": [
            {
                "Ticker": "ALO",
                "Amount": 6
            },
            {
                "Ticker": "O",
                "Amount": 1
            },
            {
                "Ticker": "C",
                "Amount": 1
            },
            {
                "Ticker": "FLX",
                "Amount": 1
            }
        ],
        "Outputs": [
            {
                "Ticker": "AL",
                "Amount": 4
            },
            {
                "Ticker": "ENO",
                "Amount": 4
            }
        ],
        "TimeMs": 51840000
    },
    {
        "BuildingTicker": "SME",
        "RecipeName": "6xFEO 1xC 1xO 1xFLX=>4xFE",
        "StandardRecipeName": "SME:1xC-6xFEO-1xFLX-1xO=>4xFE",
        "Inputs": [
            {
                "Ticker": "O",
                "Amount": 1
            },
            {
                "Ticker": "FEO",
                "Amount": 6
            },
            {
                "Ticker": "C",
                "Amount": 1
            },
            {
                "Ticker": "FLX",
                "Amount": 1
            }
        ],
        "Outputs": [
            {
                "Ticker": "FE",
                "Amount": 4
            }
        ],
        "TimeMs": 51840000
    }
]