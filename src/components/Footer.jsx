import './Footer.css'

import LadyImg from '../assets/Lady_2.png'
import Logo from '../assets/companyLogo/paper-logo.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import EmailIcon from '../assets/icons/email.svg'
import OfficeIcon from '../assets/icons/office.svg'
import PlayStore from '../assets/download/playstore.png'
import HundredPercentLogo from '../assets/secure/100-percent.svg'
import ISOLogo from '../assets/secure/ISO27001.png'
import KanLogo from '../assets/secure/kan_logo.png'
import Youtube from '../assets/socials/youtube-icon.png'
import Facebook from '../assets/socials/facebook-icon.png'
import LinkedIn from '../assets/socials/linkedin-icon.png'
import Instagram from '../assets/socials/instagram-icon.png'

function Footer() {
  return (
    <footer>
      <section className='footer-sec-1'>
        <div className='left-col'>
          <img src={LadyImg} alt='lady' className='img-circle' />
        </div>
        <div className='right-col'>
          <h2>
            Solusi Pembayaran untuk Kelancaran Cashflow Bisnis via Paper id
          </h2>
          <button>Daftar Gratis Sekarang</button>
        </div>
      </section>
      <section className='footer-sec-2'>
        <div className='left-col'>
          <img src={Logo} alt='Paper Logo' />
          <div className='contact'>
            <div className='contact-office'>
              <p className='footer-subtitle'>Hubungi Kami</p>
              <div className='contact-phone'>
                <div>
                  <img src={PhoneIcon} alt='phone' />
                </div>
                <div>
                  <p>+62 821 1767 9137</p>
                  <p>+62 811 1098 746 (WA)</p>
                </div>
              </div>
              <div className='contact-email'>
                <div>
                  <img src={EmailIcon} alt='email' />
                </div>
                <div>
                  <p>support@paper.id</p>
                </div>
              </div>
              <div className='contact-address'>
                <div>
                  <img src={OfficeIcon} alt='office' />
                </div>
                <div>
                  <p>
                    Jl. Sunter Garden Raya <br />
                    No.5D, RT.6/RW.12, <br />
                    Sunter Agung, Tj. Priok, <br />
                    Kota Jkt Utara, DKI Jakarta <br />
                    14350
                  </p>
                </div>
              </div>
            </div>
            <div className='office-hours'>
              <p className='footer-subtitle'>Jam Operasional</p>
              <div className='office-hours-day'>
                <div>
                  <p>Senin - Jumat</p>
                  <p>Sabtu & Libur Nasional</p>
                </div>
                <div>
                  <p>: 07.00 - 22.00 WIB</p>
                  <p>: 08.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-col'>
          <div className='features'>
            <p className='footer-subtitle'>Fitur Lainnya</p>
            <div className='features-cols'>
              <div className='features-cols-item'>
                <a href='#'>
                  <p>Order dan Penawaran</p>
                </a>
                <a href='#'>
                  <p>Akuntansi Gratis</p>
                </a>
                <a href='#'>
                  <p>Digital Payment</p>
                </a>
                <a href='#'>
                  <p>Manajemen Stok</p>
                </a>
                <a href='#'>
                  <p>Laporan Keuangan</p>
                </a>
                <a href='#'>
                  <p>One Click Share</p>
                </a>
                <a href='#'>
                  <p>Template Invoice</p>
                </a>
              </div>
              <div className='features-cols-item'>
                <a href='#'>
                  <p>Biling</p>
                </a>
                <a href='#'>
                  <p>Financing</p>
                </a>
                <a href='#'>
                  <p>PaperChain</p>
                </a>
                <a href='#'>
                  <p>PaperTrade</p>
                </a>
                <a href='#'>
                  <p>Enterprise Solution</p>
                </a>
                <a href='#'>
                  <p>Payper</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className='footer-subtitle'>Solusi</p>
            <a href='#'>
              <p>Jual Beli</p>
            </a>
            <a href='#'>
              <p>Jasa</p>
            </a>
            <a href='#'>
              <p>F&B</p>
            </a>
          </div>
          <div>
            <p className='footer-subtitle'>Perusahaan</p>
            <a href='#'>
              <p>Tentang Kami</p>
            </a>
            <a href='#'>
              <p>Cara Kerja</p>
            </a>
            <a href='#'>
              <p>Karir</p>
            </a>
            <a href='#'>
              <p>Pricing</p>
            </a>
            <a href='#'>
              <p>Blog</p>
            </a>
            <a href='#'>
              <p>Help Center</p>
            </a>
            <a href='#'>
              <p>FAQ</p>
            </a>
          </div>
        </div>
      </section>
      <section className='footer-sec-3'>
        <div className='sec-3-left-col'>
          <p className='footer-subtitle'>Download Paper.id apps</p>
          <div className='sec-3-download'>
            <a href='#'>
              <img src={PlayStore} alt='playstore' />
            </a>
          </div>
        </div>
        <div className='sec-3-right-col'>
          <p className='footer-subtitle'>Keamanan</p>
          <div className='sec-3-secure'>
            <img src={HundredPercentLogo} alt='100-percent' />
            <img src={KanLogo} alt='kan logo' />
            <img src={ISOLogo} alt='ISO27001' />
          </div>
        </div>
      </section>
      <section className='footer-sec-4'>
        <p className='copyright'>
          Copyright © 2023 Paper.id (PT Pakar Digital Global)
        </p>
        <div className='socials'>
          <a href='#'>
            <img src={Youtube} alt='youtube' />
          </a>
          <a href='#'>
            <img src={Facebook} alt='facebook' />
          </a>
          <a href='#'>
            <img src={LinkedIn} alt='linkedin' />
          </a>
          <a href='#'>
            <img src={Instagram} alt='instagram' />
          </a>
        </div>
        <div className='office-policy'>
          <a className='footer-subtitle'>Privacy Policy</a>
          <a className='footer-subtitle'>Terms & Condition</a>
          <a className='footer-subtitle'>Sitemap</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
