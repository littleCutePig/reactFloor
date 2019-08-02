import axios from 'axios'

const initAction = value => ({
  type:'INIT',
  value
})
export const isOpenAction = value => ({
  type:'OPEN',
  value
})

export const getDataAction = () => dispatch =>
  axios.get('/api/list').then(({data})=>{
    dispatch(initAction(data))
  })