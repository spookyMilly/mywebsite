import React from "react"
import { graphql } from "gatsby"
import "../../static/styles/index.css"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const BlogIndex = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={subtitle} />
      </Helmet>
      <div className="main"><h1>hello hello!</h1>
        <p>my name is theo and i am a frontend developer from germany :)</p>
        <p>i have a bachelor's degree in computer science.</p>
        <p>i also really like to do yoga & pilates in my free time and play lots of different types of video games!</p>
        <h2>this website is still work in progress, but here are some fun random facts about me:</h2>
        <p>
          <ul>
            <li>
              i like building things that are simple and a joy to use
            </li>
            <li>
              i am currently happily creating various web apps with react and gatsby, but if i had to choose one
              technology
              over the other to take on an island, it definitely would be <a target="_blank"
                                                                             href="https://www.gatsbyjs.com/" rel="noopener noreferrer">gatsby</a> :D
            </li>
            <li>
              i love dogs and <a target="_blank"
                                 href="https://en.wikipedia.org/wiki/Winter_white_dwarf_hamster" rel="noopener noreferrer">hamsters</a>
            </li>
            <li>
              i enjoy watching bees pollinating my lavender in the evenings (weird flex, but ok)
            </li>
            <li>
              i love puzzles, sudoku and <a target="_blank" href="https://en.wikipedia.org/wiki/Mahjong_solitaire" rel="noopener noreferrer">mahjong
              solitaire</a>
            </li>
            <li>i also think reading random articles on wikipedia is a great pastime! :D</li>
          </ul>
        </p>
        <p>
          <strong>my tech stack includes (just a selection of my beloved):</strong><br />
          reactjs, gatsbyjs, typescript, netlify, react testing library, jest, react bootstrap, webpack, node.js,
          sass<br /><br />
          <strong>random buzzwords which i highly resonate with:</strong><br />
          ux-design, accessibility, seo, ui-design, the <a target="_blank"
                                                           href="https://www.netlify.com/jamstack/" rel="noopener noreferrer">jamstack</a>
        </p>
        <p>thanks for reading, if you want to contact me you can eagerly await the contact form which i'll insert here
          sometime soon haha</p>
      </div>

    </Layout>
  )
}

export default BlogIndex

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
`
