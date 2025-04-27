Vaihe 4 – Projektin esittely


📌 Vieraskirja-sovellus syntymäpäiväjuhlille


📌 Projektin yleiskatsaus

Projektissa oli tarkoituksena tehdä kuvitteelliselle henkilölle 30-v syntymäpäiväjuhlilla käytettävä verkkopohjainen vieraskirja -sovellus, johon vieraat pystyvät jättämään onnitteluja ja terveisiä. Terveiset tallentuvat tietokantaan ja ovat sovelluksessa kaikkien nähtävillä. Sovellusta pystyisi käyttämään
tietokoneen ja puhelimen selaimen kautta. Syntymäpäiväjuhlilla on eri-ikäisiä ihmisiä lapsista vanhuksiin ja tämä on huomioitu käyttöliittymän suunnittelussa: teksti ja painikkeet ovat tarpeeksi suuria, ulkoasu on selkeä ja yksinkertainen. On lisätty myös extraa: "koristeluita", joilla on hauska tehdä viestistä persoonallinen: emojit ja värit. 



📌 Käyttötapausten yhteenveto
Linkki vaiheessa 1 määriteltyihin käyttötapauksiin.

Käyttötapaus	Toteutettu (kyllä/ei)	Esittely / Huomautuksia
Esimerkki: Käyttäjä kirjautuu sisään ja tekee varauksen	Kyllä	Toteutettu käyttämällä suojattua istuntokäsittelyä. Demo kohdassa 2:45 videolla.
Esimerkki: Järjestelmänvalvoja poistaa resursseja	Ei	Ei priorisoitu, mahdollinen tuleva työ.
Lisää selitykset jokaisesta käyttötapauksesta, mukaan lukien esittelyaikaleimat, jos käytät videota.

📌 Tekninen toteutus

Projektissa käytettävät tekniikat:

Frontend: React, Vite (nopea kehitysympäristö)
Backend: Node.js + Express.js (REST API palvelu)
Tietokanta: SQLite (helppo ja kevyt tietokanta pieneen projektiin)

Frontend ja backend kommunikoivat REST API rajapinnan kautta.

Lisäkirjastona better-sqlite3, joka on nopea ja yksinkertainen SQLite-kirjasto Node.js:lle.

Keskeisiä ominaisuuksia:

Käyttäjä pystyy syöttämään nimensä ja tervehdyksensä lomakkeelle. Lomakkeeseen pystyy valita taustavärin ja emojeita. Viestit listataan sivulle automaattisesti, ylimpänä uusin viesti. Viestin pystyy lähettämään "Lähetä" -painikkeella ja kentän voi halutessaan tyhjentää. Viestejä pystyy poistamaan "Poista" -painikkeella.



🚂 Kehitysprosessi, tulevaisuus ja pohdinta

Projektin alkoi miettimällä sovelluksen aihetta. Aiheen päättämisen jälkeen aloin suunnitella sovelluksen ominaisuuksia ja käyttäjiä. Suunnittelin sovellukselle sopivan käyttöliittymän prototyypin. Päätin ja aloin toteuttamaan teknologiaa: ensin tein frontendin lomakkeen ja viestilistan perusrungon.
Sen jälkeen rakensin backendin Expressillä, aluksi ilman viestien tallennusta. Lisäsin sovellukseen SQLite-tietokannan, jotta viestit säilyivät myös palvelimen uudelleenkäynnistyksen jälkeen. Sovellusta testattiin projektin eri vaiheissa. Suoritettiin yksikkötestejä vite-työkalulla: testattiin painikkeen toimivuutta. Kuotmitustestausta tehtiin K6 -työkalulla: testatiin miten sovellus kestää 50 henkilön yhtäaikaisen sivun käytön. Käyttöliittymän toimivuutta ominaisuuksia testattiin manuaalisesti. Sovelluksen responsiivisuus testattiin Chromen kehittäjätyökalulla. Suurin muutos oli se, kun sovellus vietiinkin paikalliseen virtuaalikoneeseen eikä Azuren pilvipalvelussa olevaan virtuaalikoneeseen. Azuren pilviympäristö olisi ollut itselle toivottu ja tavoiteltu ympäristö. Kuitenkin muutos oli myönteinen siihen verrattuna, että aluksi sovellus toimi vain paikallisesti. Tulevaisuudessa yrittäisin vielä saada sovelluksen pilvipalveluun. Muita kehityskohteita olisi, että vain ylläpitäjä pystyisi poistamaan viestejä ja että ylläpitäjä pystyisi lataamaan viestit omalle tietokoneelle tiedostomuodossa.


📊 Työaikaloki
Voit kopioida lokikirjasta täältä.

Päivämäärä	Aika	Tehtävä
2.4.2025	3h	Määritellyt käyttötapaukset
4.4.2025	2h	Rakennettu kirjautumislomake
...	...	...
Koko	63h	
🪢 Esittelyn linkki
Lisää linkki videoesitykseen tai ilmoita, että se on esitetty livenä.
