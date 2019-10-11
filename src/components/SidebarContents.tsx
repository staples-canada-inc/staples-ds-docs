import React, {useState} from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { pathPrefix } from '../../gatsby-config'
import Nav from 'react-bootstrap/Nav'
import { UncontrolledCollapse } from 'reactstrap';
import newId from '../utils/newid';


const sidebarNav = {
  /*overflowY: 'scroll',*/
  height: '100%',
  width: '100%',
  paddingRight:'0px' /* Increase/decrease this value for cross-browser compatibility */,
  boxSizing: 'content-box' /* So the width will be 100% + 17px */,
}

const convertToTree = data => {
  const list = data.map(edge => {
    return {
      path: edge.node.fields.slug,
      key: edge.node.id,
      title: edge.node.frontmatter.title,
      parents: edge.node.frontmatter.parents,
    }
  })
  return constructTree(list)
}

const constructTree = list => {
  let tree = []
  let dir = []
  list.forEach(item => {
    if (item.parents === [] || item.parents === null) tree.push(item)
    else {
      let subtree = tree
      for (let i = 0; i < item.parents.length; i++) {
        if (
          subtree.filter(
            node => node.title === item.parents[i] && node.children
          ).length === 0
        ) {
          const newNode = {
            key: item.path,
            title: item.parents[i],
            children: [],
          }
          subtree.push(newNode)
          dir.push(newNode)
        }
        subtree = subtree.find(
          node => node.title === item.parents[i] && node.children
        ).children
      }
      subtree.push(item)
    }
  })
  return [tree, dir]
}

const sortTree = tree => {
  tree.sort((a, b) => {
    if (
      ((a.children && b.children) || (!a.children && !b.children)) &&
      a.title > b.title
    )
      return 1
    else if (a.children) return 1
    return -1
  })
}

interface Props {
  root: any
}

export const SidebarContents = ({ root }: Props) => {



  return (
    <StaticQuery
      query={graphql`
        query sidebarContentQuery {
          allMdx(sort: { order: ASC, fields: [fields___slug] }) {
            edges {
              node {
                fields {
                  slug
                }
                id
                frontmatter {
                  title
                  parents
                }
              }
            }
          }
        }
      `}
      render={data => {
        const [tree, dir] = convertToTree(
          data.allMdx.edges.filter(node =>
            node.node.fields.slug.startsWith(root)
          )
        )
        sortTree(tree)
        const loop = data =>
          data.map(item => {
            if (item.children) {
              sortTree(item.children)
              item.id = newId();
              return (
                  <>
                    <h5 id={item.id} className="sidebarHeading">
                        {item.title}
                    </h5>
                    <UncontrolledCollapse toggler={`#${item.id}`}>
                        {loop(item.children)}
                    </UncontrolledCollapse>
                </>
              )
            }
            return (
              <Nav.Item>
                <Link to={item.path} className="nav-link">
                  {item.title}
                </Link>
              </Nav.Item>
            )
          })
        const keys =
          typeof window !== 'undefined'
            ? [pathPrefix + window.location.pathname]
            : undefined
        console.log({ keys, tree: loop(tree) })
        //const defaultOpenKeys = dir.map(item => item.key)
        return (
          <div
            vertical
            //defaultOpenKeys={defaultOpenKeys}
            selectedKeys={keys}
            style={sidebarNav}
            className="sidebarNavigation"
          >
            {loop(tree)}
          </div>
        )
      }}
    />
  )
}

export default SidebarContents
