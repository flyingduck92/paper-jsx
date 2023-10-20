/* eslint-disable react/prop-types */
import Modal from './Modal'
import './ModalCongrats.css'

/* 
  Currency Format IDR
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat 
*/
function formatCurrency(amount) {
  return new Intl.NumberFormat('id-id', {
    currency: 'idr',
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount)
}

/*
  getFullDateTime ID
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat 
*/
function getFullDateTime() {
  const todayDate = new Date()
  let dateFormat = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  let timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  const fullDate = new Intl.DateTimeFormat('id-id', dateFormat).format(
    todayDate
  )
  let fullTime = new Intl.DateTimeFormat('id-id', timeFormat).format(todayDate)
  fullTime = fullTime.replace(/\./g, ':')

  return `${fullDate} - ${fullTime}`
}

function ModalCongrats(props) {
  let {
    slide,
    confirmationBg,
    openModal,
    closeModal,
    paymentMethod,
    amount,
    goTo,
  } = props

  let adminFee = 2090

  return (
    <Modal
      slide={slide}
      confirmationBg={confirmationBg}
      openModal={openModal}
      closeModal={closeModal}
    >
      <article className='congrats-modal'>
        <section className='congrats-modal-sect1'>
          <h3>Selamat, Pembayaran Anda Berhasil!</h3>
          <p>
            Pembayaran sudah diterima oleh Paper.id dan dana akan diteruskan ke
            rekening penerima dengan rincian sebagai berikut:
          </p>
        </section>
        <section className='congrats-modal-sect2'>
          <div className='modal-sect2-item'>
            <p>Nominal Transaksi</p>
            <p>{formatCurrency(amount)}</p>
          </div>
          <div className='modal-sect2-item'>
            <p>Admin Fee</p>
            <p>{formatCurrency(adminFee)}</p>
          </div>
          <div className='modal-sect2-item'>
            <p>Total Bayar</p>
            <p>{formatCurrency(amount + adminFee)}</p>
          </div>
          <div className='modal-sect2-item'>
            <p>Tanggal Pembayaran</p>
            <p>{getFullDateTime()}</p>
          </div>
        </section>
        <section className='congrats-modal-sect3'>
          <div className='modal-sect3-item'>
            <p>Metode Pembayaran</p>
            <p>{paymentMethod}</p>
          </div>
          <div className='modal-sect3-item'>
            <p>Sisa Limit</p>
            <p>{formatCurrency(amount)}</p>
          </div>
        </section>
        <section className='congrats-modal-sect4'>
          <button
            className='payment-btn'
            type='button'
            onClick={() => goTo('done')}
          >
            Baik, Saya Mengerti
          </button>
        </section>
      </article>
    </Modal>
  )
}

export default ModalCongrats
