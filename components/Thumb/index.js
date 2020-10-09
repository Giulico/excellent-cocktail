import PropTypes from 'prop-types'

// Style
// import style from './index.module.css'

const Thumb = function ({ image, alt }) {
  return (
    <img
      style={{
        margin: '32px auto',
        width: '100%',
        maxWidth: '300px',
        borderRadius: '50%',
      }}
      src={image}
      alt={alt}
    />
  )
}

Thumb.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Thumb
