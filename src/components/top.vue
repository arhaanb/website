<template>
	<div>
		<h5 class="smltitle zero">Top Tracks</h5>
		<p>My top tracks from Spotify this month</p>

		<div v-if="songs">
			<div v-for="(song, index) in songs.slice(0, 5)" :key="song.songUrl">
				<a target="_blank" :href="song.songUrl">
					<div class="song">
						<div class="flex">
							<h1 class="index noselect mono">
								{{ index + 1 }}
							</h1>
							<div class="songinfo">
								<h4 class="title" :title="song.title">
									{{ song.title }}
								</h4>
								<h5 class="artist" :title="song.artist">
									{{ song.artist }}
								</h5>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div v-else>
			<div v-for="i in 5" :key="i">
				<div class="song loading">
					<div class="flex">
						<h1 class="index noselect mono">
							{{ i }}
						</h1>
						<div class="loadinfo">
							<h4 class="title">
								<span
									class="skeleton-box"
									:style="`width: ${getRandom(45, 80)}%`"
								></span>
							</h4>
							<h5 class="artist">
								<span
									class="skeleton-box"
									:style="`width: ${getRandom(45, 80)}%`"
								></span>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

var url = ''

export default {
	data() {
		return {
			songs: false
		}
	},
	mounted() {
		this.getSongs()
	},
	methods: {
		getSongs() {
			if (process.env.NODE_ENV == 'development') {
				url = 'https://arhaanbahadur.co/api/top-tracks'
			} else {
				url = '/api/top-tracks'
			}

			axios
				.get(url)
				.then((res) => {
					this.songs = res.data.tracks
				})
				.catch((err) => console.log(err))
		},
		getRandom(min, max) {
			return Math.floor(Math.random() * (max - min)) + min
		}
	}
}
</script>

<style scoped lang="scss">
a {
	border-bottom: 1px dashed rgba(34, 34, 34, 0.4);
	transition: 0.3s;
}
a:hover {
	background-color: rgba(127, 255, 212, 0.26);
}

.song {
	transition: 0.3s;
	padding: 1em;
	border-radius: 0.5em;
	// width: 100%;
	.flex {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.index {
			font-size: 2em;
			font-variant-numeric: tabular-nums;
			margin: 0;
			margin-right: 1em;
			transition: 0.3s;
			line-height: 0 !important;
		}
		.title {
			font-size: 1.2em;
			margin: 0;
			min-width: 100%;
		}
		.artist {
			font-size: 1em;
			margin: 0;
			opacity: 0.75;
		}
	}
}

.song:not(.loading):hover {
	background-color: rgba(164, 248, 175, 0.25);
	color: rgb(21, 117, 8);
	.flex {
		.index {
			margin-right: 1.35em;
			color: #222;
		}
		.artist {
			opacity: 0.7;
		}
	}
}
.songbro {
	display: flex;
}

.loadinfo {
	width: 100%;
}

// SKELETON
.skeleton-box {
	display: inline-block;
	height: 1em;
	position: relative;
	overflow: hidden;
	background-color: #dddbdd;

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateX(-100%);
		background-image: linear-gradient(
			90deg,
			rgba(#fff, 0) 0,
			rgba(#fff, 0.2) 20%,
			rgba(#fff, 0.5) 60%,
			rgba(#fff, 0)
		);
		animation: shimmer 2s infinite;
		content: '';
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}
}

.blog-post {
	&__headline {
		font-size: 1.25em;
		font-weight: bold;
	}

	&__meta {
		font-size: 0.85em;
		color: #6b6b6b;
	}
}

.o-media {
	display: flex;

	&__body {
		flex-grow: 1;
		margin-left: 1em;
	}
}

.o-vertical-spacing {
	> * + * {
		margin-top: 0.75em;
	}

	&--l {
		> * + * {
			margin-top: 2em;
		}
	}
}
</style>
