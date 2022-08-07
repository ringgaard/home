#!/bin/bash

git add .
git commit --allow-empty-message -m ""
git push
curl -X POST http://web:5050/submit/refresh_homepage

