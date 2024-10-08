import Link from "next/link"

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li> {/* <Link href >serve como o <a>, mas não recarrega a pág */}
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/produtos">Produtos</Link></li>
                <li><Link href="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}