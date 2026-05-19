import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [albumName, setAlbumName] = useState("");

  // Photography Gallery Data

  useEffect(() => {

    const galleryData = [
      {
        id: 1,
        title: "Wedding Shoot",
      },

      {
        id: 2,
        title: "Nature Collection",
      },

      {
        id: 3,
        title: "Portrait Session",
      },
    ];

    setProjects(galleryData);

  }, []);

  // Add Album

  const addAlbum = () => {

    if (albumName.trim() === "") return;

    const newAlbum = {
      id: Date.now(),
      title: albumName,
    };

    setProjects([...projects, newAlbum]);
    setAlbumName("");

  };

  // Delete Album

  const deleteAlbum = (id) => {

    setProjects(
      projects.filter((project) => project.id !== id)
    );

  };

  return (
    <div className="page">

      <h1>Photography Gallery</h1>

      <input
        type="text"
        placeholder="Enter your album name"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
      />

      <button onClick={addAlbum}>
        Add Album
      </button>

      <div className="grid">

        {projects.map((project) => (

          <div key={project.id}>

            <ProjectCard
              name={project.title}
              tech="Photography Collection"
            />

            <button
              onClick={() => deleteAlbum(project.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Projects;