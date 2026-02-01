const Footer = () => {
  return (
    <>
      <footer className="bg-black xs:rounded-md shadow-md shadow-black border-2 border-black grid p-1 xs:m-1 sm:m-2 lg:m-1 xl:m-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
        <div className="links border-r-blue-400 flex-wrap xs:border-r-0 lg:flex justify-evenly lg:border-r-2 p-2">
          <div className="about m-1">
            <p className="uppercase">About</p>
            <ul>
              <li className="hover:underline">About Us</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Flipkart Stories</li>
              <li className="hover:underline">Press</li>
              <li className="hover:underline">Corporate Information</li>
            </ul>
          </div>
          <div className="group-companies  m-1 ">
            <p className="uppercase">Group Companies</p>
            <ul>
              <li className="hover:underline">Myntra</li>
              <li className="hover:underline">Cleartrip</li>
              <li className="hover:underline">Shopsy</li>
            </ul>
          </div>
          <div className="help  m-1">
            <p className="uppercase">Help</p>
            <ul>
              <li className="hover:underline">Payments</li>
              <li className="hover:underline">Shipping</li>
              <li className="hover:underline">Cancellation & Returns</li>
              <li className="hover:underline">FAQ</li>
            </ul>
          </div>
          <div className="consumer-policy  m-1">
            <p className="uppercase">Consumer Policy</p>
            <ul>
              <li className="hover:underline">Cancellation & Returns</li>
              <li className="hover:underline">Terms of Use</li>
              <li className="hover:underline">Security</li>
              <li className="hover:underline">Privacy</li>
              <li className="hover:underline">Sitemap</li>
              <li className="hover:underline">Grievance Redressal</li>
              <li className="hover:underline">EPR Complaince</li>
            </ul>
          </div>
        </div>
        <div className="addressandcontacts p-2 lg:flex justify-evenly">
          <div className="mailus  m-1">
            <p className="">Mail Us</p>
            <p>Flipkart Internet Private Limited,</p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
            <div className="social m-1">
              <p>Social</p>
              <div className="social-icons flex">
                <i class="ri-facebook-circle-line cursor-pointer"></i>
                <i class="ri-twitter-x-line  px-2 cursor-pointer"></i>
                <i class="ri-youtube-line  px-2 cursor-pointer"></i>
                <i class="ri-instagram-line  px-2 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="registered-office  m-1">
            <p className="">Registered Office</p>
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India </p>
            <p> CIN : U51109KA2012PTC066107 </p>
            <p>
              {" "}
              Telephone: <a href="">044-45614700</a>|<a href="">044-67415800</a>
            </p>
          </div>
        </div>
        <div className="features flex xs:justify-center p-2 xs:col-span-full">
          <div className="feature-1 flex justify-center items-center">
            <i class="ri-store-2-line xs:px-1"></i>
            <p>Become a seller</p>
          </div>
          <div className="feature-2 flex justify-center items-center">
            <i class="ri-advertisement-line xs:px-1"></i>
            <p>Advertise</p>
          </div>
          <div className="feature-3 flex justify-center items-center">
            <i class="ri-gift-line xs:px-1"></i>
            <p>Gift</p>
          </div>
          <div className="feature-4 flex justify-center items-center">
            <i class="ri-question-line xs:px-1"></i>
            <p>Help</p>
          </div>
          <div className="copyright flex justify-center items-center xs:px-2">
            <p>© 2007-2025 FlipKart.com</p>
          </div>
          <div className="payment-gateways ">
            <img
              src={
                "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
              }
              alt=""
              className="xs:h-1 lg:h-2 xl:h-3 2xl:h-4"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
