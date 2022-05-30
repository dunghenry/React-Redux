import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from '../../store/reducers/catSlice';
const Cats = () => {
    const cats = useSelector(state => state.cats.cats);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getCatsFetch())
    }, [])
    console.log(cats)
  return (
    <div>Cats</div>
  )
}

export default Cats