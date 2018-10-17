﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.OpenWx
{
    public class MiniAppEnum
    {
        /// <summary>
        /// 公众号返回码（JSON）
        /// 应该更名为ReturnCode_MP，但为减少项目中的修改，此处依旧用ReturnCode命名
        /// </summary>
        public enum ReturnCodeEnum
        {
            系统繁忙此时请开发者稍候再试 = -1,
            请求成功 = 0,

            //新加入的一些类型，以下文字根据P2P项目格式组织，非官方文字
            对方不是粉丝 = 10700,
            发送消息失败_对方关闭了接收消息 = 10703,
            发送消息失败_48小时内用户未互动 = 10706,
            发送消息失败_该用户已被加入黑名单_无法向此发送消息 = 62751,

            获取access_token时AppSecret错误或者access_token无效 = 40001,
            不合法的凭证类型 = 40002,
            不合法的OpenID = 40003,
            不合法的媒体文件类型 = 40004,
            不合法的文件类型 = 40005,
            不合法的文件大小 = 40006,
            非法的media_id = 40007,
            不合法的消息类型 = 40008,
            图片尺寸太大 = 40009,
            不合法的语音文件大小 = 40010,
            不合法的视频文件大小 = 40011,
            不合法的缩略图文件大小 = 40012,
            不合法的APPID = 40013,
            不合法的access_token = 40014,
            不合法的菜单类型 = 40015,
            不合法的按钮个数1 = 40016,
            不合法的按钮个数2 = 40017,
            不合法的按钮名字长度 = 40018,
            不合法的按钮KEY长度 = 40019,
            不合法的按钮URL长度 = 40020,
            不合法的菜单版本号 = 40021,
            不合法的子菜单级数 = 40022,
            不合法的子菜单按钮个数 = 40023,
            不合法的子菜单按钮类型 = 40024,
            不合法的子菜单按钮名字长度 = 40025,
            不合法的子菜单按钮KEY长度 = 40026,
            不合法的子菜单按钮URL长度 = 40027,
            不合法的自定义菜单使用用户 = 40028,
            不合法的oauth_code = 40029,
            不合法的refresh_token = 40030,
            不合法的openid列表 = 40031,
            不合法的openid列表长度 = 40032,
            不合法的请求字符不能包含uxxxx格式的字符 = 40033,
            不合法的参数 = 40035,
            不合法的请求格式 = 40038,
            不合法的URL长度 = 40039,
            不合法的分组id = 40050,
            分组名字不合法 = 40051,
            参数错误 = 40097,
            登陆code只能使用一次 = 40163,
            缺少access_token参数 = 41001,
            缺少appid参数 = 41002,
            缺少refresh_token参数 = 41003,
            缺少secret参数 = 41004,
            缺少多媒体文件数据 = 41005,
            缺少media_id参数 = 41006,
            缺少子菜单数据 = 41007,
            缺少oauth_code = 41008,
            缺少openid = 41009,
            access_token超时 = 42001,
            refresh_token超时 = 42002,
            oauth_code超时 = 42003,
            需要GET请求 = 43001,
            需要POST请求 = 43002,
            需要HTTPS请求 = 43003,
            需要接收者关注 = 43004,
            需要好友关系 = 43005,
            多媒体文件为空 = 44001,
            POST的数据包为空 = 44002,
            图文消息内容为空 = 44003,
            文本消息内容为空 = 44004,
            多媒体文件大小超过限制 = 45001,
            消息内容超过限制 = 45002,
            标题字段超过限制 = 45003,
            描述字段超过限制 = 45004,
            链接字段超过限制 = 45005,
            图片链接字段超过限制 = 45006,
            语音播放时间超过限制 = 45007,
            图文消息超过限制 = 45008,
            接口调用超过限制 = 45009,
            创建菜单个数超过限制 = 45010,
            回复时间超过限制 = 45015,
            系统分组不允许修改 = 45016,
            分组名字过长 = 45017,
            分组数量超过上限 = 45018,
            不存在媒体数据 = 46001,
            不存在的菜单版本 = 46002,
            不存在的菜单数据 = 46003,
            解析JSON_XML内容错误 = 47001,
            api功能未授权 = 48001,

            用户未授权该api = 50001,
            本月功能介绍修改次数已用完 = 53200,
            功能介绍内容命中黑名单关键字 = 53201,
            名称格式不合法 = 53010,
            名称检测命中频率限制 = 53011,
            禁止使用该名称 = 53012,
            名称与已有公众号名称重复或该名称与已有小程序名称重复 = 53013,
            需与该帐号相同主体才可申请名称A = 53014,
            该名称与已有公众号名称重复需与该公众号帐号相同主体才可申请 = 53015,
            该名称与已有多个公众号名称重复暂不支持申请 = 53016,
            公众号已有名称A时需与该帐号相同主体才可申请名称A = 53017,
            名称命中微信号 = 53018,
            名称在保护期内 = 53019,
            本月头像修改次数已用完 = 53202,
            超出每月次数限制 = 53300,
            超出可配置类目总数限制 = 53301,
            当前账号主体类型不允许设置此种类目 = 53302,
            提交的参数不合法 = 53303,
            与已有类目重复 = 53304,
            包含未通过IPC校验的类目 = 53305,
            修改类目只允许修改类目资质不允许修改类目ID = 53306,
            只有审核失败的类目允许修改 = 53307,
            审核中的类目不允许删除 = 53308,

            已取消授权 = 61003,
            权限不够请重新授权 = 61007,
            令牌失效 = 61023,
            参数错误invalid_parameter = 61451,
            无效客服账号invalid_kf_account = 61452,
            客服帐号已存在kf_account_exsited = 61453,
            /// <summary>
            /// 客服帐号名长度超过限制(仅允许10个英文字符，不包括@及@后的公众号的微信号)(invalid kf_acount length) 
            /// </summary>
            客服帐号名长度超过限制 = 61454,
            /// <summary>
            /// 客服帐号名包含非法字符(仅允许英文+数字)(illegal character in kf_account) 
            /// </summary>
            客服帐号名包含非法字符 = 61455,
            /// <summary>
            ///  	客服帐号个数超过限制(10个客服账号)(kf_account count exceeded) 
            /// </summary>
            客服帐号个数超过限制 = 61456,
            无效头像文件类型invalid_file_type = 61457,
            系统错误system_error = 61450,
            日期格式错误 = 61500,
            日期范围错误 = 61501,

            微信号不存在或微信号设置为不可搜索 = 85001,
            小程序绑定的体验者数量达到上限 = 85002,
            微信号绑定的小程序体验者达到上限 = 85003,
            微信号已经绑定 = 85004,
            标签格式错误 = 85006,
            页面路径错误 = 85007,
            类目填写错误 = 85008,
            已经有正在审核的版本 = 85009,
            item_list有项目为空 = 85010,
            标题填写错误 = 85011,
            无效的审核id = 85012,
            无效的自定义配置 = 85013,
            无效的模版编号 = 85014,
            版本输入错误 = 85015,
            域名数量超过限制 = 85016,
            无效域名 = 85017,
            域名没有在第三方平台设置 = 85018,
            没有审核版本 = 85019,
            正在审核中 = 85020,
            状态不可变 = 85021,
            action非法 = 85022,
            审核列表填写的项目数不在1和5以内 = 85023,
            微信号绑定管理员名额达到上限 = 85026,
            身份证绑定管理员名额达到上限 = 85027,
            模版错误 = 85043,
            代码包超过大小限制 = 85044,
            ext_json有不存在的路径 = 85045,
            tabBar中缺少path = 85046,
            pages字段为空 = 85047,
            ext_json解析失败 = 85048,
            微信发布超时请重新发布 = 85052,
            无效的taskid = 85060,
            手机号绑定管理员名额达到上限 = 85061,
            手机号黑名单 = 85062,
            身份证黑名单 = 85063,
            找不到模版或找不到草稿 = 85064,
            模版库已满 = 85065,
            链接错误 = 85066,
            测试链接不是子链接 = 85068,
            校验文件失败 = 85069,
            链接为黑名单 = 85070,
            已添加该链接请勿重复添加 = 85071,
            该链接已被占用 = 85072,
            二维码规则已满 = 85073,
            小程序必须先发布代码才可以发布二维码跳转规则 = 85074,
            个人类型小程序无法设置二维码规则 = 85075,
            链接没有ICP备案 = 85076,
            小程序类目信息失效类目中含有官方下架的类目请重新选择类目 = 85077,
            小程序没有线上版本不能进行灰度 = 85079,
            小程序提交的审核未审核通过 = 85080,
            无效的发布比例 = 85081,
            当前的发布比例需要比之前设置的高 = 85082,
            近7天提交审核的小程序数量过多请耐心等待审核完毕后再次提交 = 85085,
            提交代码审核之前需提前上传代码 = 85086,
            不是由第三方代小程序进行调用 = 86000,
            不存在第三方的已经提交的代码 = 86001,
            小程序还未设置昵称头像简介请先设置完后再重新提交 = 86002,
            现网已经在灰度发布不能进行版本回退 = 87011,
            该版本不能回退 = 87012,
            撤回次数达到上限 = 87013,
            小程序已经绑定了开放平台帐号 = 89000,
            与开放平台帐号主体不相同 = 89001,
            小程序未绑定微信开放平台帐号 = 89002,
            该开放平台帐号并非通过api创建不允许操作 = 89003,
            该开放平台帐号所绑定的小程序已达上限100个 = 89004,
            业务域名无更改无需重复设置 = 89019,
            尚未设置小程序业务域名请先在第三方平台中设置小程序业务域名后在调用本接口 = 89020,
            请求保存的域名不是第三方平台中已设置的小程序业务域名或子域名 = 89021,
            业务域名数量超过限制 = 89029,
            个人小程序不支持调用setwebviewdomain接口 = 89231,
            该插件不能申请 = 89236,
            已经添加该插件 = 89237,
            申请或使用的插件已经达到上限 = 89238,
            该插件不存在 = 89239,
            该申请为待确认状态不可删除 = 89243,
            不存在该插件appid = 89244,

            不是公众号快速创建的小程序 = 91001,
            小程序发布后不可改名 = 91002,
            改名状态不合法 = 91003,
            昵称不合法 = 91004,
            昵称命中主体保护 = 91005,
            昵称命中微信号 = 91006,
            昵称已被占用 = 91007,
            昵称命中7天侵权保护期 = 91008,
            需要提交材料 = 91009,
            其他错误 = 91010,
            查不到昵称修改审核单信息 = 91011,
            其它错误 = 91012,
        }

        /// <summary>
        /// 公众号授权给开发者的权限集列表
        /// </summary>
        public enum FuncscopeCategory
        {
            消息管理权限 = 1,
            用户管理权限 = 2,
            帐号服务权限 = 3,
            网页服务权限 = 4,
            微信小店权限 = 5,
            微信多客服权限 = 6,
            群发与通知权限 = 7,
            微信卡券权限 = 8,
            微信扫一扫权限 = 9,
            微信连WIFI权限 = 10,
            素材管理权限 = 11,
            微信摇周边权限 = 12,
            微信门店权限 = 13,
            微信支付权限 = 14,
            自定义菜单权限 = 15,
            获取认证状态及信息 = 16,
            小程序帐号管理权限 = 17,
            小程序开发管理与数据分析权限 = 18,
            小程序客服消息管理权限= 19,
            小程序微信登录权限 = 20,
            小程序数据分析权限 = 21,
            城市服务接口权限 = 22,
            广告管理权限 = 23,
            开放平台帐号管理权限 = 24,
            小程序开放平台帐号管理权限 = 25,
            微信电子发票权限 = 26,
        }
        
        /// <summary>
        /// 授权方公众号类型
        /// </summary>
        public enum ServiceType
        {
            订阅号 = 0,
            由历史老帐号升级后的订阅号 = 1,
            服务号 = 2
        }
        
        /// <summary>
        /// 授权方认证类型
        /// </summary>
        public enum VerifyType
        {
            未认证 = -1,
            微信认证 = 0,
            新浪微博认证 = 1,
            腾讯微博认证 = 2,
            已资质认证通过但还未通过名称认证 = 3,
            已资质认证通过还未通过名称认证但通过了新浪微博认证 = 4,
            已资质认证通过还未通过名称认证但通过了腾讯微博认证 = 5
        }
        
        /// <summary>
        /// 公众号第三方平台推送消息类型
        /// </summary>
        public enum RequestInfoType
        {
            /// <summary>
            /// 推送component_verify_ticket协议
            /// </summary>
            component_verify_ticket,
            /// <summary>
            /// 推送取消授权通知
            /// </summary>
            unauthorized,
            /// <summary>
            /// 小程序代码审核成功回调
            /// </summary>
            weapp_audit_success,
            /// <summary>
            /// 小程序代码审核失败回调
            /// </summary>
            weapp_audit_fail,
            authorized,
            updateauthorized,
        }

        /// <summary>
        /// 接收消息类型
        /// </summary>
        public enum RequestMsgType
        {
            TEXT, //文本
            LOCATION, //地理位置
            IMAGE, //图片
            VOICE, //语音
            VIDEO, //视频
            LINK, //连接信息
            SHORTVIDEO,//小视频
            EVENT, //事件推送
            VERIFY,
        }
    }
}
