<template>
  <div>
    <h1>Posts Analytic</h1>
    <app-analytics-chart 
      title="Quantity of views"
      :labels="views.labels"
      :data="views.data"
    ></app-analytics-chart>
    <app-analytics-chart 
      title="Quantity of comments"
      :labels="comments.labels"
      :data="comments.data"
    ></app-analytics-chart>
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticChart'
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {
    AppAnalyticsChart
  },
  async asyncData({store}) {
    const {views, comments} = await store.dispatch('post/getAnalytics')
    return {views, comments} 
  }
}
</script>