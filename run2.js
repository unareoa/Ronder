#!/bin/sh
UUID=${UUID:-'3fff8452-673c-45f8-9492-9d7259e8a1d3'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
