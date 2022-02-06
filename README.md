**Author:** _Andrea Bianco_
**Enhancers Weather Station Test**

# Per avviare il progetto

Requisiti: node, npm

Nel terminale, posizionarsi nella root principale del progetto: 
1. cd enhancers-test
2. npm install (per scaricare ed installare tutte le dipendenze)
3. npm start


# Sviluppo:
Lo sviluppo prevedeva la realizzazione di una webapp quanto più fedele possibile al mockup fornito.
Essa deve:
1. Reperire i dati meteo tramite ricerca.
2. Mostrare le previsioni meteo giornaliere, settimanali e mensili.
3. Reperire i dati meteo basandosi sulla geolocalizzazione dell'utente tramite concessione dei permessi.

Sono partito (erroneamente) dallo sviluppo dell'interfaccia per la visualizzazione Desktop, errore dovuto allo scarso lavoro legato al front-end nell'ultimo anno, cercando poi di sviluppare la versione Mobile e Tablet in corso d'opera per renderla il più fedele possibile al mockup allegato. 
Ho suddiviso l'area di lavoro in grid, in modo tale da poter strutturare ed organizzare meglio i contenuti.
Il primo elemento sviluppato è la MainCityCard, dove viene visualizzata di default la condizione meteo di Torino, condizione che poi varierà in base alla ricerca effettuata tramite l'apposita search bar contenuta nel componente SearchInput. 
Il secondo elemento, è la sidebar laterale contenente il componente di ricerca, i widget contenenti i dati meteo di due città aggiuntive, in questo caso Roma e Londra come da mockup e il componente per la geolocalizzazione dell'utente. 
La funzione di Add City purtroppo non sono riuscito ad implementarla, in quanto ho una ridotta conoscenza di Redux e pur cercando di approfondirla, non sono riuscito a svilupparla. 
Il terzo elemento è il widget che visualizza l'andamento meteo nelle ore successive a quella attuale per la città selezionata.
Il quarto ed ultimo elemento sviluppato, il widget contentente le tab Week e MonthlyCard, che mostrano l'andamento meteo settimanale e una media mensile per la città selezionata nel widget principale. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
