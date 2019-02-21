#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}/${ID}" \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "cart": {
      "products": [{
        "Product1": "Product1"
      }],
      "owner": "'"${OWNER_ID}"'"
    }
  }'

echo
