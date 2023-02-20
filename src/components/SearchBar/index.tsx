import { getLatLonCity } from '@api/getLatLonCity'
import { useContext, useState } from 'react'
import { LocationContext } from '@contexts/index'
import { BiSearchAlt } from 'react-icons/bi'
import './searchbar.css'
import CustomAlert from '@components/CustomAlert'

interface FormEventWithTarget extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement
}

const SearchBar: React.FC = () => {
  const { setLocation } = useContext(LocationContext)
  const [error, setError] = useState(false)
  const options = {
    message: 'City not found',
    title: 'Error',
    onOk: () => setError(false)
  }

  const handleSubmit = async (e: FormEventWithTarget) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement | null
    if (input) {
      const city = input.value
      const data = await getLatLonCity(city)
      if (data.length === 0) return setError(true)

      const lat = data[0].lat
      const lon = data[0].lon
      setLocation({ latitude: lat, longitude: lon })
    }
  }
  return (
    <>
      {error && <CustomAlert options={options} />}
      <form className='searchbar' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search a city...' />
        <button>
          <BiSearchAlt size={30} />
        </button>
      </form>
    </>
  )
}

export default SearchBar
