import React, { useState } from "react";

export default function Modal() {

    function titleAlert() {
        if (title === "") {
            return (
                <div className="alert alert-danger mt-2 text-center" id="titleAlert" role="alert">
                    O campo 'título' precisa ser preenchido!
                </div>
            );
        } else {
            document.getElementById("alertTitle")?.remove()
        }
    }

    function contentAlert() {
        if (content === "") {
            return (
                <div className="alert alert-danger mt-2 text-center" id="contentAlert" role="alert">
                    O campo 'descrição da tarefa' precisa ser preenchido!
                </div>
            );
        } else {
            document.getElementById("alertContent")?.remove()
        }
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isTitleBlank, setIsTitleBlank] = useState(false)
    const [isContentBlank, setIsContentBlank] = useState(false)

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };

    const handleContentChange = event => {
        setContent(event.target.value);
    };

    const handleOnClick = event => {
        if (title === "" || content === "") {
            setIsTitleBlank(true)
            setIsContentBlank(true)
        } else {
            setIsTitleBlank(false)
            setIsContentBlank(false)
            localStorage.setItem(title, content)
        }
    };

    return (
        <div className="modal fade" id="newTaskModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nova tarefa</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" id="modalBody">
                        <div className="input-group">
                            <input
                                autoComplete="false"
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

                        {isTitleBlank ? titleAlert() : ""}

                        <div className="form-floating mt-2">
                            <textarea
                                autoComplete="false"
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

                        {isContentBlank ? contentAlert() : ""}

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-success" onClick={handleOnClick} data-bs-dismiss={((content === "") || (title === "")) ? "" : "modal"} id="addTask">Adicionar tarefa</button>
                    </div>
                </div>
            </div>
        </div >
    );
}