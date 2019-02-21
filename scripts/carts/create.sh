#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "cart": {
      "products": [],
      "owner": "'"${OWNER_ID}"'"
    }
  }'

echo
