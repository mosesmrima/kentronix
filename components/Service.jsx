export default function Service({title, services}) {
    return (
        <div className={"text-center"}>
            <h2 className={"capitalize mb-4"}>{title}</h2>
            <ul>
                {
                    services.map((el, i)=> <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
}