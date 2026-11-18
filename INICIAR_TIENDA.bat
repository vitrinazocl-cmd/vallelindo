@echo off
title Comercializadora Valle Lindo - Tienda E-commerce
echo ========================================================
echo COMERCIALIZADORA VALLE LINDO - E-COMMERCE B2B & RETAIL
echo ========================================================
echo.
echo Iniciando servidor local en el puerto 3000...
start "" "http://localhost:3000/index.html"
python -m http.server 3000
pause
