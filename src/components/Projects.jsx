const Projects = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap"></div>
            ))}
        </div>
    </div>
  )
}

export default Projects
