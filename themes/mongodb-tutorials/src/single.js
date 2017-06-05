import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './navbar.js'
import Search from './search.js'
import util from './util.js'
import elementClass from 'element-class'

const baseURL = window.__baseURL__

class Single extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults: null
    }
  }

  componentDidMount() {
    util.setupCopyButtons()
    util.setupSidebar()

    // var cx = '017213726194841070573:WMX6838984';
    // var gcse = document.createElement('script');
    // gcse.type = 'text/javascript';
    // gcse.async = true;
    // gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    // gcse.onload = gcse.onreadystatechange = function() {
    //   // hack to set a placeholder in google's custom search input
    //   var pollInput = window.setInterval(function() {
    //     var input = document.querySelector('.gsc-input input.gsc-input')
    //
    //     if (input) {
    //       input.setAttribute('placeholder', "Search Documentation");
    //       elementClass(input).add('navbar-search')
    //       window.clearInterval(pollInput);
    //     }
    //   }, 10);
    // };
    //
    // var s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(gcse, s);
  }

  onResults = (results) => {
    this.setState({searchResults: results})
  }

  render () {
    const links = [{
      url: "/redesign/manual/",
      text: "Server",
    }, {
      url: "/redesign/ecosystem/drivers/",
      text: "Drivers",
    }, {
      url: "/redesign/cloud/",
      text: "Cloud",
    }, {
      url: "/redesign/tools",
      text: "Tools",
    }, {
      url: "/redesign/tutorials/",
      text: "Tutorials",
      active: true,
    }];

    return (
      <div>
        <Navbar baseURL={baseURL} links={links}>
          <input className="navbar-search" placeholder="Search Documentation" />
        </Navbar>
      </div>
    )
  }
}

          // <div id="gsearch" className="gcse-searchbox-only" data-resultsUrl="http://docs.mongodb.com/manual/search/" data-queryParameterName="query"></div>
ReactDOM.render(<Single />, document.getElementById('root'))
