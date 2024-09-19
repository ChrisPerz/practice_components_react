import './App.css'

export const MyFirstComponent = () => {
    const name = "Ines"
    const myGitHub = "/github_ines"
    const student = {
        name: "Diana ",
        last_name: "Arévalo",
        mobile: "300000000",
        linkedin_profile: "https://www.linkedin.com/in/diana-arevalo-168b0925b"
      };
  return (
    <>
        <h1>Fundamentos de React</h1>
        <div>MyFirstComponent</div>
        <div className='style-react'>
            <h1>Temas de React</h1>
            <ul>
                <li>Componentes</li>
                <li>Eventos</li>
                <li>Estados Hooks</li>
                <li>Props</li>
            </ul>
        </div>
        <div className='style-teacherData'>
            <h1>Datos del docente</h1>
            <p>Nombre: <strong>{name}</strong></p>
            <p>Github: {myGitHub}</p>
        </div>
        <div className='style-myData'>
            <h1>Datos del estudiante</h1>
            <p>Nombre: <strong>{student.name}</strong></p>
            <p>Apellido: <strong>{student.last_name}</strong></p>
            <p>LinkedIn: <a href={student.linkedin_profile} target='_blanck'>{student.linkedin_profile}</a></p>
        </div>
    </>
  )
}
