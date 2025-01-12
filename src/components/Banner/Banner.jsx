import { Link } from 'react-router-dom';
import BannerPhoto from '../../../public/Image/Banner.png'

const Banner = () => {
    return (
        <div className='my-5'>
            <div className="bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-52">
                    <img
                    src={BannerPhoto} className="h-40 md:h-96" />
                    <div>
                    <h1 className="text-3xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to='/listedBooks'>
                        <button className="btn btn-success text-white">View The List</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;