<div align="center">
  <img src="icon library.jpg" width="200" alt="Mygladix Logo">
  <h1>Mygladix Icon Library</h1>
  <p>Una libreria di icone minimalista e potente.</p>

  ![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![Build](https://img.shields.io/badge/status-active-success.svg)
</div>

---

## 📖 Cos'è Mygladix Icon Library?
<details>
  <summary><b>Clicca per espandere la descrizione e le motivazioni</b></summary>
  <br>
  Questa libreria è nata dall'esigenza di avere un set di icone coerente, leggero e facilmente richiamabile in diversi progetti senza dover ogni volta copiare file fisici. 
  
  L'obiettivo è fornire un sistema centralizzato tramite GitHub e CDN (jsDelivr) che permetta di:
  * Ridurre il peso delle pagine caricando solo gli sprite necessari.
  * Gestire lo stile (colore, spessore, dimensione) interamente via CSS.
  * Avere una "Single Source of Truth" per le icone di brand.
</details>

---

## 🖼️ Anteprima Icone
Puoi visualizzare l'elenco completo delle icone disponibili nella nostra dashboard interattiva:

👉 **[Visualizza la Griglia delle Icone](https://liukhs.github.io/Icon__Library/mgx_icon_library.html)** *(Nota: Assicurati che GitHub Pages sia attivo sulla tua repo per questo link)*

![Preview delle icone](./preview-icons.png)

---

## 🚀 Come utilizzarla

### 1. Iniezione dello Sprite
Per evitare blocchi di sicurezza del browser (CORS) e caricare le icone in modo asincrono, aggiungi questo script in fondo al tuo `index.php` o nel tuo file `main.js`:

```javascript
fetch('[https://cdn.jsdelivr.net/gh/Liukhs/Icon__Library@main/mgx_icon_library.xml](https://cdn.jsdelivr.net/gh/Liukhs/Icon__Library@main/mgx_icon_library.xml)')
  .then(response => response.text())
  .then(data => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = data;
    document.body.insertBefore(div, document.body.childNodes[0]);
  });
```
### 2. Personalizzazione CSS
Ogni icona è completamente personalizzabile in altezza, larghezza e stile *(I valori utilizzati nel blocco di codice seguente sono i valori di default)*

```CSS
:root{
    --mgx-icon-width: 24px;    /*Larghezza icona*/ 
    --mgx-icon-height: 24px;   /*Altezza icona*/
    --mgx-icon-fill: none;     /*Proprietà fill*/
    --mgx-icon-color: #fff;    /*Colore del tratto*/
    --mgx-icon-stroke: 2;      /*Larghezza del tratto*/
    --mgx-icon-cap: round;     /*Proprità stroke-linecap*/
    --mgx-icon-join: round;    /*Proprietà stroke-linejoin*/
}
/*è quindi possibile modificare l'icona anche tramite classe per icone di grandezze differenti*/
.icon-1{
    --mgx-icon-width: 30px;
    --mgx-icon-height: 30px;
}

.icon-2{
    --mgx-icon-width: 40px;
    --mgx-icon-height: 40px;
}
```
### 3. Utilizzo HTML
Come utilizzare le icone all'interno del vostro file HTML
```HTML
<svg class="icon-1">
  <use href="#mgx-icon__lightbulb"></use>
</svg>

<svg class="icon-2">
  <use href="#mgx-icon__utenti"></use>
</svg>