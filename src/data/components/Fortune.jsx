const Fortune = ( { changeFortune } ) => {

    return (
        <article className="Sheet">

            <p> {changeFortune.phrase} </p>

        </article>
    )
}

export default Fortune;