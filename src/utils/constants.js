import React from "react";
import { GiShakingHands } from 'react-icons/gi'
import { CgMail } from 'react-icons/cg'
import { FaCarSide } from 'react-icons/fa'
import { FaRegAddressBook } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]


export const services = [
  {
    id: 1,
    icon: <CgMail />,
    title: 'motocar@gmail.com',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <FaCarSide />,
    title: 'Great Deal',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiShakingHands />,
    title: 'Customer satisfaction ',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]
export const aboutcontact = [
  {
    id: 1,
    icon: <FaRegAddressBook />,
    title: 'Address',
    text:
      'Green Street 22',
  },
  {
    id: 2,
    icon: <BiTimeFive />,
    title: 'work time',
    text:
      'Monday-Saturday: 08:00-18:00',
  },
  {
    id: 3,
    icon: <BsFillTelephoneFill />,
    title: 'Contact number',
    text:
      '+384 06657383929   +382 052 345 543',
  },
]






export const products_url = 'https://api-cars-auta.netlify.app/api/4-z-complete'

export const single_product_url = `https://api-cars-auta.netlify.app/api/4-z-complete?id=`


