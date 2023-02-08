import React from 'react'
import { useState, useContext } from 'react';
export default function ListStudent(props) {
 let {listStudent} = props
 
  const handleEdit = (idEdit) => {
    listStudent.forEach((current) => {
      if (current.id === idEdit) {
        props.handleEdit(current,true,"UPDATE",idEdit)
      }
    })
  }
 const handleDelete = (idDel) => {
  props.deleteStudents(idDel)
 }
  return (
    <div>
        <div className="card-body">
              <h3 className="card-title">Danh sách sinh viên</h3>
              <div className="table-responsive pt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã sinh viên</th>
                      <th>Tên sinh viên</th>
                      <th>Tuổi</th>
                      <th>Giới tính</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listStudent.map((current, index) =>
                   
                      <tr key={index}>
                        <td>{current.id}</td>
                        <td>{current.studentId}</td>
                        <td>{current.studentName}</td>
                        <td>{current.age}</td>
                        <td>{(current.sex) ? "nam" : "nu"}</td>
                        <td>
                          <div className="template-demo">
                            <button  type="button" className="btn btn-danger btn-icon-text">
                              Xem
                            </button>
                            <button id={current.id} onClick={() => handleEdit(current.id)} type="button" className="btn btn-warning btn-icon-text">
                              Sửa
                            </button>
                            <button onClick={() => handleDelete(current.id)} type="button" className="btn btn-success btn-icon-text">
                              Xóa
                            </button>
                          </div>
                        </td>


                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  )
}
