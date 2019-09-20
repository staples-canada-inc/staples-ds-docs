import React, { Component} from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

// export const Icons = ({ data }) => (
//     <>
//     {data.allFile.edges.map(edge => {
//       return <Img fluid={edge.node.childImageSharp.fluid} />
//     })}
//   </>
// )

// export const query = graphql`
// query AssetsPhotos {
//     allFile(
//         filter:{
//             sourceInstanceName: { eq: "data" }
//         }) {
//         edges {
//           node {
//             name
//             childImageSharp {
//               fixed {
//                 width
//                 height
//                 src
//                 originalName
//               }
//             }
//           }
//         }
//       }
//     }
// `

// export default Icons