import React from 'react';
import ReactDOM from 'react-dom';

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap-theme.min.css'
import './index.css';

const mobiles = [
    {
        id: 1,
        name: 'Apple iPhone 7 32GB Gold',
        url: "http://i2.rozetka.ua/goods/1757072/apple_iphone_7_32gb_gold_images_1757072514.jpg"
    },
    {
        id: 2,
        name: 'Apple iPhone 5s 16GB Silver',
        url: "http://i2.rozetka.ua/goods/1538020/apple_iphone_5s_16gb_silver_images_1538020296.jpg"
    },
    {
        id: 3,
        name: 'Apple iPhone SE 16GB Silver',
        url: "http://i1.rozetka.ua/goods/1491997/apple_iphone_se_16gb_silver_images_1491997307.jpg"
    },
    {
        id: 4,
        name: 'Apple iPhone 7 Plus 32GB Gold',
        url: "http://i1.rozetka.ua/goods/1491997/apple_iphone_se_16gb_silver_images_1491997307.jpg"
    },
    {
        id: 5,
        name: 'Apple iPhone 6s 32GB Gold',
        url: "http://i1.rozetka.ua/goods/1763094/copy_apple_iphone_6s_16gb_gold_58048377d1ef7_images_1763094537.jpg"
    },
    {
        id: 6,
        name: 'Apple iPhone 7 Plus 128GB Jet Black',
        url: "http://i1.rozetka.ua/goods/1763094/copy_apple_iphone_6s_16gb_gold_58048377d1ef7_images_1763094537.jpg"
    },
    {
        id: 7,
        name: 'Apple iPhone 5S 16GB Space Gray',
        url: "http://i2.rozetka.ua/goods/1628008/9502889_images_1628008456.jpg"
    },
    {
        id: 8,
        name: 'Apple iPhone 6S 64GB Rose Gold',
        url: "http://i1.rozetka.ua/goods/1847664/apple_iphone_6s_64gb_rg_not_images_1847664380.jpg"
    },
    {
        id: 9,
        name: 'Apple iPhone 5S 16GB Silver',
        url: "http://i2.rozetka.ua/goods/1847633/13988324_images_1847633180.jpg"
    },
    {
        id: 10,
        name: 'Apple iPhone 7 128GB Black',
        url: "http://i2.rozetka.ua/goods/1757071/apple_iphone_7_128gb_black_images_1757071695.jpg"
    },
    {
        id: 11,
        name: 'Apple iPhone 6s 128GB Rose Gold',
        url: "http://i2.rozetka.ua/goods/1335525/apple_iphone_6s_128gb_rose_gold_images_1335525453.jpg"
    },
    {
        id: 12,
        name: 'Apple iPhone SE 64GB Gold',
        url: "http://i2.rozetka.ua/goods/1512335/copy_apple_iphone_se_16gb_gold_570370816d37a_images_1512335422.jpg"
    },
    {
        id: 13,
        name: 'Apple iPhone 6s Plus 32GB Space Gray',
        url: "http://i2.rozetka.ua/goods/1781657/apple_iphone_6s_plus_32gb_space_gray_images_1781657831.jpg"
    },
    {
        id: 14,
        name: 'Apple iPhone 7 256GB Gold',
        url: "http://i2.rozetka.ua/goods/1757072/apple_iphone_7_256gb_gold_images_1757072423.jpg"
    },
    {
        id: 15,
        name: 'Apple iPhone 6s Plus 128GB Silver',
        url: "http://i1.rozetka.ua/goods/1335537/apple_iphone_6s_plus_128gb_silver_images_1335537777.jpg"
    },
    {
        id: 16,
        name: 'Apple iPhone 6 16GB Space Gray (CPO)',
        url: "http://i2.rozetka.ua/goods/1537986/apple_iphone_6_16gb_space_gray_cpo_images_1537986535.jpg"
    },
    {
        id: 17,
        name: 'Apple iPhone 5s 16GB Silver (FE433UA/A)',
        url: "http://i2.rozetka.ua/goods/1521742/apple_iphone_5s_16gb_silver_cpo_images_1521742433.jpg"
    },
    {
        id: 18,
        name: 'Apple iPhone 6 64GB Silver + УМБ 20000мАч в подарок!',
        url: "http://i2.rozetka.ua/goods/164485/apple_iphone_6_64gb_silver_images_164485567.jpg"
    },
    {
        id: 19,
        name: 'Apple iPhone 5s 64GB Space Gray (FE438UA/A) как новый Original factory refurbished by Apple + защитное стекло и чехол!',
        url: "http://i2.rozetka.ua/goods/1750279/copy_apple_iphone_5s_32gb_space_gray_cpo_57eb830c8638f_images_1750279098.jpg"
    },
    {
        id: 20,
        name: 'Apple iPhone 6s 16GB Gold - Уценка',
        url: "http://i1.rozetka.ua/goods/1678681/copy_apple_iphone_6s_16gb_gold_579625ab9878d_images_1678681841.jpg"
    },
    {
        id: 21,
        name: 'Apple iPhone 5s 16GB Space Gray (ME432UA/A)',
        url: "http://i2.rozetka.ua/goods/1521762/apple_iphone_5s_16gb_space_gray_me432rk_a_images_1521762670.jpg"
    },
    {
        id: 22,
        name: 'Apple iPhone 6 16GB Space Gray',
        url: "http://i1.rozetka.ua/goods/1537989/apple_iphone_6_16gb_space_gray_images_1537989083.jpg"
    },
    {
        id: 23,
        name: 'Apple iPhone 6s 16GB Space Gray',
        url: "http://i2.rozetka.ua/goods/1335523/apple_iphone_6s_16gb_space_gray_images_1335523659.jpg"
    },
    {
        id: 24,
        name: 'Apple iPhone 6s Plus 16GB Gold',
        url: "http://i1.rozetka.ua/goods/1335536/apple_iphone_6s_plus_16gb_gold_images_1335536295.jpg"
    },
    {
        id: 25,
        name: 'Apple iPhone 6s Plus 64GB Silver',
        url: "http://i2.rozetka.ua/goods/1335536/apple_iphone_6s_plus_64gb_silver_images_1335536529.jpg"
    },
    {
        id: 26,
        name: 'Apple iPhone 5s 32GB Gold (FE437UA/A) как новый Original factory refurbished by Apple',
        url: "http://i1.rozetka.ua/goods/1700138/copy_apple_iphone_5s_16gb_gold_cpo_57b55e3e5f24c_images_1700138927.jpg"
    },
    {
        id: 27,
        name: 'Apple iPhone 6 Plus 16GB Space Gray',
        url: "http://i2.rozetka.ua/goods/164520/apple_iphone_6_plus_16gb_space_gray_images_164520147.jpg"
    },
    {
        id: 28,
        name: 'Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!',
        url: "http://i1.rozetka.ua/goods/1535205/samsung_galaxy_j7_ds_black_images_1535205428.jpg"
    },
    {
        id: 29,
        name: 'Samsung Galaxy J3 2016 J320H/DS Black + карта памяти 8гб + чехол + защитное стекло!',
        url: "http://i2.rozetka.ua/goods/1479571/copy_copy_samsung_sm_j320hzddsek_56e686ce391b2_images_1479571684.jpg"
    },
    {
        id: 30,
        name: 'Samsung Galaxy J1 2016 SM-J120H Black + карта памяти 8гб + защитное стекло + чехол!',
        url: "http://i1.rozetka.ua/goods/1449595/samsung_galaxy_j1_2016_sm_j120h_black_images_1449595669.jpg"
    },
    {
        id: 31,
        name: 'Samsung Galaxy J7 (2016) J710F/DS White + защитное стекло!',
        url: "http://i2.rozetka.ua/goods/1586517/copy_samsung_sm_j710fzdusek_573310b1aa6e3_images_1586517556.jpg"
    },
    {
        id: 32,
        name: 'Samsung Galaxy A5 2016 Duos SM-A510 16Gb White + гарнитура Samsung Level U!',
        url: "http://i1.rozetka.ua/goods/1532409/samsung_galaxy_a5_2016_duos_sm_a510_16gb_white_images_1532409096.jpg"
    },
    {
        id: 33,
        name: 'Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло!',
        url: "http://i2.rozetka.ua/goods/1586536/copy_samsung_sm_j510hzddsek_57333073e25ff_images_1586536704.jpg"
    },
    {
        id: 34,
        name: 'Samsung Galaxy S7 32GB Silver',
        url: "http://i2.rozetka.ua/goods/1460340/samsung_galaxy_s7_32gb_silver_images_1460340106.jpg"
    },
    {
        id: 35,
        name: 'Samsung Galaxy J5 J500H/DS Black + карта памяти 8гб + чехол + защитное стекло!',
        url: "http://i1.rozetka.ua/goods/1534982/samsung_galaxy_j5_ds_black_images_1534982352.jpg"
    },
    {
        id: 36,
        name: 'Samsung Galaxy A7 2016 Duos SM-A710 16Gb Black + гарнитура Samsung Level U',
        url: "http://i2.rozetka.ua/goods/1534384/samsung_galaxy_a7_2016_duos_sm_a710_16gb_black_images_1534384034.jpg"
    },
    {
        id: 37,
        name: 'Samsung Galaxy A3 2016 Duos SM-A310 16Gb Gold',
        url: "http://i2.rozetka.ua/goods/1523972/samsung_galaxy_a3_2016_duos_sm_a310_16gb_gold_images_1523972724.jpg"
    },
    {
        id: 38,
        name: 'Samsung Galaxy J2 Prime G532F/DS Black',
        url: "http://i2.rozetka.ua/goods/1772186/samsung_galaxy_j2_prime_ds_black_images_1772186676.jpg"
    },
    {
        id: 39,
        name: 'Samsung Galaxy J2 J200H/DS Black',
        url: "http://i1.rozetka.ua/goods/1674280/samsung_sm_j200hzkdsek_images_1674280549.jpg"
    },
    {
        id: 40,
        name: 'Samsung Galaxy J5 Prime G570F/DS Gold + карта памяти 32гб!',
        url: "http://i2.rozetka.ua/goods/1771162/copy_samsung_galaxy_j5_prime_ds_black_580f2a2d1685d_images_1771162527.jpg"
    },
    {
        id: 41,
        name: 'Samsung Galaxy A3 2017 Duos SM-A320 16GB Black',
        url: "http://i2.rozetka.ua/goods/1826760/samsung_galaxy_a3_2017_duos_sm_a320_16gb_black_images_1826760404.jpg"
    },
    {
        id: 42,
        name: 'Samsung Galaxy S7 Edge 32GB Blue',
        url: "http://i1.rozetka.ua/goods/1841965/samsung_galaxy_s7_edge_32gb_blue_images_1841965071.jpg"
    },
    {
        id: 43,
        name: 'Samsung Galaxy J1 Duos Mini Gold',
        url: "http://i2.rozetka.ua/goods/1477868/samsung_sm_j105hzddsek_images_1477868570.jpg"
    },
    {
        id: 44,
        name: 'Samsung Galaxy A7 2017 Duos SM-A720 Pink',
        url: "http://i2.rozetka.ua/goods/1828068/samsung_sm_a720fzidsek_images_1828068767.jpg"
    },
    {
        id: 45,
        name: 'Samsung Galaxy A5 2017 Duos SM-A520 Pink',
        url: "http://i2.rozetka.ua/goods/1828055/samsung_sm_a520fzidsek_images_1828055656.jpg"
    },
    {
        id: 46,
        name: 'Samsung Galaxy A5 A500H/DS White',
        url: "http://i2.rozetka.ua/goods/324720/samsung_galaxy_a5_ds_white_images_324720837.jpg"
    },
    {
        id: 47,
        name: 'Meizu M3s 16GB Grey',
        url: "http://i1.rozetka.ua/goods/1689592/copy_meizu_m3_note_16_gr_eu_57adc62955225_images_1689592174.jpg"
    },
    {
        id: 48,
        name: 'Meizu U10 16GB Black',
        url: "http://i2.rozetka.ua/goods/1777023/meizu_u10_16_black_images_1777023978.jpg"
    },
    {
        id: 49,
        name: 'Meizu M3E 32GB Grey',
        url: "http://i2.rozetka.ua/goods/1797093/meizu_m3e_32_gr_eu_images_1797093321.jpg"
    },
    {
        id: 50,
        name: 'Meizu U20 16GB Black',
        url: "http://i1.rozetka.ua/goods/1777048/copy_meizu_u10_32_black_582097d42e6d7_images_1777048212.jpg"
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

const header = <nav className="navbar navbar-default">
    <a className="navbar-brand" href="#">
        <img className="logo" src="logo.jpg" alt="Mobile"/>
    </a>
    <span className="brend-name">Интернет магазин Mobile.ua™</span>
</nav>;

const footer = <div className="panel-footer">
    <div>© Интернет-магазин «Mobile™» 2017</div>
    <div> <b>Контакты</b></div>
    <div> г.Львов</div>
    <div>ул. Леси Украинки,18</div>
</div>;


class Mobile extends React.Component {
    render() {
        return <li>
            <img className="phone" src={this.props.url} alt="mobile" />
            <a href="#">{this.props.name}</a>
        </li>
    }
}

class MobileList extends React.Component {
    render () {
        return (
            <div>
                {header}
                <ul>
                    {
                        mobiles.map(function (el) {
                            return <Mobile key={el.id} url={el.url} name={el.name}/>
                        })
                    }
                </ul>
                {footer}
            </div>
        )
    }
}


ReactDOM.render(
    <MobileList/>,
        document.getElementById('root')
);
