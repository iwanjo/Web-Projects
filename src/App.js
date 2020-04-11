import React from 'react';

import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './img/download (1).jpg'

class App extends React.Component {

    state = {
        data: {},
        country: '',

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        //fetch data
        //set state
        console.log(fetchedData);
        this.setState({ data: fetchedData, country: country});
        
    }

    render() {
        const { data, country } = this.state;

        return(
            <div className = {styles.container}>
                <img className = {styles.image} src = {covidImage} alt = "Coronavirus Visual"/>
                <Cards data = {data} ></Cards>
                <CountryPicker handleCountryChange = {this.handleCountryChange}></CountryPicker>
                <Chart data = {data} country = {country}></Chart>
                
            </div>
        );
    }
}
export default App;