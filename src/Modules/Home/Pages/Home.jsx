import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const {t} = useTranslation()
  return (
    <div className='border-2 border-red-500'>
      {t("greeting")}
    </div>
  )
}

export default Home