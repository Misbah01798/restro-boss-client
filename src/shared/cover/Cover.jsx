import { Parallax } from 'react-parallax';

const Cover = ({img, title, }) => {
    return (
        <Parallax blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}>
        <div className="hero h-[750px]" >
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-3/4 bg-transparent h-1/2 bg-opacity-40">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
        </Parallax>
    )
}

export default Cover
