function Home() {
  return (
    <div className="page">

      {/* Hero Section */}

      <div className="hero">
        <h1>Capture Every Beautiful Moment</h1>

        <p>
          Professional photography services for weddings, portraits,
          fashion, travel, and unforgettable life moments.
        </p>

        <button>View Gallery</button>
      </div>

      {/* Photography Services */}

      <div className="home-content">

        <div className="card">
          <h2>Wedding Photography</h2>

          <p>
            We capture timeless wedding memories with cinematic
            photography and creative storytelling.
          </p>
        </div>

        <div className="card">
          <h2>Portrait Sessions</h2>

          <p>
            Professional indoor and outdoor portrait shoots with
            modern editing styles.
          </p>
        </div>

        <div className="card">
          <h2>Nature Photography</h2>

          <p>
            Stunning landscape and nature photography that brings
            every scene to life.
          </p>
        </div>

        <div className="card">
          <h2>Event Coverage</h2>

          <p>
            Complete photography coverage for birthdays,
            celebrations, and corporate events.
          </p>
        </div>

        <div className="card">
          <h2>Fashion Shoots</h2>

          <p>
            Creative fashion photography with professional lighting
            and stylish compositions.
          </p>
        </div>

        <div className="card">
          <h2>Photo Editing</h2>

          <p>
            High-quality photo retouching and cinematic color grading
            for every project.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;