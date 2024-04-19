import React from 'react'
import * as yup from 'yup'
import { useFormik } from "formik";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      Occupation: '',
      FavourateCategory: ['', '', ''],
      file: '',
      Country: '',
      About: '',
    }
  })
  return (
    <div>

    </div>
  )
}

export default Registration
