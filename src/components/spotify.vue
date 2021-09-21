<template>
	<main class="spotflex">
		<a
			target="_blank"
			class="logo"
			href="https://open.spotify.com/user/arhaanb"
			title="Now listening"
		>
			<img src="@/assets/img/spotify.svg" alt="Spotify Icon" />
		</a>
		<div id="spotifycontainer">
			<h5 v-if="spotify && spotify.isPlaying" class="title spotifytitle">
				<a class="green" :href="spotify.songUrl" target="_blank">
					<span :title="spotify.title">{{ spotify.title }}</span>
				</a>
			</h5>
			<h5 class="title not" v-else>Not playing</h5>
			<h5 v-if="spotify" class="artist spotifytitle">
				<span v-if="spotify.isPlaying" :title="spotify.artist">
					{{ spotify.artist }}
				</span>
			</h5>
		</div>
	</main>
</template>

<script>
import useSWRV from 'swrv'
var url = ''

if (process.env.NODE_ENV == 'development') {
	url = 'https://arhaanbahadur.co/api/spotify'
} else {
	url = '/api/spotify'
}

export default {
	data() {
		return {
			spotify: false
		}
	},

	setup() {
		const { data, error } = useSWRV(url, undefined, { refreshInterval: 1000 })
		console.log(data)

		return {
			spotify: data,
			error
		}
	}
}
</script>

<style scoped>
.spotify {
	border: solid rgba(34, 34, 34, 0.363) 1px;
	border-radius: 0.5em;
	padding: 1em;
}

.title {
	font-size: 1.1em;
}

.green {
	color: rgb(6, 124, 85);
}
.artist {
	font-size: 0.9em;
}

.spotify * {
	margin: 0;
}

.spoticon {
	margin-right: 2em;
}

.flex {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
a {
	transition: 0.3s;
}
a[href].green:hover {
	background-color: rgba(210, 255, 221, 0.562);
}

.spotflex {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.spotflex img {
	width: 1.25em;
}

.artist {
	font-size: 0.85em;
	margin: 0;
}

.logo {
	margin: 0;
	margin-right: 0.5em;
}

.not {
	font-size: 0.85em;
	margin-top: -0.45em;
}

#spotifycontainer {
	box-sizing: border-box;
	max-width: 17em;
}

#spotifycontainer h5 {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

@media (max-width: 750px) {
	.not {
		font-size: 0.95em;
		margin-top: -0.35em;
	}
	#spotifycontainer {
		max-width: 80%;
	}
	.spotflex {
		margin-bottom: 0.5em;
	}
}
</style>
