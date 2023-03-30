# piskvorky
domaci ukol

# Proč mám ve svém projektu více CSS souborů
V projektu je jedna hlavní stránka `index.html` a jedna podstránka `hra.html`.
Pro každou z nich používám individuální CSS soubor. Je to pro mne přehledné, dochází k menší chybovosti, upravuji CSS pro každou ze stránek zvlášť.
Ale jako první si vždy u projektu nastavím hlavní nastavení stránky - v tomto případě má název `normalize.css`.
Jedna se o zakladni nastaveni v CSS pro <html> a <body>, ale treba i pro <img> a dalsi, tak aby se hned od začátku stránka měla nastavení a já na nic 
důležitého nezapomněla. 
Napr.box-sizing atd. Pak si vytvorim dalsi soubor pro CSS napr.style.css, 
kde uz nastavuji a ladim ostatni elementy. Proto je normalize.css v HTML prvni - co se neprepise zustava a plati v normalize.css, 
zbytek se prepise a nastavi ve style.css atd. A ta dulezita informace - nastaveni pro normalize.css mam ulozene v PC a vzdy po nem hrabnu kdyz 
zacinam novy projekt. Muze se to klidne jmenovat basic.css nebo me napada clasic.css, nebo nejak aby bylo zrejme, 
ze jde o zakladni nastaveni. Naucila jsem se to v jednom kurzu a prijde mi to super nez porad dohledavat co tam vlastne s tim boxingem mam delat 
a jak se nastavuje ten obrazek, co ten scroll atd. Urcite by to bylo dobre na vetsi projekty, ale tam uz bych treba pouzila Sass, 
ve kterem se pouziva vlastne taky nekolik csskovych nastaveni.
