
import React from 'react'

import BannerTitle from './BannerTitle'
import BannerText from './BannerText'
import BannerImg from './BannerImg'
import AppButton from '../AppButton'

function Banner(props) {
  return (
    <div className='row d-flex align-items-center'>
      <div className='col-12 col-md-6'>
        <BannerTitle
          title={props.title}
        />
        <BannerText
          text={props.text}
        />
        <AppButton
          text='Get started'
          size='lg'
          className='btn-warning'
        />
      </div>
      <div className='col-12 col-md-6 text-center'>
        <BannerImg
          img={props.img}
        />
      </div>
    </div>
  )
}

export default Banner
