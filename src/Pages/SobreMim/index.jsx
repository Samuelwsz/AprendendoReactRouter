import styles from "./SobreMim.module.css"
import PostModelo from "@/Components/PostModelo"
import fotoCapa from "/assets/sobre_mim_capa.png"
import fotoSobreMim from "/assets/minha_foto.png"

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>lorem</h3>
      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto sobre mim"
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
        voluptas aliquid debitis voluptate! Voluptatum vitae nesciunt veritatis
        doloribus unde tenetur sint magni cum molestiae omnis. Accusamus sed
        enim aut?
      </p>
    </PostModelo>
  )
}
