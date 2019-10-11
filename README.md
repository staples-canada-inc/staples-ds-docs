
# Staples Design System Core

This is the code and components that makeup the Staples design guidlines and documentation website.

# Getting started

The Staples Design system is built relying on [Bootstrap](https://getbootstrap.com) and [React Bootstrap](https://react-bootstrap.github.io/).

# Setup
## HTML
To get started creating an HTML project just include the `staples-ds.css` and `staples-ds.js` in the `<head>` tag of your .html file

## React
To get started creating a React project 


```
npm install gatsby -g
gatsby new my-docs https://github.com/jannikbuschke/gatsby-antd-docs
cd my-docs
npm run start
```

Visit http://localhost:8000.

Edit files in `/content/docs` and see live updates.


# Roadmap

- [ ] Add custom namespace support


# Hosting

In order to host the site the **sites path** needs to be put into gatsby-config.js export object on to the property _pathPrefix_. Then run

```
npm run build
```

and copy the content of the public folder to the webspace.

# License

MIT