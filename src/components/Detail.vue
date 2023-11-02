<template>
<!-- {{$route.params.id}} -->
<!-- id는 :id했기때문 -->
    <div>
        <h4>상세페이지</h4>
        <h5>{{블로그글[$route.params.id].title}}</h5>
        <h5>{{블로그글[$route.params.id].content}}</h5>
    </div>
</template>

<script>
export default {
    name : 'TheDetail',
    props : {
        블로그글: Array
    }
}
</script>

<style>

</style>