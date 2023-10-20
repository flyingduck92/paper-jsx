import './Benefit.css'
import LadyHoldingPhone from '../assets/girl_with _phone.png'
import CheckCircle from '../assets/icons/check-circle.svg'

function Benefit() {
  return (
    <section className='section-benefit'>
      <div className='benefit-wrapper'>
        <h1 className='benefit-title'>Manfaat yang Bisa Anda Rasakan</h1>
        <div className='benefit-details'>
          <div className='benefit-left-col'>
            <div className='benefit-left-item'>
              <img src={CheckCircle} alt='check' className='greenCheck' />
              <div>
                <h2>One Time Integration</h2>
                <p>
                  Menyediakan solusi pembiayaan dengan cara yang nyaman dan
                  efisien bagi bisnis melalui satu proses integrasi.
                </p>
              </div>
            </div>
            <div className='benefit-left-item'>
              <img src={CheckCircle} alt='check' className='greenCheck' />
              <div>
                <h2>Seamless User Experience</h2>
                <p>
                  Proses pengajuan pinjaman dengan lebih mudah tanpa harus
                  berinteraksi atau menelepon pihak pemberi pinjaman.
                </p>
              </div>
            </div>
            <div className='benefit-left-item'>
              <img src={CheckCircle} alt='check' className='greenCheck' />
              <div>
                <h2>One Submission for Multiple Financial Institutions</h2>
                <p>
                  Cukup dengan satu kali pendaftaran, Anda dapat langsung
                  diproses secara otomatis ke beberapa lembaga keuangan.
                </p>
              </div>
            </div>
          </div>
          <div className='benefit-right-col'>
            <div className='lady-clip-circle'>
              <img src={LadyHoldingPhone} alt='lady' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefit
