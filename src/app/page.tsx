'use client'

import React, { useEffect } from "react";
import Task from '@/components/Task'
import Button from '@/components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import Modal from '@/components/Modal'

export default function Home() {
  return (
    <div className='container'>
      <div className='row mt-2 mb-5 justify-content-end'>
        <div className='col-12 text-end'>
          <i data-feather="circle"></i>
          <Button />
          <Modal />
        </div>
      </div>
      <div className='row row-gap-5'>
        <Task />
      </div>
    </div>
  )
}