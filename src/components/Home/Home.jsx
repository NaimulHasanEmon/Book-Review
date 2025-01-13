import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BooksSection from "../BooksSection/BooksSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Book Review | Home</title>
            </Helmet>
            <Banner></Banner>
            <BooksSection></BooksSection>
        </div>
    );
};

export default Home;