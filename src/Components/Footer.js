import React from 'react'
import Menu from './Menu'

const Footer = () => {
    return (
        <footer>
            <div className="description">
                <p>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.</p>
                <small>© 2022 <a href="https://milk.sk/" target="_blank" rel="noreferrer">Published by studio Milk</a></small>
                <p className="privacy-policy"><a href="https://backstagetalks.com/privacy-policy.php">Privacy Policy</a></p>
            </div>

            <Menu display="menu-wide" />
            <p className="contact"><a href="mailto:info@backstagetalks.com">info@backstagetalks.com</a></p>
        </footer>
    )
}

export default Footer
