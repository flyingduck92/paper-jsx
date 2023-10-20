import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import StepImg1 from '../assets/tab-slider/Pendaftaran_1.png'
import StepImg2 from '../assets/tab-slider/Pendaftaran_2.png'
import StepImg3 from '../assets/tab-slider/Pendaftaran_3.png'
import StepImg4 from '../assets/tab-slider/Pendaftaran_4.png'
import './RegistrationDetails.css'

const DATA_STEPS = [
  {
    id: 0,
    label:
      'Isi data diri dan unggah dokumen legal Anda (SIUP, Akta Perusahaan, dll) pada halaman Pendaftaran.',
  },
  {
    id: 1,
    label:
      'Dapatkan persetujuan penawaran dari berbagai macam lembaga keuangan penyedia pembayaran.',
  },
  {
    id: 2,
    label: 'Tanda tangan dokumen secara digital.',
  },
  {
    id: 3,
    label:
      'Selesai! Anda dapat langsung melakukan transaksi dengan Paper Usaha.',
  },
]

const IMAGE_STEPS = [
  { id: 0, url: StepImg1 },
  { id: 1, url: StepImg2 },
  { id: 2, url: StepImg3 },
  { id: 3, url: StepImg4 },
]

function RegistrationDetails() {
  /* React Intersection Observer */
  const { ref: titleRef, inView: titleIntersecting } = useInView()
  const { ref: leftColRef, inView: leftColIntersecting } = useInView()

  const [currentStep, setCurrentStep] = useState(0)
  const [dataStep, setDataStep] = useState(DATA_STEPS)
  const [imageStep, setImageStep] = useState(IMAGE_STEPS)

  const handleStep = (id) => {
    setCurrentStep(id)
  }

  useEffect(() => {
    const lastStep = imageStep.length - 1
    if (currentStep < 0) {
      setCurrentStep(0)
    }
    if (currentStep > lastStep) {
      setCurrentStep(0)
    }
  }, [currentStep, imageStep.length])

  useEffect(() => {
    let movePosition = setInterval(() => {
      setCurrentStep(currentStep + 1)
    }, 3000)

    return () => {
      clearInterval(movePosition)
    }
  }, [currentStep])

  return (
    <section className='registration-details'>
      <div ref={titleRef}>
        <h1 className={`title-slide ${titleIntersecting ? 'slide-in' : ''}`}>
          Proses Pendaftaran SmartCart Pay Later
        </h1>
      </div>
      <div ref={leftColRef} className='registration-col'>
        <div
          className={`left-col-slide ${leftColIntersecting ? 'slide-in' : ''}`}
        >
          {dataStep.map((data) => {
            const { id, label } = data
            return (
              <div
                onClick={() => handleStep(id)}
                className={`registration-left-item ${
                  id === currentStep && 'active'
                }`}
                key={id}
              >
                <div className='left-item-id'>{id + 1}</div>
                <div>{label}</div>
              </div>
            )
          })}
        </div>
        <div className='registration-right-col'>
          {imageStep.map((image) => {
            const { id, url } = image
            const altStr = image.url.split('/').pop()

            const height = 573
            let position = height * id

            return (
              <article key={id} className={`step${currentStep} pos${position}`}>
                <img src={url} alt={altStr} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RegistrationDetails
