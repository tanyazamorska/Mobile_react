import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src="logo.jpg" alt="Mobile"/>
                    </a>
                    <span className="brend-name">Интернет магазин Mobile.ua™</span>
                </nav>
            </div>
        )
    }
}
