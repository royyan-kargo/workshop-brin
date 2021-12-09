# Steps

#### 0. Remove unused code

```sh
rm public/favicon.ico public/logo192.png public/logo512.png src/setupTests.js src/reportWebVitals.js src/logo.svg src/App.test.js src/App.css src/index.css
```

Update `public/index.html` to cleanup unused code

```diff
- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
```

Update `public/manifest.json` to cleanup unused code

```diff
{
  "src": "favicon.ico",
  "sizes": "64x64 32x32 24x24 16x16",
  "type": "image/x-icon"
+ }
- },
- {
-   "src": "logo192.png",
-   "type": "image/png",
-   "sizes": "192x192"
- },
- {
-   "src": "logo512.png",
-   "type": "image/png",
-   "sizes": "512x512"
- }
```

Update `src/index.js` to cleanup unused code

```diff
import ReactDOM from 'react-dom';
- import './index.css';
import App from './App';
- import reportWebVitals from './reportWebVitals';

...

- // If you want to start measuring performance in your app, pass a function
- // to log results (for example: reportWebVitals(console.log))
- // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
- reportWebVitals();
```

Update `src/App.js` to cleanup unused code

```diff
- import logo from './logo.svg';
- import './App.css';

...

<header className="App-header">
-   <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
```

#### 1. Add MUI to dependency

```sh
yarn add @mui/material @mui/styled-engine-sc styled-components
```

#### 2. Add Roboto Font

Append this tag in public/index.html

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

#### 3. Update image asset with BRIN Logo

* Download Favicon ([Source](https://www.brin.go.id/wp-content/themes/ristekdikti2018/assets/img/new_favicon.png))
* Download Logo ([Source](https://www.brin.go.id/wp-content/themes/ristekdikti2018/assets/img/new_brinlogo.png))

Then, update `public/index.html` to update the favicon

```diff
+ <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
- <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
```
