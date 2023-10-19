type Task = {
    taskId: string,
    title: string,
    description: string,
    remove: JSX.Element
}

function Hi(){
    alert("Hi")
}

export default function Task(props: Task) {
    return (
        <>
            <div className='col-sm-12 col-md-4'>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active" style={{ minHeight: '10rem' }}
                        aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{props.title}</h5>
                            <small>{props.remove}</small>
                        </div>
                        <p className="mb-1 mt-1 d-flex ">{props.description}</p>
                    </a>
                </div>
            </div>
        </>
    );
}