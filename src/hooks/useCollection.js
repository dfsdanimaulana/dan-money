import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(()=> {
    let ref = db.collection(collection)
    
    const unsub = ref.onSnapshot((snapshot)=>{
      let results = []
      // get array of docs
      snapshot.docs.forEach((doc)=>{
        results.push({...doc.data(), id: doc.id })
      })
      
      // update state
      setDocuments(results)
      setError(null)
    })
  }, [collection])
}