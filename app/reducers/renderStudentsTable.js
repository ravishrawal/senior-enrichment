export default function renderStudentsTable(students, handleDeleteClick, handleStudentClick){
  return (
    <table className="ui single line table" style={{ textAlign:"center" }}>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Campus</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        students.map((student, index) => {
          return (
            <tr key={student.id}>
                <td>{index+1}</td>
                <td
                  value= {student.id}
                  className='selectable'
                  onClick={handleStudentClick}
                  >
                    {student.name}
                </td>
                  <td>{student.campus.name}</td>
                <td
                  onClick={handleDeleteClick}
                  className='selectable negative'
                  name = 'deletebutton'
                  value = {student.id}
                >Delete</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}
