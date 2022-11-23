#!/bin/bash
image_id=`docker ps -a -q --filter ancestor=golang-server`
docker container stop $image_id