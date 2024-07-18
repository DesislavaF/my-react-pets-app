import React, { Component } from 'react';
import * as petsService from '../../services/petsService';
import PetCard from '../PetCard/PetCard';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: '',
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        const category = this.props.match.params.category || 'all';
        if (category !== this.state.currentCategory) {
          this.handleCategoryChange(category);
        }
        
            this.fetchPets(category);
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category || 'all';
        if (this.state.currentCategory !== category) {
          this.handleCategoryChange(category);
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

                <CategoryNavigation currentCategory={this.state.currentCategory} />

                {<ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <PetCard key={x.id} {...x} />
                    )}
                </ul>}
            </div>
        );
    }
}

export default Categories;