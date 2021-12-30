# Follow the below steps to avoid CORS warning:

<ul>
  <li>npm install cors --save
  <li>Add the below code to your "index.js"
    
  <pre>const cors = require("cors");
const corsInstance = cors();
corsInstance.origin = "*"; //'Access-Control-Allow-Origin'
corsInstance.credentials = true; //access-control-allow-credentials:true
corsInstance.optionSuccessStatus = 200;
  
//below app is => const app = express();
app.use(corsInstance);
</pre>
