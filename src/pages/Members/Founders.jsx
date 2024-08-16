import { Link } from 'react-router-dom';
import { founders } from '../../data/data';

import './Founders.css';

export default function Founders() {
    return (
        <div className="founders">
            {founders.map((founder) => (
                <Link
                    to={!founder.not && '/founders/' + founder.id}
                    key={founder.id}
                    style={founder.not && { cursor: 'not-allowed' }}
                >
                    <div className="founders-block">
                        <div className="founders-image">
                            <img src={founder.mainPhoto} alt="Photo" />
                        </div>
                        <div className="founders-content">
                            <h2 className="founders-title">{founder.title}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
