import headerStyle from '../styles/Header.module.css'

const Header = () => {
    const x = 5;
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>Fundamentals of Next.js</span>
            </h1>
            <p className={headerStyle.description}>Keep up to date with the latest web development</p>
            <style jsx>
                {`
                    .title {
                        color:${x > 3 ? 'red' : 'blue'};
                    }
                `}
            </style>
        </div>
    )
}

export default Header;