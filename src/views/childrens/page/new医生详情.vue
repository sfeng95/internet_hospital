<template>
    <div class="doctor-details">
        <nut-navbar @on-click-back="$common.back" :rightShow="false">产科主产门诊</nut-navbar>
        <div class="doctor-userInfo">
            <div class="doctor-userInfo-content">
                <img src="@/assets/images/doctors_face.png" alt="" class="doctor-img">
                <div>
                    <p>
                        <span class="doctor-name">辽源</span>
                        <span>主治医师</span>
                    </p>
                    <p>
                        <span>重庆市人民医院妇产科</span>
                    </p>
                </div>
            </div>
            <div class="praise-content">
                <div class="praise-number">
                    <img src="@/assets/icons/goods.png" alt="">
                    <span>{{praise}}人赞过</span>
                </div>
            </div>
        </div>
        <div class="functions-parent">
            <div class="functions">
                <div v-for="(item,i) in functions" :key="i" :class="item.boolean=='false'?'Opening-functions':''">
                    <img :src="item.img">
                    <p class="functions-name">{{item.name}}</p>
                    <p class="functions-price">{{item.price}}</p>
                </div>
            </div>
            <div class="doctor-introduction marginTop30px">
                <span>产前诊断、遗传优生、复发性流产、分娩镇痛、各种高危妊娠的诊治和管理、产科急危重症的救治等方面具有着丰富的临床经验。</span>
                <div>
                    <button>
                        <span>医生简介</span>
                        <img src="@/assets/icons/icon_right.png" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            paramsId:this.$route.params.id,
            praise:200,
            functions:[
                {name:"图文咨询",price:"15.00次/15分钟",boolean:'true',img:require('../../../assets/icons/imgWord.png')},
                {name:"电话咨询",price:"15.00次/15分钟",boolean:'true',img:require('../../../assets/icons/phone.png')},
                {name:"视频咨询",price:"暂未开通",boolean:'false',img:require('../../../assets/icons/video.png')},
            ]
        }
    },

    created() {
        
    },

    methods: {
        
    },
}
</script>
<style lang="scss" scoped>

    .doctor-details{
        width: 100vw;
        height: auto;
        min-height: 100%;
		background-image: url('../../../assets/images/personal_center_bj.png');
		background-position-y: -40px;
		background-size: contain;
		background-repeat: no-repeat;
        
        .nut-navbar {
            height: 44px;
            background-color: transparent;
            color: white;

            /deep/ h3 {
                font-size: 17px;
                font-weight: 500;
            }
        }

        .doctor-userInfo{
            padding-left: 15px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-content: center;
            margin: 12px 0 20px 0;
            
            .doctor-userInfo-content{
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img{
                    margin-right: 5px;
                    width: 52px;
                }
                
                p+p{
                    margin-top: 8px;
                }

                span{
                    color: #ffffff;
                    font-size: 10px;
                }

                .doctor-name{
                    font-size: 14px;
                    margin-right: 5px;
                }
                
            }
        }

        .praise-content{
            display: flex;
            justify-content: flex-end;
            align-items: center;

            div{
                width: 122px;
                height: 27px;
                padding-right: 15px;
                position: relative;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                background: url('../../../assets/images/xzyysj_right.png') no-repeat;
                background-size: 100% 100%;
                background-position-X: 35px;


                img{
                    width: 11px;
                    margin-right: 7px;
                }

                span{
                    text-align: right;
                    font-size: 11px;
                    color: #ffffff;
                }
            }
        }

        .functions-parent{
            padding: 0 15px;
            box-sizing: border-box;

            div{
                background: #fff;
                border-radius: 5px;
            }

            .functions{
                padding: 21px 25px 17px 25px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                img{
                    width: 47px;
                }

                .functions-name{
                    font-size: 12px;
                    color: #353535;
                }

                .functions-price{
                    font-size: 9px;
                    color: #f04600;
                    margin-top: 7px;
                }
            }

            .Opening-functions{

                .functions-price{
                    color: #9b9b9b;
                }
            }

            .marginTop30px{
                margin-top: 30px;
            }

            .doctor-introduction{
                padding: 21px 17px 25px 17px;
                font-size: 11px;
                color: #6c6c6c;
                line-height: 24px;
                
                div{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    button{
                        background: none;
                        border: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 11px;
                        color: #5a75f6;
                        margin-top: 9px;

                         img{
                             width: 11px;
                             margin-left: 2px;
                         }
                    }
                }
            }

        }

    }
</style>