#!/bin/sh

git checkout deploy
git merge dev
git push origin deploy
git checkout dev
