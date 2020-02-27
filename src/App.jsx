import React from 'react'

import Banner from './components/Banner'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Banner
          title='CREATE ON YOUR OWN TERMS'
          text='Start a membership business to develop a direct relationship with your biggest fans and generate predictable, recurring revenue from your creative work.'
          img='https://picsum.photos/200/300'
        />
      </div>
    </div>
  )
}

export default App
