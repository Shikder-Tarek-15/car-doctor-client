import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5 mb-12">
        <h2 className="text-orange-600 text-xl md:text-2xl font-bold">
          Service
        </h2>
        <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold">
          Our Service Area
        </h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br />
          or randomised words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
