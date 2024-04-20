import videoHomepage from '../../Assets/Video-homepage.mp4';


const Homepage = (props) => {
    return (
        <div className="homepage-container">
            <video className='video-homepage' autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type='video/mp4'
                />
            </video>
            <div className='hompage-content'>
                <div className='title-1'>Make forms worth filling out</div>
                <div className='title-2'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className='title-3'>
                    <button>Get started-it's free</button>
                </div>
            </div>
        </div>
    )
};

export default Homepage;