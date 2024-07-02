import { Component } from 'react';

import * as petsService from '../services/petsService'

import Pet from '../Pet/Pet';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res }))
    }
    render() {
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet 
                        key={x.id} {...x} />
                    )}
                </ul>
            </div>
        );
    };
};


export default Categories;