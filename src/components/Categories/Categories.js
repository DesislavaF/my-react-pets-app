import { Component } from 'react';

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
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
            .then(res => this.setState({pets: res}))
            .catch(error => console.log(error));
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