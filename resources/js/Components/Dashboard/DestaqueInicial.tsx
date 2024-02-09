import { register } from "swiper/element";
register();

export default function DestaqueInicial(){
	return(
		<div>
			<swiper-container>
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
			</swiper-container>
		</div>
	)
}