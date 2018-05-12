import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CSVLink, CSVDownload} from 'react-csv';

class Historia extends Component {
    render()
    {
        const csvData =[
            ['Kruzok', 'Tyzden', 'Tema'],
            ['HI_1', '1.' , 'Git, praca s github'] ,
            ['HI_1', '2.' , 'pokracovanie gitu'] ,
            ['HI_1', '3.', 'reactjs, tvorba komponentov'],
            ['HI_1', '4.', 'fetch, filter, array'],
            ['HI_1', '5.', 'react-router, link'],
            ['HI_1', '6.', 'komponent Datum'],
            ['HI_1', '7.', 'štylovanie v css'],
            ['HI_1', '8.', 'tvorba tabs'],
            ['HI_1', '9.', 'stylovanie tabs'],
            ['HI_1', '10.', 'prihlasenie cez login'],
            ['HI_1', '11.', 'prepoj stranok'],
            ['HI_1', '12.', 'volna tema'],
            ['HI_1', '13.', 'opakovanie']
        ];
        return(
            <CSVLink data={csvData} >História_kurzu</CSVLink>
        )
    }
}
export default Historia;