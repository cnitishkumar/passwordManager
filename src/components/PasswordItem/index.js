import './index.css'

const PasswordItem = props => {
  const index = Math.ceil(Math.random() * 5)
  const bgColor = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6'][index]
  console.log(bgColor)
  const {details, showPassword, onDeletePasswordItem} = props
  const {username, website, password, id} = details
  const onDeleteItem = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li className="list-item">
      <h2 className={`user-logo ${bgColor}`}>
        {username.slice(0, 1).toUpperCase()}
      </h2>
      <div className="user-credentials-container">
        <p className="website-name">{website}</p>
        <p className="website-name">{username}</p>
        {showPassword ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        type="button"
        data-testid="delete"
        className="delete-btn"
        onClick={onDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
