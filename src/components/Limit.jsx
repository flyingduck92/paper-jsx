import { useState } from 'react'
import './Limit.css'
import KursiAyunImg from '../assets/products/kursi-ayun.png'
import NightLampImg from '../assets/products/night-lamp.png'
import KursiLipatImg from '../assets/products/kursi-lipat.png'
import ArrowIcon from '../assets/icons/arrow-up-sm.svg'

import ModalPayment from './ModalPayment'
import ModalCongrats from './ModalCongrats'
import ModalDone from './ModalDone'

const dataCards = [
  {
    id: 1,
    imgUrl: KursiAyunImg,
    product_name: 'Soleil Kursi Ayun 2 Dudukan Stripe - Biru/putih',
    price: 5000000,
    qty: 50,
  },
  {
    id: 2,
    imgUrl: NightLampImg,
    product_name: 'EVEDAL Night Lamp',
    price: 5000000,
    qty: 50,
  },
  {
    id: 3,
    imgUrl: KursiLipatImg,
    product_name: 'Soleil Kursi Lipat - Hitam',
    price: 5000000,
    qty: 50,
  },
]

/* Currency Format IDR */
function formatCurrency(amount) {
  return new Intl.NumberFormat('id-id', {
    currency: 'idr',
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount)
}

function Limit() {
  const [payment, setPayment] = useState('')
  const [modalPay, setModalPay] = useState(false)
  const [modalCongrats, setModalCongrats] = useState(false)
  const [modalDone, setModalDone] = useState(false)

  const [quantity, setQuantity] = useState(1)
  const handleMinus = () => {
    setQuantity(quantity - 1)
  }
  const handlePlus = () => {
    setQuantity(quantity + 1)
  }
  const handleQtyInput = (e) => {
    setQuantity(e.target.value)
  }

  const handlePaymentMethod = (value) => {
    setPayment(value)
  }

  /* Multi-modal steps */
  const goTo = (target) => {
    if (target === 'pay') {
      setModalPay(true)
    } else if (target === 'congrats') {
      setModalPay(false)
      setModalCongrats(true)
    } else if (target === 'done') {
      setModalCongrats(false)
      setModalDone(true)
    }
  }

  return (
    <section className='limit-section'>
      <div className='limit-left-col'>
        <h1 className='limit-title'>
          Lihat Simulasi Penggunaan Limit yang Diberikan!
        </h1>
      </div>
      <div className='limit-right-col'>
        <div className='cards'>
          {dataCards.map((item) => {
            return (
              <div className='card' key={item.id}>
                <div className='card-img'>
                  <img src={item.imgUrl} alt={item.product_name} />
                </div>
                <div className='card-detail'>
                  <p className='card-price'>{formatCurrency(item.price)}</p>
                  <div className='card-qty'>
                    <button onClick={handleMinus} className='minus'>
                      -
                    </button>
                    <input
                      type='number'
                      className='quantity'
                      value={quantity}
                      onChange={handleQtyInput}
                    />
                    <button onClick={handlePlus} className='plus'>
                      +
                    </button>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => goTo('pay')}
                  className='card-btn'
                >
                  Bayar Modal
                </button>
              </div>
            )
          })}
        </div>

        {/* Step 1 - Payment */}
        <ModalPayment
          slide={true}
          openModal={modalPay}
          paymentMethod={handlePaymentMethod}
          closeModal={() => setModalPay(false)}
          amount={dataCards[1].price}
          goTo={goTo}
        />

        {/* Step 2 - Congrats */}
        <ModalCongrats
          confirmationBg={true}
          paymentMethod={payment}
          openModal={modalCongrats}
          closeModal={() => setModalCongrats(false)}
          amount={dataCards[1].price}
          goTo={goTo}
        />

        {/* Step 3 - Done */}
        <ModalDone
          confirmationBg={true}
          openModal={modalDone}
          closeModal={() => setModalDone(false)}
        />

        <p className='interaction-info'>
          <span>
            <img src={ArrowIcon} alt='icon' />
          </span>
          Anda dapat berinteraksi pada tampilan ini
        </p>
      </div>
    </section>
  )
}

export default Limit
