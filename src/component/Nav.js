const NavData = [
    {
        navid: 1, title: "기업정보", alink: "#!",
        submenu: [
            { stitle: "ceo 인사말", slink: "#!s" },
            { stitle: "오시는길", slink: "#!s" },

        ]
    },
    {
        navid: 2, title: "솔루션", alink: "#!",
        submenu: [
            { stitle: "솔루션 인사말", slink: "#!s" },
            { stitle: "솔루션 오시는길", slink: "#!s" },

        ]
    },
    {
        navid: 3, title: "서비스", alink: "#!",
        submenu: [
            { stitle: "서비스 인사말", slink: "#!s" },
            { stitle: "서비스 오시는길", slink: "#!s" },

        ]
    },
    {
        navid: 4, title: "혁신기술", alink: "#!",
        submenu: [
            { stitle: "혁신기술 인사말", slink: "#!s" },
            { stitle: "혁신기술 오시는길", slink: "#!s" },

        ]
    },
    {
        navid: 5, title: "고객지원", alink: "#!",
        submenu: [
            { stitle: "고객지원 인사말", slink: "#!s" },
            { stitle: "고객지원 오시는길", slink: "#!s" },

        ]
    },
]

const Nav = () => {
    return (
        <nav className="Gnb w1200">
            <ul>
                {
                    NavData.map(
                        (navlink, idx) => (<li key={navlink.navid}>
                            <a href={navlink.alink}>{navlink.title}</a>
                            {/* <ul>
                                {
                                    navlink.submenu.map(
                                        smenu => (<li>{smenu.stitle}</li>)
                                    )
                                }
                            </ul> */}
                        </li>)
                    )
                }

            </ul>
        </nav>
    )
}

export default Nav;
