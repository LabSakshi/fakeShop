import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'content/fetchProducts',
    async (url) => {
        const response = await fetch(url)
        const data = await response.json()
      return data
    }
  )

