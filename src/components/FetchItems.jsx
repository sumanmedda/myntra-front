import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemActions } from "../store/ItemSlice"
import { fetchStatusActions } from "../store/fetchStatus"

function FetchItems(){
  const fetchStatus = useSelector(state => state.fetchStatus)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (fetchStatus.fetchDone) return
    
    const controller = new AbortController()
    const signal = controller.signal

    dispatch(fetchStatusActions.markFetchingStarted())
    fetch('http://127.0.0.1:8000/api/items/',{signal})
    .then(res => res.json())
    .then(({items}) => {
      dispatch(fetchStatusActions.markFetchDone())
      dispatch(fetchStatusActions.markFetchingEnded())
      dispatch(itemActions.addInitialItems(items))
    })
    

    return () => {
      controller.abort()
    }

  }, [fetchStatus])

  return <>
  </>
}

export default FetchItems