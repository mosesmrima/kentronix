import Image from "next/image";

const ServiceCard = ({ heading, pictureUrl, description }) => {
    return (
        <div className="bg-red-500 bg-opacity-20 backdrop-blur-lg p-4 rounded-lg overflow-hidden shadow-md sm:w-1/4 w-9/12 sm:min-h-[450px] flex flex-col justify-center items-center">
            <h4 className="text-lg font-medium mb-2 justify-self-start">{heading}</h4>
           <div className={"max-w-[200px] sm: max-w-[450px]"}>
               <Image src={pictureUrl} alt={heading}/>
           </div>
            <ul className={"font-2xl text-left"}>
                {
                    description.map((el, i)=> <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default ServiceCard
