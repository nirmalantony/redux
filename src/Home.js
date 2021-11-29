// import { func } from "prop-types";
import React from "react";
import {connect}  from 'react-redux';
import * as CourseActions from './redux/actions/courseActions';
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            course:{
                title : ""
            }
        }
    }

    getCourseTitle = (event)=>
    {
       const course = {...this.state.course,title:event.target.value};
        this.setState({
            course
        });
    }

    saveTitle= ()=>
    {
       this.props.dispatch(CourseActions.createCourse(this.state.course));
    }

    render()
    {
        return(
            <div>
                <span>Course name</span>
                <input type="text" defaultValue="" onChange={this.getCourseTitle}/>
                <input type="submit" value="Submit" onClick={this.saveTitle}/>
                {
                    this.props.courses.map( course=>
                        {
                            debugger;
                          return  <div key={course.title}>{course.title}</div>
                        }

                    )
                }
            </div>
        )
    }

}

function mapStateToProps(state)
{
    return{
    courses: state.courses
    }
}

export default connect(mapStateToProps)(Home);