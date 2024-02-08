import estilo from './Header.module.scss';

export default function Header() {
	return (
		<nav className={estilo.header}>
			<div>
				<span>WeBest</span>
			</div>
			<div>
				<div>
					<a href="/">Início</a>
				</div>
				<div>
					<a href="/blog">Blog</a>
				</div>
				<div>
					<a href="/sobre">Sobre Nós</a>
				</div>
				<div>
					<a href="/contato">Contato</a>
				</div>
				<div>
					<button>Inscreva-se</button>
				</div>
			</div>
		</nav>
	);
}