#!/bin/sh

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}" \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
