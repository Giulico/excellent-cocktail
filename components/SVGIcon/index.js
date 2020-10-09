import PropTypes from 'prop-types'

// Style
import style from './index.module.css'

const SVGIcon = function ({ icon, alt }) {
  return (
    <span className={style.root}>
      <img src={icon} alt={alt} />
    </span>
  )
}

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default SVGIcon
