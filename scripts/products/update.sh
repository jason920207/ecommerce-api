#!/bin/bash

API="http://localhost:4741"
URL_PATH="/products"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "product": {
    "imagePath": "'"${IMG}"'",
    "title": "'"${TITLE}"'",
    "description": "'"${DESC}"'",
    "price": "'"${PRICE}"'"
  }
}'

echo
