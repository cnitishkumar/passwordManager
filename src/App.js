import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import PasswordItem from './components/PasswordItem'

import './App.css'

class PasswordManger extends Component {
  state = {
    passwordsList: [],
    website: '',
    password: '',
    username: '',
    showPassword: false,
    searchValue: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = event => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onDeletePasswordItem = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(each => each.id !== id)

    this.setState({passwordsList: filteredList})
  }

  onChangeSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  onAddNewPassword = event => {
    event.preventDefault()
    const {website, username, password, passwordsList} = this.state
    const newPassword = {
      website,
      username,
      password,
      id: uuidV4(),
    }

    if (website !== ' ' && password !== ' ' && username !== '') {
      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      showPassword,
      searchValue,
    } = this.state
    const filteredList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchValue.toLowerCase()),
    )
    const passwordsCount = filteredList.length
    let renderResult = ''

    if (passwordsCount === 0) {
      renderResult = (
        <div className="no-password-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-image"
          />
          <p className="no-passwords">No Passwords</p>
        </div>
      )
    } else {
      renderResult = (
        <ul className="ul-el">
          {filteredList.map(eachItem => (
            <PasswordItem
              details={eachItem}
              showPassword={showPassword}
              onDeletePasswordItem={this.onDeletePasswordItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg-container">
        <div className="app-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
        </div>
        {/* add password container */}
        <div className="add-password-container">
          <form className="form-container" onSubmit={this.onAddNewPassword}>
            <h2 className="add-password-hedaing">Add New Password</h2>
            <div className="website-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="input-logo"
                alt="website"
              />
              <input
                type="text"
                className="input-element"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="website-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="input-logo"
                alt="username"
              />
              <input
                type="text"
                className="input-element"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="website-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="input-logo"
                alt="password"
              />
              <input
                type="password"
                className="input-element"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
          {/* form */}
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="userlogin-image"
          />
        </div>
        {/* bottom section */}
        <div className="passwords-section">
          <div className="passwords-header-section">
            <div className="heading-password-count-container">
              <h2 className="show-password-heading">Your Passwords </h2>
              <p className="passwords-count">{passwordsCount}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-logo"
              />
              <input
                type="search"
                className="search-input"
                value={searchValue}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="check-box-container">
            <input
              type="checkbox"
              onChange={this.showPassword}
              className="check-box"
              id="checkBox"
            />
            <label htmlFor="checkBox" className="label-el">
              Show passwords
            </label>
          </div>
          {renderResult}
        </div>
      </div>
    )
  }
}

export default PasswordManger
