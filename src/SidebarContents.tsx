import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Nav, NavItem } from 'reactstrap'
import { pathPrefix } from '../gatsby-config'

const sidebarNav = {
  overflowY: 'scroll',
  height: '100%',
  width: '100%',
  paddingRight:
    '17px' /* Increase/decrease this value for cross-browser compatibility */,
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
              return (
                <Nav vertical key={item.key} className="mb-3">
                  <h5 className="mb-0">
                    <strong>{item.title}</strong>
                  </h5>
                  {loop(item.children)}
                </Nav>
              )
            }
            return (
              <NavItem key={item.path}>
                <Link to={item.path} className="nav-link">
                  {item.title}
                </Link>
              </NavItem>
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
          >
            {loop(tree)}
          </div>
        )
      }}
    />
  )
}

export default SidebarContents
