<template>
    <div class="bottom-btn">
       <div class="total-price"><span>合计：</span><span>{{prices}}</span></div>
       <div class="commit-btn" @click="clickbtn"><button>{{btn}}</button></div>
    </div>
</template>

<script>
export default {
    name: 'BottomBtn',
    props: {
        prices: {
            default: 157.56,
            type: Number
        },
        btn: {
            default: '提交订单',
            type: String
        }
    },
    methods: {
        clickbtn() {
            this.$emit('clickbtn');
        }
    }
}
</script>

<style scoped lang="scss">
.bottom-btn {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    font-size: 14px;
    background-color: #fff;
    box-shadow: 5px -5px 5px rgba(0, 0, 0, .1);

    .total-price {
        flex-grow: 1;
        display: flex;
        align-items: center;
        padding-left: 12px;

        & span:first-child {
            color: #5a5a5a;
        }
        & span:last-child {
            color: #ff2400;
        }
    }

    .commit-btn {
        width: 133px;
        height: 50px;
        background-color: #5a75f6;

        button {
            // border: none;
            background-color: transparent;
            font-weight: normal;
            color: #ffffff;
            height: 100%;
            width: 100%;
        }
    }
}
</style>