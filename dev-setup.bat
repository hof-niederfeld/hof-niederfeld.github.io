@echo off

set "WORKDIR=%cd%"

wt -d "%WORKDIR%" powershell -NoExit -Command "git status" ^
  ; split-pane -V -d "%WORKDIR%" powershell -NoExit -Command "bundle exec jekyll serve" ^
  ; split-pane -H -d "%WORKDIR%" powershell -NoExit -Command "sass --watch assets/scss/style.scss assets/css/style.css"
