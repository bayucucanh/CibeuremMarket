import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const useHome = () => {
  const [searchProduct, setSearchProduct] = useState('')
  return [
    searchProduct,
    setSearchProduct
  ]
}

export default useHome

const styles = StyleSheet.create({})