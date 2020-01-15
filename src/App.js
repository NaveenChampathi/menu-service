import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import List from './components/List';
import Table from './components/Table';

import service from './services/menuService';


const App = (props) => {
  let { categories, getMenuItemsForACategory, items, shortName } = props;

  return (
    <div className="">
      <Heading name="Menu Categories" />
      <div className="container">
        <div className="categories">
          <List categories={categories} getMenuItemsForACategory={getMenuItemsForACategory} />
        </div>
        {shortName.length ? <div className="category-items">
          <Heading name={`Items in Category: (${shortName})`} />
          <Table items={items} />
        </div> : null }
      </div>
      
    </div>
  );
}

let me;

export default class Application extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      items: [], 
      shortName: ''
    }
    me = this;
  }

  updateMenuItems(items) {

  }

  getMenuItemsForACategory(category) {
    
    service.getCategoryItems(category).then(items => {
      me.setState({ items, shortName: category });
    });

  }

  componentDidMount () {
    service.getCategories().then(categories => {
      this.setState({ categories });
    });
  }

  render() {
    return <App {...this.state} getMenuItemsForACategory={this.getMenuItemsForACategory}/>;
  }
};
