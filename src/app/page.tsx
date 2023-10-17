'use client'

import Task from '@/components/Task'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

export default function Home() {
  return (
    <div className='container'>
      <div className='row row-gap-5'>
        <Task title={'First task!'} description={'this is the first task!'} taskID={'1'} />
        <Task title={'Second task!'} description={'this is the second task!'} taskID={'2'} />
      </div>
    </div>
  )
}
