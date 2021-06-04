const copyright = '© TM ' + `${new Date().getFullYear()}`;

module.exports = {
    siteMetadata: {
        title: 'another website on the internet',
        subtitle: 'Hello! I am Theo, a frontend developer in love with React, Gatsby and CSS.',
        copyright: copyright,
        siteUrl: `https://spookymilly.github.io/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        'gatsby-plugin-sitemap',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 75,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                    `gatsby-plugin-feed-mdx`,
                ],
            }
        }


    ],
};
