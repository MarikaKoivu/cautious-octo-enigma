Vaihe 4 – Projektin esittely


Ajattele tätä projektisi esittelynä, jonka voit sisällyttää työhakemukseesi. Esityksen tulee olla selkeä ja ytimekäs. Selitä koko projekti. Älä pelkää korostaa 
epäonnistumisia, sillä jokainen on kokenut ne jossain vaiheessa. Ota huomioon, että katsojalla ei välttämättä ole vahvaa teknistä taustaa.


🎯 Vieraskirja -sovellus syntymäpäiväjuhlille


📝 Projektin yleiskatsaus

Projektissa oli tarkoituksena tehdä kuvitteelliselle henkilölle 30-v syntymäpäiväjuhlilla käytettävä verkkopohjainen vieraskirja -sovellus, johon vieraat pystyvät jättämään onnitteluja ja terveisiä. Terveiset tallentuvat tietokantaan ja ovat sovelluksessa kaikkien nähtävillä. Sovellusta pystyisi käyttämään
tietokoneen ja puhelimen selaimen kautta. Syntymäpäiväjuhlilla on eri-ikäisiä ihmisiä lapsista vanhuksiin ja tämä on huomioitu käyttöliittymän suunnittelussa.



📌 Käyttötapausten yhteenveto
Linkki vaiheessa 1 määriteltyihin käyttötapauksiin.

Käyttötapaus	Toteutettu (kyllä/ei)	Esittely / Huomautuksia
Esimerkki: Käyttäjä kirjautuu sisään ja tekee varauksen	Kyllä	Toteutettu käyttämällä suojattua istuntokäsittelyä. Demo kohdassa 2:45 videolla.
Esimerkki: Järjestelmänvalvoja poistaa resursseja	Ei	Ei priorisoitu, mahdollinen tuleva työ.
Lisää selitykset jokaisesta käyttötapauksesta, mukaan lukien esittelyaikaleimat, jos käytät videota.

✍️ Tekninen toteutus

Projektissa käytettävät tekniikat:

Frontend: React, Vite (nopea kehitysympäristö)
Backend: Node.js + Express.js (REST API palvelu)
Tietokanta: SQLite (helppo ja kevyt tietokanta pieneen projektiin)

Frontend ja backend kommunikoivat REST API rajapinnan kautta.

Lisäkirjastona better-sqlite3, joka on nopea ja yksinkertainen SQLite-kirjasto Node.js:lle.

Keskeisiä ominaisuuksia:

Käyttäjä pystyy syöttämään nimensä ja tervehdyksensä lomakkeelle. Lomakkeeseen pystyy valita taustavärin ja emojeita. Viestit listataan sivulle automaattisesti, ylimpänä uusin viesti. Viestin pystyy lähettämään "Lähetä" -painikkeella ja kentän voi halutessaan tyhjentää. Viestejä pystyy poistamaan "Poista" -painikkeella.



🚂 Kehitysprosessi

Projektin alkoi miettimällä sovelluksen aihetta. Aiheen päättämisen jälkeen aloin suunnitella käyttöliittymän prototyyppiä.  alkoi tekemällä ensin frontendin lomakkeen ja viestilistan perusrungon.
Sen jälkeen rakensin backendin Expressillä, aluksi ilman pysyvää tallennusta (viestit vain muistissa).
Pian lisäsin SQLite-tietokannan, jotta viestit säilyivät myös palvelimen uudelleenkäynnistyksen jälkeen.



Testaus: yksikkötestit Vitellä + kuormitustestaus K6-työkalulla. Manuaalisia käyttöliittymän testauksia. Responsiivisuuden testaus Chromen kehittäjätyökalulla.

Suurimmat muutokset liittyivät siihen, kun siirryttiin muistissa olevasta tallennuksesta oikeaan tietokantaan.
Tee yhteenveto edistymisestäsi alusta loppuun ja mainitse tärkeimmät päätökset tai muutokset matkan varrella.

☀️ Pohdinta ja tulevaisuustyö
Mikä toimi hyvin? Mitä haasteita kohtasit? Mitä lisäisit tai parantaisit tulevaisuudessa?

📊 Työaikaloki
Voit kopioida lokikirjasta täältä.

Päivämäärä	Aika	Tehtävä
2.4.2025	3h	Määritellyt käyttötapaukset
4.4.2025	2h	Rakennettu kirjautumislomake
...	...	...
Koko	63h	
🪢 Esittelyn linkki
Lisää linkki videoesitykseen tai ilmoita, että se on esitetty livenä.
