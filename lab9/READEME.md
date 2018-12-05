# Laborator 9 - [JS] - DOM

DOM ([Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)) este o interfata de programare (API) a aplicatiilor care trateaza un document HTML, XHTML sau XML ca o structura de arbore in care fiecare nod este un obiect reprezentand o parte a documentului. Obiectele pot fi manipulate in mod programat, cu ajutorul [functiilor DOM](https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript/), iar eventualele schimbari vizibile aparute in urma executarii lor pot fi reflectate in afisarea documentului.

## Exercitiul 9.2

### Toate site-urile ar trebui sa aiba o sectiune "Despre noi"

* Creati un document HTML (*aboutme.html*) cu template-ul de mai jos inclus in `<body>`:

```html
<h1>About Me</h1>
<ul>
  <li>Nickname: <span id="nickname"></span>
  <li>Favorites:  <span id="favorites"></span>
  <li>Hometown: <span id="hometown"></span>
</ul>
```

* Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
* Schimbati stilul din `<body>` astfel incat sa avem font-family: *Arial, sans-serif*.
* Inlocuiti ficare `<span>` (*nickname, favorites, hometown*) cu informatiile voastre.
* Iterati prin fiecare `<li>` si adaugati clasa *list-item*.
* Creati un fisier CSS (conectati-l la document) cu stilurile necesare clasei *list-item* pentru a avea un text rosu.
* Creati un nou element `<img>` cu atributul `src` catre o imagine cu voi. Adaugati acel element in pagina.

## Exercitiul 9.3

### My IMDB

* Creati un document HTML (*filme.html*) cu titlul "Filmele mele favorite:", folosind tag-ul `<h1>`.
* Creati un fisier JavaScript `script.js` si legati-l de documentul HTML folosind `<script>` la sfarsitul acestuia.
* Creati un vector cu obiecte care sa contina informatiile filmelor favorite. Obiectul trebuie sa includa *titlu* (string), *durata* (number), *actori* (array of strings) si o propietate de tip boolean care sa indice daca filmul a fost vizualizat sau nu.
* Iterati prin vector si creati dinamic (folosind `document.createElement`) in pagina elemente `<p>` care sa contina titlul filmului.

### Bonus

* Folositi `<ul>` si `<li>` pentru a afisa filmele, alaturi de celelalte informatii despre acestea.
* Adaugati in fiecare obiect din vector o proprietate reprezentand imaginea filmului si reflectati schimbarea in pagina.
* Adaugati proprietati CSS care sa diferentieze filmele vizualizate de cele nevizualizate din lista.
