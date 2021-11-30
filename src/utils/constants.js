import React from "react";
import { GiShakingHands } from 'react-icons/gi'
import {CgMail} from 'react-icons/cg'
import {FaCarSide} from 'react-icons/fa'
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
    icon: <CgMail/>,
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
    icon: <GiShakingHands/>,
    title: 'Customer satisfaction ',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://serv-react-api.netlify.app/api/3-z-complete'

export const single_product_url = `https://serv-react-api.netlify.app/api/3-z-complete?id=`

