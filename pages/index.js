import Link from 'next/link'
import Accordion from '../components/Accordion';
import { Dropdown } from "flowbite-react";
import Carrousel from '../components/Carrousel';
import {useState} from 'react'

export default function Home({accueil}) {

  return (

      <>

        <Carrousel />
        <Accordion />
      </>    

  )
}
