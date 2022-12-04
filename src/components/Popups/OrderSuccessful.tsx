import Image from "next/image";

export default function OrderSuccessful({setShowPopup}: any) {
  return (
    <div className="pop-up">
        <div className="pop-up-close" onClick={() => setShowPopup(false)}></div>
        <div className="pop-up-box">
            <Image src="/successful.png" alt="" layout="fill" />

            <div className="content">
                <h2>Order successfully complate!</h2>
                <p>We've received your order, thank you for choosing us.</p>
            </div>

            <button type='button' className="btn small-btn">Explore new offers</button>
        </div>
    </div>
  )
}
