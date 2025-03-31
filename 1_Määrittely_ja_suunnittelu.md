# Projektin vaihe 1 - Määrittely ja suunnittelu

Projektissa tehdään web-sovellus: Vieraskirja. Vieraskirja on "Maija Meikäläisen" 30-v synttärivieraille tarkoitettu. Synttärivieraat voivat jättää vieraskirjaan nimensä ja terveisensä synttärisankarille. Synttäreillä on kannettava
tietokone, jolla synttärivieraiden on mahdollista päästä vuorollaan täyttämään terveisensä. Vaihtoehtoisesti voi käyttää omaa puhelinta.

## 1. Käyttäjäpersoonat

Anni Mäkinen (Maijan mummo)
Ikä: 80
Ammatti: eläkeläinen
Tekninen taitotaso: Ei niin tekninen. Osaa käyttää kannettavaa tietokonetta, mutta ei älypuhelinta.
Tarve: Haluaisi kirjottaa pidemmän viestin: muistoja Maijan lapsuudesta.
Huomioitavaa: Teksti tarpeeksi suurta, isot näppäimet ja kuvakkeet, selkeä ulkoasu. 

Minna Mallikan(Maijan paras ystävä)
Ikä: 31
Ammatti: sosionomi
Tekninen taitotaso: tekninen. Osaa käyttää hyvin tietoteknisiä laitteita. Jättää viestin vieraskirjaan mieluummin puhelimen kautta.
Tarve: Haluaa koristella viestiä esimerkiksi emojeilla ja taustaväreillä/kuvioinneilla.
Huomioitavaa: Responsiivisuus sovelluksessa: mahdollisuus käyttää älypuhelimella. Emojien käyttö, viestin koristelua ja muokkailua. 

Vilja Virtanen(Maijan veljen tyttö)
Ikä: 10
Ammatti: 4-luokkalainen koululainen
Tekninen taitotaso: Osaa käyttää älypuhelinta ja kannettavaa. Suosii enemmän puhelimen käyttöä. Käytössä ei omaa puhelinta.
Tarve: Haluaa käyttää emojeita ja koristella viestin. Viesti sen sijaan lyhyt: tyyliin "Onnea Maija"
Huomioitavaa: Mahdollisuus koristella viestiä leikkisästi esim. emojeilla, tarroilla, väreillä. Helppo käyttöliittymä.
 
## 2. Käyttötapaukset ja käyttötilanteet

Käyttötapaus 1: Viestin kirjoittaminen. Käyttäjä Lisää nimensä "Nimi" kenttään ja viestin "Terveiset" kenttään. 

Käyttötapaus 2: Terveiset kentässä on muokkausmahdollisuuksia: "Lisää emoji", "Valitse taustaväri" & "Lisää tarra". 

Käyttötapaus 3: Viesti lisätään vieraskirjan seinälle painikkeesta "Lisää vieraskirjaan". 

Käyttötapaus 4: Uusin viesti tulee aina sivun yläosaan. Vanhempia viestejä pystyy katsomaan selaamalla sivua alaspäin. 

Käyttötapaus 5: Vieras pystyy tarvittaessa painaa "Tyhjennä" painiketta ja voi aloittaa kirjoittamisen alusta.

Käyttötapaus 6 sivun ylläpitäjä(Maija Meikäläinen-synttärisankari) pystyy poistamaan viestejä.

Käyttötapaus 7: Maija Meikäläinen pystyy lataamaan kaikki terveiset omalle tietokoneelleen.

## 3. Käyttöliittymän prototyypit

 ![image](https://github.com/user-attachments/assets/05d2d415-1827-4c89-b55b-c4ac7aab47c4)

 Proto: Ylhäällä ensin kuva synttärisankarista jonka alla teksti "Vieraskirja". Jonka alla teksti: "Terveiset synttärisankarille" ja viestilaatikko, jossa täyttökentät: nimi, viesti ja napit: "Lähetä" ja "Tyhjennä" lisäksi mahdollisuus lisätä emojeja, tarroja ja vaihtaa taustaväriä. Laatikon alla teksti: "Aikaisemmat terveiset" ja siitä alkaa muiden jättämät viestiterveiset, joita pääsee selaamaan sivupalkilla ylös/alas. 


## 4. Tietoarkkitehtuuri ja tekninen suunnittelu

Alustava kansiorakenne

 ![image](https://github.com/user-attachments/assets/6b0fb4e6-5bda-4120-8d6d-b88813c12cbd)


Teknologiat

Frontend = React = näyttää käyttöliittymän, jossa vastaanottaa tiedot ja välittää ne eteenpäin. Vieraskirjassa: näyttää otsikon, kuvan, viestilomakkeen, viestilistan, sivupalkin. Tekee pyynnöt: lähettää tai vastaanottaa tietoja ja reagoi siis käyttäjän toimiin: kun käyttäjä kirjoittaa vieraskirjaan(täyttää lomaketta), painaa nappeja: emoji, tarra, tausta, lähetä, tyhjennä, nimikenttä, viestikenttä, kun käyttäjä selaa sivupalkilla sivun viestejä..) Käyttää fetch/axios pyyntöjä lähettääkseen tiedot backendille.

Backend = Node.js + express. = Ottavat pyynnön vastaan reactilta ja lähettää tai vastaanottaa ne, tarkistaa tiedot, tallentaa tai hakee ne tietokannasta.

Tietokanta = SQLite (sqlite3 -kirjasto) = tallentaa tiedot: id, nimi, terveiset, aikaleima, koko viesti.


__________________________________________________________________________________________
Sovellus käyttää http protokollaa. RESTful API käyttää http:tä:
HTTP metodeilla toteutetut CRUD toiminnot:

CREATE = POST = lisää uuden viestin tietokantaan

READ = GET = hakee pyydettäessä tietokannasta tiedot, kaikki viestit, esim avatessa selaimella sivuston

UPDATE = PUT = päivittää tietokantaa, kun sinne lisätään uusi viesti tai sieltä poistetaan viesti

DELETE = DELETE = pyyntö viestin poistamiseksi tietokannasta(ainoastaan ylläpitäjä)





## 5. Projektinhallinta ja käyttäjätestaus

Projektin aikataulu:

1 viikko: Projektin suunnittelua ja hahmottelua. Päätetään projektin aihe ja käytettävät teknologiat. Suunnitellaan käyttöliittymä, mietitään käyttäjäpersoonat ja käyttötapaukset. Tietokannan valinta. Suunnitellaan frontendin runkoa ja käyttöliittymän komponentteja, Aikataulutetaan projekti ja tehdään testaussuunnitelma. Githubiin repon luonti ja liittäminen visual studio codeen. Githubiin lokikirjan teon aloitus ja projektin raportin aloitusta.

2 viikko: Visual studio codella työskentelyä, aloitetaan kansiorakennetta. Päätetään käytettävä ympäristö: pilvipalvelu, paikallinen vai virtuaalikone. Taustajärjestelmien ja käyttöliittymäympäristöjen & tietokannan asennus ja käyttöönotto. 

3 viikko: Jatketaan vielä Taustajärjestelmien kanssa.. API yhteydet, express yms.

4 viikko: Viimeistellään työ, testataan toimivuus. Dokumentoinnin viimeistely.

5 viikko: Projektin esittely ja palautus. 

Itsellä käytössä oman aikataulun seuraamiseksi trello -projektinhallintatyökalu. Versionhallintatyökaluna GitHub, jonne dokumentoidaan ja tehdään lokikirjaa projektista: logbook.md. Markdown tiedostomuotoon projektin palautettava dokumentti kokonaisuudessaan. 


-aikataulua ja missä vaiheessa testataan – ja mitä testejä
