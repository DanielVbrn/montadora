import React from 'react'
import styles from "./Section.module.css"
import ImageSlider from '../../../features/Slider/ImageSlider'
import fiat from "../../../assets/img/Fiat-Pulse-Impetus-2023.png"
import onix from "../../../assets/img/chevrolet-2021-onix-premier.png"
import renault from "../../../assets/img/renault_kwid_1.png"


const Section: React.FC = () => {
  const images = [fiat, onix, renault];
  return (
    <section className={styles.section}>
      <h3>Confira nossas novidades</h3>
      <ImageSlider images={images}/>
      <div className={`${styles.button_slide} ${styles.slide_down}`}>
        <a href="/cadastro_montadora">
          Cadastrar montadora

        </a>
      </div>
    </section>
  )
}

export default Section;