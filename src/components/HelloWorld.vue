<template>

    <div style="display: block">
        <p>默认</p>
        <div class="item">
               <button
                        @click="buttonClick">默认
                </button>
        </div>
        <br>
        <p>成功主题背景</p>
        <div class="item">
            <button
                @click="successClick">成功
            </button>
        </div>
        <br>
        <p>失败错误主题背景</p>
        <div class="item">
            <button
                @click="errorClick">失败
            </button>
        </div>

        <br>
    </div>

</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {

            }
        },
        methods:{
            buttonClick(){
                this.$notice_message({
                    content: '默认消息主题'
                });
            },
            successClick(){
                this.$notice_message({
                    type:'success',
                    time:'1000',
                    content: '成功消息主题'
                });
            },
            errorClick(){
                this.$notice_message({
                    type:'error',
                    content: '失败错误消息主题'
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
    }

    .container {
        width: 150px;
        height: 150px;
        border: 1px solid #ddd;
        line-height: 150px;
    }
    .blue{
        background:rgb(13, 49, 117);
    }
    .gray{
        background:#ddd;
    }
</style>
