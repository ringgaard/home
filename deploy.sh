#!/bin/bash

git add .
git commit --allow-empty-message -m "$1"
git push

curl -X POST http://web:5050/stop/homepage
sleep 2
curl -X POST http://web:5050/start/homepage

