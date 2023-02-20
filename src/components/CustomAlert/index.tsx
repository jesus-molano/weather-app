import { FC } from 'react'
import { MdError } from 'react-icons/md'
import './customalert.css'

interface AlertOptions {
  message: string
  title?: string
  onOk?: () => void
  onCancel?: () => void
}

interface AlertProps {
  options: AlertOptions
}

const CustomAlert: FC<AlertProps> = ({ options }) => {
  const handleOkClick = () => {
    if (options.onOk) {
      options.onOk()
    }
  }

  const handleCancelClick = () => {
    if (options.onCancel) {
      options.onCancel()
    }
  }

  return (
    <div className='alert-container'>
      <div className='custom-alert'>
        <MdError className='alert-icon' size={50} />
        {options.title && <h2>{options.title}</h2>}
        <div className='message'>{options.message}</div>
        <div className='buttons'>
          <button onClick={handleOkClick}>OK</button>
          {options.onCancel && (
            <button onClick={handleCancelClick}>Cancel</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomAlert
