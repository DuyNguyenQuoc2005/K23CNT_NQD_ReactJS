import React, { Component } from 'react'
import NqdStudent from './NqdStudent';

class NqdStudentList extends Component {
  nqdHandleView = (nqdStudent) => {
    this.props.onNqdHandleView(nqdStudent);
  }

  render() {
    let { renderNqdStudents } = this.props;
    console.log("List:", renderNqdStudents);

    let nqdElementStudent = renderNqdStudents.map((nqdItem, index) => {
      return <NqdStudent key={index} renderNqdStudent={nqdItem} onNqdHandleView={this.nqdHandleView} />
    })
    return (
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
              {nqdElementStudent}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default NqdStudentList;