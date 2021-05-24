<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">登 录</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入用户名" class="rounded font-md" />
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入密码" class="rounded font-md" />
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
.login-bg{
	height: 220rpx;
	background-image: linear-gradient(120deg,#3BFDAF 0%,#70D6F2 100%);
}
.login-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.login{
	position: absolute;top: 200rpx;left: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;
}
</style>
