import React, { useState, createContext, ReactChild, ReactChildren } from 'react'

export type UploadedFileModel = {
  file: File
  id: number
  name: string
  readabledSize: string
  preview: string
  url: string
  time: any
  progress: any
}

export type UploadedThemeModel = {
  primaryColor: string
  logo: string
}

export type ContextType = {
  uploadedFiles: UploadedFileModel[]
  setUploadedFiles: (arr: UploadedFileModel[]) => void
  theme: any
  setTheme: (...args: any[]) => void
}

export const Context = createContext<ContextType | unknown>({})

interface AuxProps {
  children: ReactChild | ReactChildren
}

function ContextProvider({ children }: AuxProps) {
  const [uploadedFiles, _setUploadedFiles] = useState<UploadedFileModel[]>([])
  const [theme, setTheme] = useState<UploadedThemeModel>({
    primaryColor: '', 
    logo: ''
  })


  const setUploadedFiles = (arr: UploadedFileModel[]) => _setUploadedFiles(arr)

  return (
    <Context.Provider
      value={{
        uploadedFiles,
        setUploadedFiles,
        theme,
        setTheme
      }}
    >
      {children}
    </Context.Provider>
  )
}
export default ContextProvider
