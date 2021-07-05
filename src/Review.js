

const Review =({id,name,job,image,text}) => {


    return (
        <article>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <h4>{job}</h4>
            <div>
                <p>
                    {text}
                </p>
            </div>
        </article>
    )

}

export default Review;