module.exports = {
    siteMetadata: {
        title: 'Staples Design System',
    },
    plugins: [
        `gatsby-plugin-typescript`,
        'gatsby-plugin-react-helmet',
        // {
        //     resolve: '@stackbit/gatsby-plugin-menus',
        //     options: {
        //         pageContextProperty: 'menus',
        //         sourceUrlPath: 'fields.url',
        //     }
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        // {
        //     resolve: `gatsby-transformer-json`,
        //     options: {
        //         typeName: `MenuItems`, // a fixed string
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `menuItems`,
        //         path: `${__dirname}/src/menuItems`,
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `icons`,
                path: `${__dirname}/src/images/icons`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-markdown',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve:`gatsby-remark-default-html-attrs`,
                        options: {
                          'table': 'table'
                        }
                      },
                    `gatsby-remark-katex`,
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            className: 'post-toc-anchor',
                        },
                    },
                    {
                        resolve: `gatsby-transformer-remark`,
                        options: {
                          tableOfContents: {
                            heading: null,
                            maxDepth: 6,
                          },
                        },
                      },
                ],
            },
        },
        {
            resolve: `gatsby-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/Layout.tsx'),
                },
                extensions: ['.mdx', '.md'],
                remarkPlugins: [require('gatsby-transformer-remark')],
                gatsbyRemarkPlugins: [
                    'gatsby-remark-katex',
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            className: 'post-toc-anchor',
                        },
                    },
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            colorTheme: {
                                defaultTheme: 'OneDark-Pro',    // Required
                                prefersDarkTheme: 'OneDark-Pro', // Optional: used with `prefers-color-scheme: dark`
                                prefersLightTheme: 'Quiet Light'    // Optional: used with `prefers-color-scheme: light`
                            }, // Read on for list of included themes. Also accepts object and function forms.
                            wrapperClassName: 'html',  // Additional class put on 'pre' tag
                            injectStyles: false,    // Injects (minimal) additional CSS for layout and scrolling
                            extensions: [{
                                identifier: 'zhuangtongfa.Material-theme',
                                version: '2.26.0'
                            }],        // Extensions to download from the marketplace to provide more languages and themes
                            languageAliases: {},   // Map of custom/unknown language codes to standard/known language codes
                            replaceColor: oldColor => ({
                                'var(--primary)': 'var(--red)',
                            })[oldColor.toLowerCase()] || oldColor,  // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
                            getLineClassName: ({   // Function allowing dynamic setting of additional class names on individual lines
                                content,             //   - the string content of the line
                                index,               //   - the zero-based index of the line within the code fence
                                language,            //   - the language specified for the code fence
                                codeFenceOptions     //   - any options set on the code fence alongside the language (more on this later)
                            }) => ''
                        }
                    }
                ],
            },
        },
        `gatsby-plugin-remove-trailing-slashes`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
    /// this must match the path your webpage is displayed from
  //  pathPrefix: '',
}