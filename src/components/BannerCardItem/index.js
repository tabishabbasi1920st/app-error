import './index.css'

const ReusableBanners = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  const banner = (
    <li className={`banner-bg-container ${className}`}>
      <div>
        <h1 className="header-text">{headerText}</h1>
        <p className="description-text">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
  return banner
}

export default ReusableBanners
