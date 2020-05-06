<template>
    <div class="drugInfo">
        <div class="drugInfo-wrap">
            <div class="drugInfo-title">
                <img src="../assets/icons/pharmacy.png">
                <span class="drugInfo-name">医治云康大药房</span>
            </div>
            <div class="drugInfo-main">
                <div class="drugInfo-img"><img src="../assets/images/drug-img.png" alt=""></div>
                <div class="drugInfo-content">
                    <span>药品适应症：适用于无免疫受损的2岁及2岁以上轻度至中度异位性皮炎（湿疹）...</span>
                    <span>规格:18包一盒</span>
                </div>
                <div class="drugInfo-price">
                    <span>￥137.56</span>
                    <span>X1</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DrugInfo'
}
</script>
<style scoped lang="scss">
.drugInfo {
    box-sizing: border-box;
    width: 100%;

    .drugInfo-wrap {
        padding: 27px 16px;
        border-radius: 5px;
        background-color: #fff;
        overflow: hidden;
        // margin: 0 24px 15px 25px;
    }

    &-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        img {
            width: 17px;
	        height: 16px;
        }
        .drugInfo-name {
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 0px;
            color: #353535;
            padding-left: 12px;
        }
    }

    &-main {
        display: flex;
        justify-content: space-between;

        .drugInfo-img {
            width: 86px;
            height: 78px;
            background-color: #e9e9e9;
            border-radius: 5px;

            img {
                width: 100%;
                height: 100%;
            }

        }
        .drugInfo-content {
            width: 147px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            & span:first-child {
                font-size: 12px;
                font-weight: normal;
                line-height: 18px;
                letter-spacing: 0px;
                color: #5a5a5a;

                //multi line ellipsis
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;;
                white-space: normal !important;
                word-wrap: break-word;
            }
            & span:last-child {
                font-size: 12px;
                font-weight: normal;
                line-height: 18px;
                letter-spacing: 0px;
                color: #999999;
            }

        }
        .drugInfo-price {
            display: flex;
            flex-direction: column;
            justify-content: center;

            & span:first-child {
                color: #ff2400;
                font-size: 15px;
                margin-bottom: 14px;
            }
            & span:last-child {
                color: #8f8f8f;
                text-align: right;
                font-size: 12px;
            }
        }
    }
}
</style>