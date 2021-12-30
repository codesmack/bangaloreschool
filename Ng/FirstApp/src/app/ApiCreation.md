<ul>
<li>md customapi</li>
<li>cd customapi
<li>npm init (enter all default except)
<pre>entry point: index.js</pre>

<li>npm i express --save

<li>add file "index.js" in folder "customapi"

<li> In  "index.js" add below code:
  <pre>
const express = require("express");
const app = express();
const port = 3300;

app.listen(port, () => {
    console.log("Custom api url: http://localhost:" + port);
})
</pre>
<li> Use below command to run the api
<li> node index.js  
</ul>
