# Projektdokumentation

#### Navn: Tom Broager

##### Hold: WU06

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](http://nogether.netlify.com/)


## Teknologier

-   HTML
-   CSS
-   JavaScript
-   Gulp
-   ...

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke node-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)

gulp - Gulp is the tast runner which will ultimately run our compilation task
gulp - sass - Gulp sass is the sass task plugin for gulp which will compile our sass to css
sass - The sass package is what the gulp sass plugin will use under the hood
gulp-purgeCSS - PurgeCSS is a tool to remove unused CSS

babel - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Animate.css: animationen når man arkiverer eller sletter artikler bliver hentet fra Animate.css ved brug af CDN

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)


News setting page togglebuttons:

	Animation gør brug af toggle, classes og CSS transform: translate; til at toggle switch.
	Jeg har brugt button og div tag - en anden gang vil jeg nok bruge input og checkbox.

	Når togglebutton bliver toggled on/off får den value true/false.
			   
	Som validering for et push af section navn til selectedSection Array, bruger jeg true/false value samt filter() method som tjekker for duplikeret values i selectedSection Array.

---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

Det lykkedes mig ikke at få lavet en god og rigtig darkmode data struktur - jeg ved godt hvordan, men prioriterede ikke tiden til det. Derfor blev det en cowboy løsning - og det virker.

fetch af New York Times API gik rigtig godt.

set/get value i localStorage gik rigtig godt.

filter() method havde jeg lidt svært ved at forstå, men med en del fordybelse og dokumentation fik jeg en meget bedre forståelse.

touch event krævede og en del fordybelse og dokumentation før end jeg forstod det.

jeg har brugt rigtig meget tid på opgaven pga. den megen fordybelse og dokumentation, og derfor nåede jeg ikke hele opgaven.

alt i alt synes jeg, at det har været en super opgave, hvor jeg har lært rigtigt meget.

---
### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

```

