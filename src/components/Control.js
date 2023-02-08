import React from 'react'
import { useState, useContext } from 'react'
export default function Control(props) {

const [searchStudent,setSearchStudent] = useState([])
const sendToggle = () => {
  props.handleToggle(true,"ADD")
}
const handleChange = (e) => {
  setSearchStudent(e)
}
const handleSearch = (e) => {
props.searchStudent(searchStudent)
}
const handleSort = (e) => {
  let sortData = e.target.value
  let arrSort = sortData.split('-')
  let sortDir = arrSort[0]
  let sortBy = arrSort[1]
props.sort(sortDir,sortBy)
}

  return (
    
    <div className="card-header">
    <div className="row">
      <div className="col-3">
        <button onClick={sendToggle} type="button" className="btn btn-primary btn-icon-text">
          Thêm mới sinh viên
        </button>
      </div>
      <div className="col-6">
        <form className="search-form" action="#">
          <i className="icon-search" />
          <input
            type="search"
            className="form-control"
            placeholder="Search Here"
            title="Search here"
            onChange={(e) => handleChange(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-primary btn-icon-text">
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="col-3 d-flex align-items-center">
        <select onChange={handleSort} className="form-control">
  
          <option value="">Sắp xếp</option>
          <option value="age-asc">tuổi tăng dần</option>
          <option value="age-desc">tuổi giảm dần</option>
          
        </select>
      </div>
    </div>
  </div>)
}
