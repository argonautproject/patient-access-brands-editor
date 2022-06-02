#/bin/bash

curl https://serve-basket.s3.us-east-2.amazonaws.com/Brands.json -o connectathon-epic.json
curl https://fhir.meditech.com/brands.json -o connectathon-meditech.json
curl https://raw.githubusercontent.com/argonautproject/patient-access-brands-editor/main/src/fixtures/example-brand-bundle.unitypoint.json -o connectathon-sample.json

