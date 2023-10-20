/* eslint-disable react/prop-types */
import Modal from './Modal'
import HandshakeImg from '../assets/popupImage/kerja-sama.svg'
import './ModalDone.css'

function ModalDone(props) {
  let { confirmationBg, openModal, closeModal } = props

  return (
    <Modal
      confirmationBg={confirmationBg}
      openModal={openModal}
      closeModal={closeModal}
    >
      <article className='done-modal'>
        <section className='done-modal-sect1'>
          <h3>Siap untuk mencoba Paper.id?</h3>
          <p>
            Paper.id dapat membantu Anda mendapatkan pembayaran lebih cepat
            untuk bisnis Anda!
          </p>
        </section>
        <section className='done-modal-sect2'>
          <img src={HandshakeImg} alt='handshake' />
        </section>
        <section className='done-modal-sect3'>
          <button className='payment-btn' type='button' onClick={closeModal}>
            Selesai
          </button>
        </section>
        <section className='done-modal-sect4'>
          <p>Hubungi kami 0821-1767-9137</p>
        </section>
      </article>
    </Modal>
  )
}

export default ModalDone
