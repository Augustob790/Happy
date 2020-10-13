import React from 'react';
import mapMarke from '../images/marke.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orfanato-maps.css';
import { Map, TileLayer } from 'react-leaflet';


import 'leaflet/dist/leaflet.css';

function OrfanatoMaps() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarke} alt="Happy" />

                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Araguaína</strong>
                    <span>Tocantins</span>
                </footer>
            </aside>


            <Map
                center={[-7.1857811, -48.1896161]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>


            <Link to="" className="create-orfanato">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrfanatoMaps;