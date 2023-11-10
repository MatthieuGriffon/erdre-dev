import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import styles from './styles.module.css';

function Nav() {
    return (
      <> 
        <nav className='relative bg-white flex justify-evenly space-x-10 items-center px-4 py-8 text-black shadow-md'>
            <span className='ml-3 -mt-10 text-6xl font-bold'>Erdre&Dev</span>   
          {/* Liens de navigation */}
          <div className='flex items-center -mt-10 '>
            {/* Lien vers la page d'accueil avec le logo */}
            <Link href="/" className='flex items-center'>
                <Image
                  src={logo} // Chemin vers votre logo dans le dossier public
                  alt="Logo Erdre & Dev"
                  width={180} // La largeur que vous voulez pour votre logo
                  height={100} // La hauteur que vous voulez pour votre logo
                />
            </Link>
          </div>
          <div className='flex flex-row space-x-10 text-3xl'>
             {/* Container pour le logo */}
         
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/services" className={styles.navLink}>Expertise et Innovation</Link>
            <Link href="/about" className={styles.navLink}>Itin&eacute;raire d&rsquo;un Codeur</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link> 
          </div>
         
        </nav>
        <div className={styles.ocean}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
        </div>
        </>
      )
     
    }
export default Nav;