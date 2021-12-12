import { useReducer, useEffect, useState } from 'react'
import { db } from '../firebase/config'

let initialValue = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return { ...state }

    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialValue)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = db.collection(collection)

  // add document
  const addDocument = (doc) => {}

  // delete document
  const deleteDocument = (id) => {}

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { response, addDocument, deleteDocument }
}
