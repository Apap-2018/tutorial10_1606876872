import React from 'react';

export const DaftarStafRow = (props) => {
    return (
        <tbody>
            {props.listStaf.map(staf => {
                return (
                    <tr key={staf.id}>
                        <td>{staf.nama}</td>
                        

                    </tr>
                )
            })}
        </tbody>
    )
}