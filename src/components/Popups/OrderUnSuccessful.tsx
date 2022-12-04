import Image from "next/image";

export default function OrderUnSuccessful({setShowPopup}: any) {
  return (
    <div className="pop-up">
        <div className="pop-up-close" onClick={() => setShowPopup(false)}></div>
        <div className="pop-up-box">
            <Image src="/unsuccessful.png" alt="" layout="fill" className="small" />

            <div className="content">
                <h2>Something went wrong!</h2>
                <p>We&apos;ve tried to get your order but something went wrong. Please try again.</p>
            </div>

            <button type='button' className="btn small-btn" onClick={() => setShowPopup(false)}>Try again</button>
        </div>
    </div>
  )
}
