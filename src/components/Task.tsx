import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";

export default function Task() {
    {
        const [title, setTitle] = useState(localStorage.getItem(Object.keys(localStorage)[0]) || '');
        const [content, setContent] = useState(localStorage.getItem("Tarefa 1"));

        useEffect(() => {
            const dadosSalvos = localStorage.getItem('Tarefa 1');
            if (dadosSalvos) {
                setTitle(dadosSalvos);
            }
        }, []);
    }

    return (
        <>
            {Object.keys(localStorage).map((elem, index) =>
                <div className='col-sm-12 col-md-4'>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active" style={{ minHeight: '10rem' }}
                            aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{Object.keys(localStorage)[index]}</h5>
                                <button type='button' onClick={() => localStorage.removeItem(elem)}><DeleteIcon /></button>
                            </div>
                            <p className="mb-1 mt-1 d-flex ">{localStorage.getItem(elem)}</p>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}