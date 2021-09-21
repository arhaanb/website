<template>
	<div class="cont">
		<h2 class="title">Explore</h2>
		<p class="sub">Miscellaneous stuff about me.</p>

		<a href="//arhn.us/design" target="_blank">
			<div id="design" class="coolbox">
				<div class="flexbox">
					<h6>Design</h6>
					<span><bx-bx-link-external /></span>
				</div>
				<p>
					(WIP) I'm mostly interested in UI / UX Designs but I enjoy making
					illustrations and I've also tried out some 3D modelling.
				</p>
			</div>
		</a>

		<a href="//arhn.us/exp" target="_blank">
			<div id="events" class="coolbox">
				<div class="flexbox">
					<h6>Achievements</h6>
					<span><bx-bx-link-external /></span>
				</div>
				<p>
					I've participated in over 30 Hackathons, Designathons, Quizzes, etc.
					Check out some of my wins.
				</p>
			</div>
		</a>

		<a href="//arhn.us/events" target="_blank">
			<div id="organ" class="coolbox">
				<div class="flexbox">
					<h6>Events</h6>
					<span><bx-bx-link-external /></span>
				</div>
				<p>
					Over the last few years I've been part of the core teams of a few
					clubs. Check out some of the events I organized.
				</p>
			</div>
		</a>

		<br /><br />

		<Top id="top-tracks" style="margin-bottom: 4em" />

		<Website />

		<Contact style="margin-top: 4em" />
	</div>
</template>

<style scoped lang="scss">
.socials {
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(2, 1fr);
}

.socials a {
	color: rgb(30, 80, 165);
	transition: 0.2s;
	font-size: 1.1em;
}

.socials a:hover {
	opacity: 0.5;
}

.coolbox {
	padding: 2em;
	border-radius: 1em;
	margin-bottom: 1.25em;
	transition: 0.3s;
	color: #222;
	h6 {
		margin-bottom: 0.25em;
		font-size: 1.2em;
		margin-right: 0.2em;
	}
	.flexbox {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	p {
		margin-bottom: 0;
	}
	.cta {
		margin: 0;
		text-transform: none;
		letter-spacing: 0;
	}
}

#design {
	background-color: rgba(146, 184, 250, 0.288);
	h6 {
		color: rgb(43, 85, 158);
	}
}
#design:hover {
	background-color: rgba(146, 184, 250, 0.4);
}

#events {
	background-color: rgba(146, 250, 245, 0.288);
	h6 {
		color: rgb(8, 128, 72);
	}
}
#events:hover {
	background-color: rgba(151, 228, 225, 0.384);
}

#organ {
	background-color: rgba(197, 116, 235, 0.171);
	h6 {
		color: rgb(136, 26, 139);
	}
}
#organ:hover {
	background-color: rgba(194, 114, 231, 0.26);
}
</style>
