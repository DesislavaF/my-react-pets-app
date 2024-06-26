const Header = () => {
    return (
        <header id="site-header">
            <nav class="navbar">

                <section class="navbar-dashboard">
                    <div class="first-bar">
                        <a href="#">Dashboard</a>
                        <a class="button" href="#">My Pets</a>
                        <a class="button" href="#">Add Pet</a>
                    </div>
                    <div class="second-bar">
                        <ul>
                            <li>Welcome, Desislava!</li>
                            <li><a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </div>
                </section>
                <section class="navbar-anonymous">
                    <ul>
                        <li><a href="#"><i class="fas fa-user-plus"></i> Register</a></li>
                        <li><a href="#"><i class="fas fa-sign-in-alt"></i> Login</a></li>
                    </ul>
                </section>
            </nav>
            
        </header>
    )
};

export default Header;
