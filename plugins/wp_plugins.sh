#!/bin/bash
set -e

curl -O https://downloads.wordpress.org/plugin/polylang.2.0.5.zip
unzip polylang.2.0.5.zip
rm polylang.2.0.5.zip

curl -O https://downloads.wordpress.org/plugin/geoip-detect.zip
unzip geoip-detect.zip
rm geoip-detect.zip
