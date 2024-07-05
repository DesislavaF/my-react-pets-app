import React, { Component } from 'react';
import * as petsService from '../../services/petsService';
import Pet from '../Pet/Pet';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all',
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        const category = this.props.match.params.category || 'all';
        this.fetchPets(category);
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category || 'all';
        if (prevProps.match.params.category !== category) {
            this.fetchPets(category);
        }
    }

    handleCategoryChange(category) {
        this.setState({ currentCategory: category });
        this.fetchPets(category);
    }

    fetchPets(category = 'all') {
        petsService.getAll(category)
            .then(res => this.setState({ pets: res }));
    }

    render() {
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation onCategoryChange={this.handleCategoryChange} />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet key={x.id} {...x} />
                    )}
                </ul>
            </div>
        );
    }
}

export default Categories;
