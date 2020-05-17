import React, { Component } from 'react';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'

class App extends Component {
  constructor() {
    super();
    this.state = {
      mydata: [],
    };
  }

  ClickPost(e) {
    e.preventDefault();
    var url = 'http://localhost:3210/data';
    axios.post(url, {
      StudentName: this.inputStudentName.value,
      CourseDept: this.inputCourseDept.value,
      CourseNum: this.inputCourseNum.value
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.inputStudentName.value = '';
    this.inputCourseDept.value = '';
    this.inputCourseNum.value = '';
  };

  ClickGet(e) {
    e.preventDefault();
    var url = 'http://localhost:3210/data';
    axios.get(url)
      .then((retrievedData) => {
        console.log(retrievedData.data);
        this.setState({
          mydata: retrievedData.data,
        })
      })
  };

  render() {
    return (
      <div className="container">
        <Zoom>
          <center style={{ margin: '25px' }}>
            <Flip><h3>Welcome to My Course Search!</h3></Flip>
            <p>To add your data to the course database, enter your information in the boxes and click submit!</p>
            <p>To see what classes people are taking, click search, and you should see a table of everyone and their course!</p>

            <form>
              <div className="form-group" style={{ margin: '30px' }}>
                <input className="form-control" type="text" id="StudentName"
                  ref={inname => this.inputStudentName = inname}
                  placeholder="Input your name here!" />
              </div>

              <div className="form-group" style={{ margin: '30px' }}>
                <input className="form-control" type="text" id="CourseDept"
                  ref={indept => this.inputCourseDept = indept}
                  placeholder="Input the course department of the course you're taking here!" />
              </div>

              <div className="form-group" style={{ margin: '30px' }}>
                <input className="form-control" type="number" id="CourseNum"
                  ref={innum => this.inputCourseNum = innum}
                  placeholder="Input the course number of the course you're taking here!" />
              </div>

              <button className="btn btn-primary" style={{ width: '100px' }}
                onClick={this.ClickPost.bind(this)}>Submit</button>

              <button className="btn btn-primary" style={{ margin: '15px', width: '100px' }}
                onClick={this.ClickGet.bind(this)}>Search</button>
            </form>

            <table className="table" style={{ margin:'50px', width: '1000px'}}>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Department</th>
                  <th>Course Number</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.mydata.map((item, index) =>
                    <tr key={index}>
                      <td>{item.StudentName}</td>
                      <td>{item.CourseDept}</td>
                      <td>{item.CourseNum}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </center>
        </Zoom>
      </div>
    );
  }
}

export default App;