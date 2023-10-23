import React, { useState } from "react";

export default function Modal() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };

    const handleContentChange = event => {
        setContent(event.target.value);
    };

    const handleOnClick = event => {
        localStorage.setItem(title, content)
    }

    return (
        <div className="modal fade" id="newTaskModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nova tarefa</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Título"
                                aria-label="title"
                                aria-describedby="addon-wrapping"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className="form-floating mt-2">
                            <textarea
                                className="form-control"
                                name="content"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                value={content}
                                onChange={handleContentChange}
                            >
                            </textarea>
                            <label htmlFor="floatingTextarea2">Descrição da tarefa</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss='modal' onClick={handleOnClick}>Adicionar tarefa</button>
                    </div>
                </div>
            </div>
        </div >
    );
}