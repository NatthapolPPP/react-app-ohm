import { useParams } from "@remix-run/react";
import { foodsList } from "./Mydata";

export default function GetCourse () {
    const MyParams = useParams()

    console.log("Course id:",MyParams.courseId)
    console.log("Studen ID:",MyParams.studentId)

    const course = foodsList.filter (
        item => item.id === Number(MyParams.courseId)

    );

    if (course.length !== 0)
      console.log(course);
  else
      console.log('Wrong Course, please try again!');

  return (
      <div className="bg-purple-100 p-4">
          <h1 className="text-purple-800">ข้อมูลอาหาร</h1>
          <hr />
          {course.length !== 0 ? (
              <table className="border-collapse border border-purple-300 w-full mt-4">
                  <thead>
                      <tr>
                          <th className="border border-purple-300 p-2 text-purple-600">Field</th>
                          <th className="border border-purple-300 p-2 text-purple-600">Details</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="border border-purple-300 p-2">Name</td>
                          <td className="border border-purple-300 p-2">{course[0].name}</td>
                      </tr>
                      <tr>
                          <td className="border border-purple-300 p-2">Alt</td>
                          <td className="border border-purple-300 p-2">{course[0].alt}</td>
                      </tr>
                      <tr>
                          <td className="border border-purple-300 p-2">Description</td>
                          <td className="border border-purple-300 p-2">{course[0].description}</td>
                      </tr>
                      <tr>
                          <td className="border border-purple-300 p-2">Image</td>
                          <td className="border border-purple-300 p-2">
                              <img className="w-full" src={course[0].url} alt={course[0].alt} />
                          </td>
                      </tr>
                  </tbody>
              </table>
          ) : (
              <p className="text-red-600">Wrong Course, please try again!</p>
          )}
      </div>
  );
  }