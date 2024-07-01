import { Component } from 'react';
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
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    <li className="otherPet">
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p className="description">This is not my cat Gosho</p>
                        <div className="pet-info">
                            <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button className="button">Details</button></a>
                            <i className="fas fa-heart"></i> <span> 2</span>
                        </div>
                    </li>
                    <li className="otherPet">
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                        <p className="description">This is not my cat Gosho</p>
                        <div className="pet-info">
                            <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button className="button">Details</button></a>
                            <i className="fas fa-heart"></i> <span> 2</span>
                        </div>

                    </li>
                    <li className="otherPet">
                        <h3>Name: Kiro</h3>
                        <p>Category: Dog</p>
                        <p className="img"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png" /></p>
                        <p className="description">This is my dog Kiro</p>
                        <div className="pet-info">
                            <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button className="button">Details</button></a>
                            <i className="fas fa-heart"></i> <span> 4</span>
                        </div>
                    </li>
                </ul>
            </section>
        );
    };
};

export default Categories;