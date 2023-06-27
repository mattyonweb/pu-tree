from typing import *
import requests
import json

WHITELIST_EXCHANGECODE = {"AI1"}

url = 'https://rest.fnar.net/exchange/all'

r = requests.get(url)
j = r.json()

j_out = dict()

for elem in j:
    if elem["ExchangeCode"] not in WHITELIST_EXCHANGECODE:
        continue
    ticker  = elem["MaterialTicker"]
    j_out[ticker] = elem

with open("../src/exchange-all.json", "w") as f:
    f.write(json.dumps(j_out))