import {createRenderer} from 'mulan'
import delegate from 'delegate-events'
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
		textDecoration: 'none',
	},
	tw: {
		color: '#2AA3EF',
		'&:hover': {
			color: '#5Ac3fF'
		}
	},
	yt: {
		color: '#c23a3a',
		'&:hover': {
			color: '#e25a5a'
		}
	},
	in: {
		color: '#DB2E7C',
		'&:hover': {
			color: '#eB4E9C'
		}
	},
	playIcon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-35px',
		marginLeft: '-50px'
	},
	teamContainer: {
		display: 'flex',
		justifyContent: 'space-evenly'
	},
	socialLinks: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',

		'& p': {
			flex: 1
		}
	},
	subHeading: {
		fontSize: '3em',
		textAlign: 'center',
		width: '100%',
		fontWeight: 200,
		color: '#888'
	},
	member: {
		'flex': 1
	},
	memberLink: {
		textDecoration: 'none',
		color: '#bbb',
		width: '100%',

		'&:hover': {
			color: '#eee'
		}
	},
	avatar: {
		width: '100px',
		height: '100px',
		borderRadius: '100px'
	},
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

const App = () => (render, root) => {
	// delegate.bind(root, '')

	render(`
		<div class="${styles.container}">
			<img class="${styles.logo}" src="jelly-white.png" />
			<h1 class="${styles.title}">Giant Jelly Studios</h1>
			<div class="${styles.socialLinks}">
				<p><a class="${styles.link} ${styles.tw}" href="https://twitter.com/GiantJellyS">TWITTER</a></p>
				<p><a class="${styles.link} ${styles.yt}" href="https://www.youtube.com/user/GiantJellyStudios">YOUTUBE</a></p>
				<p><a class="${styles.link} ${styles.in}" href="https://www.instagram.com/giantjellystudios/">INSTAGRAM</a></p>
			</div>
	
			<h2 class="${styles.subHeading}">Team</h2>
			<div class=${styles.teamContainer}>
				<div class=${styles.member}>
					<img class="${styles.avatar}" src="matt.jpeg">
					<h3>Matt</h3>
					
					<p>Driving, Filming, Developing</p>

					<p>- - - -</p>

					<p><a class="${styles.memberLink}" href="https://www.instagram.com/m4tt53/">Intagram</a></p>
					<p><a class="${styles.memberLink}" href="https://twitter.com/m4tt53">Twitter</a></p>
					<p><a class="${styles.memberLink}" href="https://github.com/m4tthartley">Github</a></p>
				
				</div>

				<div class=${styles.member}>
					<img class="${styles.avatar}" src="nathan.jpeg">
					<h3>Nathan</h3>

					<p>Editing, Directing, Design</p>

					<p>- - - -</p>

					<p><a class="${styles.memberLink}" href="https://www.instagram.com/giantjellystudios/">Instagram</a></p>
					<p><a class="${styles.memberLink}" href="https://twitter.com/Nath_117">Twitter</a></p>
					<p><a class="${styles.memberLink}" href="https://github.com/Giant-Jelly">Github</a></p>
				</div>

				<div class=${styles.member}>
					<img class="${styles.avatar}" src="diana.jpeg">
					<h3 class="${styles.member}">Diana</h3>

					<p>Social Networking</p>

					<p>- - - -</p>

					<p><a class="${styles.memberLink}" href="https://www.instagram.com/diana_5100">Instagram</a></p>
					<p><a class="${styles.memberLink}" href="https://twitter.com/diana51_00">Twitter</a></p>
				</div>

			</div>

			<h2 class="${styles.subHeading}">Videos</h2>

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
	`)
}

createRenderer(document.getElementById('app'), App())