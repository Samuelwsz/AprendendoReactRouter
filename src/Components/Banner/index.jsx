import styles from "./Banner.module.css"
import circuloColorido from "/assets/circulo_colorido.png"
import minhaFoto from "/assets/minha_foto.png"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>lorem</h1>
        <p className={styles.paragrafo}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          nobis quidem neque consequuntur voluptatibus magni accusantium
          asperiores debitis unde provident sequi perspiciatis corrupti, non
          dolorem optio natus quasi eius corporis.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="circuloColorido"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto de perfil"
        />
      </div>
    </div>
  )
}
