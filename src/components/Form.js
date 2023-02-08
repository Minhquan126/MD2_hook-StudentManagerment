import React from 'react'
import { useState, useEffect } from 'react'
export default function Form(props) {
  let { listStudent } = props
  let { editStudent } = props
  let { actionName } = props

  useEffect(() => {
    if (editStudent.length !== 0) {
      setMsv(editStudent.studentId)
      setName(editStudent.studentName)
      setAge(editStudent.age)
      setSex(editStudent.sex)
      setBirdDate(editStudent.birdDate)
      setBirdPlace(editStudent.birdPlace)
      setAddress(editStudent.address)
    }
  },[editStudent])
  let check = false

  const [msv, setMsv] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [sex, setSex] = useState(true)
  const [birdDate, setBirdDate] = useState()
  const [birdPlace, setBirdPlace] = useState("")
  const [address, setAddress] = useState("")
  const handleChangeName = (e) => {
    setName(e)
  }
  const handleChangeId = (e) => {
    setMsv(e)
  }
  const handleChangeAge = (e) => {
    setAge(e)
  }
  const handleChangeSex = (e) => {
    setSex(e)
  }
  const handleChangeBirdDate = (e) => {
    setBirdDate(e)
  }
  const handleChangeBirdPlace = (e) => {
    setBirdPlace(e)
  }
  const handleChangeAddress = (e) => {
    setAddress(e)
  }
  const handleAddStudent = (e) => {
    e.preventDefault()
    let newStudent = {
      studentId: msv, studentName: name, age: age, sex: sex, birdDate: birdDate, birdPlace: birdPlace, address: address
    }
    props.handleAdd(newStudent)
  }
  const handleUpdate = (e) => {
  
    let updateStudents = {
      studentId: msv, studentName: name, age: age, sex: sex, birdDate: birdDate, birdPlace: birdPlace, address: address
    }
    props.updateStudent(updateStudents,false)
  }
  let elementButton = ""
  if (actionName === "ADD") {
    elementButton = <button onClick={handleAddStudent} type="submit" className="btn btn-primary me-2">
      Add
    </button>
  } else if (actionName === "UPDATE") {
    elementButton = <button onClick={handleUpdate} type="submit" className="btn btn-primary me-2">
      Update
    </button>
  }
  return (

    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input value={msv} onChange={(e) => handleChangeId(e.target.value)} type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input value={name} onChange={(e) => handleChangeName(e.target.value)} type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input value={age} onChange={(e) => handleChangeAge(e.target.value)} type="number" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select value={sex} onChange={(e) => handleChangeSex(e.target.value)} className="form-control">
                  <option value="nam">Nam</option>
                  <option value="nu">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type='date' value={birdDate} onChange={(e) => handleChangeBirdDate(e.target.value)} className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select value={birdPlace} onChange={(e) => handleChangeBirdPlace(e.target.value)} className="form-control">
                  <option value="HN">Hà Nội</option>
                  <option value="HCM">TP. Hồ Chí Minh</option>
                  <option value="DN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea value={address} onChange={(e) => handleChangeAddress(e.target.value)} className="form-control" />
              </div>
            </div>
            {elementButton}

          </form>
        </div>
      </div>
    </div>

  )
}
