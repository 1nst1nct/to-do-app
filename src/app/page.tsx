'use client'

import Task from '@/components/Task'
import Button from '@/components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import Modal from '@/components/Modal'

function haveTasks(): boolean {
  if (localStorage.getItem("listOfTasks") === null) {
    return false
  } else {
    return true
  }
}

export default function Home() {
  return (
    <div className='container'>
      {localStorage.getItem("x")}
      <div className='row mt-2 mb-5 justify-content-end'>
        <div className='col-12 text-end'>
          <i data-feather="circle"></i>
          <Button />
          <Modal />
        </div>
      </div>
      <div className='row row-gap-5'>
        <Task haveTask={haveTasks()} />
      </div>
    </div>
  )
}