import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {isSelectedCountry: countryAndCapitalsList[0].id}
  onClickCapital = event => {
    this.setState({isSelectedCountry: event.target.value})
  }
  getCountry = () => {
    const{isSelectedCountry} = this.state
    const filteredResults = countryAndCapitalsList.find(eachCountry => 
      eachCountry.id === isSelectedCountry
    )
    return filteredResults.country
  }
  render() {
    const {isSelectedCountry} = this.state
    const country = this.getCountry(isSelectedCountry)
    return (
      <div className="bg-container">
        <div className="bg-card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="input-search-container">
            <select className="input-search" onChange={this.onClickCapital} value={isSelectedCountry}>
             {countryAndCapitalsList.map(eachCountry => (
              <option 
              key={eachCountry.id} value={eachCountry.id}>{eachCountry.capitalDisplayText}</option>
             ))}
            </select>
            <p className="label-description">
              is capital of which country?
            </p>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
