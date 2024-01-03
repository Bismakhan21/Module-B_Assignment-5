
const SocialIcons = () => {
    const socialIcons = [
        { link: '#', iconClass: 'fa-facebook' },
        { link: '#', iconClass: 'fa-twitter' },
        { link: '#', iconClass: 'fa-pinterest-p' },
        { link: '#', iconClass: 'fa-vimeo-v' },
    ];

    return (
        <ul className='S_icons d-flex'>
            {socialIcons.map((icon, index) => (
                <li key={index}>
                    <a href={icon.link}>
                        <i className={`fa-brands ${icon.iconClass}`}></i>   
                    </a>
                </li>
            ))}
        </ul>
    );
};

export { SocialIcons };
