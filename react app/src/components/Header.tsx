import '@fontawesome/fontawesome-free/css/all.min.css';
import './Header.module.css';
function Header (){
    Children:String;
    class_: String;
    return(
        

        <header>
            
            {
            <div className="contact-info">email:mhhasanul@gmail.com
             phone:(12345)67890</div>
             
            }
            <form>
          <select name="currency" id="currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="KES">KES</option>
            <option value="CNY">CNY</option>
          </select>
        </form>
        <form>
          <select name="language" id="language">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Dutch">Dutch</option>
            <option value="Chinese">Chinese</option>
          </select>
        </form>
        <ul><li><a href="#">login <i className="fa-regular fa-user"></i></a></li>
        <li><a href="#">Wishlist <i className="fa-regular fa-heart"></i></a></li></ul>

        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            
        </header>
    )
}



export default Header;