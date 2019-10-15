
# Getting Started

The Staples Design system is built with dependancies on [Bootstrap](https://getbootstrap.com) and [React Bootstrap](https://react-bootstrap.github.io/).

## HTML

### 1) Install Dependancies

To utilize the Staples Design System in an HTML project just include the `staples-ds.css` and `staples-ds.js` in the `<head>` tag of your .html file.
These files are compiled with the required css and js code from [Bootstrap](https://getbootstrap.com).

### 2) Copy Components

On each component page within our components documentation there are `HTML` snippets that can be copy and pasted into any `.html` file. With the Staples Design System files include these snippets will display match 
our design system styles.

```HTML
<!-- This is an example of the HTML code for creating a dropdown button -->
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else</a>
    </div>
</div>
```

---

## React

### 1) Install Dependancies

When utilizing the Staples Design system in a React project start by importing [React Bootstrap](https://react-bootstrap.github.io/) into your app.

```javascript
npm install react-bootstrap bootstrap
```

### 2) Import Styles & Scripts

Next download the Staples Design System and add it to your project directory and import the stylesheet. It should be included in your src/index.js, src/layout.tsx or App.js pending on how your project is configured.

```javascript
import '/styles/design-system/staples-ds.css'
```

### 3) Import Components

All supported [React Bootstrap](https://react-bootstrap.github.io/) components have been included in our documents. For additional documentation visit the [React Bootstrap](https://react-bootstrap.github.io/) website. 

With the stylesheet imported into your layout just import the components you'd like to use. They will be styled to match the components within the Staples Design System.

```javascript
import Button from 'react-bootstrap/Button'
```

---

### Roadmap

- [ ] Add custom namespace support
- [ ] Include references to components in Figma
- [ ] Create pre-built templates of common elements
- [ ] Create sandbox to quickly mockup pages using components

---
