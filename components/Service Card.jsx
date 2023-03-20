import Image from "next/image";

const ServiceCard = ({ heading, pictureUrl, description }) => {
    return (
        <div className="bg-red-500 bg-opacity-20 backdrop-blur-lg p-4 rounded-lg overflow-hidden shadow-md sm:w-1/4 w-9/12 flex flex-col justify-center items-center">
            <h3 className="text-lg font-medium mb-2">{heading}</h3>
           <div className={"max-w-[200px] sm: max-w-[450px]"}>
               <Image src={pictureUrl} alt={heading}/>
           </div>
            <ul>
                {
                    description.map((el, i)=> <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default ServiceCard
