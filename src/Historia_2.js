import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CSVLink, CSVDownload} from 'react-csv';

class Historia extends Component {
    render()
    {
        const csvData =[
            ['Kruzok', 'Tyzden', 'Tema'] ,
            ['HI_2', '1.' , 'Git, praca s github'] ,
            ['HI_2', '2.' , 'pokracovanie gitu'] ,
            ['HI_2', '3.', 'reactjs, tvorba komponentov'],
            ['HI_2', '4.', 'fetch, filter, array'],
            ['HI_2', '5.', 'react-router, link'],
            ['HI_2', '6.', 'komponent Datum'],
            ['HI_2', '7.', 'štylovanie v css'],
            ['HI_2', '8.', 'tvorba tabs'],
            ['HI_2', '9.', 'stylovanie tabs'],
            ['HI_2', '10.', 'prihlasenie cez login'],
            ['HI_2', '11.', 'prepoj stranok'],
            ['HI_2', '12.', 'cvicenie sa nekonalo'],
            ['HI_2', '13.', 'cvicenie sa nekonalo']
        ];
        return(
            <CSVLink data={csvData} >História_kurzu</CSVLink>
        )
    }
}
export default Historia;