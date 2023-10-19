type Modal = {
    modalId: string
}

export default function Modal(props: Modal) {
    return (
        <div className="modal fade" id={props.modalId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nova tarefa</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Título" aria-label="title" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="form-floating mt-2">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                            <label htmlFor="floatingTextarea2">Descrição da tarefa</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-success">Adicionar tarefa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}