@echo off

set "WORKDIR=%~dp0"
set "WORKDIR=%WORKDIR:~0,-1%"

wt --title "GitHub" -d "%WORKDIR%" powershell -NoExit -Command "code ." ^
  ; split-pane -V --title "Jekyll" -d "%WORKDIR%" powershell -NoExit -Command "bundle exec jekyll serve" ^
  ; split-pane -H --title "Sass" -d "%WORKDIR%" powershell -NoExit -Command "sass --watch assets/scss/style.scss assets/css/style.css"
