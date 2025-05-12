import styles from './Card.module.css';
import Image from 'next/image';


export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/images/user_img.png" 
          alt="User Profil Görseli"
          width={225}
          height={225}
          className={styles.ProfileImage}
          priority/>
        <h1>Yasin Emre Erce</h1>
        <p>Programcı / Web Geliştirici</p>
        <div className={styles.socialButtons}>
          <div>
            <a href="https://www.instagram.com/emrecodes_1/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/instagram.png" 
                alt="Instagram Icon"
                width={30}
                height={30}
                className={styles.LinkIcon}
                priority/>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/yasin-emre-erce-540b26311/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/linkedin.png" 
                alt="Linkedin Icon"
                width={30}
                height={30}
                className={styles.LinkIcon}
                priority/>
            </a>
          </div>
          <div>
            <a href="https://github.com/yasinemreerce" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/github.png" 
                alt="Github Icon"
                width={30}
                height={30}
                className={styles.LinkIcon}
                priority/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
