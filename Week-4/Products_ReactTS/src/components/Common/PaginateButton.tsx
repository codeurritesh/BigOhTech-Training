import React from 'react'
import { paginationManagement } from '../../services/PaginationManagement'
const Paginate_Button = (prop:any) => {
  return (
    <button className={paginationManagement.getBasePage()===prop.id?"page-number":"page-number active-page"} value={prop.id}>
    {prop.id}
  </button>
  )
}

export default Paginate_Button;