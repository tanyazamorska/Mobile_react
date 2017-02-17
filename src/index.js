import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import  'bootstrap/dist/css/bootstrap.min.css';
// import  'bootstrap/dist/css/bootstrap-theme.min.css'
import 'foundation-sites/dist/css/foundation-flex.min.css';
import 'foundation-sites/dist/css/foundation.min.css';

const mobiles = [
    {
        id: 1,
        name: 'Apple iPhone 7 32GB Gold'
    },
    {
        id: 2,
        name: 'Apple iPhone 5s 16GB Silver'
    },
    {
        id: 3,
        name: 'Apple iPhone SE 16GB Silver'
    },
    {
        id: 4,
        name: 'Apple iPhone 7 Plus 32GB Gold'
    },
    {
        id: 5,
        name: 'Apple iPhone 6s 32GB Gold'
    },
    {
        id: 6,
        name: 'Apple iPhone 7 Plus 128GB Jet Black'
    },
    {
        id: 7,
        name: 'Apple iPhone 5S 16GB Space Gray'
    },
    {
        id: 8,
        name: 'Apple iPhone 6S 64GB Rose Gold'
    },
    {
        id: 9,
        name: 'Apple iPhone 5S 16GB Silver'
    },
    {
        id: 10,
        name: 'Apple iPhone 7 128GB Black'
    },
    {
        id: 11,
        name: 'Apple iPhone 6s 128GB Rose Gold'
    },
    {
        id: 12,
        name: 'Apple iPhone SE 64GB Gold'
    },
    {
        id: 13,
        name: 'Apple iPhone 6s Plus 32GB Space Gray'
    },
    {
        id: 14,
        name: 'Apple iPhone 7 256GB Gold'
    },
    {
        id: 15,
        name: 'Apple iPhone 6s Plus 128GB Silver'
    },
    {
        id: 16,
        name: 'Apple iPhone 6 16GB Space Gray (CPO)'
    },
    {
        id: 17,
        name: 'Apple iPhone 5s 16GB Silver (FE433UA/A)'
    },
    {
        id: 18,
        name: 'Apple iPhone 6 64GB Silver + УМБ 20000мАч в подарок!'
    },
    {
        id: 19,
        name: 'Apple iPhone 5s 64GB Space Gray (FE438UA/A) как новый Original factory refurbished by Apple + защитное стекло и чехол!'
    },
    {
        id: 20,
        name: 'Apple iPhone 6s 16GB Gold - Уценка'
    },
    {
        id: 21,
        name: 'Apple iPhone 5s 16GB Space Gray (ME432UA/A)'
    },
    {
        id: 22,
        name: 'Apple iPhone 6 16GB Space Gray'
    },
    {
        id: 23,
        name: 'Apple iPhone 6s 16GB Space Gray'
    },
    {
        id: 24,
        name: 'Apple iPhone 6s Plus 16GB Gold'
    },
    {
        id: 25,
        name: 'Apple iPhone 6s Plus 64GB Silver'
    },
    {
        id: 26,
        name: 'Apple iPhone 5s 32GB Gold (FE437UA/A) как новый Original factory refurbished by Apple'
    },
    {
        id: 27,
        name: 'Apple iPhone 6 Plus 16GB Space Gray'
    },
    {
        id: 28,
        name: 'Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!'
    },
    {
        id: 29,
        name: 'Samsung Galaxy J3 2016 J320H/DS Black + карта памяти 8гб + чехол + защитное стекло!'
    },
    {
        id: 30,
        name: 'Samsung Galaxy J1 2016 SM-J120H Black + карта памяти 8гб + защитное стекло + чехол!'
    },
    {
        id: 31,
        name: 'Samsung Galaxy J7 (2016) J710F/DS White + защитное стекло!'
    },
    {
        id: 32,
        name: 'Samsung Galaxy A5 2016 Duos SM-A510 16Gb White + гарнитура Samsung Level U!'
    },
    {
        id: 33,
        name: 'Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло!'
    },
    {
        id: 34,
        name: 'Samsung Galaxy S7 32GB Silver'
    },
    {
        id: 35,
        name: 'Samsung Galaxy J5 J500H/DS Black + карта памяти 8гб + чехол + защитное стекло!'
    },
    {
        id: 36,
        name: 'Samsung Galaxy A7 2016 Duos SM-A710 16Gb Black + гарнитура Samsung Level U'
    },
    {
        id: 37,
        name: 'Samsung Galaxy A3 2016 Duos SM-A310 16Gb Gold'
    },
    {
        id: 38,
        name: 'Samsung Galaxy J2 Prime G532F/DS Black'
    },
    {
        id: 39,
        name: 'Samsung Galaxy J2 J200H/DS Black'
    },
    {
        id: 40,
        name: 'Samsung Galaxy J5 Prime G570F/DS Gold + карта памяти 32гб!'
    },
    {
        id: 41,
        name: 'Samsung Galaxy A3 2017 Duos SM-A320 16GB Black'
    },
    {
        id: 42,
        name: 'Samsung Galaxy S7 Edge 32GB Blue'
    },
    {
        id: 43,
        name: 'Samsung Galaxy J1 Duos Mini Gold'
    },
    {
        id: 44,
        name: 'Samsung Galaxy A7 2017 Duos SM-A720 Pink'
    },
    {
        id: 45,
        name: 'Samsung Galaxy A5 2017 Duos SM-A520 Pink'
    },
    {
        id: 46,
        name: 'Samsung Galaxy A5 A500H/DS White'
    },
    {
        id: 47,
        name: 'Meizu M3s 16GB Grey'
    },
    {
        id: 48,
        name: 'Meizu U10 16GB Black'
    },
    {
        id: 49,
        name: 'Meizu M3E 32GB Grey'
    },
    {
        id: 50,
        name: 'Meizu U20 16GB Black'
    }
];

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

const hello = <h1>HELLO</h1>;

class Mobile extends React.Component {
    render() {
        return <li><a href="#">{this.props.name}</a></li>
    }
}

const MobileList = React.createClass({
    render: function () {
        return (
            <div>
                <ul className="sub-nav menu" role="navigation" title="Filter Menu List">
                    <li className="sub-nav-title">Filter:</li>
                    <li className="active"><span className="show-for-sr">You're viewing </span><a href="#">All</a></li>
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Pending</a></li>
                    <li><a href="#">Suspended</a></li>
                </ul>
                {hello}
                <ul>
                    {
                        mobiles.map(function (el) {
                            return <Mobile key={el.id} name={el.name}/>
                        })
                    }
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
    <MobileList />,
    document.getElementById('root')
);



