import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import List from './components/List';
import Table from './components/Table';

import service from './services/menuService';


const App = (props) => {
  let { categories } = props;
  let items = [{"id":877,"name":"Brazilian Shrimp & Corn Chowder","description":"Coconut milk, shrimp and fresh corn","short_name":"SS1","small_portion_name":"pint","large_portion_name":"quart","price_small":5,"price_large":7},{"id":878,"name":"Cuban Black Bean Soup","description":"With sherry","short_name":"SS2","small_portion_name":"pint","large_portion_name":"quart","price_small":7,"price_large":9},{"id":879,"name":"Gazpacho","description":"Cold tomato and strawberry Spanish soup, spices, sherry vinegar","short_name":"SS3","small_portion_name":"pint","large_portion_name":"quart","price_small":7,"price_large":10},{"id":880,"name":"Avocado and Greens Salad","description":"Marinated heart of palm, sugar snap peas, avocado, arugula and red onions tossed in a lemon herb vinaigrette","short_name":"SS4","small_portion_name":"pint","large_portion_name":"quart","price_small":7,"price_large":10},{"id":881,"name":"Florentine Salad","description":"Fresh fennel, romaine, arugula, orange segments, strawberries, green olives, almonds, onions, and goat cheese in a champagne vinaigrette dressing","short_name":"SS5","small_portion_name":"pint","large_portion_name":"quart","price_small":3,"price_large":6},{"id":882,"name":"Burrata Salad","description":"Fresh burrata cheese, roasted sweet peppers, charred cherry tomatoes, grilled baguette","short_name":"SS6","small_portion_name":"pint","large_portion_name":"quart","price_small":6,"price_large":9},{"id":883,"name":"Watercress Salad","description":"Watercress, Feta cheese, citrus champagne vinaigrette","short_name":"SS7","small_portion_name":"pint","large_portion_name":"quart","price_small":6,"price_large":9}];
  return (
    <div className="">
      <Heading name="Menu Categories" />
      <List categories={categories} />
      <div>
        <Heading name="Items in Category: (VG)" />
        <Table items={items} />
      </div>
    </div>
  );
}

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      items: []
    }
  }

  componentDidMount () {
    service.getCategories().then(categories => {
      this.setState({ categories });
    });
  }

  render() {
    return <App {...this.state} />;
  }
};
