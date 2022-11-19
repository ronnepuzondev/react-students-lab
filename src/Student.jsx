import Score from "./Score";
import App from "./App";


function Student({student}) {
    console.log(student)
  return (
    <li>
      {student.name} <p>Bio: {student.bio}</p>
      <p>
        Scores:
        <ul>
          {student.scores.map(student => (
            <Score score={student.score} date={student.date} />
          ))}
        </ul>
      </p>
    </li>
  );
}

export default Student;
