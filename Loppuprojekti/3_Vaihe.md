# Vaihe 3 – Lisäominaisuuksia/parannuksia

3 vaiheessa sovellusta parannettiin vielä viemällä se paikalliselle virtuaalikoneelle. Lisäksi tehtiin lisätestejä.

##   Paikalliselle virtuaalikoneelle julkaisu



![image](https://github.com/user-attachments/assets/d9b49438-db09-494e-a537-b73a14ec4c8f)
![image](https://github.com/user-attachments/assets/b2e2c080-db14-445d-8e80-21ea483f25ce)


##  Testit

Tehtiin yksikkötesti vitest työkalulla, joka varmistaa, että ”Lähetä”-nappi toimii eli sitä voi klikata ilman virheitä. Testi meni läpi eli komponentti toimii: se ei kaatunut ja painikkeen klikkaaminen onnistui ilman virheitä. 
Yksikkötestauksella pystyy testaamaan yksittäisen komponentin toimintaa varhaisessa vaiheessa, jotta siihen pystytään puuttumaan eikä se vaikuta jatkossa muiden komponenttien ja sovelluksen toimintaan, kun mahdolliset virheet korjataan varhaisessa vaiheessa.


![image](https://github.com/user-attachments/assets/4b111bd3-0216-4d30-85b0-37a543c39c75)

K6 työkalun avulla tehtiin kuormitustestaus. Sovellus testattiin niin, että simuloitiin 50 käyttäjää tekee http-pyyntöjä apille.
Kuormitustestauksella pyritään parantamaan sovelluksen asiakaskokemusta. Sillä voi myös pienentää esimerkiksi pilviympäristössä toimivan sovelluksen kustannuksia.
Kaikki vastaukset saatiin alle 500 millisekunnissa. Palvelin oli siis erittäin nopea. Yhteyden muodostaminen sujui normaalisti. Kaikki vastaukset saatiin onnistuneesti. Jokainen testi läpäisi. 50 käyttäjän yhtäaikainen käyttö sujui ongelmitta. Palvelin ei ollut hidas eikä varsinkaan kaatunut.

![image](https://github.com/user-attachments/assets/25ce3a37-c21b-4792-b319-624a6d4d9ec9)
![image](https://github.com/user-attachments/assets/69413326-89f0-4eb0-a0c4-ed8eb625c5c5)




##  Haasteet


Sovelluksen siirtämisessä virtuaalikoneelle ja sen käynnistämisessä siellä oli muutamia haasteita. Node-moduulit oli kopioitu väärästä ympäristöstä, eli ne olivat windowsilta, eivätkä toimineet Linux pohjaisessa virtuaalikoneessa. Poistettiin vanhat node_modules ja package-lock.json tiedostot ja asennettiin moduulit uudelleen. 
Frontendillä piti lisäksi lisätä suorituslupa vite-komentosovellukselle. Vite piti myös käynnistää niin, että se kuuntelee ulkopuolisia yhteyksiä kaikista ip-osoitteista eikä vain localhostista.












