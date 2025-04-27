# VAIHE 4 -PROJEKTIN ESITTELY



# Vieraskirja -sovellus syntymäpäiväjuhlille



# Projektin yleiskatsaus

Projektissa oli tarkoituksena tehdä kuvitteelliselle henkilölle 30-v syntymäpäiväjuhlilla käytettävä verkkopohjainen vieraskirja -sovellus, johon vieraat pystyvät jättämään onnitteluja ja terveisiä. Terveiset tallentuvat tietokantaan ja ovat sovelluksessa kaikkien nähtävillä. Sovellusta pystyisi käyttämään
tietokoneen ja puhelimen selaimen kautta. Syntymäpäiväjuhlilla on eri-ikäisiä ihmisiä lapsista vanhuksiin ja tämä on huomioitu käyttöliittymän suunnittelussa: teksti ja painikkeet ovat tarpeeksi suuria, ulkoasu on selkeä ja yksinkertainen. On lisätty myös extraa: "koristeluita", joilla on hauska tehdä viestistä persoonallinen: emojit ja värit. 




# Käyttötapausten yhteenveto


| Käyttötapaus | Toteutus (Kyllä/Ei) | Esittely / Huomautuksia |
|----------|----------------------|------------------------|
| Käyttäjä Lisää nimensä "Nimi" kenttään ja viestin "Viestisi" kenttään. | Kyllä | Demo kohdassa 2:45 videolla. |
| Terveiset kentässä on muokkausmahdollisuuksia: "Lisää emoji", "Valitse taustaväri" & "Lisää tarra". | Kyllä/EI | Emoji ja taustaväri toteutui. Tarra jäi pois, eikä sovellus sitä kaipaakaan. Demo kohdassa X videolla. |
| Viesti lisätään vieraskirjan seinälle painikkeesta "Lisää vieraskirjaan". | Kyllä | Viesti lisättiin "Lähetä" -painikkeesta. Demo kohdassa 2:45 videolla. |
| Uusin viesti tulee aina sivun yläosaan. Vanhempia viestejä pystyy katsomaan selaamalla sivua alaspäin.. | Kyllä | Demo kohdassa 2:45 videolla. |




# Tekninen toteutus

Projektissa käytettävät tekniikat:

Frontend: React, Vite (nopea kehitysympäristö)
Backend: Node.js + Express.js (REST API palvelu)
Tietokanta: SQLite (helppo ja kevyt tietokanta pieneen projektiin)

Frontend ja backend kommunikoivat REST API rajapinnan kautta.

Lisäkirjastona better-sqlite3, joka on nopea ja yksinkertainen SQLite-kirjasto Node.js:lle.

Keskeisiä ominaisuuksia:

Käyttäjä pystyy syöttämään nimensä ja tervehdyksensä lomakkeelle. Lomakkeeseen pystyy valita taustavärin ja emojeita. Viestit listataan sivulle automaattisesti, ylimpänä uusin viesti. Viestin pystyy lähettämään "Lähetä" -painikkeella ja kentän voi halutessaan tyhjentää. Viestejä pystyy poistamaan "Poista" -painikkeella.



# Kehitysprosessi, tulevaisuus ja pohdinta

Projekti alkoi miettimällä sovelluksen aihetta. Aiheen päättämisen jälkeen aloin suunnitella sovelluksen ominaisuuksia ja mahdollisia käyttäjiä. Suunnittelin sovellukselle sopivan käyttöliittymän prototyypin. Päätin ja aloin toteuttamaan teknologiaa: ensin tein frontendin lomakkeen ja viestilistan perusrungon.
Sen jälkeen rakensin backendin Expressillä, aluksi ilman viestien tallennusta. Lisäsin sovellukseen SQLite-tietokannan, jotta viestit säilyivät myös palvelimen uudelleenkäynnistyksen jälkeen. Sovellusta testattiin projektin eri vaiheissa. Suoritettiin yksikkötestejä vite-työkalulla: testattiin painikkeen toimivuutta. Kuormitustestausta tehtiin K6 -työkalulla: testattiin miten sovellus kestää 50 henkilön yhtäaikaisen sivun käytön. Käyttöliittymän toimivuutta ja ominaisuuksia testattiin manuaalisesti. Sovelluksen responsiivisuus testattiin Chromen kehittäjätyökalulla. Suurin muutos oli se, kun sovellus vietiinkin paikalliseen virtuaalikoneeseen eikä Azuren pilvipalvelussa olevaan virtuaalikoneeseen niin kuin alunperin oli suunniteltu. Azuren pilviympäristö olisi ollut tälle projektille toivottu ja tavoiteltu ympäristö. Kuitenkin muutos oli myönteinen siihen verrattuna, että aluksi sovellus toimi vain paikallisesti. Tulevaisuudessa yrittäisin vielä saada sovelluksen pilvipalveluun. Muita kehityskohteita olisi, että vain ylläpitäjä pystyisi poistamaan viestejä ja, että ylläpitäjä pystyisi lataamaan viestit omalle tietokoneelle tiedostomuodossa. Huomasin myös kehityskohteen käyttöliittymän "tyhjennä" -painikkeen kanssa: tyhjennä painike ei tyhjennä lomakkeen taustaväriä ollenkaan. Sen voisi vielä korjata niin, että taustavärikin palautuu oletusasetukseen, eli valkoiseen väriin. Myöskään viestin lähettämisen jälkeen taustaväri ei palaudu oletukseen.



# Logbook


| Päivä  | Tuntimäärä | Tehtäviä | Aiheita |
| :---         |    :---:    |    :---:    |    :---:    |
| 30.3.2025  | 5 | Projektin 1 vaihe: Määrittely ja suunnittelu, repositorion luonti, liittäminen visual studio codeen, kansioiden/tiedostojen luonti, aiheen päättäminen, käyttöliittymän suunnittelu = proto, käyttäjäpersoonat/käyttötapaukset   | Alustus projektiin-luento, Github, VSC, Chat GPT, Word, kurssimateriaali |
| 31.3.2025  | 5 | Projektin 1 vaihe: Määrittely ja suunnittelu, tekninen suunnittelu, projektinhallinta- ja testaussuunnitelma    | Github, Chat GPT, kurssimateriaali |
| 17.4.2025  | 3 | Projektin 2 vaihe: Web sovelluksen teon aloitus, käyttöliittymän koodausta    | Github, Chat GPT, kurssimateriaali, VSC |
| 18.4.2025  | 10 | Projektin 2 vaihe: Web-sovelluksen tekoa, backend ja frontend koodausta, raportin kirjoittaminen, pilvipalvelun julkaiseminen aloittaminen, sovelluksen testaaminen     | Github, Chat GPT, kurssimateriaali, VSC |
| 25.4.2025  | 3 | Projektin 3 vaihe: Kurssitallenteiden katsomista ja kertausta: virtuaalikone & testaus. 3 Vaiheeseen tutustumista ja suunnittelua. | Github, Chat GPT, kurssimateriaali |
| 26.4.2025  | 8 | Projektin 3 vaihe: Paikallisen virtuaalikoneen kanssa työskentelyä: tiedostojen vienti sinne(sovellus). Sovelluksen toimivuuden testaus virtuaalikoneella. Automaattitestien tekoa. Raportin kirjoittaminen. Lokikirjan päivittäminen. 4 vaiheeseen tutustumista & suunnittelua. | Github, Chat GPT, kurssimateriaali, VSC |
| 27.4.2025  | 6 | Projektin 4 vaihe: Loppuraportin viimeistely, esityksen suunnittelu ja videointi & lataaminen youtubeen. Lokikirjan päivitys| Github, Chat GPT, kurssimateriaali, VSC, youtube |
| **Total**  | **40h** |   


# Esittelyn linkki
Lisää linkki videoesitykseen tai ilmoita, että se on esitetty livenä.
