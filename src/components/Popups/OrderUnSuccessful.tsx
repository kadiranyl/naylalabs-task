import Image from "next/image";
import Radium from 'radium';
import { animations } from "lib/Animations";

export default function OrderUnSuccessful({setShowPopup}: any) {
  return (
    <Radium.StyleRoot className="pop-up">
        <div className="pop-up-close" onClick={() => setShowPopup(false)}></div>
        <div className="pop-up-box" style={animations.fadeInDown}>
            <Image src="/unsuccessful.png" alt="Unsuccessful" layout="fill" className="small" />

            <div className="content">
                <h2>Something went wrong!</h2>
                <p>We&apos;ve tried to get your order but something went wrong. Please try again.</p>
            </div>

            <button type='button' className="btn small-btn" onClick={() => setShowPopup(false)}>Try again</button>
        </div>
    </Radium.StyleRoot>
  )
}
