import React from 'react';
import { Link } from '@reach/router';

const Layout = ({ children }) => (
    <div class="container">
        <div class="row pt-5">
            <header class="col-3 mt-5">
                <div>A11y React App</div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

            <main class="col">{children}</main>
            
        </div>

        <footer class="row p-5">
            <p>Footer goes here</p>
        </footer>

    </div>
);

export default Layout;