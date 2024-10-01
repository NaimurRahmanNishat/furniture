import materialsImg1 from "../../assets/materialsImg1.jpg";
import materialsImg2 from "../../assets/materialsImg2.jpg";
import materialsImg3 from "../../assets/materialsImg3.jpg";
import Button from "../../components/Button";

const Materials = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-primary mb-4">
          Materials
        </h3>
        <h2 className="capitalize text-4xl font-bold mb-4 lg:w-1/2">
          Very Serious Materials for Making Furniture
        </h2>
        <p className="text-secondary dark:text-white mb-5 lg:w-1/2">
          You don't have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <Button text="More Info" />
      </div>
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 items-center md:items-end">
        <div>
            <img src={materialsImg1} alt="" />
            <img src={materialsImg2} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1">
        <img src={materialsImg3} alt="" className="md:h-[541px] w-full"/>
        </div>
      </div>
    </section>
  );
};

export default Materials;
