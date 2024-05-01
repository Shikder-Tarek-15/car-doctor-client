import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 w-full object-cover" src={service.img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{service.title}</h2>

        <div className="flex justify-between items-center">
          <p className="text-red-500">
            <span className="font-bold">Price: </span>
            {service.price}
          </p>
          <button className="text-red-500">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
