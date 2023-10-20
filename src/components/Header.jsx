import { useState } from 'react'
import PaperLogo from '../assets/companyLogo/paper-logo.svg'
import ArrowIcon from '../assets/icons/arrow-up-sm.svg'
import './Header.css'

/* Currency Format IDR - Change Number to String Format*/
function formatNumber(amount) {
  return new Intl.NumberFormat('id-id').format(amount)
}
function formatPercent(amount) {
  //convert the decimal to a percentage string with two decimal places
  // return new Intl.NumberFormat('id-id', { style: 'percent' }).format(amount)
  return amount + '%'
}

function Header() {
  const [lendData, setLendData] = useState({
    lendValue: '',
    lendFee: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(lendData)
    setLendData({ lendValue: '', lendFee: '' })

    // change string to number before process data
    // Object.keys(lendData).forEach(function name(val) {
    //   lendData[val] = Number(lendData[val])
    // })
  }

  function handleChange(e) {
    let { name, value } = e.target

    if (name == 'lendValue') {
      // prevent first character if it 0 and removing separator
      value = value.replace(/^0+|[^0-9]/g, '')

      setLendData((prev) => {
        return {
          ...prev,
          [name]: value,
        }
      })
    } else if (name == 'lendFee') {
      // prevent first character if it 0
      value = value.replace(/^0+|[^0-9,.]/g, '')
      setLendData((prev) => {
        return {
          ...prev,
          [name]: value,
        }
      })
    }
  }

  return (
    <header className='header-top'>
      <nav className='header-nav'>
        <div className='logo-wrapper'>
          <a href='#'>
            <img src={PaperLogo} alt='paperid-logo' />
          </a>
        </div>
        <div className='menu-wrapper'>
          <ul>
            <li>
              <a href='#'>produk</a>
            </li>
            <li>
              <a href='#'>solusi bisnis</a>
            </li>
            <li>
              <a href='#'>cara kerja</a>
            </li>
            <li>
              <a href='#'>harga</a>
            </li>
            <li>
              <a href='#'>perusahaan</a>
            </li>
          </ul>
        </div>
        <div className='auth-wrapper'>
          <button type='button' className='login-btn'>
            Login
          </button>
          <button type='button' className='registration-btn'>
            Daftar
          </button>
        </div>
      </nav>
      <section className='hero-sec'>
        <div className='hero-sec-left-col'>
          <p>
            <span>Simulasikan Pembayaran Lebih Cepat dengan</span>
            <span>API Embedded</span>
            <span>Financing Paper!</span>
          </p>
        </div>
        <div className='hero-sec-right-col'>
          <div className='lend-form-wrapper'>
            <form
              method='POSt'
              className='lend-form-simulation'
              onSubmit={handleSubmit}
            >
              <p className='lend-form-simulation-title'>
                Lihat Simulasi Pinjaman Anda
              </p>
              {/* LendValue */}
              <label htmlFor='lendValue' className='lend-form-simulation-item'>
                Jumlah Pinjaman
                <div className='lendValue-wrapper'>
                  <span
                    className={`lend-value-prefix ${
                      lendData.lendValue && 'filled'
                    }`}
                  >
                    Rp&nbsp;
                  </span>
                  <input
                    inputMode='numeric'
                    type='text'
                    name='lendValue'
                    id='lendValue'
                    placeholder='0'
                    value={
                      lendData.lendValue ? formatNumber(lendData.lendValue) : ''
                    }
                    onChange={handleChange}
                  />
                </div>
              </label>
              {/* LendFee */}
              <label htmlFor='lendFee' className='lend-form-simulation-item'>
                Estimasi Fee
                <div className='lendFee-wrapper'>
                  <input
                    type='text'
                    inputMode='decimal'
                    name='lendFee'
                    id='lendFee'
                    placeholder='0%'
                    value={
                      lendData.lendFee ? formatPercent(lendData.lendFee) : ''
                    }
                    onChange={handleChange}
                  />
                </div>
              </label>

              <button
                className='header-cta'
                disabled={!lendData.lendValue || !lendData.lendFee}
              >
                Daftar Sekarang!
              </button>
            </form>
          </div>
          <p className='interaction-info hero-info'>
            <span>
              <img src={ArrowIcon} alt='icon' />
            </span>
            Anda dapat berinteraksi pada tampilan ini
          </p>
        </div>
      </section>
    </header>
  )
}

export default Header
