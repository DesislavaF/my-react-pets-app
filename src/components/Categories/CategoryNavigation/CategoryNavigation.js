import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryNavigation = ({ currentCategory }) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink 
                        to="/categories/all" 
                        isActive={() => currentCategory === 'all'}
                        activeClassName={'active'}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Cat" 
                        isActive={() => currentCategory === 'Cat'}
                        activeClassName={'active'}
                    >
                        Cats
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Dog" 
                        isActive={() => currentCategory === 'Dog'}
                        activeClassName={'active'}
                    >
                        Dogs
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Parrot" 
                        isActive={() => currentCategory === 'Parrot'}
                        activeClassName={'active'}
                    >
                        Parrots
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Reptile" 
                        isActive={() => currentCategory === 'Reptile'}
                        activeClassName={'active'}
                    >
                        Reptiles
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Other" 
                        isActive={() => currentCategory === 'Other'}
                        activeClassName={'active'}
                    >
                        Other
                    </NavLink>
                </li>
            </ul>

            <style>{`
                .active {
                    background-color: lightgreen !important;
                }
            `}</style>
        </nav>
    );
};

export default CategoryNavigation;
