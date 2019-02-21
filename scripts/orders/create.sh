#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order":{
      "orderData": {
        "products": [{
            "product": {
              "imagePath": "crul",
              "title": "a",
              "description": "a",
              "price": 1
            },
            "quantity": 2
          }, {
              "product": {
                "imagePath": "second",
                "title": "a",
                "description": "a",
                "price": 1
              },
              "quantity": 2
            }]
      },
      "totalPrice": 2
    }
  }'

echo
