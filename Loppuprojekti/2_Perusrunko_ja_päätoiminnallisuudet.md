# Projekti vaihe 2 - Perusrunko ja päätoiminnallisuudet

Tässä vaiheessa projektista on toteutettu toimiva 30-v synttäreiden vieraskirjan perus sovellusversio, joka toimii paikallisesti Node.js-ympäristössä. Sovellus mahdollistaa synttäritervehdyksen kirjoittamisen, kentän tyhjentämisen, tervehdyksen tallentamisen tietokantaan sekä viestien selaamisen ja poistamisen. Kaikki toiminnot on yhdistetty frontendiä, backendiä ja tietokantaa käyttäen.


## 1. Ympäristö

Sovellus toimii paikallisesti Node.js-ympäristössä, Visual Studio Code -editorissa. Frontend (React) toimii localhost:5173:ssa ja backend (Express) toimii portissa 3001. Tietokanta on SQLite, joka toimii tiedostopohjaisesti paikallisessa ympäristössä. Tarkoituksena vielä jatkokehittää ja saada sovellus toimimaan pilvipalvelussa. 

## 2. Backend

Backend on toteutettu Node.js:n ja Express-kirjaston avulla. Palvelin tarjoaa REST API -rajapinnan viestien lukemiseen (GET), lisäämiseen (POST) ja poistamiseen (DELETE). Viestit tallennetaan SQLite-tietokantaan, joka toimii paikallisena tallennusratkaisuna. Backendissä on myös virheenkäsittelyä ja lokitusta helpottamaan testausta ja debuggausta.

## 3. Frontend

Frontend on toteutettu Reactilla. Käyttöliittymässä käyttäjä voi kirjoittaa nimen ja viestin, valita taustavärin, lisätä emojin ja lähettää viestin. Lisäksi käyttöliittymä näyttää aiemmat viestit sekä tarjoaa mahdollisuuden poistaa yksittäinen viesti. Viestejä pystyy selaamaan alaspäin. React-komponentteja käytetään viestilistan ja viestilomakkeen hallintaan. 

Sovellus sisältää kaksi komponenttia. MessageForm.sx vastaa vieraskirjan viestien lähettämisestä ja kirjoittamisesta. Se sisältää lomakkeen, johon käyttäjä syöttää oman nimensä ja viestinsä/tervehdyksensä. Lomakkeessa pystyy myös valitsemaan emojeja, taustavärin, tyhjentämään lomakkeen ja lähettämään sen. Komponentti lähettää viestin backendille POST pyynnöllä kun käyttäjä painaa "lähetä" painiketta. Viestilista päivittyy automaattisesti.

Toinen komponentti: MessageList.jsx hakee vieraskirjan viestit ja näyttää ne käyttäjälle. Komponentti hakee viestit backendiltä GET pyynnöllä ja päivittää näkymän.
Komponentti listaa viestit niin että uusin on ylimmäisenä. Viestissä näytetään lähettäjän nimi, viestin sisältö sekä aikaleima. Lisäksi viestissä on "poista" painike. Poisto tapahtuu delete pyynnöllä backendille.


## 4. Tietokanta

Tietokantana toimii SQLite, joka säilyttää viestit database.sqlite-tiedostossa. Taulu messages sisältää sarakkeet: id, name, message ja timestamp. Viestien lisääminen, hakeminen ja poistaminen tapahtuvat parametrisoiduilla SQL-lauseilla.


## 5. Perusrakenne ja arkkitehtuuri

Sovelluksen perusrakenne on frontend: react, backend: node.js+express ja tietokanta: SQLite. Frontend lähettää HTTP-pyyntöjä backendille, joka käsittelee ne ja kommunikoi tietokannan kanssa.


![image](https://github.com/user-attachments/assets/78b9e9e4-461c-4487-afa4-b1cc46ad1d89)


## 6. Toiminnallisuudet

Viestin kirjoittaminen ja lähettäminen
Viestien tallennus tietokantaan
Viestien listaus uusimmasta vanhimpaan
Viestin poistaminen
Emojien lisäys
Taustavärin vaihto
Responsiivinen käyttöliittymä, skaalautuu hyvin mobiiliversioon
Konsolilokit viestien käsittelystä, auttavat testauksessa


## 7. Koodin laatu ja dokumentointi

Koodi on jaettu komponentteihin ja moduuleihin. Kommentointia on tehty tärkeimpiin toimintoihin. Tiedostorakenne on looginen (frontend/backend/models/db). Koodia on testattu ja virheitä on lokitettu terminaaliin helpottamaan virheenkäsittelyä.

## 8. Testaus

Sovellusta on testattu paikallisesti eri tilanteissa: nimen ja viestin lähettäminen onnistuu, emojien lisääminen onnistuu, taustavärin vaihto onnistuu, viesti näkyy listassa, viesti voidaan poistaa ja se poistuu myös tietokannasta. Virheelliset pyynnöt palauttavat virheilmoituksen. Poistotoimintaa testattu konsoli logilla. Tarkistettu että rivit häviävät myös tietokannasta. Viestikentän tyhjentäminen onnistuu. Skaalautuvuus on testattu manuaalisesti kehittäjän työkaluilla: skaalautuu mobiiliversioon. Tarkoitus vielä tehdä dynaamista testausta ihan projektin loppuvaiheessa.


## 9. Käyttöliittymä ja vuorovaikutus

Käyttöliittymä on käyttäjäystävällinen ja selkeä. Teksti on tarpeeksi isoa. Käyttöliittymä on keskitetty keskelle näyttöä. Käyttäjä näkee synttärikuvan, vieraskirjaotsikon ja tekstikentän tervehdykselle. Lomakkeessa on lisäksi emoji-valinnat, väriasetukset sekä Lähetä ja Tyhjennä -napit. Aiemmat viestit listataan alapuolelle, ja jokaisessa viestissä on “Poista”-nappi. Ulkoasu on responsiivinen eli se toimii myös mobiililaitteella.
