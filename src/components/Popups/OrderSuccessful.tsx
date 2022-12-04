import { animations } from "lib/Animations";
import Image from "next/image";
import Radium from 'radium';

export default function OrderSuccessful({setShowPopup}: any) {
  return (
    <Radium.StyleRoot className="pop-up">
        <div className="pop-up-close" onClick={() => setShowPopup(false)}></div>
        <div className="pop-up-box" style={animations.fadeInDown}>
            <Image src="/successful.png" alt="Successful" layout="fill" />

            <div className="content">
                <h2>Order successfully complate!</h2>
                <p>We&apos;ve received your order, thank you for choosing us.</p>
            </div>

            <button type='button' className="btn small-btn" onClick={() => setShowPopup(false)}>Explore new offers</button>
        </div>
    </Radium.StyleRoot>
  )
}
