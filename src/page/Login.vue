<template>
    <div class="login">
        <header class="login-header">
            <div class="logo">
                <img src="https://p0.meituan.net/travelcube/7c71ecc4b44d0e17447076cd23e501cb31967.png" alt="1"/>
            </div>
        </header>
        <div class="login-bar">
            <div :class="{'class-item':true, 'hide':loginType === 1}">
                <div class="login-box">
                    <div class="login-top">
                        <router-link to="WherePhoneNumber">
                            <span class="login-countryname">
                                {{countryname}}
                            </span> 
                            <span class="login-countrycode">
                                {{countrycode}}
                            </span>
                            <span class="right-arrow"></span>
                        </router-link>
                        <input 
                            type="tel" 
                            class="login-phonenumber"
                            placeholder="请输入手机号"
                        />
                    </div>
                    <div class="login-bottom">
                        <input 
                            type="number" 
                            class="login-verifycode"
                            placeholder="请输入手机验证码"
                        />
                        <span style="font-size: 13px; padding-bottom: .5rem;">
                            获取验证码
                        </span>
                    </div>
                    <div class="login-btn">登录</div>
                </div>
                <div class="login-tip">未注册的手机号验证后自动创建美团账户</div>
                <div 
                    class="login-type"
                    @click="toShiftLoginType"    
                >
                    账号密码登录</div>
            </div>
            <div :class="{'class-item':true, 'hide':loginType === 0}">
                <div class="login-box">
                    <div class="login-top">
                        <a href="#">
                            <span class="login-countryname">
                                {{countryname}}
                            </span> 
                            <span class="login-countrycode">
                                {{countrycode}}
                            </span>
                            <span class="right-arrow"></span>
                        </a>
                        <input 
                            type="tel" 
                            class="login-phonenumber"
                            placeholder="请输入手机号"
                        />
                    </div>
                    <div class="login-bottom">
                        <input 
                            type="password" 
                            class="login-password"
                            placeholder="请输入密码"
                        />
                        <span style="font-size: 13px; padding-bottom: .5rem;">
                            忘记密码
                        </span>
                    </div>
                    <div class="login-btn">登录</div>
                </div>
                <div 
                    class="login-type"
                    @click="toShiftLoginType"   
                >
                    短信验证码登录</div>
            </div>
        </div>
        <footer class="login-footer">
            <p>
                登录即代表您已经同意 <br>
                <a href="https://rules-center.meituan.com/m/detail/4" style="color: #FE8C00">《美团点评用户服务协议》</a>
                <a href="https://rules-center.meituan.com/m/detail/2" style="color: #FE8C00">《隐私政策》</a>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            loginType: 0,
            // countrycode: '+86',
            // countryname: '中国'
        }
    },
    created: function(){
        console.log('created')
        this.countrycode = this.$store.state.countryCode;
        this.countryname = this.$store.state.countryName;
        console.log(this.$store.state)
        console.log(this.$store.state.countryName)
    },
    // mounted: function(){
    //     console.log('mounted')
    //     this.countrycode = this.$store.state.countryCode;
    //     this.countryname = this.$store.state.countryName;
    //     console.log(this.$store.state.countryCode)
    //     console.log(this.$store.state.countryName)
    // },
    methods:{
        toShiftLoginType: function(){
            if(this.loginType === 0){
                this.loginType = 1
            }else{
                this.loginType = 0
            }
        }
    }   
}
</script>

<style scoped>
    .login{
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        height: 7rem;
        padding: 2.2rem 0 3.1rem;
        text-align: center;
    }
    .logo img{
        width: 6.67rem;
        height: 6.67rem;
    }
    .login-bar{
        flex:1;
        padding: 0 2.8rem;
        color: #646464;
    }
    .login-top{
        display: flex;
        color: #646464;
        font-size: 14rem;
        margin: 1.4rem 0 2.8rem;
        padding-bottom: .2rem;
        border-bottom: .51px solid rgba(0,0,0, .2)
    }
    .login-top a{
        color: #646464;
    }
    .login-bottom{
        display: flex;
        margin: 1.4rem 0 2.8rem;
        padding-bottom: .2rem;
        border-bottom: .51px solid rgba(0,0,0, .2)
    }
    input{
        flex: 1;
        border: 0;
        caret-color: #FE8C00;
        outline: none;
    }
    .right-arrow{
        display: inline-block;
        width: .31rem;
        height: .31rem;
        border-bottom: 1px solid #888;
        border-right: 1px solid #888;
        transform: rotate(-45deg);
        position: relative;
        top: -0.36rem;
        margin-right:  .5rem;
    }
    .login-btn{
        font-size: 16rem;
        padding: .9rem;
        text-align: center;
        background: linear-gradient(-133deg, #FFBD00 0%, #FFD000 100%); 
        opacity: 0.3;
        border-radius: .9rem;
        color: #222;
    }
    .login-tip{
        text-align: center;
        color: #999;
        margin: .7rem 0;
        font-size: 12rem;
    }
    .login-type{
        text-align: center;
        margin-top: 1.5rem; 
        letter-spacing: .15rem;
        color: #222;
    }
    .login-footer{
        text-align: center;
        color: #999;
        margin-bottom: 1.2rem;
    }
</style>
