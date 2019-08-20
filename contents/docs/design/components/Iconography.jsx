import { React } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// const Icons = () => {
//     function getIcons() {
//         const [index] = useState(0);
//       const { allFile } = useStaticQuery(graphql`
//         query {
//           allFile(
//             filter: {
//               extension: { regex: "/(png)/" }
//               relativeDirectory: { eq: "icons" }
//             }
//           ) {
//             edges {
//               node {
//                 id
//                 name
//               }
//             }
//           }
//         }
//       `)
//       const { node } = allFile.edges[index]
//       return (
//         <Img key={node.id} alt={node.name} fluid={node.childImageSharp.fluid} />
//       )
//     }
//     getIcons()
// }

// export default Icons

export const query = graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(png)/" }
              relativeDirectory: { eq: "icons" }
            }
          ) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `
export const Icons = ({data}) => {
  data.images.edges.map(node => (
    <Img key={node.id} fluid={node.childImageSharp.fluid} />
  ))
}
