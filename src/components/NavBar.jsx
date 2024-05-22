import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link href="/">Inicio</Link>
        <Link href="sobre-mi">Sobre mi</Link>
        <Link href="habilidades">Habilidades</Link>
        <Link href="proyectos">Proyectos</Link>
        <Link href="contacto">Contacto</Link>
      </ul>
    </div>
  )
}
