<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">{{ type == 'login' ? '登 录' : '注 册' }}</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入用户名" class="rounded font-md" v-model="form.username"/>
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入密码" class="rounded font-md"  v-model="form.password"/>
			</view>
			<view class="login-form" v-if="type == 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入确认密码" class="rounded font-md" v-model="form.repassword"/>
			</view>
			
			<view class="bg-main btn" hover-class="bg-main-hover" @click="submit">{{ type == 'login' ? '登 录' : '注 册' }}</view>
			
			<view class="flex align-center justify-between my-3 font">
				<text class="py-3 text-main" @click="changeType">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
				<text class="py-3 text-light-muted">忘记密码？</text>
			</view>
			
			
			<view class="flex align-center justify-center wechatlogin">
				<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
			</view>
			
			
			<checkbox-group class="flex align-center justify-center mt-4">
				<label class="text-light-muted">
					<checkbox color="#7fd49e" style="transform: scale(0.7);"/><text class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:"login",
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(){
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			resetForm(){
				this.form = {
					username:"",
					password:"",
					repassword:""
				}
			},
			submit(){
				uni.showLoading({
					title: '提交中...',
					mask: false
				});
				let data = Object.assign(this.form,{})
				
				if(this.type == 'reg'){
					this.$api.reg(data).then(res=>{
						this.$toast('注册成功')
						this.resetForm()
						this.changeType()
					}).finally(()=>{
						uni.hideLoading()
					})
				} else {
					this.$api.login(data).then(user=>{
						this.$toast('登录成功')
						this.$store.dispatch('login',user)
						setTimeout(()=>{
							this.back()
						},350)
					}).finally(()=>{
						uni.hideLoading()
					})
				}
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
	padding: 60rpx 70rpx 0 70rpx;
}
.login .title{
	font-size: 22px;
	margin-bottom: 50rpx;
	color: #35404b;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;
	left: 0;top: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #272727;
}
.login-form input{
	height: 100rpx;
	padding-left: 100rpx;
	padding-right: 20rpx;
	background-color: #f5f5f5;
}
.login .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-radius: 10rpx;
}
.wechatlogin .uni-icons{
	border: 1rpx solid #5ccc84;
	width: 47px;
	border-radius: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
