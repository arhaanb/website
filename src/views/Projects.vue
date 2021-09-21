<template>
	<div class="cont" @mouseleave="hover = false">
		<h2 class="title">Projects</h2>
		<p class="zero">
			These are some of the major projects I've built over the last couple of
			years.
		</p>
		<div class="bigproj">
			<Project
				name="Delhi Design Foundry"
				description="A design collective based in New Delhi, India."
				link="https://delhifoundry.co"
				img="https://res.cloudinary.com/arhaanb/image/upload/ddf.png"
			/>

			<Project
				name="Sahay"
				description="A collaborative experience for hospital management."
				link="https://sahay.us"
				img="https://res.cloudinary.com/arhaanb/image/upload/smlsahay.png"
				data-aos-delay="100"
			/>

			<Project
				name="Link+AI"
				description="A mobile app to help you improve your LinkedIn profile and view beautiful stats."
				link="https://linkplusai.com"
				img="https://i.imgur.com/u8g9pHc.png"
			/>

			<Project
				name="BugBase"
				description="A consolidated bug bounty platform for Indian startups and projects."
				link="https://www.behance.net/gallery/112423317/BugBase-an-Indian-Bug-Bounty-Program"
				img="https://res.cloudinary.com/arhaanb/image/upload/bugbase.png"
			/>

			<Project
				name="MINET X"
				description="The Mother's International School's annual Interschool Tech Symposium."
				link="https://2020.minet.co"
				img="https://res.cloudinary.com/arhaanb/image/upload/minetx.gif"
			/>

			<Project
				name="Cura"
				description="An app that helps you get vaccinated."
				link="https://cura.arhaanbahadur.co"
				img="https://res.cloudinary.com/arhaanb/image/upload/cura.png"
			/>
		</div>

		<hr />

		<div data-aos="fade-in" data-aos-duration="500" class="others">
			<div @mouseover="hover = false">
				<h2 class="othsmlproj">Other small projects</h2>
				<p>
					I made some of these projects as a <i>freelancer</i>, or to help me
					automate some of my manual tiring work. There's also some
					<i>little apps</i> I made just to test out a new technology or
					framework that I was interested in learning.
				</p>
				<p>
					These small projects generally help me lay out the foundation for
					bigger projects that I build at hackathons or for the many events that
					I've organized.
				</p>
			</div>

			<div class="grid">
				<div
					v-for="p in smlProjects"
					:key="p.title"
					:class="{ active: hover, proj: true }"
					@mouseleave="hover = false"
				>
					<Small
						@mouseover="hover = true"
						@mouseleave="hover = false"
						:title="p.title"
						:desc="p.desc"
						:link="p.link"
						:img="p.img"
						class="sml"
					/>
				</div>
			</div>

			<div class="row">
				<div class="eight columns">
					<p class="zero">
						You can check out my
						<a href="//github.com/arhaanb" target="_blank">GitHub (@arhaanb)</a>
						for more. Most of my projects are open source.
					</p>
				</div>
				<div class="u-cf"></div>
			</div>
		</div>
	</div>
</template>

<script>
import SmlProj from '../assets/data/smlproj.js'

export default {
	data() {
		return {
			hover: false,
			smlProjects: SmlProj.projects
		}
	}
}
</script>

<style scoped>
.othsmlproj {
	font-size: 1.75em;
}

.others {
	margin-top: 3em;
	margin-bottom: 5em;
}

.bigproj {
	margin-top: 2em;
}

.proj .sml {
	font-weight: 300;
	font-size: 1.2em;
	margin-bottom: 0.2em;
}

@media (min-width: 768px) {
	.active {
		opacity: 0.5;
		transition: 0.2s;
	}
}

.proj {
	transition: 0.3s;
}

.proj:hover {
	opacity: 1 !important;
}

.proj * {
	transition: 0.2s;
}

.grid {
	display: grid;
	grid-gap: 2em;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 3em;
	margin-bottom: 3em;
}

@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 1.5em;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
