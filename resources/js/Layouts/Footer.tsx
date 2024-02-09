import estilo from './Footer.module.scss';

export default function Footer(){
	return (
		<footer className={estilo.footer}>
			<div className={estilo.header}>
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
						<a href="/politica-privacidade">Política de Privacidade</a>
					</div>
				</div>
			</div>
			<div className={estilo.newsletter}>
				<div>
					<h2>Increva-se na nossa newsletter para receber as últimas novidades</h2>
				</div>
				<div>
					<input type="text" id='email' placeholder='Digite seu Email'/>
					<button>Increva-se</button>
				</div>
			</div>
			<div className={estilo.endereco}>
				<div>
					<div>
						<p>Marechal Cândido Rondon - PR</p>
						<p>contato@webestcoding.com.br - (45) 9-9999-9999</p>
					</div>
					<div>
						<a href='/'><div className={`${estilo.icon1} ${estilo.icon}`}></div></a>
						<a href='/'><div className={`${estilo.icon2} ${estilo.icon}`}></div></a>
						<a href='/'><div className={`${estilo.icon3} ${estilo.icon}`}></div></a>
						<a href='/'><div className={`${estilo.icon4} ${estilo.icon}`}></div></a>
					</div>
				</div>
			</div>
		</footer>
	)
}