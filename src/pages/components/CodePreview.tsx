import React, { Component } from 'react'
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

export class CodePreview extends Component {
  constructor(props: any) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
    }
  }

  toggle(tab: any) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render() {
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1')
              }}
            >
              HTML
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2')
              }}
            >
              React
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.props.children}
        </TabContent>
      </>
    )
  }
}

export default CodePreview

// export const ReactCode = ({ children }: any) => (
// 		<TabPane tabId="2">
// 			<Row>
// 				<Col sm="12">
// 					{children}
// 				</Col>
// 			</Row>
// 		</TabPane>
// )

// export class CodePreviewTabs extends Component  {
//   constructor(props: any) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       activeTab: '1'
//     };
//   }

//   toggle(tab: any) {
//     if (this.state.activeTab !== tab) {
//       this.setState({
//         activeTab: tab
//       });
//     }
//   }
//   render() {
//     return (
//       <>
//         <Nav tabs>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '1' })}
//               onClick={() => { this.toggle('1'); }}
//             >
//               Tab 1
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '2' })}
//               onClick={() => { this.toggle('2'); }}
//             >
//               Tab 2
//             </NavLink>
//           </NavItem>
//         </Nav>
//       </>
//     );
//   }
// }

// const Tab1 = ({ html }) => (

// );

// const Tab2 = ({ react }) => (

// );
