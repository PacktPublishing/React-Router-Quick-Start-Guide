import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from '../shared/App';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ROUTES } from '../shared/routes';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('dist/public'));

app.get('*', (req, res) => {

    // const matchedObject = matchPath(req.url, {
    //     path: '/dashboard/',
    //     strict: true
    // });

    // console.log(matchedObject);

    const matchedObject = matchPath(req.url, '/github/:githubID');

    console.log(matchedObject);

    const isRouteAvailable = ROUTES.find(route => {
        return matchPath(req.url, route);
    })

    console.log('isRouteAvailable - ', isRouteAvailable);

    if (!isRouteAvailable) {
        res.status(404);
        res.send(
            `
            <!DOCTYPE HTML>
            <html>
                <head>
                    <title>React SSR example</title>
                </head>
                <body>
                    <main id='app'>
                        Requested page '${req.url}' not found
                    </main>
                </body>
            </html>`);
        res.end();
    }

    const context = {
        message: 'From StaticRouter\'s context object'
    }

    const reactMarkup = ReactDOMServer.renderToString(
        <StaticRouter context={context} location={req.url}  >
            <App />
        </StaticRouter>
    );

    console.log(context);

    if (context.url) {
        res.redirect(context.status, 'http://' + req.headers.host + context.url);
    } else {
        res.send(`
            <!DOCTYPE HTML>
            <html>
                <head>
                    <title>React SSR example</title>
                    <!-- comment the below script tab to see staticContext.message rendered on the server -->
                    <script src='/bundle.js' defer></script>
                </head>
                <body>
                    <main id='app'>${reactMarkup}</main>
                </body>
            </html>
        `);
    }


});

app.listen(PORT, () => {
    console.log(`SSR React Router app running at ${PORT}`);
})

// <script src='/bundle.js' defer></script>