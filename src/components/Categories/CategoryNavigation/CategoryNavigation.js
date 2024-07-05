import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const CategoryNavigation = ({ onCategoryChange }) => {
    const location = useLocation();
    const history = useHistory();

    const handleCategoryChange = (category) => {
        onCategoryChange(category);
        history.push(`/categories/${category}`);
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink 
                        to="/categories/all" 
                        isActive={() => location.pathname === '/categories/all' || location.pathname === '/categories'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => handleCategoryChange('all')}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Cat" 
                        isActive={() => location.pathname === '/categories/Cat'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => handleCategoryChange('Cat')}
                    >
                        Cats
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Dog" 
                        isActive={() => location.pathname === '/categories/Dog'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => handleCategoryChange('Dog')}
                    >
                        Dogs
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Parrot" 
                        isActive={() => location.pathname === '/categories/Parrot'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => handleCategoryChange('Parrot')}
                    >
                        Parrots
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Reptile" 
                        isActive={() => location.pathname === '/categories/Reptile'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => handleCategoryChange('Reptile')}
                    >
                        Reptiles
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categories/Other" 
                        isActive={() => location.pathname === '/categories/Other'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => handleCategoryChange('Other')}
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

