import DeleteIcon from '@mui/icons-material/Delete';

type Task = {
    haveTask: boolean
}

export default function Task(props: Task) {
    if (props.haveTask) {
        return (
            <>
                <div className='col-sm-12 col-md-4'>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active" style={{ minHeight: '10rem' }}
                            aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1"></h5>
                                <small><DeleteIcon /></small>
                            </div>
                            <p className="mb-1 mt-1 d-flex "></p>
                        </a>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div className='col-sm-12 col-md-12'>
                <span>No momento não há tarefas a serem exibidas.</span>
            </div>
        );
    }
}