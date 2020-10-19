import React, {Component} from 'react';
import  Menu from './menucomp';
import Contact from './contactcomp';
import About from './aboutcomp';
import Dishdetail from './dishdetailscomp';
import Header from './headercomp';
import Footer from './footercomp'; 
import Home from './homecomp'; 
import {Switch ,Route,Redirect, withRouter}  from 'react-router-dom';
import  {connect} from 'react-redux';

const mapStateToProps = state =>{
  return{
    dishes:state.dishes,
    comnt :state.comnt,
    promotions : state.promotions,
    leaders:state.leaders
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render()
  {
      const HomePage = () => {
        return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
        );
      } 
      const DishWithId = ({match}) => {
        return(
          <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comnt ={this.props.comnt.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))[0]}
          />
        );
      };
    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/Home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/Contact' component={Contact} />
              <Redirect to="/Home" />
          </Switch>
        <Footer />
        </div> 
    );  
  }
}
export default  withRouter(connect(mapStateToProps)(Main));