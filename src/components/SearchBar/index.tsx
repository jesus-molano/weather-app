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
  let typingTimer: number | undefined = undefined
  const [typingTimeout, setTypingTimeout] = useState(0);
  const doneTypingInterval = 1000

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const city = e.target.value
    clearTimeout(typingTimer)
    setValue(e.target.value)
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    setTypingTimeout(setTimeout(async (city: string) => {
      if(city === '') return
      const data = await getLatLonCity(city)
      if (data.length === 0) {
        setValue('')
        return setError(true)
      }
      const lat = data[0].lat
      const lon = data[0].lon
      setLocation({ latitude: lat, longitude: lon })
      setValue('')
      
    }, doneTypingInterval, city));
      
    
  }
  return (
    <>
      {error && <CustomAlert options={options} />}
      <div className='searchbar' >
        <input type='text' placeholder='Search a city...' onChange={handleChange} value={value} />
          <BiSearchAlt className='search-icon' size={30} />
      </div>
    </>
  )
}

export default SearchBar
