const title = "this is the title";
const array1 = [2, 3];
const array2 = ['a', 'b', 'c'];
const url = "url.asp"
make it like 
<script type="application/ld+json">{"@context": "https://schema.org/","@type": "BreadcrumbList","itemListElement": [{"@type":"ListItem", "position": 1,"name":"a","item":"https://www.astrosage.com" },{"@type":"ListItem", "position": 2,"name":"b","item":"https://www.astrosage.com/2/" },{"@type":"ListItem", "position": 3,"name":"c","item":"https://www.astrosage.com/2/3/" },{"@type":"ListItem", "position": 4,"name":"this is the title","item":"https://www.astrosage.com/2/3/url.asp" }]}</script>

node /tmp/17d1RwApIt.js
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"a","item":"https://www.astrosage.com"},{"@type":"ListItem","position":2,"name":"b","item":"https://www.astrosage.com/2"},{"@type":"ListItem","position":3,"name":"c","item":"https://www.astrosage.com/2/3"},{"@type":"ListItem","position":4,"name":"this is the title","item":"https://www.astrosage.com/2/3/url.asp"}]}</script>
