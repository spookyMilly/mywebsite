import React from "react"
import {graphql, Link} from 'gatsby'
import "../../static/styles/index.css"
import Layout from '../components/layout'
import {Helmet} from "react-helmet"

const BlogIndex = ({data, location}) => {
    const {title, subtitle, copyright} = data.site.siteMetadata;
    const posts = data.allMdx.edges;
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{title}</title>
                <meta name="description" content={subtitle}/>
            </Helmet>
            <div>Hello World!</div>
            {posts.map(({node}) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                    <article key={node.fields.slug}>
                        <header>
                            <h3>
                                <Link style={{boxShadow: `none`}} to={node.fields.slug}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                        </header>
                        <section>
                            <p dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt,}}/>
                        </section>
                    </article>
                )
            })}
            <div>{copyright}</div>
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
        copyright
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
