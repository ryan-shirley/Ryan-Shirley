<template>
    <div class='scrolltop'>
        <div class='scroll icon'><font-awesome-icon :icon="['fa', 'angle-up']"/></div>
    </div>
</template>
<script>
export default {
    name: "scroll-top",
    mounted() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 700 ) {
                $('.scrolltop').addClass('show')
            } 
            else {
                $('.scrolltop').removeClass('show')
            }
        });
        $(function(){
            $(".scroll").click(function(){
                $("html,body").animate({
                    scrollTop:$("#__nuxt").offset().top
                },"1000");
                return false
            })
        })
    }
};
</script>
