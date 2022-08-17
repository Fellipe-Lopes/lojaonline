import aviso from './aviso.module.css';

type Props={
    title?: string;
}

export const Aviso = ({title}: Props) => {
    return(
        <div className={aviso.headerUp}>
            <h2 className={aviso.texto}>{title}</h2>
        </div>
    )
}