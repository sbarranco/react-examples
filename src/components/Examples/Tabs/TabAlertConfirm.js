import React from 'react'
import AlertConfirm from "../../Commons/AlertConfirm";


export default function TabAlertConfirm () {

    const code =
`
const onClickConfirm = () => {
    IGMAlertConfirm({
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#aaa',
        position: 'center',
        title: '¿Estás seguro?',
        text: 'El registro seleccionado no se podrá volver a recuperar',
        type: 'success',
        confirmButtonText:'Si, eliminar',
        showCancelBtn : false,
        cancelButtonText: 'No',
        onConfirm: () => {
            console.log('confirm')
        },
        onCancel: () => {
            console.log('cancel')
        }
    })
}

return (
    <button 
        className="btn btn-primary" 
        type="button" 
        onClick={onClickConfirm}>Click me
    </button>
)
`

    const onClickConfirm = () => {
        AlertConfirm({
            backdrop: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#aaa',
            position: 'center',
            title: '¿Estás seguro?',
            text: 'El registro seleccionado no se podrá volver a recuperar',
            type: 'success',
            confirmButtonText:'Si, eliminar',
            showCancelBtn : false,
            cancelButtonText: 'No',
            onConfirm: () => {
                console.log('confirm')
            },
            onCancel: () => {
                console.log('cancel')
            }
        })
    }

    return (
        <>
            <button
                className="btn btn-primary"
                type="button"
                onClick={onClickConfirm}>Click me
            </button>
            <br/><br/>
            <figure>
                <pre>
                    <code>{code}</code>
                </pre>
            </figure>
        </>
    )
}