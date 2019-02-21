#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}/${ID}" \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
