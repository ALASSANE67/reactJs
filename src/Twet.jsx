export function Twet({name,content,like}){

            <h3>{name}</h3>
            const onclick=() => {
                console.log('like',name)

    }

    return (
        <div className='twet'>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() =>onclick() }> {like} e</button>
        </div>
    );
}
