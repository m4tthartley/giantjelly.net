import {renderNode} from 'mulan'
import jss from './jss-setup'

const styles = jss({
	'@global': {
		body: {
			backgroundColor: '#111',
			fontFamily: 'Lato',
			color: 'white',
			fontWeight: 'normal',
			fontSmoothing: 'antialiased'
		}
	},
	container: {
		width: '900px',
		margin: '0 auto',
		padding: '80px 0',
		textAlign: 'center'
	},
	title: {
		fontWeight: 300,
		color: 'white',
		fontSize: '3em',
		letterSpacing: '.1em'
	},
	logo: {
		width: '200px'
	},
	video: {
		margin: '60px 0'
	},
	videoContainer: {
		position: 'relative',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	videoPlayer: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
	},
	videoImage: {
		display: 'block',
		width: '100%'
	},
	videoTitle: {
		textAlign: 'left',
		fontSize: '1.2em'
	},
	link: {
		color: '#8e2323',
		textDecoration: 'none',
		'&:hover': {
			color: '#c23a3a'
		}
	},
	playIcon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-35px',
		marginLeft: '-50px'
	}
})

const videos = [
	{
		youtubeId: 'deOL6PwOJ04',
		image: 'video2.png',
		title: 'Nightfall - Forza Horizon 3 [Cinematic]'
	},
	{
		youtubeId: 'x536cC787pI',
		image: 'video1.png',
		title: 'Dubai Drift ft. S13 - Forza Cinematic'
	}
]

window.playVideo = (id, youtubeId) => {
	const el = document.querySelector(`#${id}`)
	el.insertAdjacentHTML('beforeend', `
		<iframe
			class="${styles.videoPlayer}"
			src="https://www.youtube.com/embed/${youtubeId}?autoplay=1"
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen>
		</iframe>
	`)
	el.querySelector(`.${styles.videoImage}`).style.opacity = '0'
	el.querySelector(`.${styles.playIcon}`).style.opacity = '0'
}

const App = (root) => {
	return `
		<div class="${styles.container}">
			<img class="${styles.logo}" src="jelly-white.png" />
			<h1 class="${styles.title}">Giant Jelly Studios</h1>
			<p><a class="${styles.link}" href="https://www.youtube.com/user/GiantJellyStudios">YOUTUBE</a></p>

			${videos.map((v,i) => `
				<div class="${styles.video}">
					<p class="${styles.videoTitle}">${v.title}</p>
					<div class="${styles.videoContainer}" id="video${i}"  onclick="playVideo('video${i}', '${v.youtubeId}')">
						<img class="${styles.videoImage}" src="${v.image}" />
						<img class="${styles.playIcon}" src="play.png" />
					</div>
				</div>
			`).join('')}

			<div class="g-ytsubscribe" data-channel="GiantjellyStudios" data-layout="default" data-theme="light" data-count="default"></div>
		</div>
	`
}

renderNode(document.getElementById('app'), App)