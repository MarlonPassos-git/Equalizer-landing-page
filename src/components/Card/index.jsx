import { Button } from "../Button";
import './style.scss'
import iconAndroid from "../../assets/icon-android.svg";
import iconApple from "../../assets/icon-apple.svg";

export function Card () {
    return (
        <div className="card">
            <h2 className="card__title">Premium EQ</h2>
            <p className="card__paragraph">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
            <p className="card__period"><span className="card__value">$4</span>/ month</p>
            <Button className="v1" icon={iconApple} text="iOS Download" />
            <Button icon={iconAndroid} text="Android Download" />
        </div>
    )
}