import { videos } from '../data/data';

export default function Main() {
    return (
        <div className="main-page">
            {videos.map((video) => (
                <div className="main-page-block" key={video.id}>
                    <div className="main-page-block-image">
                        <img src={video.image} alt="image" />
                    </div>
                    <div className="main-page-block-content">
                        <h2 className="main-page-block-title">
                            <a
                                href={video.id}
                                target="_blank"
                                className="main-page-block-link"
                            >
                                <i className="fa-brands fa-youtube" />
                            </a>
                            {video.title}
                        </h2>
                        <p className="main-page-block-text">{video.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
