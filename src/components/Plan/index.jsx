import { Card } from '../Card';
import phone from './illustration-app.png';
import './style.scss';

export function Plan() {
    return (
        <section className="plan">
            <img className="phone" alt="" src={phone} alt="phone" />
            <Card />
        </section>
    )
}