import { useEffect, useRef } from 'react'
import CrossIcon from '../assets/icons/cross.svg'
import './Modal.css'

function Modal(props) {
  let { slide, confirmationBg, openModal, closeModal, children } = props

  const ref = useRef()
  let isSlide = slide || ''
  // let paymentMethod = payment || ''
  let isConfirmation = confirmationBg || false

  useEffect(() => {
    if (openModal) {
      ref.current.showModal()
      /* prevent bodyfrom scrolling */
      document.body.classList.add('modal-open')
    } else {
      ref.current.close()
      /* set it back to normal scrolling */
      document.body.classList.remove('modal-open')
    }
  }, [openModal])

  /* https://stackoverflow.com/questions/62135111/react-not-closing-dialog-box */
  return (
    <dialog
      ref={ref}
      onClose={closeModal}
      className={`modal 
        ${isConfirmation && 'confirmationBg'}
        ${isSlide && 'slide'} 
      `}
    >
      <button className='modal-close' onClick={closeModal}>
        <img src={CrossIcon} alt='close' width={24} />
      </button>
      <div className='modal-content'>{children}</div>
    </dialog>
  )
}

export default Modal
