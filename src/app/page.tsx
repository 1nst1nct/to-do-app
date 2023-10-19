'use client'

import Task from '@/components/Task'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
  return (
    <div className='container'>
      <div className='row mt-2 mb-5 justify-content-end'>
        <div className='col-12 text-end'>
          <i data-feather="circle"></i>

          <Button dataBsTarget='#newTaskButton'/>
          <Modal modalId='newTaskButton'/>
        </div>
      </div>
      <div className='row row-gap-5'>
        <Task remove={<DeleteIcon />} title={'First task!'} description={'this is the first task!'} taskId={'1'} />
        <Task remove={<DeleteIcon />} title={'Second task!'} description={'this is the second task!'} taskId={'2'} />
      </div>
    </div>
  )
}
