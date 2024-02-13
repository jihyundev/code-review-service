import Link from "next/link";

export default function Header() {

    const NAV_MENUS = [
        { title: "home", href: "/" },
        { title: 'archives', href: '/archives' },
    ]

    return (
        <header className="flex justify-between align-middle p-8 mb-3 mx-auto w-full sm:px-6 md:max-w-3xl xl:max-w-5xl">
            <nav className="flex items-center leading-5 space-x-4">
                {NAV_MENUS.map(({title, href}) => (
                    <Link key={title} href={href} className="font-medium text-gray-900 dark:text-gray-100">{title}</Link>
                ))}
            </nav>
            <div className="lg:flex lg:flex-1 lg:justify-end">
                <Link href={'/login'} className="font-medium text-gray-900 dark:text-gray-100">login</Link>
            </div>
        </header>
    )
}