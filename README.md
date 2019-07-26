
# Staples Design System Core

This is the code and components that makeup the Staples design guidlines and documentation website.

# Getting started

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

# Special Thanks To
Jannik Buschke - [Gatsby Starter For Docs](https://github.com/jannikbuschke/gatsby-antd-docs)
twbs Team - [Bootstrap 4.0](https://github.com/twbs/bootstrap)
Reactstrap Team - [Reactstrap](https://reactstrap.github.io)