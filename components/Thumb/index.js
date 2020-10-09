import PropTypes from 'prop-types'

// Style
import style from './index.module.css'

const Thumb = function ({ image, alt }) {
  return (
    <figure className={style.root}>
      <img src={image} alt={alt} />
    </figure>
  )
}

Thumb.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Thumb
