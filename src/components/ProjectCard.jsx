function ProjectCard({ name, tech }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{tech}</p>
    </div>
  );
}

export default ProjectCard;