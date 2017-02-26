import React from 'react';
import ReactDOM from 'react-dom';
import mobiles from './data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import {Router, Route, hashHistory} from 'react-router';
import { Link } from 'react-router';

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap-theme.min.css'
import './index.css';

/*
const Mobile = React.createClass({
    render: function() {
        return <li><a href="#">{this.props.name}</a></li>
    }
});
*/

/*
function Mobile(x) {
  return <li><a href="#">{x.name}</a></li>
}
*/

class Mobile extends React.Component {
    render() {
        return <div className="circle">
            <div className="activeLink">
                <Link to={"/mobile/" + this.props.i}>{this.props.name}</Link>
            </div>
            <div className="imgPhone">
                <img className="phone" src={this.props.url} alt="mobile" />
            </div>
        </div>
    }
}


class MobileList extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="square">
                    {
                        mobiles.map(function (el, i) {
                            return <Mobile key={i} url={el.url} name={el.name} i={i} />
                        })
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}


class Show extends React.Component {
    render() {
        var key = this.props.params.i;
        return (
           <div>
               <Header/>
                 <h4>{mobiles[key].name}</h4>
                 <img className="phone" src={mobiles[key].url} style={{width: '15%', height: 'auto'}} alt="mobile" /><br/>
                  <span className="label label-success">{mobiles[key].price}</span><br/>
                  <p>{mobiles[key].text}</p>
               <Footer/>
              </div>
        )
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MobileList} />
        <Route path="/mobile/:i" component={Show} />
    </Router>,
        document.getElementById('root')
);

