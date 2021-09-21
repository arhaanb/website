<template>
	<main>
		<nav v-if="$route.meta.title !== 'notfound'" class="navbar">
			<div class="navcont">
				<div v-if="$route.meta.title !== 'Home'" class="flexbruh noselect">
					<router-link class="back" to="/">&larr;</router-link>
					<span>Arhaan Bahadur</span>
				</div>
				<!-- <router-link v-else to="/"> -->
				<img
					draggable="false"
					class="logo"
					src="/fav.png"
					alt="Arhaan's logo"
					v-else
				/>
				<!-- </router-link> -->

				<div class="links">
					<router-link to="/">Home</router-link>
					<router-link to="/projects">Projects</router-link>
					<router-link to="/explore">Explore</router-link>
				</div>

				<div class="ham" @click="nav = !nav">
					<img src="@/assets/img/ham.svg" alt="" />
				</div>
			</div>
		</nav>

		<transition class="nav" name="nav">
			<div v-if="nav" class="fullnav">
				<div class="navcont">
					<div class="topsec">
						<h1>&nbsp;</h1>

						<div class="ham" @click="nav = !nav">
							<img src="@/assets/img/close.svg" alt="" />
						</div>
					</div>

					<div class="navdata">
						<div class="flexer">
							<router-link to="/" @click="nav = !nav">Home</router-link>
							<router-link to="/projects" @click="nav = !nav">
								Projects
							</router-link>
							<router-link to="/explore" @click="nav = !nav"
								>Explore</router-link
							>
						</div>

						<!-- <div class="btm">Arhaan Bahadur</div> -->
					</div>
				</div>
			</div>
		</transition>

		<main>
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</main>

		<div v-if="$route.meta.title !== 'notfound'" class="cont">
			<Footer :class="`footer footer-${$route.meta.title}`" />
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			nav: false
		}
	},
	watch: {
		nav() {
			document.querySelector('body').style.overflow = this.nav
				? 'hidden'
				: 'auto'
		}
	}
}
</script>

<style lang="scss">
.navbar .navcont,
.navcont .topsec {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.navcont .topsec {
	margin-top: 0.5em;
}

.navbar .links {
	display: flex;
}

.navbar .links a {
	margin-left: 1em;
	font-size: 1.1em;
	transition: 0.2s;
}

.navbar .links a.router-link-exact-active {
	color: rgb(60, 124, 233);
}

.navbar .links a:hover {
	color: rgb(60, 124, 233);
}

.navbar {
	padding: 2em 0 1em 0;
	margin-bottom: 1.5em;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.nav-enter-active,
.nav-leave-active {
	transition: opacity 0.2s ease;
}

.nav-enter-from,
.nav-leave-to {
	opacity: 0;
}

.ham {
	display: none !important;
}

.ham img {
	width: 1.3em;
}

.footer-notfound {
	display: none;
}

.fullnav {
	width: 100%;
	height: 100vh;
	background-color: #fff;
	position: fixed;
	top: 0;
	z-index: 20;
	overflow: hidden;
}

.footer:not(.footer-Home) {
	margin-bottom: 4em;
}

.navdata {
	.flexer {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-top: 3em;
	}
	.btm {
		position: absolute;
		bottom: 5em;
	}
	a {
		font-size: 2em;
		margin-bottom: 0.65em;
		span {
			width: 100% !important;
		}
	}
	a.router-link-exact-active {
		color: #69e;
	}
}

.logo {
	width: 1.5em;
}

.footer-Home {
	margin-top: 1.25em;
}

.footer-Projects {
	margin-bottom: 2em;
	margin-top: -3em;
}

@media (max-width: 750px) {
	.footer-Home {
		margin-top: 1.5em;
	}
	.footer-Home.flexfoot {
		margin-bottom: 4.75em;
	}
	.footer {
		margin-bottom: -4em;
	}
	.navbar .links {
		display: none;
	}
	.ham {
		display: block !important;
	}
}

.flexbruh {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.flexbruh .back {
	margin-right: 1em;
}

.back {
	font-size: 1em !important;
}
</style>
