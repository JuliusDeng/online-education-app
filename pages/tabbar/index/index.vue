<template>
	<view>
		
		<index-skeleton v-if="loading"></index-skeleton>
		
		<view class="animate__animated animate__fadeIn animate__fast" v-else>
			<block v-for="(item,index) in templates" :key="index">
				<f-search-bar v-if="item.type == 'search'" :placeholder="item.placeholder"></f-search-bar>
				<swiper v-else-if="item.type == 'swiper'" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
					<swiper-item class="flex justify-center" v-for="(s,sI) in item.data" :key="sI">
						<image :src="s.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
					</swiper-item>
				</swiper>
				<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
				<coupon-list v-else-if="item.type == 'coupon'"></coupon-list>
				
				<view v-else-if="item.type == 'promotion'">
					<active-list :type="item.listType"></active-list>
				</view>
				<view v-else-if="item.type == 'list'">
					<view class="divider"></view>
					<view class="flex align-center justify-between py-3 px-2">
						<text class="font-md font-weight-bold">{{ item.title }}</text>
						<text class="font-sm text-light-muted" v-if="item.showMore">查看更新</text>
					</view>
					<view>
						<course-list :type="item.listType" v-for="(item,index) in item.data" :key="index" :item="item"></course-list>
					</view>
				</view>
				<view v-else-if="item.type == 'imageAd'">
					<view class="divider"></view>
					<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
				</view>
				
			</block>
		</view>
		
	</view>
</template>

<script>
	import indexSkeleton from './index-skeleton.vue';
	export default {
		components: {
			indexSkeleton
		},
		data() {
			return {
				loading:false,
				groupList:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				
				templates:[]
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		created() {
			this.loading = true
			this.getData()
		},
		methods: {
			getData(){
				this.$api.getIndexData().then(data=>{
					this.templates = data
				}).finally(()=>{
					this.loading = false
					uni.stopPullDownRefresh()
				})
			}
		}
	}
</script>

<style>
	
</style>
