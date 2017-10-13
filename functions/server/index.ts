// import 'zone.js/dist/zone-node';
// import * as functions from 'firebase-functions';
// import * as express from 'express';
// import { renderModuleFactory } from '@angular/platform-server';
// import * as fs from 'fs';

// const document = fs.readFileSync(__dirname + '/dist/browser/index.html','utf8');
// const AppServerModuleNgFactory = require(__dirname + '/dist/server/main.bundle').AppServerModuleNgFactory;

// const app = express();

// app.get('**', (req,res) => {
//     const url = req.path;
//     renderModuleFactory(AppServerModuleNgFactory, {document, url})
//     .then(html => {
//         res.set('Cache-Control','public,max-age=600,s-maxage=1200');
//         res.send(html)
//     })
// })

// export let ssrapp = functions.https.onRequest(app);

// import 'zone.js/dist/zone-node';
// import * as functions from 'firebase-functions';
// import * as express from 'express';
// import { enableProdMode } from '@angular/core';
// import { renderModuleFactory } from '@angular/platform-server';
// import * as fs from 'fs-extra';

// const AppServerModuleNgFactory = require(__dirname + '/dist/server/main.bundle').AppServerModuleNgFactory;

// const app = express();

// app.use(express.static(__dirname + '/dist/browser'));

// app.get('**', async (req,res) => {
//     const url = req.path;
//     const document = await fs.readFile(__dirname + '/dist/browser/index.html','utf8');
//     renderModuleFactory(AppServerModuleNgFactory, {document, url})
//     .then(html => {
//         res.set('Cache-Control','public,max-age=600,s-maxage=1200');
//         res.send(html)
//     })
//     try {
//       // generate the server-side rendered html
//       const html = await renderModuleFactory(AppServerModuleNgFactory, {document, url});
//       res.send(html);
//     } catch(e) {
//       res.status(500).send(e);
//     }
// })

// export let ssrapp = functions.https.onRequest(app);


import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';

/* Express */
const document = fs.readFileSync(__dirname + '/dist/browser/index.html','utf8');
const AppServerModuleNgFactory = require(__dirname + '/dist/server/main.bundle').AppServerModuleNgFactory;

const app = express();
app.get("*", (request, response) => {
  response.send("Hello from Express on Firebase!")
})

export let ssrapp = functions.https.onRequest(app);