import { Link } from 'react-router-dom';
import BannerPhoto from '../../../public/Image/Banner.png'

const Banner = () => {
    return (
        <div className='my-5'>
            <div className="bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-52">
                    <img
                    src={BannerPhoto} className="h-72 md:h-96 my-5 md:my-0 md:pr-20" />
                    <div className='pl-3 md:pl-10'>
                        <h1 className="text-6xl font-semibold font-serif">Books to freshen up your bookshelf</h1>
                        <Link to='/listedBooks'>
                            <button className="btn bg-green-500 text-white text-lg font-bold mt-10">View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;