import PropTypes from 'prop-types'

// Comopnents
import MaterialAutocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

// Styles
import style from './index.module.css'

const Autocomplete = function ({ label, ...props }) {
  return (
    <MaterialAutocomplete
      className={style.root}
      fullWidth
      selectOnFocus
      renderInput={(params) => (
        <TextField {...params} variant="filled" label={label} />
      )}
      {...props}
    />
  )
}

Autocomplete.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Autocomplete
