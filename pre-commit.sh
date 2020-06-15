#!/bin/bash
npm install --package-lock-only --ignore-scripts && npm run build:dist && git add dist package-lock.json src/core/_icon-society.scss
