type Button = {
    dataBsTarget: string
}

export default function Button(props: Button) {
    return (
        <>
            <button type="button" data-bs-toggle="modal" data-bs-target={props.dataBsTarget} className="btn btn-primary">New Task</button>
        </>
    );
}