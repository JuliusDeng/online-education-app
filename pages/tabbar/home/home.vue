<template>
	<view>
		<button type="default" @click="openLogin">登录页</button>
		
		<view>
			{{ user ? user.username : '未登录' }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:null
			}
		},
		created() {
			this.user = this.$store.state.user
		},
		methods: {
			openLogin(){
				uni.navigateTo({
					url: '../../login/login',
				});
			}
		}
	}
</script>

<style>

</style>
