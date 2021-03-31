import React, { Component } from 'react';
import $ from 'jquery';
import * as Constants from './Constants'
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'

class Tenant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tenantDetails: [],
      sort: {
        column: null,
        direction: 'asc',
        arrowDirection: ''
      }
    };
    this.sortColumn = this.sortColumn.bind(this);
    //this.filterTenant = this.filterTenant.bind(this);

  }

  getListOfTenant() {
    var that = this
    //console.log('inside getListOfTenant');
    fetch('http://localhost:9090', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        that.setState({
          tenantDetails: data
        })
        // $('#tnant').pageMe({
        //   pagerSelector: '#myPager',
        //   showPrevNext: true,
        //   hidePageNumbers: false,
        //   perPage: 10
        // })
      })
  }

  componentDidMount() {
    //console.log('inside component did mount');
    this.getListOfTenant();
  }

  getDayDifference(date1, date2 = new Date()) {
    //milliseconds in one day=24*60*60*1000=86400000
    var oneDayinMillis = 86400000;
    return Math.round((new Date(date1) - new Date(date2)) / oneDayinMillis);

  }

  defaultsortColumn(tenants) {
    tenants.sort((a, b) => {
      if (a.TENANT_ID.toUpperCase() < b.TENANT_ID.toUpperCase()) { return -1; }
      else if (a.TENANT_ID.toUpperCase() > b.TENANT_ID.toUpperCase()) { return 1; }
      return 0;
    });
  }

  sortColumn(e) {
    //console.log('inside sortcolumn');
    const direction = (e.target.textContent) ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    //var arrowDirection = "glyphicon glyphicon-arrow-down";
    const sortedTenants = this.state.tenantDetails.sort((a, b) => {
      //while
      switch (e.target.textContent) {
        case (Constants.TENANT_ID):
          console.log(e.target);
          if (a.TENANT_ID.toUpperCase() < b.TENANT_ID.toUpperCase()) { return -1; }
          else if (a.TENANT_ID.toUpperCase() > b.TENANT_ID.toUpperCase()) { return 1; }
          else return 0;
          break;
        case (Constants.EMAIL):
          if (a.EMAIL.toUpperCase() < b.EMAIL.toUpperCase()) { return -1; }
          else if (a.TENANT_ID.toUpperCase() > b.TENANT_ID.toUpperCase()) { return 1; }
          else return 0;
          break;
        case (Constants.LAST_LICENSE_REQUEST):
          return this.getDayDifference(a.LAST_LICENSE_REQUEST, b.LAST_LICENSE_REQUEST);
          break;
        case (Constants.NO_OF_LICENSE_REQUESTED):
          return a.NO_OF_LICENSE_REQUESTED - b.NO_OF_LICENSE_REQUESTED;
          break;
        case (Constants.LAST_USER_LOGIN):
          return this.getDayDifference(a.LAST_USER_LOGIN, b.LAST_USER_LOGIN);
          break;
        case (Constants.TRIAL_EXPIRY):
          return this.getDayDifference(a.TRIAL_EXPIRY, b.TRIAL_EXPIRY);
          break;
      }
    });
    if (direction === 'desc') {
      sortedTenants.reverse();
    }
    this.setState({
      tenantDetails: sortedTenants,
      sort: {
        column: e.target.textContent,
        direction: direction
      }
    })
  }

  render() {
    let tenants = [];
    this.state.tenantDetails.forEach((tenantDetail) => {
      tenants.push(tenantDetail)
    })
    // if (!this.state.sort.column) {
    //   this.defaultsortColumn(tenants)
    // }

    const columns = [
      {
          Header: 'TENANT ID',
          accessor: 'TENANT_ID'
      },
      {
          Header: 'EMAIL',
          accessor: 'EMAIL'
      },
      {
          Header: 'LAST_LICENSE_REQUEST',
          accessor: 'LAST_LICENSE_REQUEST',
          Cell:props=><span className='date'>{props.value}</span>
      },
      {
          Header: 'NO_OF_LICENSE_REQUESTED',
          accessor: 'NO_OF_LICENSE_REQUESTED'
      },
      {
          Header: 'LAST_USER_LOGIN',
          accessor: 'LAST_USER_LOGIN'
      },
      {
          Header: 'TRIAL_EXPIRY',
          accessor: 'TRIAL_EXPIRY'
      }
  ]

return(
  <ReactTable
  data={tenants}
  columns={columns}
  defaultPageSize={10}
  pageSizeOptions= {[10, 20, 30, 50, 100]}
  defaultSortMethod={this.defaultsortColumn(tenants)}
  />
)


    // return (
    //   <div>

    //     <div className='my-info-top'><h2 ><center> List of Tenants</center></h2></div>
    //     <div className='my-info-middle'>
    //       {/* <div >
    //         <h1>Search Tenant</h1>
    //         <input type="text" id="searchTenant" class="form-control" placeholder="Enter Tenant ID" />
    //       </div><br></br> */}
    //       <table>
    //         <thead>
    //           <tr style={{ cursor: "pointer" }} >
    //             <th >{Constants.TENANT_ID}</th>
    //             <th >{Constants.EMAIL}</th>
    //             <th >{Constants.LAST_LICENSE_REQUEST}</th>
    //             <th >{Constants.NO_OF_LICENSE_REQUESTED}</th>
    //             <th >{Constants.LAST_USER_LOGIN}</th>
    //             <th >{Constants.TRIAL_EXPIRY}</th>
    //             <th></th>
    //           </tr>
    //         </thead>
    //         <tbody id='tnant'>
    //           {
    //             tenants.map((tenant, index) =>
    //               <tr key={index}>
    //                 <td>{tenant.TENANT_ID}</td>
    //                 <td>{tenant.EMAIL}</td>
    //                 <td>{tenant.LAST_LICENSE_REQUEST}</td>
    //                 <td>{tenant.NO_OF_LICENSE_REQUESTED}</td>
    //                 <td>{tenant.LAST_USER_LOGIN}</td>
    //                 <td>{tenant.TRIAL_EXPIRY}</td>
    //                 <td><button><label>{Constants.EXTEND_TRIAL}</label></button></td>
    //               </tr>
    //             )
    //           }
    //         </tbody></table>
    //     </div>
    //     <div className="col-md-12 text-center">
    //       <ul className="pagination" id="myPager" />
    //     </div>
    //   </div>

    // );


  };
}
$.fn.pageMe = function (opts) {
  let $this = this,
    defaults = {
      perPage: 7,
      showPrevNext: false,
      hidePageNumbers: false
    },
    settings = $.extend(defaults, opts);

  let listElement = $this;
  let perPage = settings.perPage;
  let children = listElement.children();
  let pager = $('.pagination');

  if (typeof settings.childSelector !== 'undefined') {
    children = listElement.find(settings.childSelector);
  }

  if (typeof settings.pagerSelector !== 'undefined') {
    pager = $(settings.pagerSelector);
  }

  let numItems = children.length;
  let numPages = Math.ceil(numItems / perPage);

  pager.data('curr', 0);
  if (settings.showPrevNext) {
    $('<li><a href="#" class="prev_link"><-</a></li>').appendTo(pager);
  }
  let curr = 0;
  while (numPages > curr && (settings.hidePageNumbers === false)) {
    if ((curr + 1) <= 3) {
      $('<li><a href="#"  class="page_link" id="' + (curr + 1) + '">' + (curr + 1) + '</a></li>').appendTo(pager);
    } else {
      $('<li><a href="#"  style="display:none" class="page_link" id="' + (curr + 1) + '">' + (curr + 1) + '</a></li>').appendTo(pager);
    }
    curr = curr + 1;
  }

  if (settings.showPrevNext) {
    $('<li><a href="#" class="next_link">-></a></li>').appendTo(pager);
  }

  pager.find('.page_link:first').addClass('active');
  pager.find('.prev_link').hide();
  pager.find('#1').css('display', '');
  if (numPages <= 1) {
    pager.find('.next_link').hide();
  }
  pager.children().eq(1).addClass('active');
  children.hide();
  children.slice(0, perPage).show();

  function goTo(page, type) {
    let startAt = page * perPage,
      endOn = startAt + perPage;
    if (type === 'next') {
      if ((numPages - page) > 2) {
        pager.find('#' + (page)).css('display', 'none');
        pager.find('#' + (page + 1)).css('display', '');
        pager.find('#' + (page + 2)).css('display', '');
        pager.find('#' + (page + 3)).css('display', '');
      }
    } else if (type === 'prev') {
      pager.find('#' + (page + 1)).css('display', '');
      pager.find('#' + (page + 4)).css('display', 'none');
    }
    children.css('display', 'none').slice(startAt, endOn).show();
    pager.find('.prev_link');
    if (page >= 1) {
      pager.find('.prev_link').show();
    } else {
      pager.find('.prev_link').hide();
    }

    if (page < (numPages - 1)) {
      pager.find('.next_link').show();
    } else {
      pager.find('.next_link').hide();
    }

    pager.data('curr', page);
    pager.children().removeClass('active');
    pager.children().eq(page + 1).addClass('active');

  }

  function previous() {
    let goToPage = parseInt(pager.data('curr')) - 1;
    goTo(goToPage, 'prev');
  }

  function next() {
    let goToPage = parseInt(pager.data('curr')) + 1;
    goTo(goToPage, 'next');
  }

  pager.find('li .page_link').click(function () {
    let clickedPage = $(this).html().valueOf() - 1;
    goTo(clickedPage, 'next');
    return false;
  });
  pager.find('li .prev_link').click(function () {
    previous();
    return false;
  });
  pager.find('li .next_link').click(function () {
    next();
    return false;
  });
};


export default Tenant;