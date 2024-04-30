import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";
const AboutUs = () => {
  return (
    <div className="hero-content flex-col lg:flex-row">
      <div className=" relative lg:w-1/2">
        <img className="" src={person} />
        <img className=" absolute top-1/2 right-64" src={parts} />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-bold">
          We are qualified & of experience in this field
        </h2>
        <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
