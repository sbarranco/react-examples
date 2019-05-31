import React, {useEffect, useState} from 'react'
import Table from "../Commons/Table";


export default function TabTable() {

    const [dataBody, setDataBody] = useState([])
    const [dataHeader, setDataHeader] = useState([])
    const [pag, setPag] = useState(1)

    useEffect(() => {

        random()
        randomHeader()

    }, [])


    const onGet = (item, index) => {
        console.log('onSelected', item, index)
    }

    const onUpdate = (item, index) => {
        console.log('onUpdate', item, index)
    }

    const onDelete = (item, index) => {
        console.log('onDelete', item, index)
    }

    const onHistorial = (item, index) => {
        console.log('onHistorial', item, index)
    }

    const onExport = () => {
        console.log('onExport')
    }

    const onOrder = (item) => {
        console.log('order', item)
    }

    const onPagination = (pag) => {
        console.log(pag)
        setPag(pag)

        setTimeout(()=>{

            random()

        }, 1000)

    }

    const randomHeader = () => {
        setDataHeader([
            {key: 'col1', value: 'COL 1' + Math.floor(Math.random() * 10), className: 'text-center'},
            {key: 'col2', value: 'COL 2' + Math.floor(Math.random() * 10)},
            {key: 'col3', value: 'COL 3' + Math.floor(Math.random() * 10)},
            {key: 'col4', value: 'COL 4' + Math.floor(Math.random() * 10)}
        ])

    }

    const random = () => {
        setDataBody(
            [
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
                {
                    col1: Math.floor(Math.random() * 10),
                    col2: Math.floor(Math.random() * 10),
                    col3: Math.floor(Math.random() * 10),
                    col4: Math.floor(Math.random() * 10)
                },
            ]
        )
    }


    return (
        <>
            <button className="btn btn-sm btn-primary mb-3 mr-1" onClick={random}>Random Body</button>
            <button className="btn btn-sm btn-primary mb-3" onClick={randomHeader}>Random Header</button>
            <div className="row justify-content-md-center">
                <div className="col-12">
                    <Table
                        loading={false}
                        className={"mytable"}
                        header={dataHeader}
                        visible={{
                            show: true,
                            cols: ['col1', 'col2', 'col3', 'col4'],
                            onVisible: (data)=> {
                                /* array visible keys columns */
                                console.log('onVisible', data)
                            }
                        }}
                        body={dataBody}
                        pagination={
                            {
                                total: 100,
                                itemsPag: 5,
                                pag: pag,
                                onPagination: onPagination
                            }
                        }
                        options={
                            {
                                actions: ['get', 'update', 'delete', 'historial', 'export', 'create'],
                                textActions: {
                                    get: 'Ver',
                                    update: 'Modificar',
                                    delete: 'Suprimir',
                                    historial: 'Cambios históricos',
                                    create: 'Nuevo',
                                    export: 'Descargar CSV',
                                },
                                callbacks: {
                                    onGet: onGet,
                                    onUpdate: onUpdate,
                                    onDelete: onDelete,
                                    onHistorial: onHistorial,
                                    onExport: onExport,
                                    onOrder: onOrder,
                                    onCreate: ()=> {
                                        console.log('create')
                                    }
                                },
                                leyendas: [
                                    {text: 'No operativo', color: '#F45B67' }
                                ],
                                onColorRow: (item) => {
                                    /* Por si necesitamos colorear una row */
                                    if (item.col1 === 5) return '#F45B67'
                                    return ''
                                },
                                onFormatCell: (item, key) => {
                                    /* Por si queremos formatear el valor de una celda (ej: 'S' -> 'Si' */
                                    if (key === 'col1') return '*' + item[key]
                                    return item[key]
                                },
                                onFormatCellAction: (item, index, action) => {
                                    return true
                                }
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}