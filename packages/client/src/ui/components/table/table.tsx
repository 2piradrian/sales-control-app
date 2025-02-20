import style from "./style.module.css";

export interface Props {
  headers: string[];
  fields: string[];
  data: any[];
  onRowClick: (id: string) => void;
}

export default function Table({ headers, fields, data, onRowClick }: Props){

    return (
        <table className={style.table}>
            <thead>
                <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                <tr key={row.id} onClick={() => onRowClick(row.id)}>
                    {fields.map((header) => (
                        <td key={header}>{row[header]}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    );

}