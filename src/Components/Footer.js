import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="description">
                <p>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.</p>
                <small>© 2022 <a href="https://milk.sk/" target="_blank" rel="noreferrer">Published by studio Milk</a></small>
                <p><a href="https://backstagetalks.com/privacy-policy.php">Privacy Policy</a></p>
            </div>

            <ul className="menu">
                <li><a className="menulink" href="#issue-5">Issue #5</a></li>
                <li><a className="menulink" href="#issue-4">Issue #4</a></li>
                <li><a className="menulink" href="#issue-3">Issue #3</a></li>
                <li><a className="menulink" href="#issue-2">Issue #2</a></li>
                <li><a className="menulink" href="#issue-1">Issue #1</a></li>
            </ul>
            <p className="contact"><a href="mailto:info@backstagetalks.com">info@backstagetalks.com</a></p>
        </footer>
    )
}

export default Footer
