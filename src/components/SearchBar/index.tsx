import { getLatLonCity } from '@api/getLatLonCity'
import { useContext, useState } from 'react'
import { LocationContext } from '@contexts/index'
import { BiSearchAlt } from 'react-icons/bi'
import './searchbar.css'
import CustomAlert from '@components/CustomAlert'

const SearchBar: React.FC = () => {
  const { setLocation } = useContext(LocationContext)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const options = {
    message: 'City not found',
    title: 'Error',
    onOk: () => setError(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return

    const data = await getLatLonCity(value)
    if (data.length === 0) {
      setValue('')
      return setError(true)
    }
    const lat = data[0].lat
    const lon = data[0].lon
    setLocation({ latitude: lat, longitude: lon })
    setValue('')
  }
  return (
    <>
      {error && <CustomAlert options={options} />}
      <form className='searchbar' onSubmit={handleSubmit}>
        <input
          type='search'
          placeholder='Search a city...'
          value={value}
          onChange={handleChange}
        />
        <button className='search-button'>
          <BiSearchAlt className='search-icon' size={30} />
        </button>
      </form>
    </>
  )
}

export default SearchBar
