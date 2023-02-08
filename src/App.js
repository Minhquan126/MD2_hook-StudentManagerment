import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react';
import Control from './components/Control';
import Form from './components/Form';
import ListStudent from './components/ListStudent';
let idUpdate
function App() {
  const [listStudent, setListStudent] = useState([
    {
      id: 1, studentId: "SV001", studentName: "Ha Tuan Anh", age: 30,
      sex: true, birdDate: "12/06/1997", birdPlace: "Ha Noi", address: "Ha Noi"
    },
    {
      id: 2, studentId: "SV002", studentName: "Nguyen Thi Ngan", age: 23,
      sex: false, birdDate: "10/03/1999", birdPlace: "Da Nang", address: "Da nang"
    }
  ])
  const [isToggle, setIsToggle] = useState(false)
  const [actionName,setactionName] = useState("")
  const [editStudent,setEditStudent] = useState([])
  const [sortDir,setSortDir] =useState("")
  const [sortBy,setSortBy] = useState("")
  const handleToggle = (toggle,actionName) => {
    setIsToggle(toggle)
    setactionName(actionName)
  }
  const handleSearch = (search) => {
let arr = []
if (search=== "") {
  arr = [...listStudent]
} else {
  arr = listStudent.filter(st => st.studentName.includes(search))
}

setListStudent(arr)
  }
 
const handleAdd = (dataStudennt) => {
  const newId = listStudent[listStudent.length -1].id + 1
 setListStudent([...listStudent,{
  id: newId, studentId: dataStudennt.studentId, studentName: dataStudennt.studentName, age: dataStudennt.age,
  sex: dataStudennt.sex, birdDate: dataStudennt.birdDate, birdPlace: dataStudennt.birdPlace,
  address: dataStudennt.address
 }])
}
  const handleSort = (sortDir,sortBy) => {
setSortBy(sortBy)
setSortDir(sortDir)
  }
if (sortDir == "age") {
  if (sortBy == "asc") {
    listStudent.sort((a,b) => a.age - b.age)
  } else if (sortBy == "desc") {
    listStudent.sort((a,b) => b.age - a.age)
  }
}
const handleEdit = (dataEditStudent,toggle,actionName,id) => {
setEditStudent(dataEditStudent)
setIsToggle(toggle)
setactionName(actionName)
idUpdate = id
}

const handleUpdate = (dataUpdateStudent,toggle) => {

  let arrUpdate = []
for (let i = 0; i < listStudent.length; i++) {
  if (listStudent[i].id === idUpdate) {
    arrUpdate.push(dataUpdateStudent)
  } else {
    arrUpdate.push(listStudent[i])
  }
}
setListStudent(arrUpdate)
setIsToggle(toggle)
}
const handleDelete = (id) => {
  let arrDel = []
for (let i = 0; i < listStudent.length; i++) {
  if (listStudent[i].id === id) {
    arrDel = listStudent.splice(id,1)
  }  
}
setListStudent(arrDel)
}
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control handleToggle={handleToggle} searchStudent = {handleSearch} sort = {handleSort}/>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent listStudent={listStudent} handleEdit={handleEdit} deleteStudents={handleDelete}></ListStudent>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {(isToggle) ? <Form handleAdd={handleAdd} listStudent={listStudent}
         editStudent={editStudent} actionName={actionName} updateStudent={handleUpdate}/> : ""}

        {/* END FORM SINH VIÊN */}
      </div>

    </div>
  );
}

export default App;
