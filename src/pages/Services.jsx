import ServiceCard from "../components/ServiceCard";

function Services() {

  const services = [
    {
      title: "Wedding Photography",
      description: "Capturing beautiful wedding moments with cinematic photography.",
    },

    {
      title: "Portrait Photography",
      description: "Professional indoor and outdoor portrait photo sessions.",
    },

    {
      title: "Event Photography",
      description: "Photography coverage for birthdays, parties, and corporate events.",
    },

    {
      title: "Fashion Photography",
      description: "Creative fashion shoots with modern editing and styling.",
    },

    {
      title: "Nature Photography",
      description: "High-quality landscape and outdoor photography services.",
    },

    {
      title: "Photo Editing",
      description: "Professional photo retouching and cinematic color grading.",
    },
  ];

  return (
    <div className="page">

      <h1>Photography Services</h1>

      <div className="grid">

        {services.map((service, index) => (

          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />

        ))}

      </div>

    </div>
  );
}

export default Services;