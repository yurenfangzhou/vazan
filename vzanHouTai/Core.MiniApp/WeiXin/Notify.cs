﻿using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace Core.MiniApp
{
    /// <summary>
    /// 回调处理基类
    /// 主要负责接收微信支付后台发送过来的数据，对数据进行签名验证
    /// 子类在此类基础上进行派生并重写自己的回调处理过程
    /// </summary>
    public class Notify
    {
        public HttpContextBase context { get;set;}
        public Notify(HttpContextBase context)
        {
            this.context = context;
        }
        public Notify()
        {
        }

        /// <summary>
        /// 接收从微信支付后台发送过来的数据并验证签名
        /// </summary>
        /// <returns>微信支付后台返回的数据</returns>
        //public WxPayData GetNotifyData()
        //{
        //    //接收从微信后台POST过来的数据
        //    System.IO.Stream s = context.Request.InputStream;
        //    int count = 0;
        //    byte[] buffer = new byte[1024];
        //    StringBuilder builder = new StringBuilder();
        //    while ((count = s.Read(buffer, 0, 1024)) > 0)
        //    {
        //        builder.Append(Encoding.UTF8.GetString(buffer, 0, count));
        //    }
        //    s.Flush();
        //    s.Close();
        //    s.Dispose();
            
        //    //转换数据格式并验证签名
        //    WxPayData data = new WxPayData();
        //    try
        //    {
        //        data.FromXml(builder.ToString());
        //    }
        //    catch(WxPayException ex)
        //    {
        //        //若签名错误，则立即返回结果给微信支付后台
        //        WxPayData res = new WxPayData();
        //        res.SetValue("return_code", "FAIL");
        //        res.SetValue("return_msg", ex.Message);

        //        log4net.LogHelper.WriteError(this.GetType(), new Exception("若签名错误:" + res.ToXml()));
        //        context.Response.Write(res.ToXml());
        //        context.Response.End();
        //    }
        //    return data;
        //}

        //派生类需要重写这个方法，进行不同的回调处理
        public virtual void ProcessNotify()
        {

        }
    }
}