import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './navbar.js'

const baseURL = 'http://docs-mongodb-org-staging.s3-website-us-east-1.amazonaws.com/redesign'

class NavbarDocs extends React.Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    var cx = '017213726194841070573:WMX6838984';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    gcse.onload = gcse.onreadystatechange = function() {
     $(function() {
       // hack to set a placeholder in google's custom search input
       var pollInput = window.setInterval(function() {
         var $input = $('.gsc-input input.gsc-input'),
             $div = $('.search-db');
         if ($input.length) {
           $input.on('focus', function(e) { $div.addClass('wide').removeClass('narrow'); });
           $input.on('blur', function(e) {
             if (!$input.val().length) { $div.addClass('narrow').removeClass('wide'); }
           });
           $input.attr('placeholder', "Search");
           window.clearInterval(pollInput);
         }
       }, 10);
     });
    };

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }

  render () {
    const links = [{
      url: "/redesign/manual/",
      text: "Server",
      active: true,
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
    }];

    return (
      <Navbar baseURL={baseURL} assetsPrefix="/_static" links={links}>
        <div className="navbar-search">
          <div id="gsearch" className="gcse-searchbox-only" data-resultsUrl="http://docs.mongodb.com/manual/search/" data-queryParameterName="query"></div>
        </div>
      </Navbar>
    )
  }
}

ReactDOM.render(<NavbarDocs />, document.getElementById('navbar-docs'))
