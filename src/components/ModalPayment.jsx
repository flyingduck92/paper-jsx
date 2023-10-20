/* eslint-disable no-unused-vars */
import { useState } from 'react'
import KoinWorksImg from '../assets/companyLogo/koin-works.png'
import InvestreeImg from '../assets/companyLogo/investree.png'
import TokopediaImg from '../assets/companyLogo/tokopedia.png'
import CreditCardImg from '../assets/icons/credit-card.svg'
import ShieldImg from '../assets/icons/shield.svg'
import CheckImg from '../assets/icons/check.svg'
import './ModalPayment.css'

import Modal from './Modal'

/* Currency Format IDR */
function formatCurrency(amount) {
  return new Intl.NumberFormat('id-id', {
    currency: 'idr',
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount)
}

function ModalPayment(props) {
  let { slide, openModal, paymentMethod, closeModal, amount, goTo } = props

  let [payment, setPayment] = useState('')
  let [coupon, setCoupon] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleChange = (e) => {
    setPayment(e.target.value)
  }

  /* Loading Spinner  */
  const Loading = () => {
    return (
      <div className='loading-spinner-1'>
        <div className='loading-content'>
          <div className='loader'></div>
          <p>Mohon menunggu. Transaksi Anda sedang diproses</p>
        </div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // will Hold loading for 3s
    setTimeout(() => {
      if (payment === 'tokopedia') {
        payment = 'Tokopedia'
      } else if (payment === 'creditCard') {
        payment = 'Credit Card'
      } else if (payment === 'koinworks') {
        payment = 'Paper Usaha - KoinWorks'
      } else if (payment === 'investree') {
        payment = 'Paper Usaha - Investree'
      }

      paymentMethod(payment)
      setPayment('')
      setCoupon('')
      setLoading(false)

      // now go to Congrats Modal
      goTo('congrats')
    }, 3000)
  }

  return (
    <>
      <Modal slide={slide} openModal={openModal} closeModal={closeModal}>
        <form className='payment-form' method='POST' onSubmit={handleSubmit}>
          {isLoading ? <Loading /> : null}
          <p className='payment-label'>Payment Paper</p>
          <p className='payment-title'>Pilih metode pembayaran</p>

          <div className='payment-form-detail'>
            <div className='payment-form-left-col'>
              <p className='payment-form-head'>Tokopedia</p>
              <div className='payment-form-item custom-radios'>
                <div className='wrapper'>
                  <input
                    required
                    type='radio'
                    id='tokopedia'
                    name='payment'
                    value='tokopedia'
                    checked={payment === 'tokopedia'}
                    onChange={handleChange}
                  />
                  <label htmlFor='tokopedia'>
                    <span className='radio-check-icon'>
                      <img src={CheckImg} alt='Checked Icon' />
                    </span>
                    <div className='radio-value'>
                      <div className='radio-label'>
                        <img className='radio-image' src={TokopediaImg} />
                        <p>Tokopedia</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <p className='payment-form-head'>Credit Card</p>
              <div className='payment-form-item custom-radios'>
                <div className='wrapper'>
                  <input
                    type='radio'
                    id='credit-card'
                    name='payment'
                    value='creditCard'
                    checked={payment === 'creditCard'}
                    onChange={handleChange}
                  />
                  <label htmlFor='credit-card'>
                    <span className='radio-check-icon'>
                      <img src={CheckImg} alt='Checked Icon' />
                    </span>
                    <div className='radio-value'>
                      <div className='radio-label'>
                        <img className='radio-image' src={CreditCardImg} />
                        <p>Credit Card</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <p className='payment-form-head'>Paper Usaha</p>
              <div className='payment-form-item custom-radios'>
                <div className='wrapper'>
                  <input
                    type='radio'
                    id='koinworks'
                    name='payment'
                    value='koinworks'
                    checked={payment === 'koinworks'}
                    onChange={handleChange}
                  />
                  <label htmlFor='koinworks'>
                    <span className='radio-check-icon'>
                      <img src={CheckImg} alt='Checked Icon' />
                    </span>
                    <div className='radio-value'>
                      <div className='radio-label'>
                        <img className='radio-image' src={KoinWorksImg} />
                        <p>Koinworks</p>
                      </div>
                      <div className='radio-info'>
                        <div>
                          <p className='radio-info-label'>Limit</p>
                          <p className='radio-info-value'>Rp. 5.000.000</p>
                        </div>
                        <div>
                          <p className='radio-info-label'>Fee</p>
                          <p className='radio-info-value'>1.1%</p>
                        </div>
                        <div>
                          <p className='radio-info-label'>Tenor</p>
                          <p className='radio-info-value'>7 Days</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className='payment-form-item custom-radios'>
                <div className='wrapper'>
                  <input
                    type='radio'
                    id='investree'
                    name='payment'
                    value='investree'
                    checked={payment === 'investree'}
                    onChange={handleChange}
                  />
                  <label htmlFor='investree'>
                    <span className='radio-check-icon'>
                      <img src={CheckImg} alt='Checked Icon' />
                    </span>
                    <div className='radio-value'>
                      <div className='radio-label'>
                        <img className='radio-image' src={InvestreeImg} />
                        <p>Investree</p>
                      </div>
                      <div className='radio-info'>
                        <div>
                          <p className='radio-info-label'>Limit</p>
                          <p className='radio-info-value'>Rp. 5.000.000</p>
                        </div>
                        <div>
                          <p className='radio-info-label'>Fee</p>
                          <p className='radio-info-value'>1.1%</p>
                        </div>
                        <div>
                          <p className='radio-info-label'>Tenor</p>
                          <p className='radio-info-value'>7 Days</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className='payment-form-right-col'>
              <div className='payment-detail'>
                <select name='coupon' className='payment-coupon'>
                  <option disabled defaultValue autoFocus>
                    🎫 Gunakan Promo
                  </option>
                  <option value='tokopedia-20231111'>🎟️ Tokopedia Promo</option>
                  <option value='invrestree-20231111'>
                    🏷️ Invrestree Promo
                  </option>
                  <option value='koinworks-20231111'>🔖 Koinworks Promo</option>
                </select>
                <p className='payment-detail-title'>Rincian Pembayaran</p>
                <div className='payment-form-item payment-subtotal'>
                  <p>Subtotal</p>
                  <p>{formatCurrency(amount)}</p>
                </div>

                <div className='payment-form-item payment-total'>
                  <p>Total Pembayaran</p>
                  <p className='payment-total-price'>
                    {formatCurrency(amount)}
                  </p>
                </div>
                <button className='payment-btn' disabled={!payment}>
                  <img src={ShieldImg} alt='shield' />
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default ModalPayment
